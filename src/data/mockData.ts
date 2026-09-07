import {
  ServiceCategory,
  ServiceItem,
  VehicleMake,
  WorkshopLocation,
  SpecializedCareItem,
  CustomerReview,
  FAQItem,
  GalleryMediaItem,
} from '../types';

export const WORKSHOP_DETAILS = {
  name: 'BROTHER MOTORS',
  tagline: 'Complete Car Repair, Paint, Spare Parts & Vehicle Sales',
  phone1: '78376-00098',
  phone2: '9501735844',
  rawPhone1: '+917837600098',
  rawPhone2: '+919501735844',
  email: 'Harwi5911@gmail.com',
  address: 'Near Jio Petrol Pump, Rampura Phul (BTI.)',
  city: 'Rampura Phul (BTI.), Punjab',
  mapsUrl: 'https://maps.app.goo.gl/ZBmR5ga6B37J5ad26',
  openingHours: '8:00 AM – 6:00 PM',
  instagramHandle: '@brother._motors',
  instagramUrl: 'https://www.instagram.com/brother._motors?igsi=MXhqbXYzbW80NHJ0aQ==',
};

// Core Value Additions requested in Update Sheet
export const CORE_ADDITIONS = [
  {
    id: 'spare-parts',
    title: 'Spare Parts for All Car Types',
    desc: 'Ready stock of genuine OES, OEM, and certified replacement parts for all domestic & imported vehicles (Maruti, Hyundai, Tata, Mahindra, Toyota, Honda & more).',
    icon: 'Cpu',
    badge: 'All Brands Stocked',
  },
  {
    id: 'car-disposal-parts',
    title: 'Car Disposal / Salvage Parts (20–30% Cheaper)',
    desc: 'Tested, authentic car disposal and salvage components priced 20% to 30% lower than brand new parts. Thoroughly bench-tested for performance & durability.',
    icon: 'TrendingDown',
    badge: 'Save 20% – 30%',
  },
  {
    id: 'car-repair-paint',
    title: 'Full Car Repair & Paint Services',
    desc: 'End-to-end mechanical repairs, engine rebuilds, suspension overhauls, computerized paint color matching, and heated booth spray painting.',
    icon: 'Paintbrush',
    badge: 'Master Mechanics',
  },
  {
    id: 'sell-purchase-cars',
    title: 'Sell & Purchase Cars (Govt. Vehicles Included)',
    desc: 'Buy and sell inspected pre-owned cars, fleet models, and verified government auction vehicles with transparent documentation and fair valuation.',
    icon: 'Car',
    badge: 'Govt. Auctions & Used Cars',
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: 'all-services', name: 'All Services', icon: 'Wrench', description: 'Complete vehicle repair, maintenance, and paint solutions' },
  { id: 'car-repair-paint', name: 'Car Repair & Paint', icon: 'Paintbrush', description: 'Full mechanical repair, denting, and computerized paint finish' },
  { id: 'spare-parts', name: 'Spare Parts & Disposal', icon: 'Cpu', description: 'New OES parts and 20-30% cheaper tested disposal parts' },
  { id: 'periodic-service', name: 'Periodic Service', icon: 'Wrench', description: 'Oil changes, filters, tune-ups, and computerized diagnostics' },
  { id: 'car-trading', name: 'Sell & Purchase Cars', icon: 'Car', description: 'Buy and sell private and government auction vehicles' },
  { id: 'ac-cooling', name: 'AC & Climate Care', icon: 'Snowflake', description: 'Gas top-up, condenser flush, and cooling optimization' },
];

// Exact Pricing Table from Brother Motors Update Sheet
export const PRICING_TABLE_SERVICES = [
  {
    id: 'basic-service',
    number: 1,
    service: 'Basic Service (800 Petrol)',
    includes: 'Engine oil change, oil filter, 40 pt digital health check',
    price: 300,
    originalPrice: 450,
    savings: '₹150 Saved',
    icon: 'Wrench',
    tag: 'Economical Care',
  },
  {
    id: 'standard-service',
    number: 2,
    service: 'Standard Service (Alto)',
    includes: 'All basic items + air filter, brake fluid flush, spark inspect',
    price: 400,
    originalPrice: 600,
    savings: '₹200 Saved',
    icon: 'Wrench',
    tag: 'Most Popular',
  },
  {
    id: 'comprehensive-service',
    number: 3,
    service: 'Comprehensive Service',
    includes: 'Full vehicle tuning, wheel balancing, throttle body clean, AC filter',
    price: 300,
    originalPrice: 700,
    savings: '₹400 Saved',
    icon: 'Cpu',
    tag: 'Full Vehicle Tuning',
  },
  {
    id: 'ac-service',
    number: 4,
    service: 'AC Service & Gas Top-up',
    includes: 'Refrigerant gas refill, condenser pressure wash, duct fogging',
    price: 1500,
    originalPrice: 2000,
    savings: '₹500 Saved',
    icon: 'Snowflake',
    tag: 'Cooling Specialist',
  },
  {
    id: 'brake-overhaul',
    number: 5,
    service: 'Front & Rear Brake Overhaul',
    includes: 'Brake pad replacement, caliper pin greasing, disc rotor skim',
    price: 1000,
    originalPrice: 1400,
    savings: '₹400 Saved',
    icon: 'ShieldCheck',
    tag: 'Safety Critical',
  },
  {
    id: 'eco-deep-clean',
    number: 6,
    service: 'Eco Deep Clean & Spa',
    includes: 'Steam upholstery shampoo, exterior Carnauba wax, underbody jet',
    price: 500,
    originalPrice: 800,
    savings: '₹300 Saved',
    icon: 'Sparkles',
    tag: 'Interior & Exterior',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'basic-service',
    title: 'Basic Service (800 Petrol)',
    category: 'periodic-service',
    shortDesc: 'Engine oil change, oil filter, 40 pt digital health check.',
    fullDesc: 'Complete essential servicing designed specifically for petrol hatchbacks including engine oil replacement, fresh oil filter, and 40-point safety checkup.',
    price: 300,
    originalPrice: 450,
    savingsPercent: 33,
    duration: '1 - 2 hrs',
    icon: 'Wrench',
    features: [
      'Engine oil replacement',
      'OES oil filter change',
      '40-Point safety health check',
      'Coolant level check & top-up',
      'Underbody inspection'
    ],
    tags: ['Periodic', 'Affordable', 'Engine Care']
  },
  {
    id: 'standard-service',
    title: 'Standard Service (Alto)',
    category: 'periodic-service',
    shortDesc: 'All basic items + air filter, brake fluid flush, spark inspect.',
    fullDesc: 'Comprehensive intermediate servicing covering full basic package plus fresh engine air filter, brake line flushing, and spark plug gap calibration.',
    price: 400,
    originalPrice: 600,
    savingsPercent: 33,
    duration: '2 - 3 hrs',
    icon: 'Wrench',
    isPopular: true,
    features: [
      'Engine oil & oil filter change',
      'Air filter cleaning & replacement',
      'Brake fluid flush & bleeding',
      'Spark plug inspection & cleaning',
      'Battery terminal check & 40-pt report'
    ],
    tags: ['Standard', 'Popular', 'Complete Maintenance']
  },
  {
    id: 'comprehensive-service',
    title: 'Comprehensive Service',
    category: 'periodic-service',
    shortDesc: 'Full vehicle tuning, wheel balancing, throttle body clean, AC filter.',
    fullDesc: 'In-depth vehicle tuning and optimization including electronic throttle body sanitization, AC cabin filter renewal, and dynamic wheel balancing.',
    price: 300,
    originalPrice: 700,
    savingsPercent: 57,
    duration: '3 - 4 hrs',
    icon: 'Cpu',
    features: [
      'Full engine electronic tuning',
      'Throttle body ultrasonic clean',
      'AC cabin filter replacement',
      'Wheel balancing & alignment check',
      'Suspension noise diagnosis'
    ],
    tags: ['Comprehensive', 'Tuning', 'High Value']
  },
  {
    id: 'ac-service',
    title: 'AC Service & Gas Top-up',
    category: 'ac-cooling',
    shortDesc: 'Refrigerant gas refill, condenser pressure wash, duct fogging.',
    fullDesc: 'Restore chilling cabin temperatures. Complete R134a refrigerant charge, high-pressure condenser mud cleanup, and antibacterial duct fogging.',
    price: 1500,
    originalPrice: 2000,
    savingsPercent: 25,
    duration: '1.5 - 2 hrs',
    icon: 'Snowflake',
    features: [
      'Full refrigerant gas recharge',
      'Condenser coil jet pressure wash',
      'Compressor oil vacuum test',
      'Antibacterial AC duct fogging',
      'Cooling temperature thermometer verification'
    ],
    tags: ['AC Gas', 'Summer', 'Cooling']
  },
  {
    id: 'brake-overhaul',
    title: 'Front & Rear Brake Overhaul',
    category: 'car-repair-paint',
    shortDesc: 'Brake pad replacement, caliper pin greasing, disc rotor skim.',
    fullDesc: 'Ensure zero-slip stopping power with precision brake pad replacements, caliper slide pin greasing, and rotor disc surface turning.',
    price: 1000,
    originalPrice: 1400,
    savingsPercent: 28,
    duration: '2 - 3 hrs',
    icon: 'ShieldCheck',
    features: [
      'Front & rear brake pad fitting',
      'Caliper pin high-temp greasing',
      'Disc rotor skimming / truing',
      'Brake line air bleed',
      'Road braking grip test'
    ],
    tags: ['Brakes', 'Safety', 'Overhaul']
  },
  {
    id: 'eco-deep-clean',
    title: 'Eco Deep Clean & Spa',
    category: 'periodic-service',
    shortDesc: 'Steam upholstery shampoo, exterior Carnauba wax, underbody jet.',
    fullDesc: 'Total vehicle rejuvenation. High-pressure steam upholstery shampooing, rich exterior Carnauba wax glow, and underbody high-power water blast.',
    price: 500,
    originalPrice: 800,
    savingsPercent: 37,
    duration: '1.5 - 2 hrs',
    icon: 'Sparkles',
    features: [
      'High-pressure underbody mud blast',
      'Interior vacuum & fabric steam shampoo',
      'Exterior hand foam & Carnauba wax',
      'Dashboard & door trim polish',
      'Tire dress & rim shine'
    ],
    tags: ['Spa', 'Wash', 'Detailing']
  },
  {
    id: 'spare-parts-catalog',
    title: 'Spare Parts for All Cars',
    category: 'spare-parts',
    shortDesc: 'Brand new OEM / OES parts for all makes & models with genuine guarantee.',
    fullDesc: 'We stock mechanical and electrical spare parts for Maruti, Hyundai, Tata, Mahindra, Toyota, Honda, and more. Direct wholesale sourcing.',
    price: 0,
    duration: 'Instant / Same Day',
    icon: 'Cpu',
    features: [
      'All car brands and models covered',
      'Suspension, engine, brake, and gearbox spares',
      'Filters, belts, pumps, and spark plugs',
      'Guaranteed genuine quality'
    ],
    tags: ['Spare Parts', 'OEM', 'All Cars']
  },
  {
    id: 'car-disposal-parts',
    title: 'Tested Car Disposal Parts (20–30% Cheaper)',
    category: 'spare-parts',
    shortDesc: 'Salvage and disposal parts verified for quality, saving you 20% to 30%.',
    fullDesc: 'Get authentic original components from dismantled and disposal vehicles at 20% to 30% below the cost of new parts. Inspected for high reliability.',
    price: 0,
    duration: 'Ready in Stock',
    icon: 'TrendingDown',
    isNew: true,
    features: [
      '20% to 30% savings vs. brand new parts',
      'Doors, bumpers, lights, gearboxes, and alternators',
      'Tested and inspected by master mechanics',
      'Budget-friendly alternative for major repairs'
    ],
    tags: ['Disposal Parts', '20-30% Off', 'Budget']
  },
  {
    id: 'full-car-repair-paint',
    title: 'Full Car Repair & Paint Services',
    category: 'car-repair-paint',
    shortDesc: 'Complete mechanical overhaul, dent removal, and booth paint finishes.',
    fullDesc: 'State-of-the-art body shop and mechanical overhaul bay. From engine rebore to complete car repainting with high-gloss clear coats.',
    price: 0,
    duration: 'Custom Estimate',
    icon: 'Paintbrush',
    features: [
      'Denting & panel realignment',
      'Computerized paint color matching',
      'Heated paint booth baked finish',
      'Full gearbox, suspension, and engine repairs'
    ],
    tags: ['Paint', 'Denting', 'Full Repair']
  },
  {
    id: 'sell-purchase-vehicles',
    title: 'Sell & Purchase Cars (Govt. Vehicles)',
    category: 'car-trading',
    shortDesc: 'Fair pricing, verified pre-owned cars, and government auction vehicles.',
    fullDesc: 'Looking to buy or sell a car? We handle private certified pre-owned vehicles and specialize in government auction fleet vehicles with legal documentation.',
    price: 0,
    duration: 'Instant Evaluation',
    icon: 'Car',
    features: [
      'Sell your car at best market value',
      'Inspected used cars for sale',
      'Government auction vehicles available',
      'Complete RC transfer & paperwork support'
    ],
    tags: ['Sell Car', 'Buy Car', 'Govt Vehicles']
  }
];

// The 10 Gallery Media Items provided in the prompt
export const GALLERY_MEDIA: GalleryMediaItem[] = [
  {
    id: 'gallery-1',
    type: 'image',
    url: 'https://res.cloudinary.com/tzuyjbw7/image/upload/f_auto,q_auto/1000434595',
    title: 'Brother Motors Workshop Floor',
    category: 'workshop',
    description: 'Active vehicle servicing and mechanical overhaul bays at Brother Motors, Rampura Phul.'
  },
  {
    id: 'gallery-2',
    type: 'image',
    url: 'https://res.cloudinary.com/tzuyjbw7/image/upload/v1788434168/1000434596.jpg',
    title: 'Engine & Mechanical Diagnostic',
    category: 'repair',
    description: 'Precision mechanical troubleshooting and component inspection.'
  },
  {
    id: 'gallery-3',
    type: 'image',
    url: 'https://res.cloudinary.com/tzuyjbw7/image/upload/v1788434170/unnamed_3.jpg',
    title: 'Vehicle Paint & Finish Bay',
    category: 'paint',
    description: 'Professional surface preparation and high-gloss paint finishing.'
  },
  {
    id: 'gallery-4',
    type: 'image',
    url: 'https://res.cloudinary.com/tzuyjbw7/image/upload/v1788505371/1000434601.jpg',
    title: 'Suspension & Chassis Work',
    category: 'overhaul',
    description: 'Heavy-duty suspension replacement and undercarriage assembly.'
  },
  {
    id: 'gallery-5',
    type: 'image',
    url: 'https://res.cloudinary.com/tzuyjbw7/image/upload/v1788505371/1000434580.jpg',
    title: 'Spare Parts & Assembly Stock',
    category: 'parts',
    description: 'Extensive inventory of spare parts and tested disposal components.'
  },
  {
    id: 'gallery-6',
    type: 'video',
    url: 'https://res.cloudinary.com/tzuyjbw7/video/upload/v1788507492/Snapchat-78754025.mp4',
    title: 'Live Workshop Action - Service Bay',
    category: 'workshop',
    description: 'Mechanics in action performing live maintenance at Brother Motors.'
  },
  {
    id: 'gallery-7',
    type: 'video',
    url: 'https://res.cloudinary.com/tzuyjbw7/video/upload/v1788507493/Snapchat-1140503216.mp4',
    title: 'Vehicle Inspection & Tuning',
    category: 'repair',
    description: 'In-progress diagnostic checks and engine tuning.'
  },
  {
    id: 'gallery-8',
    type: 'image',
    url: 'https://res.cloudinary.com/tzuyjbw7/image/upload/v1788507495/Snapchat-487402997.jpg',
    title: 'Workshop Front & Service Queue',
    category: 'workshop',
    description: 'Brother Motors service yard near Jio Petrol Pump, Rampura Phul.'
  },
  {
    id: 'gallery-9',
    type: 'video',
    url: 'https://res.cloudinary.com/tzuyjbw7/video/upload/v1788507497/Swift_gearbox_overall_and_suspension_done____carcalture__automotive__cars__reels__repair_MP4.mp4',
    title: 'Swift Gearbox Overhaul & Suspension Done',
    category: 'overhaul',
    description: 'Complete Maruti Swift gearbox overhaul and suspension rebuild completed by Brother Motors.'
  },
  {
    id: 'gallery-10',
    type: 'video',
    url: 'https://res.cloudinary.com/tzuyjbw7/video/upload/v1788507510/_bike__automotive__honda__100ss_MP4.mp4',
    title: 'Automotive Tuning & Restorations',
    category: 'repair',
    description: 'Precision engineering and mechanical restoration project at Brother Motors.'
  }
];

export const WORKSHOP_LOCATIONS: WorkshopLocation[] = [
  {
    id: 'brother-motors-rampura-phul',
    name: 'BROTHER MOTORS — Rampura Phul',
    city: 'Rampura Phul (BTI.)',
    address: 'Near Jio Petrol Pump, Rampura Phul (BTI.), Punjab',
    phone: '78376-00098, 9501735844',
    hours: 'Mon - Sun: 8:00 AM – 6:00 PM',
    rating: 4.9,
    reviewsCount: 380,
    features: [
      'Near Jio Petrol Pump — Easy Highway Access',
      'Spare Parts for All Car Types in Stock',
      'Car Disposal Parts (20%–30% Cheaper)',
      'Full Car Repair & Professional Paint Booth',
      'Sell & Purchase of Cars (Govt. Vehicles Included)'
    ],
    imageUrl: 'https://res.cloudinary.com/tzuyjbw7/image/upload/v1788434168/1000434596.jpg'
  }
];

export const SPECIALIZED_CARE: SpecializedCareItem[] = [
  {
    id: 'car-repair-paint-overhaul',
    title: 'Full Car Repair & Paint Booth',
    subtitle: 'Flawless denting, computerized paint matching, and baked gloss finish.',
    badge: 'Body & Paint',
    description: 'From major dent removal and scratch repair to complete exterior vehicle repainting with high-grade anti-rust primer and UV-resistant clear coat.',
    imageUrl: 'https://res.cloudinary.com/tzuyjbw7/image/upload/v1788434170/unnamed_3.jpg',
    duration: '24 - 48 Hours',
    priceRange: 'Upfront Quotes on Inspection',
    benefits: [
      'Computerized color shade matching for factory look',
      'Full denting and structural alignment',
      'High-gloss heat-baked clear coat finish',
      'Genuine anti-rust base primer protection'
    ]
  },
  {
    id: 'car-disposal-parts-savings',
    title: 'Car Disposal / Salvage Parts',
    subtitle: 'Genuine tested components saving you 20% to 30% compared to new parts.',
    badge: 'Save 20% – 30%',
    description: 'Sourced from disposal vehicles and rigorously tested for integrity. Get authentic body panels, gearboxes, electronic modules, and alternators at significant savings.',
    imageUrl: 'https://res.cloudinary.com/tzuyjbw7/image/upload/v1788505371/1000434580.jpg',
    duration: 'Ready in Stock',
    priceRange: '20% to 30% Below New Part MRP',
    benefits: [
      'Tested and verified by master mechanics',
      'Huge savings on major repairs and body panels',
      'All major Indian & imported models supported',
      'Immediate availability in our Rampura Phul yard'
    ]
  },
  {
    id: 'gearbox-suspension-overhaul',
    title: 'Gearbox & Suspension Overhaul',
    subtitle: 'Solve hard shifting, clutch slippage, and suspension rattles.',
    badge: 'Mechanical Expert',
    description: 'Complete transmission and suspension rebuilds. As featured in our Swift gearbox overhaul projects, we deliver smooth shifts and brand new ride quality.',
    imageUrl: 'https://res.cloudinary.com/tzuyjbw7/image/upload/v1788505371/1000434601.jpg',
    duration: 'Same Day / 24 Hours',
    priceRange: 'Custom Itemized Estimate',
    benefits: [
      'Full gearbox disassembly and bearing replacements',
      'Heavy-duty suspension struts and bush upgrades',
      'Clutch plate and pressure plate fitting',
      'Comprehensive road test and wheel balancing'
    ]
  }
];

export const VEHICLE_MAKES: VehicleMake[] = [
  {
    id: 'maruti-suzuki',
    name: 'Maruti Suzuki',
    models: [
      { name: '800 / Alto', type: 'Hatchback', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.0 },
      { name: 'Alto K10', type: 'Hatchback', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.0 },
      { name: 'Swift', type: 'Hatchback', fuelOptions: ['Petrol', 'Diesel', 'CNG'], priceMultiplier: 1.0 },
      { name: 'WagonR', type: 'Hatchback', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.0 },
      { name: 'Dzire', type: 'Sedan', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.0 },
      { name: 'Baleno', type: 'Hatchback', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.0 },
      { name: 'Brezza', type: 'SUV', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.0 },
      { name: 'Ertiga', type: 'MUV', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.0 },
      { name: 'Omni / Eeco', type: 'MUV', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.0 },
    ]
  },
  {
    id: 'hyundai',
    name: 'Hyundai',
    models: [
      { name: 'Santro / i10', type: 'Hatchback', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.0 },
      { name: 'i20', type: 'Hatchback', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.0 },
      { name: 'Verna', type: 'Sedan', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.0 },
      { name: 'Creta', type: 'SUV', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.0 },
      { name: 'Venue', type: 'SUV', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.0 },
    ]
  },
  {
    id: 'tata',
    name: 'Tata Motors',
    models: [
      { name: 'Tiago', type: 'Hatchback', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.0 },
      { name: 'Altroz', type: 'Hatchback', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.0 },
      { name: 'Nexon', type: 'SUV', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.0 },
      { name: 'Punch', type: 'SUV', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.0 },
      { name: 'Harrier / Safari', type: 'SUV', fuelOptions: ['Diesel'], priceMultiplier: 1.0 },
    ]
  },
  {
    id: 'mahindra',
    name: 'Mahindra',
    models: [
      { name: 'Bolero / Neo', type: 'SUV', fuelOptions: ['Diesel'], priceMultiplier: 1.0 },
      { name: 'Scorpio / Classic', type: 'SUV', fuelOptions: ['Diesel'], priceMultiplier: 1.0 },
      { name: 'Thar', type: 'SUV', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.0 },
      { name: 'XUV 300 / 700', type: 'SUV', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.0 },
    ]
  },
  {
    id: 'toyota',
    name: 'Toyota',
    models: [
      { name: 'Innova / Crysta', type: 'MUV', fuelOptions: ['Diesel', 'Petrol'], priceMultiplier: 1.0 },
      { name: 'Fortuner', type: 'SUV', fuelOptions: ['Diesel', 'Petrol'], priceMultiplier: 1.0 },
      { name: 'Glanza', type: 'Hatchback', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.0 },
    ]
  },
  {
    id: 'honda',
    name: 'Honda',
    models: [
      { name: 'City', type: 'Sedan', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.0 },
      { name: 'Amaze', type: 'Sedan', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.0 },
    ]
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Gurpreet Singh',
    vehicle: 'Maruti Suzuki Swift',
    rating: 5,
    date: 'Recent',
    comment: 'Got my Swift gearbox and suspension overhaul done at Brother Motors Rampura Phul. Superb workmanship, genuine parts, and honest pricing. Highly recommend their work!',
    serviceUsed: 'Gearbox Overhaul & Suspension',
    location: 'Rampura Phul (BTI.)'
  },
  {
    id: 'rev-2',
    author: 'Harinder Sharma',
    vehicle: 'Hyundai i20',
    rating: 5,
    date: 'Recent',
    comment: 'Needed a replacement door and fender. They provided tested car disposal parts saving me almost 30% compared to new showroom parts. The paint matching was seamless.',
    serviceUsed: 'Car Disposal Parts & Painting',
    location: 'Rampura Phul (BTI.)'
  },
  {
    id: 'rev-3',
    author: 'Amritpal Gill',
    vehicle: 'Maruti Alto K10',
    rating: 5,
    date: 'Recent',
    comment: 'AC service and gas top-up was done for just ₹1500! Cooling is ice cold now. Very polite staff and quick turnaround right near the Jio Petrol Pump.',
    serviceUsed: 'AC Service & Gas Top-up',
    location: 'Rampura Phul (BTI.)'
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'pricing',
    question: 'Are the prices fixed for periodic maintenance?',
    answer: 'Yes, our periodic service packages (e.g. Basic Service at ₹300, Standard Service at ₹400, AC Service at ₹1500, etc.) are upfront and transparent as listed on our service sheet.'
  },
  {
    id: 'faq-2',
    category: 'parts',
    question: 'How do car disposal parts save 20% to 30%?',
    answer: 'We source genuine OEM components from dismantled and disposal vehicles. Every part is carefully tested, cleaned, and verified by our mechanics, allowing us to pass on 20% to 30% in direct savings compared to brand new retail parts.'
  },
  {
    id: 'faq-3',
    category: 'parts',
    question: 'Do you provide spare parts for all car brands?',
    answer: 'Yes! We supply mechanical and electrical spare parts for all types of cars including Maruti Suzuki, Hyundai, Tata, Mahindra, Toyota, Honda, and other popular vehicles.'
  },
  {
    id: 'faq-4',
    category: 'service',
    question: 'Do you buy and sell cars and government vehicles?',
    answer: 'Yes! We actively buy and sell verified pre-owned cars, including government auction and fleet vehicles. We offer transparent valuation and assist with documentation.'
  },
  {
    id: 'faq-5',
    category: 'service',
    question: 'Where is Brother Motors located and what are the opening hours?',
    answer: 'We are located Near Jio Petrol Pump, Rampura Phul (BTI.), Punjab. We are open every day from 8:00 AM to 6:00 PM.'
  }
];
