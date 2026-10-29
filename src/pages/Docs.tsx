import { useState } from 'react';
import { ChevronRight, Copy, Check, ThumbsUp, ThumbsDown, BookOpen, Terminal, Code, Info } from 'lucide-react';

interface DocsProps {
  onNavigate: (page: string, params?: any) => void;
}

export default function Docs({ onNavigate }: DocsProps) {
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);
  const [voted, setVoted] = useState<'yes' | 'no' | null>(null);

  const snippets = {
    cli: `nxs init quantum-flow --theme-dir=wp-content/themes\ncd wp-content/themes/quantum-flow\nnpm install && npm run dev`,
    hook: `import { useQuantumFlow } from '@nexus-core/quantum-flow';\n\nfunction App() {\n  const { active, metrics, triggerPulse } = useQuantumFlow({\n    fps: 60,\n    glslGlow: true,\n    syncLatency: 'low'\n  });\n\n  return <Canvas metrics={metrics} />;\n}`
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2500);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-slate-500 font-mono text-xs">
        <span className="cursor-pointer hover:text-cyan-400" onClick={() => onNavigate('home')}>خانه</span>
        <span className="font-sans">←</span>
        <span>مستندات فنی nxs</span>
        <span className="font-sans">←</span>
        <span>پوسته‌ها</span>
        <span className="font-sans">←</span>
        <span className="text-cyan-400">شروع سریع جریان کوانتوم</span>
      </nav>

      {/* Docs Header */}
      <div className="space-y-3">
        <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block">_مستندات_جامع_توسعه_</span>
        <h1 className="text-3xl md:text-4xl font-black text-white">راه‌اندازی و کانفیگ جریان کوانتوم</h1>
        <p className="text-slate-400 text-sm leading-relaxed">
          دستورات گام‌به‌گام خط فرمان و فریم‌ورک کامپایلر نکسوس جهت استقرار پرسرعت دارایی‌های دیجیتال روی وردپرس یا پروژه‌های مستقل فرانت‌اند.
        </p>
      </div>

      {/* Info Warning notice */}
      <div className="bg-cyan-950/20 border border-cyan-500/20 p-4 rounded-lg flex gap-3 text-right">
        <Info className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
        <div className="text-xs text-slate-300 space-y-1">
          <strong className="text-white font-bold block">نیاز به دسترسی هسته پایانه (Terminal Ingress)</strong>
          <span>پیش از شروع اجرای دستورات، اطمینان حاصل کنید که خط فرمان مخصوص نکسوس (NXS CLI) به صورت سراسری روی سیستم شما نصب شده باشد.</span>
        </div>
      </div>

      {/* CLI Snippet Block */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-slate-400 font-mono flex items-center gap-1.5">
            <Terminal className="w-4 h-4 text-cyan-400" />
            _TERMINAL_INSTALLATION_
          </span>
          <button 
            onClick={() => handleCopy('cli', snippets.cli)}
            className="text-xs text-slate-400 hover:text-cyan-400 font-mono flex items-center gap-1.5 transition-colors"
          >
            {copiedSnippet === 'cli' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">کد کپی شد!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>کپی کد دستورات</span>
              </>
            )}
          </button>
        </div>

        <div className="relative rounded-lg overflow-hidden border border-slate-900 bg-slate-950 p-5 font-mono text-xs text-cyan-100 text-left ltr">
          <pre className="whitespace-pre-wrap">{snippets.cli}</pre>
        </div>
      </div>

      {/* React Hook snippet */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-slate-400 font-mono flex items-center gap-1.5">
            <Code className="w-4 h-4 text-cyan-400" />
            _REACT_HOOK_API_
          </span>
          <button 
            onClick={() => handleCopy('hook', snippets.hook)}
            className="text-xs text-slate-400 hover:text-cyan-400 font-mono flex items-center gap-1.5 transition-colors"
          >
            {copiedSnippet === 'hook' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">کد کپی شد!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>کپی کد هوک</span>
              </>
            )}
          </button>
        </div>

        <div className="relative rounded-lg overflow-hidden border border-slate-900 bg-slate-950 p-5 font-mono text-xs text-slate-300 text-left ltr">
          <pre className="whitespace-pre-wrap">{snippets.hook}</pre>
        </div>
      </div>

      {/* Helpful rating feedback widget */}
      <div className="glass-panel p-6 rounded-lg border border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-right">
        <div>
          <span className="text-sm font-bold text-white block">آیا این مقاله آموزشی برای شما مفید بود؟</span>
          <span className="text-xs text-slate-500 block mt-1">بازخوردهای شما در پیشبرد مستندات نکسوس بسیار کارساز است.</span>
        </div>

        {voted ? (
          <div className="text-xs font-bold text-cyan-400 bg-cyan-400/5 px-4 py-2 rounded animate-pulse">
            {voted === 'yes' ? 'با تشکر! رای مثبت شما ثبت گردید.' : 'ممنون! مشکلات گزارش شده را رفع خواهیم کرد.'}
          </div>
        ) : (
          <div className="flex gap-3">
            <button 
              onClick={() => setVoted('yes')}
              className="px-5 py-2.5 bg-slate-950 hover:bg-cyan-500/10 hover:text-cyan-400 border border-slate-900 rounded-lg text-xs font-bold transition-all flex items-center gap-2"
            >
              <ThumbsUp className="w-4 h-4 text-emerald-400" />
              <span>بله، عالی بود</span>
            </button>
            <button 
              onClick={() => setVoted('no')}
              className="px-5 py-2.5 bg-slate-950 hover:bg-rose-500/10 hover:text-rose-400 border border-slate-900 rounded-lg text-xs font-bold transition-all flex items-center gap-2"
            >
              <ThumbsDown className="w-4 h-4 text-rose-400" />
              <span>نیاز به اصلاح دارد</span>
            </button>
          </div>
        )}
      </div>

      {/* Docs Pagination previous and next */}
      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-950">
        <div className="glass-panel p-4 rounded-lg hover:border-cyan-400/20 cursor-pointer text-right group transition-all">
          <span className="text-[10px] text-slate-500 block font-mono">_بخش_قبلی</span>
          <span className="text-sm font-bold text-slate-300 group-hover:text-cyan-400 transition-colors">آشنایی با ساختار پوشه‌ها</span>
        </div>

        <div className="glass-panel p-4 rounded-lg hover:border-cyan-400/20 cursor-pointer text-left group transition-all ltr">
          <span className="text-[10px] text-slate-500 block font-mono">NEXT_SECTION_</span>
          <span className="text-sm font-bold text-slate-300 group-hover:text-cyan-400 transition-colors">Advanced Config Setup</span>
        </div>
      </div>
    </div>
  );
}
