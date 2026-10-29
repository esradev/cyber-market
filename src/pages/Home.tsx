import React from 'react';
import { products } from '../data';
import { ShieldCheck, Palette, Cpu, Play, ArrowLeft, Star, TrendingUp, CheckCircle, Award } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string, params?: any) => void;
  onSearch: (query: string) => void;
}

export default function Home({ onNavigate, onSearch }: HomeProps) {
  const featuredProduct = products.find(p => p.id === 'vanta-horizon') || products[0];
  const nexusModal = products.find(p => p.id === 'nexus-modal-engine') || products[7];
  const dataStream = products.find(p => p.id === 'data-stream-vis') || products[8];

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const q = formData.get('query') as string;
    onSearch(q);
    onNavigate('browse');
  };

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[680px] flex flex-col items-center justify-center text-center overflow-hidden pt-12">
        <div className="relative z-10 max-w-5xl mx-auto space-y-6 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">نسخه v4.0 فعال و پایدار</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-white">
            آینده توسعه <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 via-purple-400 to-cyan-300">وردپرس</span> و وب مدرن
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            استقرار دارایی‌های دیجیتال با کارایی فوق‌العاده در چند ثانیه. پوسته‌های فناوری اطلاعات پیشرفته، افزونه‌های ماژولار و بلوک‌های کد مهندسی‌شده برای اینترنت فردا.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto w-full group pt-2">
            <div className="flex items-center bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-xl p-2 focus-within:border-cyan-400 transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,242,255,0.15)]">
              <input
                name="query"
                className="bg-transparent border-none focus:outline-none w-full px-4 text-base text-cyan-100 placeholder:text-slate-500 text-right"
                placeholder="جستجوی ابزارها، پوسته‌ها و افزونه‌ها در نکسوس..."
                type="text"
              />
              <kbd className="hidden md:inline-flex h-8 items-center gap-1 rounded bg-slate-800 px-3 font-mono text-xs text-slate-400 select-none mx-2">
                <span className="text-[10px]">Ctrl</span>+K
              </kbd>
              <button type="submit" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2 flex-shrink-0">
                <span>_جستجو</span>
              </button>
            </div>
          </form>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button 
              onClick={() => onNavigate('browse')}
              className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all flex items-center gap-2"
            >
              <span>_کاوش_محصولات</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onNavigate('collections')}
              className="border border-purple-400 text-purple-300 hover:bg-purple-400/10 px-8 py-3.5 rounded-lg font-bold transition-all"
            >
              _بسته‌های_پیشنهادی
            </button>
          </div>
        </div>

        {/* Parallax/3D Abstract Image Graphic */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full max-w-5xl aspect-[21/9] pointer-events-none opacity-40 z-0">
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080c] via-transparent to-transparent z-10"></div>
            <img 
              className="w-full h-full object-contain"
              alt="Digital Asset Network representation"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0KduK1iKmLOA63vNrHC_Amcl3iQyyve-BG7LkL2iM0eisHPnnpQiT2VFuScSO5t4EtfHnZssDGemPqoMnTv9QIpyLTAp0pcsT9VqvKGoVLPKJzejg3ONHoknlZuB1XLqtk_iNWHt98dtAuIbTSlPWWaYc-XBX0WGw-oewpaRD85h3iFrFG6syd-g-uNt5_4Ucw80RGKlUXWSrzN4329TpgXlF5MhirplyjbJXNXfZq1xgpO3hEMRH"
            />
          </div>
        </div>
      </section>

      {/* Categories Cards */}
      <section className="px-4 py-8 relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Themes */}
          <div className="glass-panel group p-8 rounded-xl transition-all duration-500 hover:border-cyan-400/40 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 left-0 p-8 opacity-5 group-hover:opacity-15 transition-opacity pointer-events-none">
              <Palette className="w-32 h-32 text-cyan-400" />
            </div>
            <div className="bg-cyan-500/10 text-cyan-400 p-3 rounded-lg w-fit mb-6">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">پوسته‌های وردپرس</h3>
            <p className="text-slate-400 leading-relaxed mb-6">فریم‌ورک‌های سبک‌وزن با کارایی بالا و بهینه‌سازی اختصاصی برای موتورهای جستجو.</p>
            <button 
              onClick={() => onNavigate('browse', { category: 'قالب' })}
              className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
            >
              <span>مشاهده پوسته‌ها</span>
              <span className="font-mono">←</span>
            </button>
          </div>

          {/* Plugins */}
          <div className="glass-panel group p-8 rounded-xl transition-all duration-500 hover:border-purple-400/40 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 left-0 p-8 opacity-5 group-hover:opacity-15 transition-opacity pointer-events-none">
              <Cpu className="w-32 h-32 text-purple-400" />
            </div>
            <div className="bg-purple-500/10 text-purple-400 p-3 rounded-lg w-fit mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">افزونه‌های فوق‌سریع</h3>
            <p className="text-slate-400 leading-relaxed mb-6">بهینه‌سازی‌های نسل جدید، هوش مصنوعی جاسازی‌شده و ابزارهای گردش کار کارآمد.</p>
            <button 
              onClick={() => onNavigate('browse', { category: 'افزونه' })}
              className="text-purple-400 hover:text-purple-300 font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
            >
              <span>مشاهده افزونه‌ها</span>
              <span className="font-mono">←</span>
            </button>
          </div>

          {/* Templates */}
          <div className="glass-panel group p-8 rounded-xl transition-all duration-500 hover:border-amber-400/40 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 left-0 p-8 opacity-5 group-hover:opacity-15 transition-opacity pointer-events-none">
              <Award className="w-32 h-32 text-amber-400" />
            </div>
            <div className="bg-amber-500/10 text-amber-400 p-3 rounded-lg w-fit mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">بسته‌ها و ابزارها</h3>
            <p className="text-slate-400 leading-relaxed mb-6">بلوک‌های طراحی پیش‌پیکربندی شده و پکیج‌های توسعه سریع برای طراحان وب.</p>
            <button 
              onClick={() => onNavigate('browse')}
              className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
            >
              <span>مشاهده پکیج‌ها</span>
              <span className="font-mono">←</span>
            </button>
          </div>
        </div>
      </section>

      {/* Top Rated Section (Bento Grid) */}
      <section className="px-4 py-8 max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h2 className="text-3xl font-black text-white mb-2 tracking-tight">محصولات برتر نکسوس</h2>
            <p className="text-slate-400">فوق‌العاده‌ترین ابزارها با برترین رتبه‌بندی‌های کیفی در بازار آبسیدین.</p>
          </div>
          <button 
            onClick={() => onNavigate('browse')}
            className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-2 transition-all font-mono"
          >
            _مشاهده_تمامی_محصولات
            <TrendingUp className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Featured Card */}
          <div className="lg:col-span-8 group relative rounded-xl overflow-hidden glass-panel h-[500px] flex flex-col justify-end">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${featuredProduct.image}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            
            <div className="relative z-10 p-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded text-xs font-mono">_ویژه_نکسوس</span>
                <div className="flex text-amber-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-white">{featuredProduct.title}</h3>
              <p className="text-slate-300 max-w-xl text-base leading-relaxed">{featuredProduct.description}</p>
              
              <div className="flex items-center gap-6 pt-2">
                <button 
                  onClick={() => onNavigate('detail', { id: featuredProduct.id })}
                  className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-6 py-2.5 rounded font-bold transition-transform active:scale-95"
                >
                  _تهیه_لایسنس
                </button>
                <span className="text-xl font-mono font-bold text-cyan-300">{featuredProduct.price === 'رایگان' ? 'رایگان' : `$${featuredProduct.price}`}</span>
              </div>
            </div>
          </div>

          {/* Secondary Stacked Items */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Item 1 */}
            <div 
              onClick={() => onNavigate('detail', { id: nexusModal.id })}
              className="flex-1 glass-panel p-4 rounded-xl group cursor-pointer border border-transparent hover:border-cyan-400/30 transition-all flex flex-col"
            >
              <div className="aspect-video bg-slate-950 rounded-lg mb-4 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={nexusModal.title}
                  src={nexusModal.image}
                />
              </div>
              <h4 className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors">{nexusModal.title}</h4>
              <div className="flex justify-between items-center mt-auto pt-2">
                <span className="text-slate-500 text-xs font-mono">{nexusModal.type} / {nexusModal.size}</span>
                <span className="text-amber-400 font-mono font-bold">{nexusModal.price === 'رایگان' ? 'رایگان' : `$${nexusModal.price}`}</span>
              </div>
            </div>

            {/* Item 2 */}
            <div 
              onClick={() => onNavigate('detail', { id: dataStream.id })}
              className="flex-1 glass-panel p-4 rounded-xl group cursor-pointer border border-transparent hover:border-cyan-400/30 transition-all flex flex-col"
            >
              <div className="aspect-video bg-slate-950 rounded-lg mb-4 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={dataStream.title}
                  src={dataStream.image}
                />
              </div>
              <h4 className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors">{dataStream.title}</h4>
              <div className="flex justify-between items-center mt-auto pt-2">
                <span className="text-slate-500 text-xs font-mono">{dataStream.type} / {dataStream.size}</span>
                <span className="text-amber-400 font-mono font-bold">{dataStream.price === 'رایگان' ? 'رایگان' : `$${dataStream.price}`}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership CTA Section */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <div className="relative w-full rounded-2xl overflow-hidden p-8 md:p-12 flex flex-col items-center text-center glass-panel neon-border shadow-[0_0_50px_rgba(0,242,255,0.05)]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
          
          <div className="bg-cyan-500/10 text-cyan-400 p-4 rounded-full w-fit mb-6">
            <Award className="w-10 h-10" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">اشتراک ویژه اعضای نکسوس</h2>
          <p className="text-slate-300 max-w-2xl text-lg mb-8 leading-relaxed">
            قفل پتانسیل کامل مارکت آبسیدین را باز کنید. با یک بار ثبت‌نام، دسترسی نامحدود به تمامی پوسته‌ها، افزونه‌ها و دارایی‌های آینده داشته باشید.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-right w-full max-w-4xl">
            <div className="flex items-start gap-3 bg-slate-900/50 p-4 rounded-lg">
              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <span className="font-bold text-white block">دانلود‌های نامحدود</span>
                <span className="text-xs text-slate-400">همیشه همه‌چیز را بدون محدودیت دانلود کنید.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3 bg-slate-900/50 p-4 rounded-lg">
              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <span className="font-bold text-white block">دسترسی پیش از موعد (بتا)</span>
                <span className="text-xs text-slate-400">تست ابزارها پیش از عرضه عمومی به بازار.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-900/50 p-4 rounded-lg">
              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <span className="font-bold text-white block">پشتیبانی اولویت‌دار جادویی</span>
                <span className="text-xs text-slate-400">پاسخ فنی تیکت‌ها کمتر از ۱۵ دقیقه در ۲۴ ساعت.</span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => onNavigate('pricing')}
            className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-10 py-4 rounded-lg font-bold hover:shadow-[0_0_30px_rgba(0,242,255,0.6)] transition-all active:scale-95"
          >
            _فعال‌سازی_اشتراک_ویژه_اکنون
          </button>
          
          <span className="mt-4 font-mono text-xs text-slate-500">شروع قیمت از ۲۹.۰۰ دلار در ماه. پرداخت امن و رمزشده.</span>
        </div>
      </section>
    </div>
  );
}
