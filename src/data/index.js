// Central data store — used by pages and search

export const TRACKER_DATA = [
  {
    eta: 'Jun', year: '2026', quarter: 'Q2',
    class: '81 class', title: 'SDS 81 class, candy livery with original Brunswick Green roof',
    mfr: 'SDS Models', scale: 'HO', units: 10, stage: 3,
    note: 'Factory sample approved 3 May. Production commenced.',
    price: 'A$525 – 585',
  },
  {
    eta: 'Jul', year: '2026', quarter: 'Q3',
    class: '422 class', title: 'Auscision 422 class in Reverse Indian Red and Candy',
    mfr: 'Auscision Models', scale: 'HO', units: 8, stage: 2,
    note: 'Factory sample at Up Main for inspection.',
    price: 'A$589 – 639',
  },
  {
    eta: 'Aug', year: '2026', quarter: 'Q3',
    class: '44 class', title: 'Eureka 44 class Phase II, Tuscan & Russet through FreightRail',
    mfr: 'Eureka Models', scale: 'HO', units: 12, stage: 3,
    note: 'Tooling complete. First batch shipping Aug.',
    price: 'A$495 – 549',
  },
  {
    eta: 'Sep', year: '2026', quarter: 'Q3',
    class: '38 class', title: 'Eureka 3801 in original 1943 Caledonian Green, streamlined',
    mfr: 'Eureka Models', scale: 'HO', units: 1, stage: 4,
    note: 'On the water. ETA Port Botany week of 22 Sep.',
    price: 'A$1,395',
  },
  {
    eta: 'Q4', year: '2026', quarter: 'Q4',
    class: '86 class', title: 'Casula 86 class, Indian Red with grey roof and original buffers',
    mfr: 'Casula Hobbies', scale: 'HO', units: 6, stage: 1,
    note: 'CADs signed off. Tooling commenced March.',
    price: 'A$695',
  },
  {
    eta: 'Q1', year: '2027', quarter: 'Q1',
    class: '42 class', title: 'Trainorama 42 class, six road numbers in Indian Red and Tuscan',
    mfr: 'Trainorama (revived)', scale: 'HO', units: 6, stage: 1,
    note: 'Project announced. Pre-orders open 1 June.',
    price: 'A$469 – 519',
  },
  {
    eta: 'Q2', year: '2027', quarter: 'Q2',
    class: '48 class', title: 'IDR Models 48 class, Series 1 through Series 5 variants',
    mfr: 'IDR Models', scale: 'HO', units: 14, stage: 0,
    note: 'Interest gauge only. Pre-orders not yet open.',
    price: 'TBA',
  },
  {
    eta: 'Q3', year: '2027', quarter: 'Q3',
    class: '421 class', title: 'Austrains NEO 421 class, two-tone green, factory-correct windscreens',
    mfr: 'Austrains NEO', scale: 'HO', units: 5, stage: 0,
    note: 'Announced; awaiting confirmation of run size.',
    price: 'TBA',
  },
]

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

export const NEW_PRODUCTS = [
  { road: '422.6', livery: 'Reverse Indian Red', price: 'A$639', stock: 'in', class: '422 class', mfr: 'Auscision Models' },
  { road: '422.1', livery: 'Indian Red, original delivery', price: 'A$619', stock: 'in', class: '422 class', mfr: 'Auscision Models' },
  { road: '42212', livery: 'Candy livery, freight pool', price: 'A$639', stock: 'pre', eta: 'Q3', class: '422 class', mfr: 'Auscision Models' },
  { road: '42220', livery: 'FreightCorp blue', price: 'A$639', stock: 'low', class: '422 class', mfr: 'Auscision Models' },
  { road: '42221', livery: 'Pacific National', price: 'A$649', stock: 'out', class: '422 class', mfr: 'Auscision Models' },
]

export const CLASS_INDEX = [
  { n: '38', sub: 'Pacific, steam', era: '1943–1969', count: 12 },
  { n: '42', sub: 'Diesel-electric', era: '1955–1986', count: 9 },
  { n: '421', sub: 'Diesel-electric', era: '1965–1985', count: 7 },
  { n: '422', sub: 'Diesel-electric', era: '1969–', count: 14 },
  { n: '81', sub: 'Diesel-electric', era: '1982–', count: 22 },
  { n: '86', sub: 'Electric', era: '1983–2002', count: 18 },
]

// ─── Search index ───────────────────────────────────────────────────────────

const SEARCH_INDEX = [
  // New products
  ...NEW_PRODUCTS.map(p => ({
    type: 'new',
    title: `${p.mfr} #${p.road} — ${p.livery}`,
    meta: `${p.class} · HO · ${p.price}`,
    page: 'product-new',
    keywords: [p.road, p.livery, p.mfr, p.class, 'new', 'ho'].join(' ').toLowerCase(),
  })),

  // Marketplace
  ...MARKETPLACE_ITEMS.map(m => ({
    type: 'used',
    title: m.title,
    meta: `${m.class} · ${m.grade} · ${m.price}`,
    page: 'product-used',
    keywords: [m.road, m.title, m.mfr, m.class, m.grade, 'used', 'secondhand', 'ho', m.seller].join(' ').toLowerCase(),
  })),

  // Pre-orders
  ...TRACKER_DATA.map(r => ({
    type: 'preorder',
    title: r.title,
    meta: `${r.class} · ${r.mfr} · ${r.eta} ${r.year} · ${r.price}`,
    page: 'tracker',
    keywords: [r.class, r.title, r.mfr, r.scale, 'pre-order', 'preorder', 'upcoming'].join(' ').toLowerCase(),
  })),

  // Class index
  ...CLASS_INDEX.map(c => ({
    type: 'class',
    title: `${c.n} class — ${c.sub}`,
    meta: `${c.era} · ${c.count} liveries in stock`,
    page: 'home',
    keywords: [`${c.n} class`, c.sub, c.era, 'class', 'index'].join(' ').toLowerCase(),
  })),
]

export function search(query) {
  const q = query.toLowerCase().trim()
  if (!q || q.length < 2) return []
  return SEARCH_INDEX.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.meta.toLowerCase().includes(q) ||
    item.keywords.includes(q) ||
    item.keywords.split(' ').some(w => w.startsWith(q))
  ).slice(0, 12)
}
