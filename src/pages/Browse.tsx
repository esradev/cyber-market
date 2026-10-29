import { useState, useMemo } from 'react';
import { products } from '../data';
import { Product } from '../types';
import { Search, Bookmark, Tag, SlidersHorizontal, Star, CreditCard, Layers } from 'lucide-react';

interface BrowseProps {
  initialSearchQuery?: string;
  initialCategory?: string;
  onNavigate: (page: string, params?: any) => void;
  onToggleSave: (productId: string) => void;
  savedIds: string[];
}

export default function Browse({ initialSearchQuery = '', initialCategory = '', onNavigate, onToggleSave, savedIds }: BrowseProps) {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [activeTab, setActiveTab] = useState<'همه' | 'قالب' | 'افزونه' | 'ابزار' | 'کتابخانه'>(
    (initialCategory as any) || 'همه'
  );
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [minRating, setMinRating] = useState<number>(0);

  // Filter products based on state
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search text match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = query === '' || 
        product.title.toLowerCase().includes(query) ||
        (product.engTitle && product.engTitle.toLowerCase().includes(query)) ||
        product.description.toLowerCase().includes(query) ||
        product.tags.some(t => t.toLowerCase().includes(query));

      // Category tab match
      const matchesTab = activeTab === 'همه' || product.type === activeTab;

      // Dropdown category filter if selected
      const matchesCategory = selectedCategory === '' || product.type === selectedCategory;

      // Price filter match
      const matchesPrice = maxPrice === null || 
        (typeof product.price === 'number' && product.price <= maxPrice) ||
        (product.price === 'رایگان' && maxPrice >= 0);

      // Rating filter match
      const matchesRating = product.rating >= minRating;

      return matchesSearch && matchesTab && matchesCategory && matchesPrice && matchesRating;
    });
  }, [searchQuery, activeTab, selectedCategory, maxPrice, minRating]);

  const handleTabClick = (tab: 'همه' | 'قالب' | 'افزونه' | 'ابزار' | 'کتابخانه') => {
    setActiveTab(tab);
    setSelectedCategory(''); // Reset dropdown category on tab switch
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block mb-1">_مخزن_دارایی_های_دیجیتال_نکسوس</span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">مخزن دارایی‌ها</h1>
          <p className="text-slate-400 mt-2 max-w-xl">کامپوننت‌های دیجیتال با کارایی بالا برای نسل بعدی برنامه‌های کاربردی و سیستم‌های رابط کاربری عصبی.</p>
        </div>
        <div className="flex gap-3">
          <span className="font-mono text-xs px-3 py-1.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg">کل دارایی‌ها: ۱,۴۰۲</span>
          <span className="font-mono text-xs px-3 py-1.5 bg-slate-900 text-slate-400 border border-slate-800 rounded-lg">آخرین همگام‌سازی: ۰۲:۴۴ GMT</span>
        </div>
      </div>

      {/* Sticky Filter and Advanced Search Bar */}
      <div className="sticky top-20 z-30 py-4 bg-[#05080c]/90 backdrop-blur-md">
        <div className="glass-panel p-3 rounded-xl flex flex-col lg:flex-row items-center gap-4">
          <div className="relative flex-grow w-full">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg py-3 pr-12 pl-4 text-sm text-cyan-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-all text-right"
              placeholder="جستجو در مخزن محصولات نکسوس..."
              type="text"
            />
          </div>

          <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 custom-scrollbar justify-end">
            {/* Category Dropdown Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-xs text-slate-300 font-bold hover:border-cyan-400 transition-all focus:outline-none text-right"
            >
              <option value="">همه دسته‌ها</option>
              <option value="قالب">پوسته‌ها</option>
              <option value="افزونه">افزونه‌ها</option>
              <option value="ابزار">ابزارها</option>
              <option value="کتابخانه">کتابخانه‌ها</option>
            </select>

            {/* Price Dropdown Filter */}
            <select
              onChange={(e) => {
                const val = e.target.value;
                setMaxPrice(val === '' ? null : Number(val));
              }}
              className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-xs text-slate-300 font-bold hover:border-cyan-400 transition-all focus:outline-none text-right"
            >
              <option value="">هر قیمتی</option>
              <option value="0">رایگان</option>
              <option value="50">زیر ۵۰ دلار</option>
              <option value="100">زیر ۱۰۰ دلار</option>
              <option value="150">زیر ۱۵۰ دلار</option>
            </select>

            {/* Rating Filter */}
            <select
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-xs text-slate-300 font-bold hover:border-cyan-400 transition-all focus:outline-none text-right"
            >
              <option value="0">هر امتیازی</option>
              <option value="5">امتیاز ۵ کامل</option>
              <option value="4.7">امتیاز ۴.۷+</option>
              <option value="4.5">امتیاز ۴.۵+</option>
            </select>

            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('');
                setActiveTab('همه');
                setMaxPrice(null);
                setMinRating(0);
              }}
              className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-400 hover:text-cyan-400 transition-all flex items-center justify-center flex-shrink-0"
              title="پاک کردن فیلترها"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Categories Tab Row */}
      <div className="flex border-b border-slate-800 overflow-x-auto custom-scrollbar">
        {(['همه', 'قالب', 'افزونه', 'ابزار', 'کتابخانه'] as const).map((tab) => {
          const isSelected = activeTab === tab;
          const displayNames = {
            همه: '_همه_دارایی‌ها',
            قالب: '_پوسته‌ها',
            افزونه: '_افزونه‌ها',
            ابزار: '_ابزارها',
            کتابخانه: '_کتابخانه‌ها'
          };
          return (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-8 py-4 font-mono text-xs tracking-widest transition-all border-b-2 whitespace-nowrap ${
                isSelected 
                  ? 'text-cyan-400 border-cyan-400 font-bold active-glow' 
                  : 'text-slate-400 border-transparent hover:text-cyan-300'
              }`}
            >
              {displayNames[tab]}
            </button>
          );
        })}
      </div>

      {/* Asset Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 glass-panel rounded-xl border-dashed border-slate-800">
          <p className="text-slate-400 text-lg">هیچ دارایی دیجیتالی با فیلترهای اعمال‌شده یافت نشد.</p>
          <button 
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('');
              setActiveTab('همه');
              setMaxPrice(null);
              setMinRating(0);
            }}
            className="mt-4 text-cyan-400 font-bold hover:underline"
          >
            بازنشانی فیلترها
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const isSaved = savedIds.includes(product.id);
            // Handle unique hybrid layout on some items to create a gorgeous visual balance (e.g., figma mega kit can span 2 columns)
            const isMega = product.id === 'cyber-ui-mega-kit';
            
            return (
              <div 
                key={product.id}
                className={`glass-panel group rounded-xl overflow-hidden flex flex-col border border-slate-800 hover:border-cyan-400/20 hover:shadow-[0_0_20px_rgba(0,242,255,0.08)] transition-all duration-300 ${
                  isMega ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Product Image and price tag */}
                <div className={`relative overflow-hidden ${isMega ? 'aspect-[2/1] md:aspect-[21/9] lg:aspect-video' : 'aspect-video'}`}>
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                    alt={product.title}
                    src={product.image}
                    onClick={() => onNavigate('detail', { id: product.id })}
                  />
                  <div className="absolute top-3 right-3 bg-slate-950/90 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded font-mono text-cyan-400 font-bold text-xs">
                    {product.price === 'رایگان' ? 'رایگان' : `$${product.price}`}
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div 
                      onClick={() => onNavigate('detail', { id: product.id })}
                      className="cursor-pointer"
                    >
                      {isMega && (
                        <span className="bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono text-[10px] px-2 py-0.5 rounded mb-2 inline-block">پیشنهاد ویژه بسته طلایی</span>
                      )}
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{product.title}</h3>
                      <p className="font-mono text-[10px] text-slate-500 mt-1 uppercase tracking-wider">{product.engTitle}</p>
                    </div>
                    <button 
                      onClick={() => onToggleSave(product.id)}
                      className={`p-2 rounded border border-slate-800 hover:border-cyan-400/30 transition-all ${
                        isSaved ? 'text-cyan-400 bg-cyan-400/10' : 'text-slate-500 hover:text-cyan-400'
                      }`}
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                    </button>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 flex-grow">{product.description}</p>

                  <div className="pt-4 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 mt-auto">
                    {/* Tech tag badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {product.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-slate-950 text-slate-500 border border-slate-900 rounded font-mono text-[10px] uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button 
                      onClick={() => onNavigate('detail', { id: product.id })}
                      className="text-xs font-mono font-bold text-cyan-400 group-hover:text-cyan-300 hover:underline border-b border-cyan-400/20 hover:border-cyan-300 pb-0.5"
                    >
                      _جزئیات_و_خرید
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
