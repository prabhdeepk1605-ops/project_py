import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { MongoClient, ServerApiVersion, Db } from 'mongodb';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
let dbClient: MongoClient | null = null;
let database: Db | null = null;
let mongoConnectionStatus = {
  connected: false,
  configured: false,
  dbName: 'terra_workshop',
  message: 'MongoDB client initialized',
  lastChecked: new Date().toISOString(),
  latencyMs: 0,
};

// In-memory fallback stores to ensure seamless zero-crash operation
let fallbackBookings: any[] = [
  {
    id: 'TERRA-4819-VIZ',
    locationId: 'vijayawada-central',
    vehicleType: 'sedan',
    make: 'Maruti Suzuki',
    model: 'Swift ZXi (Petrol)',
    year: '2022',
    fuelType: 'Petrol',
    selectedServices: ['Essential Servicing', 'AC Service & Gas Top-up'],
    addOns: ['Eco Waterless Foam Wash'],
    serviceMode: 'valet',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '10:30 AM - 12:30 PM',
    customerName: 'Rahul Varma',
    customerPhone: '+91 98480 22334',
    customerEmail: 'rahul.varma@example.com',
    pickupAddress: 'Flat 402, Green Meadows, Labbipet, Vijayawada',
    notes: 'Please check brake pedal squeal.',
    totalEstimatedPrice: 4197,
    totalSavings: 1100,
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  },
];

let fallbackQuotes: any[] = [];
let fallbackUsers: any[] = [];

// Initialize MongoDB connection
async function connectToMongo() {
  const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URL || process.env.MONGODB_URL;

  if (!mongoUri || mongoUri.trim() === '') {
    mongoConnectionStatus = {
      connected: false,
      configured: false,
      dbName: 'terra_workshop',
      message: 'MONGODB_URI is not set in environment. Running with high-speed in-memory database storage.',
      lastChecked: new Date().toISOString(),
      latencyMs: 0,
    };
    console.log('ℹ️ MONGODB_URI not provided. Utilizing local in-memory storage buffer.');
    return;
  }

  mongoConnectionStatus.configured = true;

  try {
    const startTime = Date.now();
    const client = new MongoClient(mongoUri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: false,
        deprecationErrors: true,
      },
      connectTimeoutMS: 8000,
      socketTimeoutMS: 10000,
    });

    await client.connect();
    // Test ping
    await client.db('admin').command({ ping: 1 });
    const latency = Date.now() - startTime;

    dbClient = client;
    database = client.db('terra_workshop');

    mongoConnectionStatus = {
      connected: true,
      configured: true,
      dbName: 'terra_workshop',
      message: `Connected successfully to MongoDB (${latency}ms ping)`,
      lastChecked: new Date().toISOString(),
      latencyMs: latency,
    };

    console.log(`✅ Connected to MongoDB cluster successfully (${latency}ms)`);

    // Ensure initial collections and seed if empty
    const collections = await database.listCollections().toArray();
    const collectionNames = collections.map((c) => c.name);

    if (!collectionNames.includes('bookings')) {
      await database.createCollection('bookings');
      const bookingsCol = database.collection('bookings');
      const count = await bookingsCol.countDocuments();
      if (count === 0 && fallbackBookings.length > 0) {
        await bookingsCol.insertMany(fallbackBookings);
      }
    }

    if (!collectionNames.includes('quotes')) {
      await database.createCollection('quotes');
    }

    if (!collectionNames.includes('users')) {
      await database.createCollection('users');
    }
  } catch (err: any) {
    console.error('⚠️ MongoDB connection error:', err?.message || err);
    mongoConnectionStatus = {
      connected: false,
      configured: true,
      dbName: 'terra_workshop',
      message: `Connection attempt failed: ${err?.message || 'Check cluster credentials'}. Serving from resilient cache.`,
      lastChecked: new Date().toISOString(),
      latencyMs: 0,
    };
  }
}

async function startServer() {
  const app = express();

  // Middleware
  app.use(express.json());

  // Attempt initial MongoDB connection
  await connectToMongo();

  // -------------------------------------------------------------
  // API Routes
  // -------------------------------------------------------------

  // 1. Health check & DB Status
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  app.get('/api/db/status', async (req, res) => {
    let collectionsList: { name: string; count: number }[] = [];

    if (database && mongoConnectionStatus.connected) {
      try {
        const cols = await database.listCollections().toArray();
        for (const col of cols) {
          const count = await database.collection(col.name).countDocuments();
          collectionsList.push({ name: col.name, count });
        }
      } catch (e) {
        // Ping failed or disconnected
        mongoConnectionStatus.connected = false;
      }
    } else {
      collectionsList = [
        { name: 'bookings', count: fallbackBookings.length },
        { name: 'quotes', count: fallbackQuotes.length },
        { name: 'users', count: fallbackUsers.length },
      ];
    }

    res.json({
      ...mongoConnectionStatus,
      collections: collectionsList,
    });
  });

  // Re-connect trigger
  app.post('/api/db/reconnect', async (req, res) => {
    await connectToMongo();
    res.json(mongoConnectionStatus);
  });

  // 2. Bookings Endpoints
  app.get('/api/bookings', async (req, res) => {
    try {
      if (database && mongoConnectionStatus.connected) {
        const bookingsCol = database.collection('bookings');
        const docs = await bookingsCol.find({}).sort({ createdAt: -1 }).toArray();
        return res.json(docs);
      }
      return res.json(fallbackBookings);
    } catch (err: any) {
      console.error('Error fetching bookings:', err);
      return res.json(fallbackBookings);
    }
  });

  app.post('/api/bookings', async (req, res) => {
    try {
      const newBooking = {
        ...req.body,
        id: req.body.id || `TERRA-${Math.floor(1000 + Math.random() * 9000)}-${(req.body.locationId || 'HUB').slice(0, 3).toUpperCase()}`,
        status: req.body.status || 'confirmed',
        createdAt: req.body.createdAt || new Date().toISOString(),
      };

      if (database && mongoConnectionStatus.connected) {
        const bookingsCol = database.collection('bookings');
        await bookingsCol.insertOne(newBooking);
      } else {
        fallbackBookings = [newBooking, ...fallbackBookings];
      }

      return res.status(201).json({
        success: true,
        booking: newBooking,
        persistedToMongo: mongoConnectionStatus.connected,
      });
    } catch (err: any) {
      console.error('Error creating booking:', err);
      // Save in fallback regardless
      const newBooking = {
        ...req.body,
        id: req.body.id || `TERRA-${Math.floor(1000 + Math.random() * 9000)}-HUB`,
        createdAt: new Date().toISOString(),
      };
      fallbackBookings = [newBooking, ...fallbackBookings];
      return res.status(201).json({
        success: true,
        booking: newBooking,
        persistedToMongo: false,
        error: err.message,
      });
    }
  });

  app.delete('/api/bookings/:id', async (req, res) => {
    const { id } = req.params;
    try {
      if (database && mongoConnectionStatus.connected) {
        const bookingsCol = database.collection('bookings');
        await bookingsCol.deleteOne({ id });
      }
      fallbackBookings = fallbackBookings.filter((b) => b.id !== id);
      return res.json({ success: true, message: `Booking ${id} cancelled` });
    } catch (err: any) {
      console.error('Error deleting booking:', err);
      fallbackBookings = fallbackBookings.filter((b) => b.id !== id);
      return res.json({ success: true, message: `Booking ${id} removed from memory` });
    }
  });

  app.patch('/api/bookings/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
      if (database && mongoConnectionStatus.connected) {
        const bookingsCol = database.collection('bookings');
        await bookingsCol.updateOne({ id }, { $set: updates });
      }
      fallbackBookings = fallbackBookings.map((b) => (b.id === id ? { ...b, ...updates } : b));
      return res.json({ success: true, updates });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  });

  // 3. Custom Quotes Inquiries
  app.get('/api/quotes', async (req, res) => {
    try {
      if (database && mongoConnectionStatus.connected) {
        const quotesCol = database.collection('quotes');
        const docs = await quotesCol.find({}).sort({ createdAt: -1 }).toArray();
        return res.json(docs);
      }
      return res.json(fallbackQuotes);
    } catch (err) {
      return res.json(fallbackQuotes);
    }
  });

  app.post('/api/quotes', async (req, res) => {
    try {
      const quote = {
        ...req.body,
        id: `QUOTE-${Math.floor(1000 + Math.random() * 9000)}`,
        status: 'pending',
        createdAt: new Date().toISOString(),
      };

      if (database && mongoConnectionStatus.connected) {
        const quotesCol = database.collection('quotes');
        await quotesCol.insertOne(quote);
      } else {
        fallbackQuotes = [quote, ...fallbackQuotes];
      }

      return res.status(201).json({
        success: true,
        quote,
        persistedToMongo: mongoConnectionStatus.connected,
      });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  });

  // 4. User Profile & Garage Management
  app.get('/api/users/profile/:phone', async (req, res) => {
    const { phone } = req.params;
    try {
      if (database && mongoConnectionStatus.connected) {
        const usersCol = database.collection('users');
        const user = await usersCol.findOne({ phone });
        if (user) return res.json(user);
      }
      const memoryUser = fallbackUsers.find((u) => u.phone === phone);
      if (memoryUser) return res.json(memoryUser);
      return res.status(404).json({ message: 'User profile not found' });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  });

  app.post('/api/users/profile', async (req, res) => {
    try {
      const userData = req.body;
      if (database && mongoConnectionStatus.connected) {
        const usersCol = database.collection('users');
        await usersCol.updateOne(
          { phone: userData.phone },
          { $set: { ...userData, updatedAt: new Date().toISOString() } },
          { upsert: true }
        );
      } else {
        const idx = fallbackUsers.findIndex((u) => u.phone === userData.phone);
        if (idx >= 0) {
          fallbackUsers[idx] = { ...userData, updatedAt: new Date().toISOString() };
        } else {
          fallbackUsers.push({ ...userData, updatedAt: new Date().toISOString() });
        }
      }
      return res.json({ success: true, user: userData });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  });

  // 5. Seed / Reset sample data
  app.post('/api/seed', async (req, res) => {
    try {
      if (database && mongoConnectionStatus.connected) {
        const bookingsCol = database.collection('bookings');
        await bookingsCol.deleteMany({});
        await bookingsCol.insertMany(fallbackBookings);
      }
      return res.json({ success: true, message: 'Database refreshed with seed records' });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  });

  // -------------------------------------------------------------
  // Vite Integration for Dev / Production
  // -------------------------------------------------------------
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🌿 Terra Workshop server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
