import { useState } from 'react';
import { products, reviews as globalReviews, changelog as globalChangelog } from '../data';
import { Star, ShieldCheck, Bolt, SearchCode, Monitor, Terminal, ShoppingCart, Play, CheckCircle, FileText, BadgeAlert } from 'lucide-react';

interface ProductDetailProps {
  productId?: string;
  onNavigate: (page: string, params?: any) => void;
}

export default function ProductDetail({ productId = 'quantum-flow', onNavigate }: ProductDetailProps) {
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState<'single' | 'extended'>('single');

  // Find product by id, default to quantum-flow
  const product = products.find(p => p.id === productId) || products.find(p => p.id === 'quantum-flow') || products[0];

  const handlePurchase = () => {
    setPurchaseSuccess(true);
    setTimeout(() => {
      setPurchaseSuccess(false);
    }, 4000);
  };

  // Mock stats/specs for digital items
  const specs = {
    speed: product.id === 'quantum-flow' ? '۹۹/۱۰۰' : product.id === 'vanta-horizon' ? '۹۸/۱۰۰' : '۹۵/۱۰۰',
    seo: 'کاملاً بهینه',
    response: 'ریسپانسیو',
    build: product.tags.includes('VITE') ? 'VITE / WIND' : 'WEBPACK / NPM',
    updates: '۱۲ ماه آپدیت رایگان و دسترسی به فایل‌ها'
  };

  const keyFeatures = [
    'انطباق کامل با استاندارد WCAG 2.1',
    'پشتیبانی ۱۰۰٪ از زبان‌های راست‌چین (RTL)',
    'سازگار با ویرایشگر وردپرس و المنتور',
    'امکان نصب آسان با یک کلیک (One-Click Demo)',
    'پشتیبانی کامل از چندسایتی (Multi-Site)'
  ];

  return (
    <div className="space-y-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-slate-500 font-mono text-xs">
        <span className="cursor-pointer hover:text-cyan-400" onClick={() => onNavigate('home')}>خانه</span>
        <span className="font-sans">←</span>
        <span className="cursor-pointer hover:text-cyan-400" onClick={() => onNavigate('browse')}>مخزن محصولات</span>
        <span className="font-sans">←</span>
        <span className="text-cyan-400">{product.title}</span>
      </nav>

      {/* Main product showcase grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left main column: Image and core technical features */}
        <div className="lg:col-span-8 space-y-8">
          <div className="relative group rounded-xl overflow-hidden glass-panel border border-slate-800/80 glow-cyan">
            <img 
              className="w-full h-auto object-cover max-h-[480px]" 
              alt={product.title}
              src={product.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080c] via-[#05080c]/10 to-transparent"></div>
            <div className="absolute bottom-6 right-6">
              <span className="bg-cyan-500 text-slate-950 font-mono text-[10px] font-bold px-3 py-1 rounded mb-2 inline-block">نسخه فعال v4.2.0</span>
              <h1 className="text-2xl md:text-3xl font-black text-white">{product.title}</h1>
              <p className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-wider">{product.engTitle}</p>
            </div>
          </div>

          {/* About description */}
          <div className="glass-panel p-8 rounded-xl space-y-6">
            <h3 className="text-2xl font-black text-cyan-400">مهندسی شده برای سرعت و کارایی بالا</h3>
            <p className="text-slate-300 text-base leading-relaxed">
              {product.description} این فریم‌ورک با هدف ایجاد بالاترین سرعت لود اولیه و از بین بردن تأخیر رندر کلاینت توسعه یافته است. با بهره‌گیری از تکنیک‌های نوین فشرده‌سازی دارایی‌ها، وب‌سایت شما رتبه‌های درخشانی در جی‌تی‌متریکس و گوگل لایت‌هاوس ثبت خواهد کرد.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-950/50 p-6 rounded-lg border border-slate-900">
                <h4 className="text-cyan-300 font-bold mb-2">_معماری_ماژولار_پیشرفته</h4>
                <p className="text-slate-400 text-sm leading-relaxed">تنها ماژول‌هایی را لود کنید که نیاز دارید. منطق کامپایلر نکسوس کدهای بدون استفاده را حذف کرده و اندازه لود را زیر ۱۵ کیلوبایت نگه می‌دارد.</p>
              </div>
              <div className="bg-slate-950/50 p-6 rounded-lg border border-slate-900">
                <h4 className="text-cyan-300 font-bold mb-2">_سیستم_متحرک_سخت‌افزاری</h4>
                <p className="text-slate-400 text-sm leading-relaxed">بهره‌گیری از شتاب‌دهنده‌های سخت‌افزاری گرافیکی به همراه کتابخانه GSAP جهت ارائه انیمیشن‌های روان ۶۰ فریم بر ثانیه بدون افت کارایی.</p>
              </div>
            </div>
          </div>

          {/* Changelog History */}
          <div className="glass-panel p-8 rounded-xl space-y-6">
            <h3 className="text-2xl font-black text-cyan-400">تاریخچه به‌روزرسانی‌ها</h3>
            <div className="space-y-6">
              {globalChangelog.map((item, idx) => (
                <div key={item.version} className={`border-r-2 pr-6 py-2 ${idx === 0 ? 'border-cyan-400' : 'border-slate-800'}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-white">
                      {item.version} — <span className="font-mono text-cyan-400 text-sm">"{item.codename}"</span>
                    </h4>
                    <span className="text-xs text-slate-500 font-mono">{item.date}</span>
                  </div>
                  <ul className="space-y-1 text-slate-400 text-sm">
                    {item.changes.map((change, cIdx) => (
                      <li key={cIdx}>{change}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* User Feedback & Reviews */}
          <div className="glass-panel p-8 rounded-xl space-y-6">
            <div className="flex justify-between items-end border-b border-slate-900 pb-4">
              <h3 className="text-2xl font-black text-cyan-400">نظرات و بازخوردهای کاربران</h3>
              <span className="text-xs text-slate-500 font-mono">۴۲۸ دیدگاه ثبت شده است</span>
            </div>
            
            <div className="space-y-4">
              {globalReviews.map((rev) => (
                <div key={rev.id} className="bg-slate-950/50 p-6 rounded-lg border-r-4 border-cyan-400 border border-slate-900 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-slate-800 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">
                        {rev.avatar}
                      </div>
                      <span className="text-sm font-bold text-slate-200">{rev.username}</span>
                    </div>
                    <div className="flex text-amber-400">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">"{rev.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right specs column sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Main Action Purchase Box */}
          <div className="glass-panel p-6 rounded-xl space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-slate-500 tracking-wider block uppercase">قیمت لایسنس ویژه</span>
              <p className="text-4xl font-bold font-mono text-cyan-300">
                {product.price === 'رایگان' ? 'رایگان' : `$${selectedLicense === 'single' ? product.price : (Number(product.price) * 2.5).toFixed(0)}`}
              </p>
              <p className="text-xs text-slate-400">{specs.updates}</p>
            </div>

            {/* License toggle option */}
            {product.price !== 'رایگان' && (
              <div className="grid grid-cols-2 bg-slate-950 p-1.5 rounded-lg border border-slate-900 gap-2">
                <button 
                  onClick={() => setSelectedLicense('single')}
                  className={`py-2 text-xs font-bold rounded ${selectedLicense === 'single' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                >
                  تک‌کاربره
                </button>
                <button 
                  onClick={() => setSelectedLicense('extended')}
                  className={`py-2 text-xs font-bold rounded ${selectedLicense === 'extended' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                >
                  توسعه‌دهنده (ناحدود)
                </button>
              </div>
            )}

            {purchaseSuccess ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded text-xs leading-relaxed text-right flex items-start gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>با تشکر! لایسنس با موفقیت به پنل شما اضافه شد. به بخش <strong>میز کار کاربری</strong> جهت دانلود دسترسی داشته باشید.</span>
              </div>
            ) : (
              <button 
                onClick={handlePurchase}
                className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(0,242,255,0.4)] transition-all active:scale-95"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>_دریافت_لایسنس_اصلی</span>
              </button>
            )}

            <hr className="border-slate-900" />

            {/* Technical metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <Bolt className="w-5 h-5 text-cyan-400" />
                <span className="text-[10px] text-slate-500">شاخص سرعت لود</span>
                <span className="font-mono text-sm font-bold text-white">{specs.speed}</span>
              </div>
              <div className="flex flex-col gap-1">
                <SearchCode className="w-5 h-5 text-cyan-400" />
                <span className="text-[10px] text-slate-500">کدنویسی سئو</span>
                <span className="font-mono text-sm font-bold text-white">{specs.seo}</span>
              </div>
              <div className="flex flex-col gap-1">
                <Monitor className="w-5 h-5 text-cyan-400" />
                <span className="text-[10px] text-slate-500">طراحی واکنش‌گرا</span>
                <span className="font-mono text-sm font-bold text-white">{specs.response}</span>
              </div>
              <div className="flex flex-col gap-1">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span className="text-[10px] text-slate-500">ابزارهای کامپایل</span>
                <span className="font-mono text-sm font-bold text-white">{specs.build}</span>
              </div>
            </div>
          </div>

          {/* Badge: verified elite author */}
          <div className="bg-purple-950/20 border border-purple-500/20 p-4 rounded-xl flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-purple-400 fill-purple-400/20" />
            <span className="text-xs font-bold text-purple-400 tracking-wider">نویسنده تایید شده سطح عالی (ELITE_AUTHOR)</span>
          </div>

          {/* Key Features Bullet List */}
          <div className="glass-panel p-6 rounded-xl space-y-4">
            <h4 className="text-base font-bold text-white border-b border-slate-900 pb-2">قابلیت‌های برجسته محصول</h4>
            <div className="flex flex-wrap gap-2">
              {keyFeatures.map((feat) => (
                <span key={feat} className="text-xs text-slate-300 bg-slate-900/60 border border-slate-800 px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  {feat}
                </span>
              ))}
            </div>
          </div>

          {/* Trailer Abstract Video teaser */}
          <div className="relative rounded-xl overflow-hidden aspect-video border border-slate-800/80">
            <img 
              className="w-full h-full object-cover opacity-60" 
              alt="Mercury animation" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2lTgz3H29yTHWSLRq5L4gAxP5MRHRH8po7gjFq4Hdxrpzxoxnh87ASpxBbgmf8HPPv44mDiFPwWG7gbpzfVHPN14Gv_IiQZjvNqnXHuWQDFbbRuqJ-LBFrwpqGdh5qQAbtDsm-Y25TiPRGSaEvbQqz1rmBFvBfdvlDkrIviyRcBaV8cvKWxDPW-VY8z6biKJD4pzNhspt6BPPGVQKBot2kArNzCrTS6bhaxRkxxSGDPpiD4_RWmxe"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs group cursor-pointer">
              <div class="w-14 h-14 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all shadow-[0_0_15px_rgba(0,242,255,0.3)]">
                <Play className="w-6 h-6 fill-current translate-x-[-1px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
