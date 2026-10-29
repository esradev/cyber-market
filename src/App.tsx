import { useState, useEffect } from 'react';
import { products } from './data';
import Home from './pages/Home';
import Browse from './pages/Browse';
import ProductDetail from './pages/ProductDetail';
import Collections from './pages/Collections';
import Pricing from './pages/Pricing';
import Learn from './pages/Learn';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Support from './pages/Support';
import Docs from './pages/Docs';

import { Menu, X, LogOut, Shield, Github, Monitor, HardDrive, ShoppingBag, GraduationCap, LifeBuoy, FileText, LayoutGrid } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentParams, setCurrentParams] = useState<any>({});
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true); // Start true to let user explore immediately
  const [savedIds, setSavedIds] = useState<string[]>(['save-1', 'save-2']);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // States passed between landing search and browse page
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  // Handle cross-page navigation with state parameters
  const handleNavigate = (page: string, params: any = {}) => {
    setCurrentPage(page);
    setCurrentParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);

    if (params.category !== undefined) {
      setCategoryFilter(params.category);
    } else {
      setCategoryFilter('');
    }
    if (params.search !== undefined) {
      setSearchQuery(params.search);
    }
  };

  const handleToggleSave = (productId: string) => {
    setSavedIds(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} onSearch={(q) => setSearchQuery(q)} />;
      case 'browse':
        return (
          <Browse 
            initialSearchQuery={searchQuery}
            initialCategory={categoryFilter}
            onNavigate={handleNavigate} 
            onToggleSave={handleToggleSave}
            savedIds={savedIds}
          />
        );
      case 'detail':
        return <ProductDetail productId={currentParams.id} onNavigate={handleNavigate} />;
      case 'collections':
        return <Collections onNavigate={handleNavigate} />;
      case 'pricing':
        return <Pricing onNavigate={handleNavigate} />;
      case 'learn':
        return <Learn onNavigate={handleNavigate} />;
      case 'dashboard':
        return isLoggedIn ? (
          <Dashboard onNavigate={handleNavigate} savedIds={savedIds} />
        ) : (
          <Login onLoginSuccess={() => { setIsLoggedIn(true); handleNavigate('dashboard'); }} />
        );
      case 'login':
        return <Login onLoginSuccess={() => { setIsLoggedIn(true); handleNavigate('dashboard'); }} />;
      case 'support':
        return <Support onNavigate={handleNavigate} />;
      case 'docs':
        return <Docs onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} onSearch={(q) => setSearchQuery(q)} />;
    }
  };

  return (
    <div dir="rtl" className="min-h-screen flex flex-col justify-between bg-[#05080c] text-slate-100">
      {/* Dynamic scan line effect to match cyberpunk assets market vibe */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-radial-gradient from-cyan-500/5 via-transparent to-transparent pointer-events-none z-0"></div>

      {/* Header and Navbar */}
      <header className="sticky top-0 z-50 glass-panel border-b border-slate-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Right/Start Side: Brand Logo */}
          <div 
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,242,255,0.25)] transition-all">
              <Shield className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="text-right">
              <span className="text-lg font-black text-white tracking-tight flex items-center gap-1.5">
                نکـسـوس <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              </span>
              <span className="text-[10px] text-slate-500 font-mono tracking-widest block uppercase">NEXUS_RTL_MARKET</span>
            </div>
          </div>

          {/* Center: Inline desktop navigation links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button 
              onClick={() => handleNavigate('home')} 
              className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${currentPage === 'home' ? 'text-cyan-400 bg-cyan-400/5 active-glow' : 'text-slate-400 hover:text-cyan-300'}`}
            >
              صفحه اصلی
            </button>
            <button 
              onClick={() => handleNavigate('browse')} 
              className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${currentPage === 'browse' ? 'text-cyan-400 bg-cyan-400/5 active-glow' : 'text-slate-400 hover:text-cyan-300'}`}
            >
              مخزن محصولات
            </button>
            <button 
              onClick={() => handleNavigate('collections')} 
              className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${currentPage === 'collections' ? 'text-cyan-400 bg-cyan-400/5 active-glow' : 'text-slate-400 hover:text-cyan-300'}`}
            >
              مجموعه‌ها
            </button>
            <button 
              onClick={() => handleNavigate('learn')} 
              className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${currentPage === 'learn' ? 'text-cyan-400 bg-cyan-400/5 active-glow' : 'text-slate-400 hover:text-cyan-300'}`}
            >
              پورتال آموزش
            </button>
            <button 
              onClick={() => handleNavigate('support')} 
              className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${currentPage === 'support' ? 'text-cyan-400 bg-cyan-400/5 active-glow' : 'text-slate-400 hover:text-cyan-300'}`}
            >
              مرکز پشتیبانی
            </button>
            <button 
              onClick={() => handleNavigate('docs')} 
              className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${currentPage === 'docs' ? 'text-cyan-400 bg-cyan-400/5 active-glow' : 'text-slate-400 hover:text-cyan-300'}`}
            >
              مستندات
            </button>
            <button 
              onClick={() => handleNavigate('pricing')} 
              className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${currentPage === 'pricing' ? 'text-cyan-400 bg-cyan-400/5 active-glow' : 'text-slate-400 hover:text-cyan-300'}`}
            >
              تعرفه‌ها
            </button>
          </nav>

          {/* Left/End: User Dashboard entry & responsive toggler */}
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <div className="hidden sm:flex items-center gap-2">
                <button 
                  onClick={() => handleNavigate('dashboard')}
                  className="bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 px-4.5 py-2 rounded text-xs font-bold transition-all"
                >
                  _میز_کار_من
                </button>
                <button 
                  onClick={() => { setIsLoggedIn(false); handleNavigate('home'); }}
                  className="p-2 border border-slate-800 hover:border-rose-500/30 text-slate-500 hover:text-rose-400 rounded transition-all"
                  title="خروج از حساب"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => handleNavigate('login')}
                className="hidden sm:inline-flex bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-4.5 py-2 rounded text-xs transition-all hover:shadow-[0_0_15px_rgba(0,242,255,0.3)]"
              >
                _ورود_به_پنل
              </button>
            )}

            {/* Mobile Menu Toggler */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-all"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 border-b border-slate-900 px-4 py-6 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => handleNavigate('home')} 
                className="flex items-center gap-2 p-3 bg-slate-900 border border-slate-850 rounded-lg text-xs font-bold hover:border-cyan-400 transition-all text-right"
              >
                <LayoutGrid className="w-4 h-4 text-cyan-400" />
                <span>صفحه اصلی</span>
              </button>
              <button 
                onClick={() => handleNavigate('browse')} 
                className="flex items-center gap-2 p-3 bg-slate-900 border border-slate-850 rounded-lg text-xs font-bold hover:border-cyan-400 transition-all text-right"
              >
                <HardDrive className="w-4 h-4 text-cyan-400" />
                <span>مخزن محصولات</span>
              </button>
              <button 
                onClick={() => handleNavigate('collections')} 
                className="flex items-center gap-2 p-3 bg-slate-900 border border-slate-850 rounded-lg text-xs font-bold hover:border-cyan-400 transition-all text-right"
              >
                <ShoppingBag className="w-4 h-4 text-cyan-400" />
                <span>مجموعه‌ها</span>
              </button>
              <button 
                onClick={() => handleNavigate('learn')} 
                className="flex items-center gap-2 p-3 bg-slate-900 border border-slate-850 rounded-lg text-xs font-bold hover:border-cyan-400 transition-all text-right"
              >
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>پورتال آموزش</span>
              </button>
              <button 
                onClick={() => handleNavigate('support')} 
                className="flex items-center gap-2 p-3 bg-slate-900 border border-slate-850 rounded-lg text-xs font-bold hover:border-cyan-400 transition-all text-right"
              >
                <LifeBuoy className="w-4 h-4 text-cyan-400" />
                <span>مرکز پشتیبانی</span>
              </button>
              <button 
                onClick={() => handleNavigate('docs')} 
                className="flex items-center gap-2 p-3 bg-slate-900 border border-slate-850 rounded-lg text-xs font-bold hover:border-cyan-400 transition-all text-right"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>مستندات</span>
              </button>
            </div>

            <div className="pt-4 border-t border-slate-900 flex flex-col gap-2">
              {isLoggedIn ? (
                <>
                  <button 
                    onClick={() => handleNavigate('dashboard')}
                    className="w-full text-center bg-cyan-400 text-slate-950 font-bold py-3 rounded-lg text-xs transition-all"
                  >
                    _میز کار من
                  </button>
                  <button 
                    onClick={() => { setIsLoggedIn(false); handleNavigate('home'); }}
                    className="w-full text-center bg-slate-900 hover:bg-rose-500/10 text-rose-400 border border-rose-500/20 py-3 rounded-lg text-xs font-bold transition-all"
                  >
                    _خروج از حساب
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => handleNavigate('login')}
                  className="w-full text-center bg-cyan-400 text-slate-950 font-bold py-3 rounded-lg text-xs transition-all"
                >
                  _ورود به حساب کاربری
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content View Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full relative z-10 flex-grow">
        {renderPage()}
      </main>

      {/* Footer block */}
      <footer className="glass-panel border-t border-slate-950 py-12 mt-16 text-slate-400 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4 text-right">
              <span className="text-lg font-black text-white block">نکـسـوس</span>
              <p className="text-xs text-slate-500 leading-relaxed">بستر فوق پیشرفته خرید و فعال‌سازی پوسته‌ها، افزونه‌ها و بسته‌های کارآمد وردپرس هماهنگ با استانداردهای وب نوین.</p>
              <div className="flex gap-3 justify-start">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-[10px] text-slate-500 font-mono tracking-wider">SECURE_OBSIDIAN_NETWORK_NODE</span>
              </div>
            </div>

            <div className="space-y-3 text-right">
              <span className="text-sm font-bold text-white block">مخازن دارایی</span>
              <ul className="space-y-2 text-xs">
                <li><button onClick={() => handleNavigate('browse', { category: 'قالب' })} className="hover:text-cyan-400 transition-colors">پوسته‌های پریمیوم</button></li>
                <li><button onClick={() => handleNavigate('browse', { category: 'افزونه' })} className="hover:text-cyan-400 transition-colors">افزونه‌های فوق سریع</button></li>
                <li><button onClick={() => handleNavigate('collections')} className="hover:text-cyan-400 transition-colors">مجموعه‌ها و بسته‌ها</button></li>
              </ul>
            </div>

            <div className="space-y-3 text-right">
              <span className="text-sm font-bold text-white block">پورتال‌ها و خدمات</span>
              <ul className="space-y-2 text-xs">
                <li><button onClick={() => handleNavigate('learn')} className="hover:text-cyan-400 transition-colors">یادگیری توسعه‌دهندگان</button></li>
                <li><button onClick={() => handleNavigate('support')} className="hover:text-cyan-400 transition-colors">پشتیبانی نکسوس</button></li>
                <li><button onClick={() => handleNavigate('docs')} className="hover:text-cyan-400 transition-colors">مستندات فنی</button></li>
              </ul>
            </div>

            <div className="space-y-3 text-right">
              <span className="text-sm font-bold text-white block">پروتکل‌های حقوقی</span>
              <p className="text-xs text-slate-500 leading-relaxed">خرید لایسنس تکی محصول به منزله استفاده دائم در دامنه ثبت شده می‌باشد. استفاده تجاری چندگانه مستلزم پلن استودیو یا سازمانی است.</p>
            </div>
          </div>

          <div className="border-t border-slate-950/80 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <span className="font-mono text-[10px] text-slate-600">© ۲۰۲۶ NEXUS_MARKET. ALL RIGHTS RESERVED_</span>
            <span className="text-slate-500">پشتیبانی و توسعه یافته در کانون سایبری راست‌چین فارسی</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
