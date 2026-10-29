import React, { useState } from 'react';
import { HelpCircle, MessagesSquare, CheckCircle, RefreshCw, Send, AlertTriangle, ShieldCheck } from 'lucide-react';

interface SupportProps {
  onNavigate: (page: string, params?: any) => void;
}

export default function Support({ onNavigate }: SupportProps) {
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketCategory, setTicketCategory] = useState('licensing');
  const [ticketMessage, setTicketMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Local submitted tickets list to persist within user session!
  const [submittedTickets, setSubmittedTickets] = useState<{ id: string; category: string; subject: string; status: string; date: string }[]>([
    { id: 'TCK-802', category: 'لایسنس و فعال‌سازی', subject: 'تغییر دامنه اصلی فریم‌ورک افق وانتا', status: 'پاسخ داده شده', date: 'دیروز' }
  ]);

  const handleSendTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject || !ticketMessage) return;

    setIsSending(true);

    setTimeout(() => {
      const categoryNames: { [key: string]: string } = {
        licensing: 'لایسنس و فعال‌سازی',
        installation: 'نصب و پیکربندی وردپرس',
        billing: 'اشتراک و فاکتورها',
        custom: 'درخواست توسعه سفارشی'
      };

      const newTicket = {
        id: `TCK-${Math.floor(100 + Math.random() * 900)}`,
        category: categoryNames[ticketCategory],
        subject: ticketSubject,
        status: 'درحال بررسی توسط کارشناس',
        date: 'هم‌اکنون'
      };

      setSubmittedTickets(prev => [newTicket, ...prev]);
      setIsSending(false);
      setSuccess(true);
      setTicketSubject('');
      setTicketMessage('');

      setTimeout(() => setSuccess(false), 3500);
    }, 1500);
  };

  const systemStatus = [
    { name: 'پایگاه داده لایسنس‌ها (Database)', status: 'فعال و پایدار', code: 'DB_ONLINE' },
    { name: 'سرور دانلود فایل‌ها (Cloud Repo)', status: 'فعال و پایدار', code: 'CLOUD_REPO_ACTIVE' },
    { name: 'درگاه احراز هویت هوشمند (OAuth)', status: 'فعال و پایدار', code: 'AUTH_INGRESS_OK' },
    { name: 'هوش مصنوعی نکسوس (AI Node)', status: 'فعال و پایدار', code: 'AI_MODEL_ONLINE' }
  ];

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div>
        <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block mb-1">_مرکز_خدمات_فنی_نکسوس_</span>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">مرکز پشتیبانی</h1>
        <p className="text-slate-400 mt-2 max-w-2xl">ارتباط مستقیم با توسعه‌دهندگان ارشد و طراحان فریم‌ورک نکسوس. میانگین زمان پاسخ به تیکت‌ها کمتر از ۱۵ دقیقه می‌باشد.</p>
      </div>

      {/* Main bento categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-xl space-y-4 hover:border-cyan-400/20 transition-all">
          <div className="w-10 h-10 bg-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center font-bold">
            ۰۱
          </div>
          <h3 className="text-lg font-bold text-white">لایسنس‌ها و فعال‌سازی</h3>
          <p className="text-slate-400 text-xs leading-relaxed">برطرف کردن مشکلات مربوط به تاییدیه لایسنس‌ها، تغییر دامنه‌های ثبت شده و کدهای فعال‌سازی روی لوکال‌هاست.</p>
        </div>

        <div className="glass-panel p-6 rounded-xl space-y-4 hover:border-cyan-400/20 transition-all">
          <div className="w-10 h-10 bg-purple-500/10 text-purple-400 rounded-lg flex items-center justify-center font-bold">
            ۰۲
          </div>
          <h3 className="text-lg font-bold text-white">نصب و پیکربندی ابزارها</h3>
          <p className="text-slate-400 text-xs leading-relaxed">راهنمایی در مورد برطرف کردن هشدارهای سیستم مدیریت محتوا، افزایش حجم آپلود وردپرس و افزایش حافظه PHP.</p>
        </div>

        <div className="glass-panel p-6 rounded-xl space-y-4 hover:border-cyan-400/20 transition-all">
          <div className="w-10 h-10 bg-amber-500/10 text-amber-400 rounded-lg flex items-center justify-center font-bold">
            ۰۳
          </div>
          <h3 className="text-lg font-bold text-white">درگاه پرداخت و مالی</h3>
          <p className="text-slate-400 text-xs leading-relaxed">پیگیری مبالغ واریز شده، فاکتورهای رسمی لایسنس‌های شرکتی، ارتقای بسته‌ها و تمدید اشتراک‌های سالانه.</p>
        </div>
      </div>

      {/* Two columns: Ticket creation Form vs System status Board */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Support ticket submission form */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-xl space-y-6">
          <h3 className="text-xl font-bold text-white border-b border-slate-900 pb-3">ارسال تیکت جدید به پشتیبانی</h3>

          {success && (
            <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded text-xs leading-relaxed text-right flex items-start gap-2 animate-pulse">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>تیکت با موفقیت ثبت گردید. مهندسان فنی نکسوس بلافاصله بررسی خود را آغاز کرده و پاسخ به همین صفحه ارسال خواهد شد.</span>
            </div>
          )}

          <form onSubmit={handleSendTicket} className="space-y-4 text-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 block">دپارتمان پشتیبانی</label>
                <select 
                  value={ticketCategory}
                  onChange={(e) => setTicketCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-900 rounded-lg py-2.5 px-4 text-xs text-slate-300 focus:outline-none focus:border-cyan-400 transition-all text-right"
                >
                  <option value="licensing">لایسنس و فعال‌سازی</option>
                  <option value="installation">نصب و پیکربندی وردپرس</option>
                  <option value="billing">اشتراک و فاکتورها</option>
                  <option value="custom">درخواست توسعه سفارشی</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 block">موضوع تیکت</label>
                <input 
                  type="text" 
                  value={ticketSubject}
                  onChange={(e) => setTicketSubject(e.target.value)}
                  placeholder="مثال: سوال در مورد وب‌پک قالب جریان کوانتوم"
                  className="w-full bg-slate-950 border border-slate-900 rounded-lg py-2.5 px-4 text-xs text-cyan-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-all text-right"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 block">توضیحات و شرح فنی مشکل</label>
              <textarea 
                rows={5}
                value={ticketMessage}
                onChange={(e) => setTicketMessage(e.target.value)}
                placeholder="متن کامل پیام خود را به زبان فارسی در این بخش یادداشت کنید..."
                className="w-full bg-slate-950 border border-slate-900 rounded-lg py-3 px-4 text-xs text-cyan-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-all text-right leading-relaxed"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSending || !ticketSubject || !ticketMessage}
              className="bg-cyan-400 hover:bg-cyan-300 disabled:bg-slate-900 disabled:text-slate-600 text-slate-950 font-bold px-8 py-3 rounded-lg text-xs flex items-center gap-2 transition-transform active:scale-95 cursor-pointer"
            >
              {isSending ? (
                <span>درحال رمزنگاری و ارسال...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>_ارسال_تیکت_پشتیبانی_</span>
                </>
              )}
            </button>
          </form>

          {/* Submitted Active Tickets Log list inside portal */}
          <div className="pt-6 border-t border-slate-900 space-y-4">
            <h4 className="text-sm font-bold text-white">تیکت‌های فعال و پیگیری‌ها</h4>
            <div className="space-y-3">
              {submittedTickets.map((t) => (
                <div key={t.id} className="bg-slate-950/40 p-4 rounded border border-slate-900 flex justify-between items-center text-right text-xs gap-4">
                  <div>
                    <span className="font-mono text-cyan-500 font-bold block">{t.id}</span>
                    <span className="text-slate-200 font-bold block mt-1">{t.subject}</span>
                    <span className="text-slate-500 text-[10px] block mt-0.5">{t.category} | ثبت شده در {t.date}</span>
                  </div>
                  <span className={`px-2.5 py-1 rounded text-[10px] font-bold font-mono ${
                    t.status === 'پاسخ داده شده' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse'
                  }`}>
                    {t.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System operational status board panel */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-xl space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b border-slate-900 pb-3">وضعیت زنده سرورها و هسته نکسوس</h3>
            <p className="text-xs text-slate-400 leading-relaxed">پایش لحظه‌ای زیرساخت‌های کلود و تأمین امنیت شبکه توزیع لایسنس‌ها.</p>
            
            <div className="space-y-3.5 pt-2">
              {systemStatus.map((srv) => (
                <div key={srv.code} className="flex justify-between items-center bg-slate-950/80 p-3.5 rounded border border-slate-900">
                  <div className="text-right">
                    <span className="text-xs text-slate-300 block font-bold">{srv.name}</span>
                    <span className="font-mono text-[9px] text-slate-500 block uppercase tracking-wider">{srv.code}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-emerald-400 font-bold">{srv.status}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-lg border border-slate-900 text-right flex items-start gap-3 mt-6">
            <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-white block">پشتیبانی امنیتی آبسیدین</span>
              <span className="text-[10px] text-slate-500 block mt-0.5 leading-relaxed">تمامی تیکت‌ها و اسناد پیوستی آنها بر اساس رمزگذاری پیشرفته AES-256 ذخیره و تبادل می‌شوند.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
