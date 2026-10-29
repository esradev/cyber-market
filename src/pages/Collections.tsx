import { useState } from 'react';
import { collections } from '../data';
import { Package, Check, ArrowRight, Layers, FileCode, ShoppingBag } from 'lucide-react';

interface CollectionsProps {
  onNavigate: (page: string, params?: any) => void;
}

export default function Collections({ onNavigate }: CollectionsProps) {
  const [licensedBundles, setLicensedBundles] = useState<string[]>([]);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleClaim = (bundleId: string) => {
    setLoadingId(bundleId);
    setTimeout(() => {
      setLicensedBundles(prev => [...prev, bundleId]);
      setLoadingId(null);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block mb-1">_بسته‌های_یکپارچه_نکسوس_</span>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">مجموعه‌ها و بسته‌ها</h1>
        <p className="text-slate-400 mt-2 max-w-2xl">بسته‌های منسجم بهینه‌سازی شده با بهترین قیمت برای راه‌اندازی پروژه‌های بزرگ بدون نیاز به خرید جداگانه.</p>
      </div>

      {/* Grid of collections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {collections.map((col) => {
          const isOwned = licensedBundles.includes(col.id);
          const isLoading = loadingId === col.id;

          return (
            <div 
              key={col.id}
              className="glass-panel rounded-xl overflow-hidden flex flex-col border border-slate-800 hover:border-cyan-400/20 transition-all duration-300"
            >
              {/* Cover Banner */}
              <div className="relative aspect-[21/9] overflow-hidden">
                <img 
                  className="w-full h-full object-cover opacity-80" 
                  alt={col.title}
                  src={col.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080c] via-[#05080c]/30 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 px-3 py-1 rounded text-xs font-mono text-cyan-400">
                  {col.badge}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex flex-col flex-grow space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white">{col.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{col.description}</p>
                </div>

                {/* Resource stack files list */}
                <div className="space-y-2 bg-slate-950/40 p-4 rounded-lg border border-slate-900">
                  <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono tracking-wider border-b border-slate-900 pb-2 mb-2">
                    <span>محتوای بسته</span>
                    <span>قالب فایل</span>
                  </div>
                  
                  <div className="space-y-2.5">
                    {col.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center group/item hover:bg-slate-900/50 p-1.5 rounded transition-all">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-cyan-500">{item.number}</span>
                          <span className="text-sm text-slate-300 group-hover/item:text-cyan-400 transition-colors">{item.name}</span>
                          {item.badge && (
                            <span className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[9px] px-1.5 py-0.5 rounded">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <span className="font-mono text-xs text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-900 group-hover/item:border-cyan-400/20">
                          {item.ext}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Section inside Card */}
                <div className="pt-6 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 block">بسته‌های فوق پیشرفته</span>
                    <span className="text-xs font-bold text-cyan-400">{col.priceLabel}</span>
                  </div>

                  {isOwned ? (
                    <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-6 py-2.5 rounded text-sm font-bold flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>لایسنس فعال گردید</span>
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleClaim(col.id)}
                      disabled={isLoading}
                      className="bg-cyan-400 hover:bg-cyan-300 disabled:bg-slate-800 text-slate-950 px-6 py-2.5 rounded font-bold transition-transform active:scale-95 text-xs flex items-center gap-2"
                    >
                      {isLoading ? (
                        <span>در حال فعال‌سازی لایسنس...</span>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>{col.actionLabel}</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
