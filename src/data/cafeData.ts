import { MenuItem, Zone, BusinessPillar, CommunityNote } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_cafe_greenhouse_1790584043845.jpg';
export const SIGNATURE_BREW_IMAGE = '/src/assets/images/cafe_signature_brew_1790584062810.jpg';
export const FOCUS_POD_IMAGE = '/src/assets/images/cafe_interior_focus_pod_1790584079514.jpg';
export const ECO_TUMBLER_IMAGE = '/src/assets/images/cafe_eco_tumbler_community_1790584091436.jpg';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Daybreak Slow-Drip Single Origin',
    category: 'coffee',
    price: 3.25,
    studentPrice: 2.75,
    description: 'Direct-trade Ethiopian washed heirloom, brewed through unbleached natural cotton filters. Crisp notes of bergamot, peach blossom, and honey.',
    dietary: ['vegan', 'gluten-free'],
    caffeine: 'high',
    highlights: 'Eligible for $3.50 All-Day Refill Passport',
    image: SIGNATURE_BREW_IMAGE,
    popular: true
  },
  {
    id: 'm2',
    name: 'Pistachio Oat Cloud Cortado',
    category: 'coffee',
    price: 4.25,
    studentPrice: 3.75,
    description: 'Double shot of chocolatey espresso folded into steamed house-made oat milk and house pistachio paste, finished with crushed Sicilian pistachios.',
    dietary: ['vegan', 'dairy-free'],
    caffeine: 'high',
    highlights: 'Signature staff favorite',
    image: SIGNATURE_BREW_IMAGE,
    popular: true
  },
  {
    id: 'm3',
    name: 'Kyoto 16-Hour Nitro Cold Brew',
    category: 'coffee',
    price: 4.00,
    studentPrice: 3.50,
    description: 'Slow ice-drop extraction infused with pure nitrogen on tap for a creamy, naturally sweet, micro-bubble head without added sugar.',
    dietary: ['vegan', 'gluten-free'],
    caffeine: 'high',
    highlights: 'Zero sugar, ultra-smooth energy boost'
  },
  {
    id: 'm4',
    name: 'Ceremonial Uji Matcha Dew',
    category: 'botanicals',
    price: 4.50,
    studentPrice: 3.95,
    description: 'First-harvest Kyoto ceremonial matcha hand-whisked over mountain spring water, raw wild lavender blossom honey, and iced oat milk.',
    dietary: ['vegetarian', 'gluten-free'],
    caffeine: 'balanced',
    highlights: 'L-theanine rich for sustained calm focus'
  },
  {
    id: 'm5',
    name: "Lion's Mane & Golden Turmeric Elixir",
    category: 'botanicals',
    price: 4.20,
    studentPrice: 3.65,
    description: 'Warm organic oat milk steeped with dual-extracted lion’s mane mushroom, fresh turmeric root, Ceylon cinnamon, black pepper, and maple.',
    dietary: ['vegan', 'gluten-free', 'dairy-free'],
    caffeine: 'none',
    highlights: 'Caffeine-free cognitive clarity blend'
  },
  {
    id: 'm6',
    name: 'Sparkling Hibiscus Yuzu Tonic',
    category: 'botanicals',
    price: 3.75,
    studentPrice: 3.25,
    description: 'Cold-steeped ruby hibiscus flower with Japanese yuzu juice, sparkling mineral water, and fresh garden mint from our greenhouse wall.',
    dietary: ['vegan', 'gluten-free'],
    caffeine: 'none',
    highlights: 'Vitamin C packed refreshment'
  },
  {
    id: 'm7',
    name: 'Toasted Rosemary Focaccia Melt',
    category: 'eats',
    price: 6.50,
    studentPrice: 5.50,
    description: 'Fresh baked sourdough focaccia layered with roasted portobello mushrooms, melted sharp fontina cheese, arugula, and walnut sun-dried tomato pesto.',
    dietary: ['vegetarian'],
    caffeine: 'none',
    highlights: 'Warm, filling & budget-friendly',
    image: SIGNATURE_BREW_IMAGE,
    popular: true
  },
  {
    id: 'm8',
    name: 'Smoked Sea Salt Avocado & Miso Brioche',
    category: 'eats',
    price: 5.95,
    studentPrice: 4.95,
    description: 'Thick cut artisanal brioche toast with crushed Hass avocado, white miso glaze, toasted sesame seeds, chili flakes, and micro radishes.',
    dietary: ['vegetarian'],
    caffeine: 'none',
    highlights: 'Wholesome good fats for long study marathons'
  },
  {
    id: 'm9',
    name: 'Spiced Brioche Scramble Bun',
    category: 'eats',
    price: 5.50,
    studentPrice: 4.75,
    description: 'Soft pasture-raised eggs scrambled softly with chives, smoked paprika aioli, and pickled shallots inside a warm potato brioche bun.',
    dietary: ['vegetarian'],
    caffeine: 'none',
    highlights: '18g protein for all-day stamina'
  },
  {
    id: 'm10',
    name: 'Overnight Chia Berry & Coconut Pod',
    category: 'bites',
    price: 3.75,
    studentPrice: 3.00,
    description: 'Organic chia seeds soaked in creamy coconut milk layered with wild blueberry compote and toasted coconut flakes in a reusable glass jar.',
    dietary: ['vegan', 'gluten-free', 'dairy-free'],
    caffeine: 'none',
    highlights: 'Zero refined sugar & high fiber'
  },
  {
    id: 'm11',
    name: 'Cardamom Almond Flour Knot',
    category: 'bites',
    price: 3.25,
    studentPrice: 2.75,
    description: 'Traditional Scandinavian pull-apart knot spiced with crushed green cardamom seeds and pearled sugar, baked fresh twice daily.',
    dietary: ['vegetarian'],
    caffeine: 'none',
    highlights: 'Baked locally at 6 AM and 1 PM'
  },
  {
    id: 'm12',
    name: 'Matcha Pistachio Brain Truffles (Pack of 3)',
    category: 'bites',
    price: 2.95,
    studentPrice: 2.50,
    description: 'Dates, activated almonds, ceremonial matcha, and raw cacao rolled in crushed pistachios. No added sugar.',
    dietary: ['vegan', 'gluten-free', 'dairy-free'],
    caffeine: 'gentle',
    highlights: 'The ideal $2.50 quick library snack'
  },
  {
    id: 'm13',
    name: 'The Finals Cram Fuel Combo',
    category: 'combos',
    price: 7.95,
    studentPrice: 6.95,
    description: '1 Large Drip Coffee or Nitro Cold Brew + 1 Warm Rosemary Focaccia Melt + 1 Matcha Brain Truffle. Saves $2.50 vs individual items.',
    dietary: ['vegetarian'],
    caffeine: 'high',
    highlights: 'Best value bundle for 4+ hour study stints',
    popular: true
  },
  {
    id: 'm14',
    name: 'The Zen Morning Flight',
    category: 'combos',
    price: 7.25,
    studentPrice: 6.25,
    description: '1 Ceremonial Uji Matcha Dew or Golden Turmeric + 1 Avocado Miso Brioche Toast.',
    dietary: ['vegetarian'],
    caffeine: 'balanced',
    highlights: 'Clean sustained energy without coffee jitters'
  }
];

export const CAFE_ZONES: Zone[] = [
  {
    id: 'greenhouse',
    name: 'The Botanical Skylight Greenhouse',
    tagline: 'Whisper-quiet natural daylight haven under living flora',
    noiseLevel: 'Whisper Zone (38 – 44 dB)',
    decibel: 41,
    lighting: '92% Natural Skylight + Warm 2700K task lamps',
    idealFor: 'Intensive reading, thesis drafting, thesis research, solo deep focus',
    capacity: 34,
    availableSeats: 8,
    powerOutlets: '1 Dedicated 100W USB-C PD & AC port per seat',
    features: [
      'Living vertical plant wall purifying air naturally',
      'Ergonomic oak carrels with privacy dividers',
      'Free loaner warm fleece blankets & reading stands',
      'Strict no-calls policy'
    ],
    image: HERO_IMAGE
  },
  {
    id: 'pods',
    name: 'Soundproof Wooden Focus Pods',
    tagline: 'Private acoustic sanctums for deep coding & exam prep',
    noiseLevel: 'Library Silence (32 – 36 dB)',
    decibel: 34,
    lighting: 'Dimmable CRI 98 circadian task lighting',
    idealFor: 'Coding marathons, remote interviews, dissertation crunch',
    capacity: 12,
    availableSeats: 3,
    powerOutlets: '2 AC sockets + 2 100W USB-C fast charging points',
    features: [
      'Recycled PET acoustic felt lining blocks 28dB of external sound',
      'Adjustable pneumatic Herman Miller-style desk chairs',
      'Magnetic note boards with dry-erase markers',
      'Reserved via 60-minute fair-share rotation or Pass membership'
    ],
    image: FOCUS_POD_IMAGE
  },
  {
    id: 'atelier',
    name: 'The Co-Lab Design Atelier',
    tagline: 'Communal workbench energy for group brainstorms & startup projects',
    noiseLevel: 'Productive Murmur (55 – 62 dB)',
    decibel: 58,
    lighting: 'Vibrant ambient workshop lighting + overhead fixtures',
    idealFor: 'Group assignments, hackathons, startup meetings, student clubs',
    capacity: 48,
    availableSeats: 16,
    powerOutlets: 'Central under-table pop-up power towers every 2 feet',
    features: [
      '8-meter solid recycled ash communal worktables',
      'Portable 27-inch 4K USB-C monitor docking stations',
      'Rollable mobile whiteboards & design stationery tray',
      'Open discussion and collaborative conversation welcomed'
    ],
    image: HERO_IMAGE
  },
  {
    id: 'amphitheatre',
    name: 'The Sunken Sun Amphitheatre',
    tagline: 'Tiered stadium seating for casual reading, acoustic sets & zine swaps',
    noiseLevel: 'Relaxed Social & Lo-Fi Beats (50 – 56 dB)',
    decibel: 53,
    lighting: 'Golden-hour floor up-lights & paper sphere lanterns',
    idealFor: 'Casual meetups, laptop-free book reading, creative decompression',
    capacity: 30,
    availableSeats: 11,
    powerOutlets: 'Discreet floor kickboard USB-C charging points',
    features: [
      'Organic linen floor cushions & low Japanese oak trays',
      'Curated community zine library & textbook barter shelf',
      'Hosts weekly Friday evening acoustic open-mics & design talks',
      'Shoe-optional tatami lounge corner'
    ],
    image: ECO_TUMBLER_IMAGE
  }
];

export const SPECIAL_FEATURES = [
  {
    icon: 'Coaster',
    title: 'Dual-Sided "Social Signal" Coasters',
    tagline: 'Respecting boundaries while solving campus isolation',
    description: 'Every table provides handcrafted birchwood coasters. Flip to Forest Green when you welcome someone asking to share your table or study together. Flip to Amber when you are in deep flow and need zero interruptions. Students love this barrier-free way to connect without awkwardness.'
  },
  {
    icon: 'Lending',
    title: 'The Student Tool Lending Library',
    tagline: 'Forgot your charger or mouse? Borrow ours for $0',
    description: 'Check out USB-C fast chargers, magnetic iPad styluses, mechanical keyboards, noise-dampening over-ear headphones, and book page-holders at the barista bar with any student ID. Eliminates the stress of dying laptop batteries in the middle of a paper.'
  },
  {
    icon: 'NightShift',
    title: '7 PM "Night Owl" Atmosphere Shift',
    tagline: 'From bright productivity hub to cozy evening study lounge',
    description: 'At 7:00 PM daily, overhead lighting fades to 2200K amber glow, playlists transition to low-tempo ambient lo-fi vinyl, and our menu shifts to warm herbal adaptogens, spiced decaf brews, and midnight sourdough grilled cheese for late-night scholars.'
  },
  {
    icon: 'Community',
    title: 'Textbook & Dorm Plant Barter Wall',
    tagline: 'Free circular exchange powered by students',
    description: 'Drop an old syllabus book or a rooted monstera cutting, take whatever you need. Over 800 textbooks have circulated through our shelves without a single dollar spent by students.'
  }
];

export const ECO_INITIATIVES = [
  {
    title: '100% Zero Single-Use Cup Policy',
    stat: '38,000+',
    statLabel: 'Paper cups diverted annually',
    description: 'We do not stock disposable paper cups. Customers either bring their own tumbler for a 15% discount, or borrow a sanitized stainless steel or amber glass tumbler using our $2 tap deposit (fully returned anywhere on campus).'
  },
  {
    title: 'Oat Milk On Tap System',
    stat: '85%',
    statLabel: 'Carton packaging reduction',
    description: 'Instead of opening hundreds of single-use Tetra Paks daily, our organic oat milk is delivered in reusable stainless steel kegs and poured straight from chilled counter draft taps.'
  },
  {
    title: 'Dorm Plant Fertilizer Station',
    stat: '1.2 Tons',
    statLabel: 'Spent coffee grounds repurposed',
    description: 'Daily espresso pucks are dehydrated and packaged into free paper seed bags for students to enrich dorm houseplants and campus garden plots. Zero organic waste enters landfill.'
  },
  {
    title: 'Rescued Pastry "Second Chance" Shelf',
    stat: 'Zero',
    statLabel: 'Food thrown away at close',
    description: 'At 6:30 PM, day-baked pastries drop to $1.50 or are packed into free "Night Owl" study boxes for students working past 9 PM. Any remaining bread goes to local food solidarity fridges.'
  }
];

export const BUSINESS_MODEL_PILLARS: BusinessPillar[] = [
  {
    title: 'High-Volume Student Food & Beverage',
    subtitle: 'Affordable price point driving repeatable daily routine',
    revenueShare: '54% of Total Revenue',
    description: 'Priced 20–30% below corporate chains, Kinetic Grounds achieves 2.8x higher repeat visits per student. Tight menu engineering with 75% ingredient cross-utilization maintains a solid 68% gross margin on beverages.',
    operationalSecret: 'Batch drip and draft nitro tap eliminate long barista queues; average transaction time is under 45 seconds.',
    metric: '380+ transactions daily avg.'
  },
  {
    title: 'The "Focus Club" Monthly Pass',
    subtitle: 'Predictable recurring subscription revenue',
    revenueShare: '22% of Total Revenue',
    description: 'For $19/month (or $5/day), members receive 1 daily specialty coffee, unlimited batch drip refills, 15% discount on all food, reservation access for soundproof focus pods, and high-priority 1Gbps mesh Wi-Fi.',
    operationalSecret: 'Generates predictable baseline cash flow that covers monthly rent before selling a single pastry.',
    metric: '420 active student members'
  },
  {
    title: 'Off-Peak Evening & Weekend Creative Events',
    subtitle: 'Monetizing spatial square footage after 8 PM',
    revenueShare: '16% of Total Revenue',
    description: 'After 8 PM on Thursdays through Sundays, the space hosts student indie game showcases, design portfolio reviews, creative writing workshops, and acoustic performances with ticket splits and private booking fees.',
    operationalSecret: 'Zero additional rent cost; converts empty nighttime café hours into high-margin event revenue.',
    metric: '12 paid creative events / month'
  },
  {
    title: 'Sustainable Merch & Locally Roasted Beans',
    subtitle: 'High-margin take-home retail & gift economy',
    revenueShare: '8% of Total Revenue',
    description: 'Student-designed laser-engraved stainless tumblers, ceramic mugs made in collaboration with campus art students, and 250g whole bean bags with roast dates and farmer attribution.',
    operationalSecret: 'Profit share with student artists turns the student body into proud brand ambassadors.',
    metric: '140+ tumblers sold monthly'
  }
];

export const GROWTH_STRATEGIES = [
  {
    title: 'Finals Week Midnight Refuge (24/7)',
    subtitle: 'The legend that makes students fall in love',
    description: 'During midterms and finals weeks, Kinetic Grounds extends hours to 24 hours. At midnight, staff rings a soft gong and distributes free fresh mini pancakes and chamomile teas to every studying student. This single tradition drives massive organic TikTok/Instagram word-of-mouth with zero paid ads.'
  },
  {
    title: 'Study Squad Group Multiplier',
    subtitle: 'Solving table occupancy and group acquisition',
    description: 'When 3 or more students arrive together with laptops for a group study session, the entire table receives 15% off their total bill plus a complimentary pot of botanical tea for the table.'
  },
  {
    title: 'Student Artist & Zine Residency',
    subtitle: 'Zero commission community art wall',
    description: 'Every month, 4 student artists display works on our oak gallery walls. Each piece has a direct QR code to the student’s personal digital wallet. We take 0% commission. The artists promote the cafe tirelessly to their friends and faculty.'
  },
  {
    title: 'Campus Ambassador "Coffee Token" Drops',
    subtitle: 'Peer-to-peer viral discovery',
    description: 'Ambassadors hide wooden tokens engraved with "Your next cortado is on Kinetic Grounds" in campus libraries, architecture studios, and computer science labs with clues posted to Instagram stories.'
  }
];

export const COMMUNITY_NOTES: CommunityNote[] = [
  {
    id: 'cn1',
    category: 'study-group',
    title: 'Organic Chemistry II Final Prep Group',
    author: 'Elena R.',
    major: 'Biochemistry, Junior',
    timeAgo: '45 mins ago',
    contact: 'Meet at Atelier Table 3 at 4 PM',
    badge: 'Study Group'
  },
  {
    id: 'cn2',
    category: 'project-collab',
    title: 'Need a UI/UX Designer for Campus Thrift App',
    author: 'Marcus K. & Dev P.',
    major: 'CS & CogSci',
    timeAgo: '2 hours ago',
    contact: 'We have free coffee tokens! Ping @marcus.builds',
    badge: 'Collab'
  },
  {
    id: 'cn3',
    category: 'book-barter',
    title: 'Trading "Designing Data-Intensive Apps" for Plant Cutting',
    author: 'Sora T.',
    major: 'Informatics',
    timeAgo: 'Yesterday',
    contact: 'Left on the Barter Shelf, slot B4',
    badge: 'Barter'
  },
  {
    id: 'cn4',
    category: 'creative-gig',
    title: 'Acoustic Guitarist for this Friday 8:30 PM Mini-Set',
    author: 'Amara L.',
    major: 'Music Production',
    timeAgo: 'Yesterday',
    contact: 'Sign-up on the board by counter',
    badge: 'Music'
  }
];
