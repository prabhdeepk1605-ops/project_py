import {
  ServiceCategory,
  ServiceItem,
  VehicleMake,
  WorkshopLocation,
  SpecializedCareItem,
  CustomerReview,
  FAQItem,
} from '../types';

export const HOTLINKED_IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfFmlF-JM6VycfojJagkS9vPpmWXUIJFubli2aarvElnd1lwTz0R8ixz1GYtvz2Fvtw2Grc7P4-0hj3g4skiAagpTltNPMcr5a3u59NNnMZrOI4IPCFx28djLLlA4a_70RnT9zVAo-rgCCAy-k7Ni7DiE4Enzm_K6-_AAQCxk-8ZDGvjUHtHzBJo9Deu9yQ3DKQzCTKhfpU_6xERGeau8BWSnK4tg8hOrrCN0L94aL_y5g4LhVLdXupU15wuCVClmvmw',
  bumperPaint: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1RTCaQTmaizA_deKNbcTLc7XweH_hQikwwZ09GM4EkeDbUCGV1tUqQQfW7A7YBOnl_l0rxD_JthdmpAeG8UZ1dhaJWMjp57fk4UdKgLSA2LPU_9j9zC85uvKe5Tm8ZrCws-mTq1Cxh0Uiu3uQutZv5DmRddfksl-4nonOMkdR3zSDH0Jc8llp8OIEPiBmiAtdnwHqxlYvqrJ1XbnHaGdvoq0szxrREs0RI9vKoa0wmOuOhzNYWbt7W8zBefMtUnyRGg',
  rubbingPolishing: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsgex8ZzpNvZmMjC18Ghe23HQsAHFhmFiQpchBU3-ds1qo7wYonXmVpUPJEnDA6DAszTFqmSeNzhDt0ee3_H1DjkI_chEWpvNDJ4gHSm7RU98wvN9BJRQJJCRj4LTpyC1jvx1BJjWXuFLkB3H_9yAYFGN3nTafCIifgnueFLBwIULfpxjL0axrK-UdxbWa0BVdQVdGzCFKgFff6xGjLPyF_x_ck6jQlCy5q1-ic1GHO_qkyVPDXDt9',
  deepCleanSpa: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpSPWAjWy1vmcGqGRj9ks0HMfRHEsWoE6iO-rc5CR41LJt0J2-7XSZxYAVrCHluzSeK81n3Htu_wx8GxxCDdu9G94ZsuQR7s1MGKgIIjd6qTqHVKETN9B9-lAI5GS0i0eHuqhsbMV1bNEdYhx1CphLEjcTuSDR6_VKM4zT1SI92pQLKxlYQgo8fQi7Z2YZsEdfRE4NDrwP-rVVV04VvJo-jxzkkJpa3fYojqQ39EqaBbakdXUCreQVfgSsbZ2uvh_xsg',
  referencePricingTable: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_7Chqayln98_NQ5qxBKTNXSaCgl2jJuNPkUnMIOsyNjiHSoCS0lAMpneZj14dlb8Boy8viwWTHsixlQTPpBemBUzYpjQvke29gzzvMpMnXslsAu7Yi7yebTTo-g0zKhMXMefUZsPgKOcDWBiJFhuIETjZs4ZxUccVMv5BefqvBTcmjjjNpeXyz6Pz3invXWfbuBTkkkYS42uDf3nREdqicPTE8ixFK-X3vVRflT-YhpjT3moP8qJ_RPbFVRjunm2OYQ',
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: 'our-services', name: 'Our Services', icon: 'Wrench', description: 'Core periodic maintenance and multi-point wellness tuning' },
  { id: 'curated-custom', name: 'Curated Custom', icon: 'Sliders', description: 'Bespoke mechanical tuning and specialized upgrades' },
  { id: 'summer-services', name: 'Summer Services', icon: 'Sun', description: 'Heatwave protection, coolant flush and AC optimization' },
  { id: 'ac-repair', name: 'AC Repair', icon: 'Snowflake', description: 'Cooling diagnostic, antibacterial duct foam and gas top-up' },
  { id: 'batteries', name: 'Batteries', icon: 'BatteryCharging', description: 'Health load test, terminal coating and quick replacement' },
  { id: 'tyres-wheel', name: 'Tyres & Wheel', icon: 'Disc', description: 'Laser alignment, balancing, and tread safety inspection' },
  { id: 'windshields-lights', name: 'Windshields & Lights', icon: 'Sparkles', description: 'Cracked glass replacement, headlight restoration and optics' },
  { id: 'suspension-fitments', name: 'Suspension & Fitments', icon: 'Settings2', description: 'Shock absorbers, bush kit upgrades, and ride smoothing' },
  { id: 'clutch-body', name: 'Clutch & Body Parts', icon: 'ShieldCheck', description: 'OEM replacement clutch sets, bumper clips and panels', isNew: true },
  { id: 'insurance-claims', name: 'Insurance Claims', icon: 'FileText', description: 'Cashless claim settlement and survey assistance' },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'essential-servicing',
    title: 'Essential Servicing',
    category: 'our-services',
    shortDesc: 'Complete periodic checkup and precision tuning.',
    fullDesc: 'Comprehensive 40-point vehicle checkup including synthetic engine oil change, oil filter replacement, air filter cleaning, fluid top-ups, and computerized diagnostics.',
    price: 2199,
    originalPrice: 2899,
    savingsPercent: 25,
    duration: '3 - 4 hrs',
    icon: 'Wrench',
    isPopular: true,
    features: [
      '100% Synthetic Engine Oil (up to 3.5L)',
      'OES Oil Filter Replacement',
      'Air & Cabin Filter Cleaning / Inspect',
      'Coolant & Brake Fluid Top-up',
      '40-Point Digital Safety Health Card',
      'Complimentary Eco Foam Exterior Wash'
    ],
    recommendedInterval: 'Every 5,000 km or 6 Months',
    tags: ['Periodic', 'Popular', 'Engine Health']
  },
  {
    id: 'restorative-care',
    title: 'Restorative Care',
    category: 'our-services',
    shortDesc: 'Deep cleaning and organic finishing.',
    fullDesc: 'Deep interior sanitization and exterior hand-glaze polishing using non-toxic botanical cleaners that nourish upholstery and restore paint clarity.',
    price: 1899,
    originalPrice: 2499,
    savingsPercent: 24,
    duration: '2 - 3 hrs',
    icon: 'Sparkles',
    features: [
      'Antibacterial Steam Interior Sanitization',
      'Deep Carpet & Seat Foam Extraction',
      'Dashboard & Trim Conditioning with UV Shield',
      '3-Step Hand Machine Rubbing & Wax',
      'Tire Dressing & Glass De-fogging'
    ],
    recommendedInterval: 'Every 3 Months',
    tags: ['Detailing', 'Interior Care', 'Eco Wash']
  },
  {
    id: 'parts-replacement',
    title: 'Parts Replacement',
    category: 'our-services',
    shortDesc: 'Sustainable and durable component swaps.',
    fullDesc: 'Precision replacement of worn mechanical components using verified OES parts with an unconditional 6-month / 10,000 km warranty.',
    price: 3499,
    originalPrice: 4500,
    savingsPercent: 22,
    duration: '2 - 5 hrs',
    icon: 'Cpu',
    features: [
      'Brake Pads & Rotor Disk Servicing',
      'Spark Plug & Ignition Coil Testing',
      'Drive Belt & Tensioner Inspection',
      'Genuine OES Component Guaranteed',
      'Digital Wear & Tear Diagnostic Log'
    ],
    tags: ['Mechanical', 'Warranty', 'Safety']
  },
  {
    id: 'thorough-inspections',
    title: 'Thorough Inspections',
    category: 'our-services',
    shortDesc: 'Detailed holistic health reports.',
    fullDesc: 'Rigorous 100-point pre-purchase and road trip assessment covering OBD-II ECU diagnostics, battery health, suspension play, and underbody scan.',
    price: 999,
    originalPrice: 1499,
    savingsPercent: 33,
    duration: '1.5 hrs',
    icon: 'CheckCircle',
    isNew: true,
    features: [
      '100-Point Comprehensive Diagnostic',
      'OBD-II Live Error Code Scanning',
      'Battery Load & Alternator Waveform Test',
      'Brake Fluid Moisture Level Analysis',
      'Detailed PDF Report with High-Res Photos'
    ],
    tags: ['Inspection', 'Pre-Trip', 'Health Score']
  },
  {
    id: 'ac-cooling-repair',
    title: 'AC Service & Gas Top-up',
    category: 'ac-repair',
    shortDesc: 'Cooling diagnostics, gas replenishment, and antibacterial clean.',
    fullDesc: 'Keep your cabin pristine and refreshing with pure R134a refrigerant charge, condenser flush, leak testing, and antibacterial duct fogging.',
    price: 1599,
    originalPrice: 1999,
    savingsPercent: 20,
    duration: '2 hrs',
    icon: 'Snowflake',
    features: [
      'High-grade Refrigerant Gas Refill (up to 400g)',
      'AC Condenser High-Pressure Cleaning',
      'AC Cabin Filter Cleaning & Dusting',
      'Compressor Oil & Leak Vacuum Test',
      'Duct Antibacterial Ozone Sanitization'
    ],
    tags: ['AC', 'Cooling', 'Summer']
  },
  {
    id: 'battery-replacement',
    title: 'Battery Health & Replacement',
    category: 'batteries',
    shortDesc: 'Testing, terminal protection, and quick replacement.',
    fullDesc: 'Comprehensive digital load testing, terminal sulfur cleanup, and instant replacement with top-tier sealed maintenance-free batteries with up to 55-month warranty.',
    price: 2999,
    originalPrice: 3800,
    savingsPercent: 21,
    duration: '45 mins',
    icon: 'BatteryCharging',
    features: [
      'Cold Cranking Amps (CCA) Electronic Test',
      'Alternator Voltage & Starter Load Analysis',
      'Anti-Corrosion Gel Terminal Treatment',
      'Old Battery Buyback / Scrappage Discount',
      'Free Doorstep Battery Jumpstart/Fitment'
    ],
    tags: ['Battery', 'Electrical', 'Quick']
  },
  {
    id: 'tyre-wheel-care',
    title: 'Wheel Alignment & Balancing',
    category: 'tyres-wheel',
    shortDesc: '3D Laser alignment and high-speed dynamic balancing.',
    fullDesc: 'Optimize tire longevity and driving stability with 4-wheel computerized 3D laser alignment, dynamic balancing, and tire rotation.',
    price: 799,
    originalPrice: 1100,
    savingsPercent: 27,
    duration: '1 hr',
    icon: 'Disc',
    features: [
      'Computerized 3D 4-Wheel Alignment',
      'Wheel Balancing with Precision Lead Weights',
      'Tire Rotation for Uniform Tread Wear',
      'Nitrogen Gas Top-Up on all 5 Tyres',
      'Tread Depth & Pressure Sensor (TPMS) Check'
    ],
    tags: ['Tyres', 'Safety', 'Alignment']
  },
  {
    id: 'denting-painting',
    title: 'Denting & Panel Painting',
    category: 'curated-custom',
    shortDesc: 'Flawless color matching and oven-baked finish.',
    fullDesc: 'Restore vehicle panels to factory perfection with computerized paint matching, anti-rust primer coat, and scratch-resistant DuPont clear coat.',
    price: 2499,
    originalPrice: 3200,
    savingsPercent: 22,
    duration: '24 - 48 hrs',
    icon: 'Paintbrush',
    features: [
      'Computerized Paint Color Matching (99.8%)',
      'High-grade Anti-Corrosion Primer',
      'Multi-Layer Clear Coat in Dust-Free Booth',
      'Full Panel Rubbing & Polish Buffing',
      '2-Year Guarantee on Paint Peeling'
    ],
    tags: ['Paint', 'Bodywork', 'Custom']
  },
  {
    id: 'car-spa-deluxe',
    title: 'Deluxe Organic Car Spa',
    category: 'summer-services',
    shortDesc: 'Water-efficient botanical wash and interior rejuvenation.',
    fullDesc: 'Environmentally responsible car wash that saves over 85% water compared to traditional washes, paired with organic beeswax glaze.',
    price: 1199,
    originalPrice: 1599,
    savingsPercent: 25,
    duration: '1.5 hrs',
    icon: 'Droplets',
    features: [
      'Eco-Friendly Water Recycling Pressure Wash',
      'Underbody High-Pressure Mud Flush',
      'Organic Carnauba Wax Protective Glaze',
      'Interior Vacuum & Anti-Static Dust Wipe',
      'Tire & Rim Degrease and Satin Polish'
    ],
    tags: ['Car Spa', 'Eco Wash', 'Grooming']
  },
  {
    id: 'windshield-headlight',
    title: 'Windshields & Headlight Optics',
    category: 'windshields-lights',
    shortDesc: 'Crystal clear visibility and UV headlight de-yellowing.',
    fullDesc: 'Restore cloudy or yellowed headlights to maximum illumination and seal cracks or install OEM acoustic windshields.',
    price: 1299,
    originalPrice: 1799,
    savingsPercent: 28,
    duration: '1.5 hrs',
    icon: 'Sun',
    features: [
      'Headlight Lens Wet Sanding & UV Sealant',
      'Wiper Blade Wiper Arm Calibration',
      'Windshield Hydrophobic Rain-Repellent Treatment',
      'OEM Toughened / Laminated Glass Available',
      'Rear Defogger & High-Mount Light Check'
    ],
    tags: ['Visibility', 'Lights', 'Safety']
  },
  {
    id: 'suspension-overhaul',
    title: 'Suspension & Strut Tuning',
    category: 'suspension-fitments',
    shortDesc: 'Eliminate rattles and enjoy a cloud-smooth ride.',
    fullDesc: 'Complete inspection and replacement of shock absorbers, strut mountings, stabilizer link rods, and lower arm bushes.',
    price: 4499,
    originalPrice: 5999,
    savingsPercent: 25,
    duration: '4 - 6 hrs',
    icon: 'Sliders',
    features: [
      'Strut & Shock Absorber Hydraulic Damping Test',
      'Polyurethane / Heavy-Duty Bush Replacement',
      'Steering Rack Play & Tie Rod Tuning',
      'Road Bump NVH (Noise, Vibration, Harshness) Audit',
      'Wheel Alignment Included'
    ],
    tags: ['Suspension', 'Comfort', 'Ride Quality']
  },
  {
    id: 'clutch-overhaul',
    title: 'Clutch & Transmission Care',
    category: 'clutch-body',
    shortDesc: 'Smooth gear shifts and clutch plate overhaul.',
    fullDesc: 'Solve clutch slippage, hard pedal, and gear grinding with precision friction plate and pressure plate replacements.',
    price: 3899,
    originalPrice: 5200,
    savingsPercent: 25,
    duration: '5 - 7 hrs',
    icon: 'Layers',
    isNew: true,
    features: [
      'Clutch Plate & Pressure Plate Replacement',
      'Release Bearing Inspection & Grease',
      'Flywheel Resurfacing & Inspection',
      'Transmission Oil Flush (Synthetic)',
      'Clutch Cable / Master Cylinder Bleeding'
    ],
    tags: ['Clutch', 'Transmission', 'Performance']
  }
];

export const SPECIALIZED_CARE: SpecializedCareItem[] = [
  {
    id: 'front-bumper-paint',
    title: 'Front Bumper Paint',
    subtitle: 'Flawless color matching and eco-friendly clear coats for a seamless finish that lasts.',
    badge: 'Restoration',
    description: 'Specialized scratch, scuff, and crack repair for front and rear bumper assemblies. We utilize computerized spectral color analysis to guarantee a 100% factory color match in our dust-free heat-baking paint booth.',
    imageUrl: HOTLINKED_IMAGES.bumperPaint,
    duration: '24 Hours',
    priceRange: '₹2,199 - ₹3,499',
    benefits: [
      'Computerized spectral paint matching',
      'Oven-baked clear coat for ultra-gloss finish',
      '2-Year warranty against flaking and bubbling',
      'Preserves original bumper plastic elasticity'
    ]
  },
  {
    id: 'rubbing-polishing',
    title: 'Rubbing & Polishing',
    subtitle: 'Restore showroom shine and eliminate micro-scratches.',
    badge: 'Premium Finish',
    description: 'Meticulous 3-stage compounding and rotary orbital polishing that safely removes swirl marks, minor oxidation, and surface holograms, sealed with high-grade synthetic sealant.',
    imageUrl: HOTLINKED_IMAGES.rubbingPolishing,
    duration: '3 - 4 Hours',
    priceRange: '₹1,499 - ₹2,799',
    benefits: [
      'Dual-action rotary polishing with German Meguiar pads',
      'Removes 90%+ of swirl marks and light spider-webbing',
      'Deep optical clarity with water-beading hydrophobic glaze',
      'Gentle on clear coat thickness (micrometer measured)'
    ]
  },
  {
    id: 'deep-clean-spa',
    title: 'Deep All Round Spa',
    subtitle: 'Interior & exterior rejuvenation with organic cleansers.',
    badge: 'Holistic Spa',
    description: 'Our signature restorative spa treatment. Deep steam extraction for fabrics, leather conditioning with natural plant waxes, engine bay dry ice wash, and 360-degree exterior foam glow.',
    imageUrl: HOTLINKED_IMAGES.deepCleanSpa,
    duration: '2 - 3 Hours',
    priceRange: '₹1,299 - ₹2,299',
    benefits: [
      'Zero harsh chemical odors — pure botanical aromatherapy',
      'High-pressure steam kills 99.9% of bacteria and allergens',
      'Underbody jet mud and salt removal',
      'Dashboard, consoles, and door cards conditioned with matte UV blocker'
    ]
  }
];

export const VEHICLE_MAKES: VehicleMake[] = [
  {
    id: 'maruti-suzuki',
    name: 'Maruti Suzuki',
    models: [
      { name: 'Alto / 800', type: 'Hatchback', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.0 },
      { name: 'Alto K10', type: 'Hatchback', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.05 },
      { name: 'Swift', type: 'Hatchback', fuelOptions: ['Petrol', 'Diesel', 'CNG'], priceMultiplier: 1.15 },
      { name: 'Baleno', type: 'Hatchback', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.2 },
      { name: 'WagonR', type: 'Hatchback', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.05 },
      { name: 'Dzire', type: 'Sedan', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.2 },
      { name: 'Brezza', type: 'SUV', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.3 },
      { name: 'Ertiga', type: 'MUV', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.35 },
      { name: 'Grand Vitara', type: 'SUV', fuelOptions: ['Hybrid', 'Petrol', 'CNG'], priceMultiplier: 1.4 },
      { name: 'Omni / Eeco', type: 'MUV', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.0 },
      { name: 'Ritz', type: 'Hatchback', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.08 },
    ]
  },
  {
    id: 'hyundai',
    name: 'Hyundai',
    models: [
      { name: 'i10 / Grand i10 Nios', type: 'Hatchback', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.1 },
      { name: 'i20', type: 'Hatchback', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.2 },
      { name: 'Aura / Xcent', type: 'Sedan', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.18 },
      { name: 'Verna', type: 'Sedan', fuelOptions: ['Petrol', 'Turbo Petrol'], priceMultiplier: 1.35 },
      { name: 'Venue', type: 'SUV', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.25 },
      { name: 'Creta', type: 'SUV', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.4 },
      { name: 'Tucson', type: 'SUV', fuelOptions: ['Diesel', 'Petrol'], priceMultiplier: 1.6 },
      { name: 'Ioniq 5', type: 'EV', fuelOptions: ['Electric'], priceMultiplier: 1.5 },
    ]
  },
  {
    id: 'tata',
    name: 'Tata Motors',
    models: [
      { name: 'Tiago / Tiago EV', type: 'Hatchback', fuelOptions: ['Petrol', 'Electric', 'CNG'], priceMultiplier: 1.1 },
      { name: 'Tigor / Tigor EV', type: 'Sedan', fuelOptions: ['Petrol', 'Electric', 'CNG'], priceMultiplier: 1.15 },
      { name: 'Altroz', type: 'Hatchback', fuelOptions: ['Petrol', 'Diesel', 'CNG'], priceMultiplier: 1.2 },
      { name: 'Punch / Punch EV', type: 'SUV', fuelOptions: ['Petrol', 'Electric', 'CNG'], priceMultiplier: 1.22 },
      { name: 'Nexon / Nexon EV', type: 'SUV', fuelOptions: ['Petrol', 'Diesel', 'Electric'], priceMultiplier: 1.35 },
      { name: 'Harrier', type: 'SUV', fuelOptions: ['Diesel'], priceMultiplier: 1.55 },
      { name: 'Safari', type: 'SUV', fuelOptions: ['Diesel'], priceMultiplier: 1.6 },
    ]
  },
  {
    id: 'toyota',
    name: 'Toyota',
    models: [
      { name: 'Glanza', type: 'Hatchback', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.2 },
      { name: 'Urban Cruiser Taisor', type: 'SUV', fuelOptions: ['Petrol', 'CNG'], priceMultiplier: 1.25 },
      { name: 'Urban Cruiser Hyryder', type: 'SUV', fuelOptions: ['Hybrid', 'Petrol', 'CNG'], priceMultiplier: 1.4 },
      { name: 'Innova Crysta / Hycross', type: 'MUV', fuelOptions: ['Hybrid', 'Petrol', 'Diesel'], priceMultiplier: 1.65 },
      { name: 'Fortuner / Legender', type: 'SUV', fuelOptions: ['Diesel', 'Petrol'], priceMultiplier: 1.85 },
      { name: 'Camry', type: 'Sedan', fuelOptions: ['Hybrid'], priceMultiplier: 1.75 },
    ]
  },
  {
    id: 'honda',
    name: 'Honda',
    models: [
      { name: 'Amaze', type: 'Sedan', fuelOptions: ['Petrol'], priceMultiplier: 1.18 },
      { name: 'City (Gen 4/5)', type: 'Sedan', fuelOptions: ['Petrol', 'Hybrid'], priceMultiplier: 1.35 },
      { name: 'Elevate', type: 'SUV', fuelOptions: ['Petrol'], priceMultiplier: 1.38 },
      { name: 'Jazz / WR-V', type: 'Hatchback', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.2 },
    ]
  },
  {
    id: 'mahindra',
    name: 'Mahindra',
    models: [
      { name: 'XUV 3XO / 300', type: 'SUV', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.3 },
      { name: 'Thar / Thar Roxx', type: 'SUV', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.45 },
      { name: 'Scorpio-N / Classic', type: 'SUV', fuelOptions: ['Diesel', 'Petrol'], priceMultiplier: 1.5 },
      { name: 'XUV700', type: 'SUV', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.6 },
      { name: 'Bolero / Neo', type: 'SUV', fuelOptions: ['Diesel'], priceMultiplier: 1.25 },
    ]
  },
  {
    id: 'volkswagen-skoda',
    name: 'Volkswagen / Škoda',
    models: [
      { name: 'Polo / Vento', type: 'Hatchback', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.3 },
      { name: 'Taigun / Kushaq', type: 'SUV', fuelOptions: ['Turbo Petrol'], priceMultiplier: 1.45 },
      { name: 'Virtus / Slavia', type: 'Sedan', fuelOptions: ['Turbo Petrol'], priceMultiplier: 1.45 },
      { name: 'Tiguan / Kodiaq', type: 'SUV', fuelOptions: ['Turbo Petrol'], priceMultiplier: 1.8 },
    ]
  },
  {
    id: 'kia',
    name: 'Kia',
    models: [
      { name: 'Sonet', type: 'SUV', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.25 },
      { name: 'Seltos', type: 'SUV', fuelOptions: ['Petrol', 'Diesel', 'Turbo Petrol'], priceMultiplier: 1.4 },
      { name: 'Carens', type: 'MUV', fuelOptions: ['Petrol', 'Diesel'], priceMultiplier: 1.38 },
      { name: 'EV6', type: 'EV', fuelOptions: ['Electric'], priceMultiplier: 1.65 },
    ]
  }
];

export const WORKSHOP_LOCATIONS: WorkshopLocation[] = [
  {
    id: 'vijayawada-central',
    name: 'Terra Central Studio — Vijayawada',
    city: 'Vijayawada, India',
    address: 'MG Road, Opposite Gateway Hotel, Labbipet, Vijayawada, AP 520010',
    phone: '+91 866 247 8899',
    hours: 'Mon - Sun: 8:00 AM – 8:30 PM',
    rating: 4.9,
    reviewsCount: 1420,
    features: [
      'Solar-Powered 8-Bay Facility',
      'Filtered Rain-Harvested Car Spa',
      'Air-Conditioned Lounge with Organic Coffee',
      'Live HD Service Webcam Streaming',
      'Free Valet Pickup & Drop within 15 km'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'portland-roots',
    name: 'Terra Roots Hub — Portland',
    city: 'Portland, OR',
    address: '1420 SE Water Ave, Central Eastside, Portland, OR 97214',
    phone: '+1 (503) 555-0194',
    hours: 'Mon - Sat: 7:30 AM – 6:30 PM',
    rating: 4.95,
    reviewsCount: 890,
    features: [
      '100% Carbon-Neutral Certified',
      'EV Battery Diagnostic Lab',
      'Artisan Wood & Leather Repair Center',
      'Complimentary Hybrid Loaner Bikes & Cars'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'seattle-green',
    name: 'Terra Green Bay — Seattle',
    city: 'Seattle, WA',
    address: '955 S Holgate St, SODO Industrial District, Seattle, WA 98134',
    phone: '+1 (206) 555-0842',
    hours: 'Mon - Sun: 8:00 AM – 7:00 PM',
    rating: 4.88,
    reviewsCount: 650,
    features: [
      'Underbody Anti-Rust Marine Weatherproofing',
      'Certified EV & Hybrid Specialists',
      'Zero-Waste Oil Recycling Partnership'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'austin-solar',
    name: 'Terra Solar Studio — Austin',
    city: 'Austin, TX',
    address: '2201 E 7th St, East Austin, Austin, TX 78702',
    phone: '+1 (512) 555-0371',
    hours: 'Mon - Sat: 7:30 AM – 7:00 PM',
    rating: 4.92,
    reviewsCount: 520,
    features: [
      'High-Efficiency AC Recovery Systems',
      'Ceramic Shield Coating Cleanroom',
      'Outdoor Shaded Workspace with Gigabit Wi-Fi'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Suresh Varma',
    vehicle: 'Maruti Suzuki Swift (2022)',
    rating: 5,
    date: '3 days ago',
    comment: 'The transparency at Terra Workshop is unmatched in Vijayawada! They sent me video clips of the dirty filter vs new OES filter before replacing. Saved around ₹1,400 compared to the showroom.',
    serviceUsed: 'Essential Servicing + AC Top-up',
    location: 'Vijayawada Central'
  },
  {
    id: 'rev-2',
    author: 'Priya Sharma',
    vehicle: 'Hyundai Creta SX',
    rating: 5,
    date: '1 week ago',
    comment: 'Got the Deep All Round Spa and Front Bumper Paint touch-up. The metallic paint finish is showroom grade! No toxic synthetic chemical smell inside the car at all.',
    serviceUsed: 'Specialized Care & Deep Spa',
    location: 'Vijayawada Central'
  },
  {
    id: 'rev-3',
    author: 'David Lindqvist',
    vehicle: 'Tesla Model 3 / Subaru Outback',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Finally a workshop that genuinely cares about sustainability. The staff is polite, knowledgeable, and the warm coffee lounge makes waiting a pleasure.',
    serviceUsed: 'Brake Inspection & Ceramic Detail',
    location: 'Portland Roots'
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'pricing',
    question: 'Are there any hidden charges?',
    answer: 'Absolutely not. Transparency is rooted in our core values. The prices you see here, adjusted for your specific vehicle and selected services upon inspection, are what you pay. We always provide a detailed digital estimate and request your explicit approval before beginning any additional work.'
  },
  {
    id: 'faq-2',
    category: 'pricing',
    question: 'How is the "Estimated Savings" calculated?',
    answer: 'Our estimated savings (15% to 35%) are calculated by comparing our upfront transparent service and part rates against the average costs reported at authorized dealership service centers for the same vehicle make and model across the region.'
  },
  {
    id: 'faq-3',
    category: 'parts',
    question: 'Do you use genuine spare parts?',
    answer: 'Yes, we prioritize unwavering quality. We use certified OES (Original Equipment Supplier) parts from trusted global manufacturers (Bosch, Denso, Valeo, Brembo, Mann-Filter) that meet or exceed OEM specifications, backed by our 6-month / 10,000 km warranty.'
  },
  {
    id: 'faq-4',
    category: 'service',
    question: 'How does Doorstep Valet Pickup & Drop work?',
    answer: 'Simply select "Valet Pickup" during booking. Our trained and background-verified driver arrives at your doorstep, performs an initial 10-point digital photo walkaround, and transports your vehicle to our workshop. You receive real-time live GPS tracking and progress updates.'
  },
  {
    id: 'faq-5',
    category: 'warranty',
    question: 'What warranty is offered on repairs & paintwork?',
    answer: 'All periodic maintenance services carry a 1,000 km / 1-month satisfaction guarantee. Mechanical part replacements include a 6-month / 10,000 km warranty, while bodywork and bumper paint services come with an industry-leading 2-year anti-peeling warranty.'
  }
];

export const ADD_ON_SERVICES = [
  { id: 'addon-eco-wash', title: 'Eco Waterless Foam Wash', price: 399, icon: 'Droplet', desc: 'Saves 120 liters of water' },
  { id: 'addon-ac-sanitizer', title: 'Antibacterial AC Duct Fumigation', price: 499, icon: 'Wind', desc: 'Eliminates 99.9% mildew & odor' },
  { id: 'addon-wiper-fluid', title: 'Botanical Rain-X Wiper Fluid Flush', price: 199, icon: 'Sparkles', desc: 'Streaking prevention formula' },
  { id: 'addon-battery-load', title: 'Computerized Battery Health Certificate', price: 299, icon: 'Activity', desc: 'Live alternator waveform report' },
];
