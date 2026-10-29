import { useState } from 'react';
import { Check, HelpCircle, X, ShieldAlert, Award } from 'lucide-react';

interface PricingProps {
  onNavigate: (page: string, params?: any) => void;
}

export default function Pricing({ onNavigate }: PricingProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      id: 'creator',
      name: 'طراح مستقل',
      codename: 'CREATOR_CORE',
      priceMonthly: 29,
      priceYearly: 24,
      desc: 'مناسب برای طراحان وب و توسعه‌دهندگان مستقل نوپا.',
      features: [
        'دسترسی به ۵ دارایی ویژه در ماه',
        '۱ لایسنس دامنه فعال همزمان',
        'به‌روزرسانی‌های خودکار هسته',
        'پشتیبانی تیکت استاندارد (۲۴ ساعته)',
        'پکیج‌های شروع کار ابتدایی'
      ],
      badge: null,
      actionLabel: '_شروع_با_پلن_مستقل'
    },
    {
      id: 'studio',
      name: 'استودیو حرفه‌ای',
      codename: 'STUDIO_PREMIUM',
      priceMonthly: 79,
      priceYearly: 64,
      desc: 'پلن پرطرفدار برای طراحان وب و آژانس‌های رو به رشد.',
      features: [
        'دانلود نامحدود تمامی محصولات',
        '۱۰ لایسنس دامنه فعال همزمان',
        'به‌روزرسانی‌های فوق‌سریع هسته',
        'پشتیبانی ویژه اولویت‌دار (زیر ۱۵ دقیقه)',
        'دسترسی اختصاصی به نسخه‌های بتا',
        'بسته‌های پریمیوم و کدهای سورس'
      ],
      badge: 'محبوب‌ترین پلن',
      actionLabel: '_خرید_عضویت_استودیو'
    },
    {
      id: 'enterprise',
      name: 'توسعه سازمانی',
      codename: 'ENTERPRISE_NODE',
      priceMonthly: 199,
      priceYearly: 159,
      desc: 'بسته‌ای جامع برای کارهای تیمی و پروژه‌های بین‌المللی تجاری.',
      features: [
        'دانلود نامحدود نامحدود',
        'بی‌نهایت لایسنس دامنه فعال',
        'پشتیبانی اختصاصی تلفنی و چت آنلاین',
        'مجوز رسمی سفارشی‌سازی هسته موتور',
        'دسترسی به تیم مشاوره ارشد نکسوس',
        'تضمین کیفیت ۱۰۰٪ کدهای استقرار'
      ],
      badge: 'سازمان‌های بزرگ',
      actionLabel: '_شروع_پروتکل_سازمانی'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block">_تعرفه‌های_لایسنس_نکسوس_</span>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">پروتکل‌های تعرفه و لایسنس</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-base">سطح دسترسی مورد نیاز برای پروژه خود را انتخاب کنید. تمامی پلن‌ها شامل پشتیبانی استاندارد نکسوس هستند.</p>

        {/* Monthly/Yearly Toggle */}
        <div className="inline-flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-lg border border-slate-900 mt-4">
          <button 
            onClick={() => setBillingPeriod('monthly')}
            className={`px-4 py-2 text-xs font-bold rounded transition-all ${billingPeriod === 'monthly' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
          >
            پرداخت ماهانه
          </button>
          <button 
            onClick={() => setBillingPeriod('yearly')}
            className={`px-4 py-2 text-xs font-bold rounded transition-all ${billingPeriod === 'yearly' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
          >
            پرداخت سالانه (۲۰٪ تخفیف)
          </button>
        </div>
      </div>

      {/* Grid of plans */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        {plans.map((plan) => {
          const isStudio = plan.id === 'studio';
          const price = billingPeriod === 'monthly' ? plan.priceMonthly : plan.priceYearly;

          return (
            <div 
              key={plan.id}
              className={`glass-panel rounded-xl p-8 flex flex-col justify-between border relative transition-all duration-300 ${
                isStudio 
                  ? 'border-cyan-400/40 glow-cyan shadow-[0_0_30px_rgba(0,242,255,0.05)] scale-105 z-10' 
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {plan.badge && (
                <span className="absolute top-4 left-4 bg-cyan-500 text-slate-950 font-mono text-[9px] font-bold px-2 py-1 rounded">
                  {plan.badge}
                </span>
              )}

              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="font-mono text-xs text-slate-500 tracking-wider uppercase">{plan.codename}</span>
                  <h3 className="text-2xl font-black text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 min-h-[40px] leading-relaxed">{plan.desc}</p>
                </div>

                <div className="flex items-baseline gap-2 border-b border-slate-900 pb-6">
                  <span className="text-4xl font-black font-mono text-cyan-300">${price}</span>
                  <span className="text-xs text-slate-500">/ ماه</span>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-6">
                {selectedPlan === plan.id ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-3 rounded text-center text-xs font-bold">
                    درخواست عضویت شما ثبت گردید
                  </div>
                ) : (
                  <button 
                    onClick={() => {
                      setSelectedPlan(plan.id);
                      setTimeout(() => setSelectedPlan(null), 3000);
                    }}
                    className={`w-full font-bold py-3.5 rounded-lg transition-all active:scale-95 text-xs ${
                      isStudio 
                        ? 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]' 
                        : 'bg-slate-950 border border-slate-800 hover:border-slate-700 text-white'
                    }`}
                  >
                    {plan.actionLabel}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Feature Comparison Table */}
      <div className="max-w-4xl mx-auto pt-12 space-y-6">
        <h3 className="text-xl font-bold text-white border-b border-slate-900 pb-4">بررسی فنی ویژگی‌های لایسنس</h3>
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="border-b border-slate-900 text-slate-500 font-mono tracking-wider">
                <th className="py-4 font-normal">قابلیت فنی لایسنس</th>
                <th className="py-4 px-4 text-center font-normal">CREATOR</th>
                <th className="py-4 px-4 text-center font-normal">STUDIO</th>
                <th className="py-4 px-4 text-center font-normal">ENTERPRISE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-950">
              <tr className="hover:bg-slate-950/40">
                <td className="py-4 text-slate-300">لایسنس دامنه‌های فعال همزمان</td>
                <td className="py-4 px-4 text-center font-mono text-slate-400">۱ عدد</td>
                <td className="py-4 px-4 text-center font-mono text-cyan-400 font-bold">۱۰ عدد</td>
                <td className="py-4 px-4 text-center font-mono text-cyan-400 font-bold">بی‌نهایت</td>
              </tr>
              <tr className="hover:bg-slate-950/40">
                <td className="py-4 text-slate-300">دانلود‌های ماهیانه از مخزن</td>
                <td className="py-4 px-4 text-center font-mono text-slate-400">۵ مورد</td>
                <td className="py-4 px-4 text-center font-mono text-cyan-400 font-bold">نامحدود</td>
                <td className="py-4 px-4 text-center font-mono text-cyan-400 font-bold">نامحدود</td>
              </tr>
              <tr className="hover:bg-slate-950/40">
                <td className="py-4 text-slate-300">به‌روزرسانی‌های هسته موتور</td>
                <td className="py-4 px-4 text-center text-slate-400">ماهانه</td>
                <td className="py-4 px-4 text-center text-cyan-400 font-bold">لحظه‌ای / زنده</td>
                <td className="py-4 px-4 text-center text-cyan-400 font-bold">لحظه‌ای / زنده</td>
              </tr>
              <tr className="hover:bg-slate-950/40">
                <td className="py-4 text-slate-300">حق دخل و تصرف در کدهای اصلی</td>
                <td className="py-4 px-4 text-center text-slate-500">—</td>
                <td className="py-4 px-4 text-center text-cyan-400 font-bold">محدود</td>
                <td className="py-4 px-4 text-center text-cyan-400 font-bold">کامل (۱۰۰٪)</td>
              </tr>
              <tr className="hover:bg-slate-950/40">
                <td className="py-4 text-slate-300">دسترسی به سرور همگام دیسکورد</td>
                <td className="py-4 px-4 text-center text-slate-500">—</td>
                <td className="py-4 px-4 text-center text-cyan-400 font-bold">VIP دیسکورد</td>
                <td className="py-4 px-4 text-center text-cyan-400 font-bold">کانال اختصاصی تیم</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
