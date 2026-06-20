// Central data store — real Auscision Models HO catalogue (first 10 locomotives)
// migrated from auscisionmodels.com.au. All prices AUD, exclusive of GST.

// ─── Full product catalogue ───────────────────────────────────────────────────
// status:  'in-stock' | 'production' | 'pre-order'
// stage:   tracker stage index — 0 Announced · 1 Confirmed · 2 Sample · 3 Production · 4 Shipping · 5 Arrived

export const PRODUCTS = [
  {
    id: '45-class',
    class: '45 Class', state: 'NSW',
    title: 'Auscision 45 Class, NSWGR Indian Red through SRA Candy',
    mfr: 'Auscision Models', scale: 'HO', era: 'Diesel-electric',
    dcPrice: 350, soundPrice: 485,
    status: 'in-stock', stage: 5, eta: 'Available now', quarter: '—', year: '2024',
    roadNumbers: ['4501', '4502', '4503', '4505', '4510', '4519', '4524', '4531', '4537', '4540'],
    units: 39,
    liveries: [
      { road: '4501', livery: 'NSWGR Indian Red (1970s)', stock: 'in' },
      { road: '4519', livery: 'SRA Candy, grey roof', stock: 'in' },
      { road: '4524', livery: 'SRA Red Terror', stock: 'low' },
      { road: '4537', livery: 'Freight Rail Dark Blue', stock: 'in' },
      { road: '4540', livery: 'Silverton blue/yellow', stock: 'out' },
    ],
    dcc: 'ESU LokSound 5 · 21-pin · Vandersound twin speaker',
    note: 'In stock now. Mixed availability across road numbers.',
    desc: 'A ready-to-run HO model of the NSWGR 45 Class diesel-electric, with an ABS body, highly detailed underframe, blackened metal wheels, metal knuckle couplers, brass horns and etched details. Five-pole skew-wound motor with twin flywheels and all-wheel drive and pickup. Offered across the full sweep of liveries the class wore, from NSWGR Indian Red through SRA Candy, Freight Rail blue, Patrick and Silverton.',
  },
  {
    id: '421-class',
    class: '421 Class', state: 'NSW',
    title: 'Auscision 421 Class, Indian Red with Red Lining',
    mfr: 'Auscision Models', scale: 'HO', era: 'Diesel-electric',
    dcPrice: 350, soundPrice: 485,
    status: 'in-stock', stage: 5, eta: 'Available now', quarter: '—', year: '2024',
    roadNumbers: ['42101', '42102', '42103', '42104', '42105', '42106', '42107', '42108', '42109', '42110'],
    units: 10,
    liveries: [
      { road: '42101', livery: 'NSWGR Indian Red with Red Lining', stock: 'in' },
      { road: '42104', livery: 'NSWGR Reverse', stock: 'in' },
      { road: '42102', livery: 'SRA Candy', stock: 'in' },
      { road: '42103', livery: 'QR National', stock: 'in' },
      { road: '42107', livery: 'Aurizon', stock: 'low' },
      { road: '42109', livery: 'Northern Rivers Railroad', stock: 'out' },
    ],
    dcc: 'ESU LokSound 5 · 21-pin · EMD 16-567C sound file',
    note: 'In stock now. Most road numbers available.',
    desc: 'Delivered to the NSWGR from December 1965, these 1800hp (1340kW) locomotives worked the south of the state for two decades on passenger and goods trains, with very few external modifications through public ownership. Auscision\'s HO model captures the class across its full livery history, withdrawn 1986–1987. DCC Sound versions carry the prototypical EMD 16-567C engine, air horns and brake effects.',
  },
  {
    id: 'nr-class',
    class: 'NR Class', state: 'National',
    title: 'Auscision NR Class, National Rail to Indian Pacific & The Ghan',
    mfr: 'Auscision Models', scale: 'HO', era: 'Diesel-electric',
    dcPrice: 335, soundPrice: 465,
    status: 'in-stock', stage: 5, eta: 'Available now', quarter: '—', year: '2024',
    roadNumbers: ['NR40', 'NR4', 'NR22', 'NR100', 'NR11', 'NR98', 'NR107', 'NR14', 'NR34'],
    units: 47,
    liveries: [
      { road: 'NR40', livery: "National Rail with 'The Ghan' logo, Orange/Grey", stock: 'in' },
      { road: 'NR11', livery: 'Pacific National (5 Stars) Blue/Yellow', stock: 'low' },
      { road: 'NR14', livery: 'Pacific National (Real Trains) Blue/Yellow', stock: 'low' },
      { road: 'NR74', livery: 'The Ghan (MK1) Red/Silver', stock: 'out' },
      { road: 'NR26', livery: 'Indian Pacific (MK1) Blue/Yellow', stock: 'out' },
    ],
    dcc: 'ESU LokSound 5 · 21-pin · GE 7FDL-16 sound file · twin speakers',
    note: 'In stock now. 47 variations across 15 liveries; many sold out.',
    desc: 'The most accurate and highly detailed ready-to-run NR Class available, with a heavy die-cast chassis and over 300 separately applied parts including metal etched mirrors and grilles, separately applied air hoses and MU cables. Five-pole skew-wound motor with twin brass flywheels, all-wheel drive, operating LED headlights, marker lights, ditch lights and a fuel-tank gauge light. Offered across National Rail, Trailerail, SeaTrain, SteelLink, The Ghan, Indian Pacific, Southern Spirit, Pacific National and Great Southern liveries.',
  },
  {
    id: 'nr-class-rap',
    class: 'NR Class', state: 'National',
    title: 'Auscision NR34 Pacific National, RAP Livery',
    mfr: 'Auscision Models', scale: 'HO', era: 'Diesel-electric',
    dcPrice: 350, soundPrice: 485,
    status: 'in-stock', stage: 5, eta: 'Available now', quarter: '—', year: '2026',
    roadNumbers: ['NR34'],
    units: 1,
    liveries: [
      { road: 'NR34', livery: 'Pacific National RAP, Blue/Yellow', stock: 'in' },
    ],
    dcc: 'ESU LokSound 5 · 21-pin · GE 7FDL-16 · Kockum Sonics 5-chime horn',
    note: 'Available now. Released March 2026.',
    desc: 'A single-road-number release of NR34 in the Pacific National RAP livery. The most accurate and highly detailed ready-to-run NR Class available, with a heavy die-cast chassis, over 300 separately applied parts, operating LED lighting and a five-pole motor. DCC Sound versions carry prototypical GE 7FDL-16 engine sounds with a Kockum Sonics 5-chime air horn.',
  },
  {
    id: '44-class-mk2',
    class: '44 Class', state: 'NSW',
    title: 'Auscision 44 Class MK2, Indian Red through Freight Rail',
    mfr: 'Auscision Models', scale: 'HO', era: 'Diesel-electric',
    dcPrice: 350, soundPrice: 485,
    status: 'production', stage: 3, eta: 'Jun', quarter: 'Q2', year: '2026',
    roadNumbers: ['4463', '4464', '4466', '4468', '4469', '4470', '4471', '4474', '4475', '4479', '4480'],
    units: 11,
    liveries: [
      { road: '4463', livery: 'Indian Red with Red Lining', stock: 'pre' },
      { road: '4470', livery: 'NSWGR Reverse', stock: 'pre' },
      { road: '4464', livery: 'SRA Candy', stock: 'pre' },
      { road: '4469', livery: 'SRA Red Terror', stock: 'pre' },
      { road: '4480', livery: 'Freight Rail Dark Blue', stock: 'pre' },
    ],
    dcc: 'ESU LokSound 5 · 21-pin · Auscision twin-speaker enclosure',
    note: 'In production. Expected Q2 2026. Pre-orders closed.',
    desc: 'The most accurate and highly detailed 44 Class available, MK2 covers road numbers 4463–4480 across Indian Red, Austerity, Reverse, Candy, Red Terror and Freight Rail liveries. Ready-to-run with plastic body, die-cast chassis, all-wheel drive, operating LED lights and highly detailed components.',
  },
  {
    id: '44-class-mk3',
    class: '44 Class', state: 'NSW',
    title: 'Auscision 44 Class MK3, Red Terror, Grey Ghost & SSR',
    mfr: 'Auscision Models', scale: 'HO', era: 'Diesel-electric',
    dcPrice: 350, soundPrice: 485,
    status: 'production', stage: 3, eta: 'Jun', quarter: 'Q2', year: '2026',
    roadNumbers: ['4482', '4483', '4484', '4485', '4488', '4491', '4492', '4499', '44100'],
    units: 11,
    liveries: [
      { road: '4488', livery: 'Indian Red with Red Lining', stock: 'pre' },
      { road: '4484', livery: 'Reverse, white L7, silver pilots', stock: 'pre' },
      { road: '4492', livery: 'Candy, grey roof, white L7', stock: 'pre' },
      { road: '4499', livery: 'Grey Ghost', stock: 'pre' },
      { road: '4483', livery: 'SSR yellow/black', stock: 'pre' },
    ],
    dcc: 'ESU LokSound 5 · 21-pin · Auscision twin-speaker enclosure',
    note: 'In production. Expected Q2 2026. Pre-orders closed.',
    desc: 'The MK3 run of the 44 Class covers the later road numbers 4482–44100, including the sought-after Grey Ghost and SSR yellow/black schemes alongside Indian Red, Reverse, Candy, Red Terror and Freight Rail. Ready-to-run, all-wheel drive, with extensive factory detailing.',
  },
  {
    id: '49-class',
    class: '49 Class', state: 'NSW',
    title: 'Auscision 49 Class, Indian Red, Candy & SSR',
    mfr: 'Auscision Models', scale: 'HO', era: 'Diesel-electric',
    dcPrice: 310, soundPrice: 445,
    status: 'pre-order', stage: 1, eta: 'Jul', quarter: 'Q3', year: '2026',
    roadNumbers: ['4901', '4905', '4907', '4908', '4910', '4913', '4916', '4918'],
    units: 20,
    liveries: [
      { road: '4901', livery: 'NSWGR Indian Red', stock: 'pre' },
      { road: '4905', livery: 'SRA Candy', stock: 'pre' },
      { road: '4910', livery: 'Candy Terror', stock: 'pre' },
      { road: '4908', livery: '3801 Limited', stock: 'pre' },
      { road: '4904', livery: 'SSR', stock: 'pre' },
    ],
    dcc: 'ESU LokSound 5 · 21-pin · EMD 8-567C sound file',
    note: 'In development. Expected mid-2026. Pre-orders open.',
    desc: '20 body versions across 11 liveries, from NSWGR Indian Red and Candy through Freight Rail, FreightCorp, 3801 Limited, CFCLA and SSR. Five-pole skew-wound motor with twin brass flywheels, all-wheel drive, operating LED lights, scale metal couplers, etched brass details and highly detailed bogies.',
  },
  {
    id: 'a-class',
    class: 'A Class', state: 'VIC',
    title: 'Auscision A Class, V/Line Orange/Grey to Pacific National',
    mfr: 'Auscision Models', scale: 'HO', era: 'Diesel-electric',
    dcPrice: 310, soundPrice: 445,
    status: 'pre-order', stage: 1, eta: 'Jul', quarter: 'Q3', year: '2026',
    roadNumbers: ['A60', 'A62', 'A66', 'A70', 'A71', 'A73', 'A77', 'A78', 'A79', 'A81', 'A85'],
    units: 23,
    liveries: [
      { road: 'A60', livery: 'V/Line Orange/Grey (Sir Harold Clapp)', stock: 'pre' },
      { road: 'A66', livery: 'Australian Bicentenary Green/Gold', stock: 'pre' },
      { road: 'A70', livery: 'V/Line Pass MK2 Red/White/Blue', stock: 'pre' },
      { road: 'A78', livery: 'Freight Australia Green/Yellow', stock: 'pre' },
      { road: 'A71', livery: 'Pacific National Green/Yellow', stock: 'pre' },
    ],
    dcc: 'ESU LokSound 5 · 21-pin · Vandersound twin speaker',
    note: 'Pre-orders close 30 June 2026. Expected mid-2026.',
    desc: 'A complete rebuild of a number of Victorian Railways B Class locomotives — the original GM 16-cylinder 567B engine replaced with a turbo-charged EMD 12-cylinder 645E3B producing 2250HP for traction, an 18% increase in continuous tractive effort. 23 variants across V/Line, Freight Australia, Pacific National and SSR liveries.',
  },
  {
    id: 'an-class',
    class: 'AN Class', state: 'SA',
    title: 'Auscision AN Class, Australian National to The Ghan',
    mfr: 'Auscision Models', scale: 'HO', era: 'Diesel-electric',
    dcPrice: 310, soundPrice: 445,
    status: 'pre-order', stage: 1, eta: 'Aug', quarter: 'Q3', year: '2026',
    roadNumbers: ['AN1', 'AN2', 'AN3', 'AN4', 'AN5', 'AN6', 'AN7', 'AN8', 'AN9', 'AN11'],
    units: 21,
    liveries: [
      { road: 'AN4', livery: 'Australian National Green/Yellow', stock: 'pre' },
      { road: 'AN1', livery: 'National Rail Orange/Grey', stock: 'pre' },
      { road: 'AN5', livery: 'Pacific National Blue/Yellow with Stars', stock: 'pre' },
      { road: 'AN3', livery: 'The Ghan Red/Silver', stock: 'pre' },
    ],
    dcc: 'ESU LokSound 5 · 21-pin · EMD 16-710G3A sound file',
    note: 'In development. Expected mid-2026. Pre-orders open.',
    desc: 'Ready-to-run HO model with plastic body, die-cast chassis, detailed underframe, metal knuckle couplers, operating LED lights and a five-pole motor with all-wheel drive. Offered in Australian National, National Rail, Pacific National and The Ghan liveries.',
  },
  {
    id: 'x-class-s2',
    class: 'X Class', state: 'VIC',
    title: 'Auscision X Class (Series 2), Victorian Railways to Pacific National',
    mfr: 'Auscision Models', scale: 'HO', era: 'Diesel-electric',
    dcPrice: 295, soundPrice: 425,
    status: 'pre-order', stage: 1, eta: 'Aug', quarter: 'Q3', year: '2026',
    roadNumbers: ['X37', 'X39', 'X40', 'X42', 'X43'],
    units: 15,
    liveries: [
      { road: 'X40', livery: 'Victorian Railways 1970s', stock: 'pre' },
      { road: 'X42', livery: 'Victorian Railways 1980s', stock: 'pre' },
      { road: 'X43', livery: 'V/Line', stock: 'pre' },
      { road: 'X39', livery: 'Pacific National', stock: 'pre' },
    ],
    dcc: 'ESU LokSound 5 · 21-pin · EMD 16-645E sound file',
    note: 'In production. Expected mid-2026. Pre-orders open.',
    desc: 'Series 2 of the Victorian X Class, with an ABS body, all-wheel drive, die-cast chassis and detailed bogies. Operating LED lighting with manual override switches. Offered across Victorian Railways, V/Line, Freight Victoria, Freight Australia and Pacific National liveries.',
  },
  {
    id: 'x-class-s3',
    class: 'X Class', state: 'VIC',
    title: 'Auscision X Class (Series 3), Blue/Gold to SCT',
    mfr: 'Auscision Models', scale: 'HO', era: 'Diesel-electric',
    dcPrice: 295, soundPrice: 425,
    status: 'pre-order', stage: 1, eta: 'Sep', quarter: 'Q3', year: '2026',
    roadNumbers: ['X45', 'X46', 'X47', 'X48', 'X49', 'X50', 'X51', 'X52', 'X53', 'X54'],
    units: 19,
    liveries: [
      { road: 'X45', livery: 'Victorian Railways Blue/Gold "Edgar H Brownbill"', stock: 'pre' },
      { road: 'X49', livery: 'V/Line Orange/Grey', stock: 'pre' },
      { road: 'X46', livery: 'Freight Australia Green/Yellow', stock: 'pre' },
      { road: 'X53', livery: 'QR National Yellow/Black/Maroon', stock: 'pre' },
      { road: 'X51', livery: 'SCT Red/White/Black', stock: 'pre' },
    ],
    dcc: 'ESU LokSound 5 · 21-pin · EMD 16-645E sound file',
    note: 'In production. Expected mid-2026. Pre-orders open.',
    desc: '16 models across 8 livery schemes, including the named "Edgar H Brownbill", QR National, Pacific National and SCT. All-wheel drive and pickup, five-pole skew-wound motor with twin brass flywheels, heavy die-cast chassis, RP25-110 blackened metal disc wheels and highly detailed bogies.',
  },
  {
    id: '48-class',
    class: '48 Class', state: 'NSW',
    title: 'Auscision 48 Class, 27 body versions across 23 liveries',
    mfr: 'Auscision Models', scale: 'HO', era: 'Diesel-electric',
    dcPrice: 310, soundPrice: 445,
    status: 'pre-order', stage: 0, eta: 'Q1', quarter: 'Q1', year: '2027',
    roadNumbers: ['4808', '4832', '4835', '4859', '48100', '48125', '48141', '48163', '48205'],
    units: 27,
    liveries: [
      { road: '4835', livery: 'NSWGR Indian Red', stock: 'pre' },
      { road: '4832', livery: 'NSWGR Reverse', stock: 'pre' },
      { road: '4808', livery: 'SRA Candy, red roof, yellow L7', stock: 'pre' },
      { road: '4889', livery: 'Pacific National Blue/Yellow', stock: 'pre' },
      { road: '48205', livery: 'GrainCorp "Wiradjuri Warrior"', stock: 'pre' },
    ],
    dcc: 'ESU LokSound 5 · 21-pin · ALCO 6-251B sound file',
    note: 'In development. Expected 2027. Pre-orders open.',
    desc: '27 different body versions tooled across 23 liveries — the most comprehensive 48 Class to date. Five-pole skew-wound motor with twin brass flywheels, detailed cab interiors with painted figures, etched metal details and laser-sharp factory printing. Liveries span NSWGR, SRA Candy, Red Terror, Freight Rail, FreightCorp, Pacific National, GrainCorp, RailCorp and more.',
  },
]

// ─── Derived views ─────────────────────────────────────────────────────────────

export const IN_STOCK = PRODUCTS.filter(p => p.status === 'in-stock')

const STAGE_NOTE = {
  0: 'Announced', 1: 'Confirmed', 2: 'Factory sample', 3: 'In production', 4: 'Shipping', 5: 'Arrived',
}

export const TRACKER_DATA = PRODUCTS
  .filter(p => p.status !== 'in-stock')
  .map(p => ({
    eta: p.eta, year: p.year, quarter: p.quarter,
    class: p.class, title: p.title, mfr: p.mfr, scale: p.scale,
    units: p.units, stage: p.stage, note: p.note,
    price: `A$${p.dcPrice} – ${p.soundPrice}`,
  }))

// The product detail template renders the headline in-stock 421 Class.
export const FEATURED_NEW = PRODUCTS.find(p => p.id === '421-class')

export const CLASS_INDEX = (() => {
  const seen = new Map()
  for (const p of PRODUCTS) {
    if (!seen.has(p.class)) {
      const n = p.class.replace(/\s*class/i, '')
      seen.set(p.class, { n, sub: `${p.state} · ${p.era}`, mfr: p.mfr, count: 0, liveries: 0 })
    }
    const e = seen.get(p.class)
    e.count += 1
    e.liveries += p.liveries.length
  }
  return [...seen.values()]
})()

// ─── Second-hand marketplace (demo content, kept as a feature showcase) ─────────

export const MARKETPLACE_ITEMS = [
  {
    class: '38 class', title: 'Trainorama 3813, NSWGR Black with sloping smokebox',
    mfr: 'Trainorama (2014 run) · HO', grade: 'Near Mint',
    box: 'Original box, instructions, decoder fitted',
    scale: 'HO', price: 'A$575', seller: 'Consigned · Hornsby NSW', road: '3813',
  },
  {
    class: '42 class', title: 'Eureka 4201 Tuscan & Russet, sound-fitted',
    mfr: 'Eureka Models (2018) · HO', grade: 'Mint',
    box: 'As new, run twice on rolling road',
    scale: 'HO', price: 'A$720', seller: 'Private · Newcastle', road: '4201',
  },
  {
    class: '421 class', title: 'Austrains NEO 42101, Candy livery — body shell only',
    mfr: 'Austrains NEO (2019) · HO', grade: 'Project',
    box: 'Body, no chassis, missing handrails (LH)',
    scale: 'HO', price: 'A$95', seller: 'Consigned · estate, Lithgow', road: '42101',
  },
  {
    class: '44 class', title: 'Trainorama 4490, FreightCorp blue',
    mfr: 'Trainorama (2012) · HO', grade: 'Used',
    box: 'No box, light running marks on wheels',
    scale: 'HO', price: 'A$240', seller: 'Private · Sydney', road: '4490',
  },
]

// ─── Search index ───────────────────────────────────────────────────────────────

const SEARCH_INDEX = [
  ...PRODUCTS.map(p => ({
    type: p.status === 'in-stock' ? 'new' : 'preorder',
    title: p.title,
    meta: `${p.class} · ${p.scale} · A$${p.dcPrice} – ${p.soundPrice} · ${STAGE_NOTE[p.stage]}`,
    page: p.status === 'in-stock' ? 'product-new' : 'tracker',
    keywords: [
      p.class, p.title, p.mfr, p.scale, p.state, p.status,
      ...p.roadNumbers, ...p.liveries.map(l => l.livery),
    ].join(' ').toLowerCase(),
  })),

  ...MARKETPLACE_ITEMS.map(m => ({
    type: 'used',
    title: m.title,
    meta: `${m.class} · ${m.grade} · ${m.price}`,
    page: 'product-used',
    keywords: [m.road, m.title, m.mfr, m.class, m.grade, 'used', 'secondhand', 'ho', m.seller].join(' ').toLowerCase(),
  })),

  ...CLASS_INDEX.map(c => ({
    type: 'class',
    title: `${c.n} Class — ${c.sub}`,
    meta: `${c.mfr} · ${c.count} run${c.count > 1 ? 's' : ''} · ${c.liveries} liveries`,
    page: 'home',
    keywords: [`${c.n} class`, c.sub, c.mfr, 'class', 'index'].join(' ').toLowerCase(),
  })),
]

export function search(query) {
  const q = query.toLowerCase().trim()
  if (!q || q.length < 2) return []
  // Match on title and keywords only — never on the display `meta`, which
  // carries prices whose digits would cause false hits (e.g. "48" in "$485").
  return SEARCH_INDEX.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.keywords.includes(q) ||
    item.keywords.split(/\s+/).some(w => w.startsWith(q))
  ).slice(0, 12)
}
