import { useEffect, useMemo, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Search, SlidersHorizontal, X } from 'lucide-react';

import cashews from './assets/products/cashews.webp';
import almonds from './assets/products/almonds.webp';
import pistachios from './assets/products/pistachios.webp';
import raisins from './assets/products/raisins.webp';
import cardamom from './assets/products/cardamom.webp';
import cloves from './assets/products/cloves.webp';
import cashewPieces from './assets/products/cashew-pieces.webp';
import sprinkles from './assets/products/sprinkles.webp';

const categories = [
  { name: 'Nuts', count: 9 },
  { name: 'Spices', count: 7 },
  { name: 'Dried fruits', count: 6 },
  { name: 'Cake ingredients', count: 6 },
];
const packSizes = ['50g', '100g', '500g', '1kg'];
const statusLabels = { in: 'In stock', low: 'Low stock', out: 'Out of stock' };

// Demo catalog: replace this list with the products returned by your API or CMS.
const catalog = [
  { id: 1, name: 'Spicy Roasted Cashews', category: 'Nuts', subcategory: 'BESTSELLER', price: 820, status: 'in', packs: ['100g', '500g'], image: cashews, popularity: 100 },
  { id: 2, name: 'Raw Almonds', category: 'Nuts', price: 740, status: 'in', packs: ['100g', '500g', '1kg'], image: almonds, popularity: 99 },
  { id: 3, name: 'Green Pistachios', category: 'Nuts', price: 890, status: 'out', packs: ['50g', '100g', '500g'], image: pistachios, popularity: 98 },
  { id: 4, name: 'Seedless Raisins', category: 'Dried fruits', price: 360, status: 'in', packs: ['100g', '500g'], image: raisins, popularity: 97 },
  { id: 5, name: 'Ceylon Cardamom', category: 'Spices', price: 490, status: 'in', packs: ['50g', '100g'], image: cardamom, popularity: 96 },
  { id: 6, name: 'Whole Cloves', category: 'Spices', price: 380, status: 'out', packs: ['50g', '100g'], image: cloves, popularity: 95 },
  { id: 7, name: 'Baking Cashew Pieces', category: 'Cake ingredients', price: 560, status: 'in', packs: ['100g', '500g', '1kg'], image: cashewPieces, popularity: 94 },
  { id: 8, name: 'Rainbow Sprinkles', category: 'Cake ingredients', price: 290, status: 'in', packs: ['50g', '100g'], image: sprinkles, popularity: 93 },
  { id: 9, name: 'Salted Cashews', category: 'Nuts', price: 810, status: 'low', packs: ['100g', '500g'], image: cashews, popularity: 70 },
  { id: 10, name: 'Roasted Almonds', category: 'Nuts', price: 790, status: 'in', packs: ['100g', '500g'], image: almonds, popularity: 69 },
  { id: 11, name: 'Natural Pistachios', category: 'Nuts', price: 880, status: 'in', packs: ['50g', '100g'], image: pistachios, popularity: 68 },
  { id: 12, name: 'Cashew Nut Halves', category: 'Nuts', price: 720, status: 'in', packs: ['100g', '500g'], image: cashewPieces, popularity: 67 },
  { id: 13, name: 'Premium Cashews', category: 'Nuts', price: 960, status: 'in', packs: ['500g', '1kg'], image: cashews, popularity: 66 },
  { id: 14, name: 'Almond Pieces', category: 'Nuts', price: 590, status: 'low', packs: ['100g', '500g'], image: almonds, popularity: 65 },
  { id: 15, name: 'Pistachio Kernels', category: 'Nuts', price: 950, status: 'in', packs: ['50g', '100g'], image: pistachios, popularity: 64 },
  { id: 16, name: 'Cashew Crumbles', category: 'Nuts', price: 420, status: 'in', packs: ['500g', '1kg'], image: cashewPieces, popularity: 63 },
  { id: 17, name: 'Cinnamon Quills', category: 'Spices', price: 310, status: 'in', packs: ['50g', '100g'], image: cloves, popularity: 62 },
  { id: 18, name: 'Ground Cardamom', category: 'Spices', price: 570, status: 'low', packs: ['50g'], image: cardamom, popularity: 61 },
  { id: 19, name: 'Clove Powder', category: 'Spices', price: 420, status: 'in', packs: ['50g', '100g'], image: cloves, popularity: 60 },
  { id: 20, name: 'Whole Nutmeg', category: 'Spices', price: 330, status: 'in', packs: ['50g'], image: cardamom, popularity: 59 },
  { id: 21, name: 'Black Pepper', category: 'Spices', price: 390, status: 'in', packs: ['100g', '500g'], image: cloves, popularity: 58 },
  { id: 22, name: 'Star Anise', category: 'Spices', price: 350, status: 'out', packs: ['50g'], image: cardamom, popularity: 57 },
  { id: 23, name: 'Golden Raisins', category: 'Dried fruits', price: 400, status: 'in', packs: ['100g', '500g'], image: raisins, popularity: 56 },
  { id: 24, name: 'Mixed Dried Fruits', category: 'Dried fruits', price: 660, status: 'low', packs: ['100g', '500g'], image: raisins, popularity: 55 },
  { id: 25, name: 'Dried Cranberries', category: 'Dried fruits', price: 580, status: 'in', packs: ['100g'], image: raisins, popularity: 54 },
  { id: 26, name: 'Dried Apricots', category: 'Dried fruits', price: 630, status: 'in', packs: ['100g', '500g'], image: raisins, popularity: 53 },
  { id: 27, name: 'Dried Dates', category: 'Dried fruits', price: 410, status: 'in', packs: ['500g', '1kg'], image: raisins, popularity: 52 },
  { id: 28, name: 'Chocolate Sprinkles', category: 'Cake ingredients', price: 340, status: 'low', packs: ['50g', '100g'], image: sprinkles, popularity: 51 },
  { id: 29, name: 'Cake Almond Flakes', category: 'Cake ingredients', price: 620, status: 'in', packs: ['100g'], image: almonds, popularity: 50 },
  { id: 30, name: 'Baking Pistachio Pieces', category: 'Cake ingredients', price: 840, status: 'in', packs: ['50g', '100g'], image: pistachios, popularity: 49 },
  { id: 31, name: 'Fruit Cake Mix', category: 'Cake ingredients', price: 480, status: 'in', packs: ['500g'], image: raisins, popularity: 48 },
  { id: 32, name: 'Cake Topping Mix', category: 'Cake ingredients', price: 380, status: 'out', packs: ['50g', '100g'], image: sprinkles, popularity: 47 },
];

// 28 items in the reference UI: 9 nuts, 7 spices, 6 dried fruits, 6 cake ingredients.
// Use the first 8 reference items plus 20 sample products to match those totals.
const products = catalog.filter(p => ![14, 16, 19, 32].includes(p.id));
const PAGE_SIZE = 8;

function FilterPanel({ category, setCategory, statuses, toggleStatus, pack, setPack, clearFilters }) {
  return (
    <aside className="rounded-[15px] bg-[#fcfaf6] px-6 py-6 text-[#26392e] shadow-[0_0_0_1px_#d7c8b2] lg:sticky lg:top-6">
      <h2 className="mb-4 text-[14px] font-extrabold">Categories</h2>
      <div className="space-y-3.5">
        {[{ name: 'All products', count: products.length }, ...categories].map(({ name, count }) => (
          <button key={name} type="button" onClick={() => setCategory(name)} className="flex w-full items-center gap-2 text-left text-[13px]">
            <span className={`inline-flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full border ${category === name ? 'border-[#285e43] bg-[#285e43]' : 'border-[#d9cbbc]'}`}>
              {category === name && <span className="h-[5px] w-[5px] rounded-full bg-white" />}
            </span>
            <span className={`flex-1 ${category === name ? 'font-bold' : 'font-medium'}`}>{name}</span>
            <span className="text-[11px] text-[#8a8c86]">{count}</span>
          </button>
        ))}
      </div>
      <div className="my-5 h-px bg-[#e0d7c9]" />
      <h2 className="mb-4 text-[14px] font-extrabold">Availability</h2>
      <div className="space-y-3.5">
        {Object.entries(statusLabels).map(([key, label]) => (
          <label key={key} className="flex cursor-pointer items-center gap-2.5 text-[13px]">
            <input type="checkbox" checked={statuses.includes(key)} onChange={() => toggleStatus(key)} className="h-[14px] w-[14px] accent-[#285e43]" />
            {label}
          </label>
        ))}
      </div>
      <div className="my-5 h-px bg-[#e0d7c9]" />
      <h2 className="mb-4 text-[14px] font-extrabold">Pack size</h2>
      <div className="flex flex-wrap gap-2">
        {packSizes.map(size => <button type="button" aria-pressed={pack === size} key={size} onClick={() => setPack(pack === size ? '' : size)} className={`catalog-pill rounded-full px-3 py-[7px] text-xs ${pack === size ? 'active' : ''}`}>{size}</button>)}
      </div>
      {(category !== 'All products' || statuses.length > 0 || pack) && <button type="button" className="mt-5 text-xs font-bold text-[#285e43] underline underline-offset-2" onClick={clearFilters}>Clear filters</button>}
    </aside>
  );
}

function ProductCard({ product }) {
  return (
    <article className="product-card group min-w-0" tabIndex={0} aria-label={`${product.name}, from Rs. ${product.price}, ${statusLabels[product.status]}`}>
      <div className="relative aspect-[1/1.02] overflow-hidden rounded-[12px] bg-[#eadfce]">
        <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]" />
        {/* Stock chips already appear within reference product photographs. */}
      </div>
      <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.03em] text-[#d88457]">{product.subcategory ? `${product.category} · ${product.subcategory}` : product.category}</p>
      <h3 className="font-display mt-2 text-[21px] font-medium leading-[1.33] text-[#397854]">{product.name}</h3>
      <p className="mt-2 text-[14px] font-bold text-[#5b8065]">from Rs. {product.price.toLocaleString('en-LK')}</p>
    </article>
  );
}

export default function ProductCatalog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All products');
  const [statuses, setStatuses] = useState([]);
  const [pack, setPack] = useState('');
  const [sort, setSort] = useState('popular');
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);

  const toggleStatus = value => setStatuses(prev => prev.includes(value) ? prev.filter(s => s !== value) : [...prev, value]);
  const clearFilters = () => { setCategory('All products'); setStatuses([]); setPack(''); };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const result = products.filter(p =>
      (!q || `${p.name} ${p.category}`.toLowerCase().includes(q)) &&
      (category === 'All products' || p.category === category) &&
      (!statuses.length || statuses.includes(p.status)) &&
      (!pack || p.packs.includes(pack))
    );
    return result.sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'name') return a.name.localeCompare(b.name);
      return b.popularity - a.popularity;
    });
  }, [search, category, statuses, pack, sort]);

  useEffect(() => { setPage(1); }, [search, category, statuses, pack, sort]);
  const pageCount = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <main className="min-h-screen bg-[#080b09] px-5 py-12 sm:px-9 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-[1240px]">
        <header className="mb-8">
          <h1 className="font-display text-[42px] font-medium leading-tight tracking-tight text-[#397854] sm:text-[46px]">Shop all products</h1>
          <p className="mt-1 text-[14px] text-[#a8b4aa]">Freshly packed nuts, spices, dried fruits and baking essentials.</p>
        </header>

        <div className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr)_auto_auto]">
          <div className="flex h-[44px] items-center gap-3 rounded-[9px] bg-[#fcfaf6] px-4 text-[#26392e]">
            <Search size={17} strokeWidth={1.7} className="text-[#738175]" />
            <input aria-label="Search products" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products..." className="min-w-0 flex-1 bg-transparent text-[13px] outline-none placeholder:text-[#7d8a7f]" />
            {!!search && <button type="button" aria-label="Clear search" onClick={() => setSearch('')}><X size={15} /></button>}
          </div>
          <div className="relative">
            <button type="button" aria-expanded={categoryMenuOpen} onClick={() => setCategoryMenuOpen(v => !v)} className="flex h-[44px] w-full items-center justify-center gap-2 rounded-[9px] bg-[#fcfaf6] px-5 text-[13px] font-bold text-[#26392e] sm:min-w-[153px]">
              <SlidersHorizontal size={15} strokeWidth={1.8} /> {category === 'All products' ? 'All categories' : category}
            </button>
            {categoryMenuOpen && <div className="absolute right-0 z-20 mt-1 min-w-full overflow-hidden rounded-lg border border-[#ddd4c5] bg-[#fcfaf6] py-1 shadow-xl">
              {['All products', ...categories.map(c => c.name)].map(c => <button type="button" key={c} onClick={() => {setCategory(c);setCategoryMenuOpen(false);}} className="block w-full whitespace-nowrap px-4 py-2 text-left text-[13px] text-[#26392e] hover:bg-[#edf2eb]">{c}</button>)}
            </div>}
          </div>
          <label className="relative flex h-[44px] items-center gap-2 rounded-[9px] bg-[#fcfaf6] px-4 text-[13px] font-bold text-[#26392e] sm:min-w-[150px]">
            <ChevronDown size={15} strokeWidth={1.7} />
            <select aria-label="Sort products" value={sort} onChange={e => setSort(e.target.value)} className="w-full cursor-pointer appearance-none bg-transparent outline-none">
              <option value="popular">Sort: Popular</option><option value="price-asc">Price: Low to high</option><option value="price-desc">Price: High to low</option><option value="name">Name: A to Z</option>
            </select>
          </label>
        </div>

        <div className="grid gap-6 lg:grid-cols-[232px_minmax(0,1fr)]">
          <div className="lg:hidden"><button type="button" onClick={() => setFiltersOpen(v => !v)} className="flex items-center gap-2 rounded-lg border border-[#496c55] px-4 py-2 text-sm text-[#d9e7db]"><SlidersHorizontal size={16}/>{filtersOpen ? 'Hide filters' : 'Show filters'}</button></div>
          <div className={`${filtersOpen ? 'block' : 'hidden'} lg:block`}><FilterPanel {...{category, setCategory, statuses, toggleStatus, pack, setPack, clearFilters}} /></div>
          <section aria-label="Products" className="min-w-0">
            <p className="mb-5 text-[13px] text-[#a8b4aa]">Showing {visible.length} of {filtered.length} products</p>
            {visible.length ? <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-5 lg:grid-cols-3 xl:grid-cols-4">
              {visible.map(product => <ProductCard key={product.id} product={product} />)}
            </div> : <div className="rounded-xl border border-[#314838] p-10 text-center"><p className="text-lg font-semibold">No products found</p><p className="mt-2 text-sm text-[#a8b4aa]">Try another search or remove your filters.</p><button type="button" onClick={() => {setSearch('');clearFilters();}} className="mt-4 rounded-lg bg-[#285e43] px-4 py-2 text-sm font-bold">Clear all filters</button></div>}
            {pageCount > 1 && <nav aria-label="Pagination" className="mt-8 flex flex-wrap justify-center gap-2">
              <button type="button" aria-label="Previous page" disabled={page === 1} onClick={() => setPage(p => Math.max(1, p - 1))} className="catalog-pill h-9 w-9 rounded-lg disabled:opacity-50"><ChevronLeft size={16} className="mx-auto" /></button>
              {Array.from({length: pageCount}, (_, i) => i + 1).map(n => <button type="button" key={n} aria-current={page === n ? 'page' : undefined} onClick={() => setPage(n)} className={`catalog-pill h-9 w-9 rounded-lg text-xs font-bold ${page === n ? 'active' : ''}`}>{n}</button>)}
              <button type="button" aria-label="Next page" disabled={page === pageCount} onClick={() => setPage(p => Math.min(pageCount, p + 1))} className="catalog-pill h-9 w-9 rounded-lg disabled:opacity-50"><ChevronRight size={16} className="mx-auto" /></button>
            </nav>}
          </section>
        </div>
      </div>
    </main>
  );
}
