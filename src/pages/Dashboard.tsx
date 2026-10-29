import { useState } from 'react';
import { savedAssets, activityLogs } from '../data';
import { ShieldCheck, Copy, Check, Download, Zap, BookOpen, Clock, HardDrive, RefreshCw } from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string, params?: any) => void;
  savedIds: string[];
}

export default function Dashboard({ onNavigate, savedIds }: DashboardProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);

  const activeLicenses = [
    { id: 'lic-1', title: 'پوسته جریان کوانتوم (Quantum Flow)', key: 'NXS-992-048-QF', activeDomain: 'mybusiness.ir' },
    { id: 'lic-2', title: 'افزونه داشبورد عصبی (Neural Dash V2)', key: 'NXS-884-902-ND', activeDomain: 'app.mybusiness.ir' }
  ];

  const handleCopy = (id: string, key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleDownload = (id: string) => {
    setDownloadingId(id);
    setDownloadProgress(0);
    
    const interval = setInterval(() => {
      setDownloadProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setDownloadingId(null), 1000);
          return 100;
        }
        return p + 20;
      });
    }, 200);
  };

  return (
    <div className="space-y-8">
      {/* Sync Banner Status */}
      <div className="relative overflow-hidden rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-emerald-500/15 text-emerald-400 p-3 rounded-lg animate-pulse">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-black text-white font-mono tracking-wide">SYSTEM_SYNC_COMPLETE</h2>
            <p className="text-xs text-slate-400 mt-0.5">همگام‌سازی لایسنس‌ها و مخزن دارایی‌ها با موفقیت انجام شد. لایسنس‌های شما فعال و معتبر هستند.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6 divide-x divide-slate-800/80 text-right">
          <div className="px-4">
            <span className="text-[10px] text-slate-500 block">زمان حضور فعال</span>
            <span className="font-mono text-sm font-bold text-white flex items-center gap-1.5 justify-end">
              ۱۴۲ ساعت <Clock className="w-3.5 h-3.5 text-cyan-400" />
            </span>
          </div>
          <div className="px-4">
            <span className="text-[10px] text-slate-500 block">دارایی‌های مستقر شده</span>
            <span className="font-mono text-sm font-bold text-white flex items-center gap-1.5 justify-end">
              ۸ مورد <HardDrive className="w-3.5 h-3.5 text-cyan-400" />
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left main column: active licenses and saved bookmarks */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Active Licenses Section */}
          <div className="glass-panel p-6 rounded-xl space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-slate-900 pb-2">لایسنس‌های فعال ثبت شده</h3>
            
            <div className="space-y-4">
              {activeLicenses.map((lic) => (
                <div key={lic.id} className="bg-slate-950/40 border border-slate-900 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-cyan-400/20 transition-all">
                  <div className="space-y-1 text-right">
                    <span className="text-sm font-bold text-slate-200">{lic.title}</span>
                    <span className="text-xs text-slate-500 block">دامنه فعال: <strong className="font-mono text-cyan-400">{lic.activeDomain}</strong></span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="bg-slate-950 px-4 py-2 border border-slate-900 rounded font-mono text-xs text-slate-400 select-all">
                      {lic.key}
                    </div>
                    <button 
                      onClick={() => handleCopy(lic.id, lic.key)}
                      className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded text-slate-400 hover:text-cyan-400 transition-all"
                      title="کپی کردن لایسنس"
                    >
                      {copiedId === lic.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bookmarks & Saved items */}
          <div className="glass-panel p-6 rounded-xl space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-slate-900 pb-2">دارایی‌های نشان‌شده و آماده دانلود</h3>
            
            <div className="space-y-4">
              {savedAssets.map((asset) => {
                const isDownloading = downloadingId === asset.id;
                return (
                  <div key={asset.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-slate-950/20 border border-slate-900/60 rounded-lg hover:border-cyan-400/10 transition-all">
                    <div className="flex items-center gap-4 text-right">
                      <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0 bg-slate-900 border border-slate-800">
                        <img className="w-full h-full object-cover" src={asset.image} alt={asset.title} />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-slate-200 block">{asset.title}</span>
                        <span className="text-xs text-slate-500 font-mono">حجم: {asset.size} | نشان شده در {asset.date}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => handleDownload(asset.id)}
                      disabled={isDownloading}
                      className="bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 border border-cyan-500/20 px-4 py-2 rounded text-xs font-bold transition-all flex items-center gap-2"
                    >
                      {isDownloading ? (
                        <span className="flex items-center gap-1.5 font-mono">
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          %{downloadProgress}
                        </span>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>_دانلود_پکیج_کد</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right column sidebar: Profile and action events log */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* User profile metadata */}
          <div className="glass-panel p-6 rounded-xl space-y-4 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
            <div className="w-20 h-20 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full mx-auto flex items-center justify-center font-mono font-black text-2xl relative">
              VIP
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-400 border border-[#05080c] rounded-full"></span>
            </div>
            
            <div className="space-y-1">
              <h4 className="text-lg font-black text-white">_NXS_VIP_USER</h4>
              <p className="text-xs text-slate-400">عضویت طلایی استودیو از مارس ۲۰۲۴</p>
            </div>

            <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-900 text-right space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-500">محدودیت دانلود باقی‌مانده</span>
                <span className="font-mono text-cyan-400 font-bold">بدون محدودیت</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">تاریخ انقضای عضویت</span>
                <span className="font-mono text-cyan-400">۲۴ دسامبر ۲۰۲۶</span>
              </div>
            </div>
          </div>

          {/* Activity Logs timelines */}
          <div className="glass-panel p-6 rounded-xl space-y-4">
            <h4 className="text-sm font-bold text-white border-b border-slate-900 pb-2">رویدادها و فعالیت‌های اخیر</h4>
            
            <div className="space-y-4 font-mono text-[11px]">
              {activityLogs.map((log) => (
                <div key={log.id} className="flex gap-3 text-right">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1 flex-shrink-0"></div>
                  <div className="space-y-0.5 flex-grow">
                    <span className="text-slate-300 block">{log.text}</span>
                    <span className="text-slate-500 block text-[10px]">{log.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
