import React, { useState } from 'react';
import { Fingerprint, ArrowLeft, KeyRound, UserCheck, ShieldAlert, BadgeAlert } from 'lucide-react';

interface LoginProps {
  onLoginSuccess: () => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [identifier, setIdentifier] = useState('');
  const [accessKey, setAccessKey] = useState('');
  const [status, setStatus] = useState<'idle' | 'scanning' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier || !accessKey) {
      setStatus('error');
      setErrorMessage('خطا: شناسه هویت کاربری و کلید امنیتی نمی‌توانند خالی باشند.');
      return;
    }

    setStatus('scanning');

    // Simulate cryptographic scanning sequence
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        onLoginSuccess();
      }, 1500);
    }, 2000);
  };

  return (
    <div className="min-h-[600px] flex items-center justify-center relative py-12 px-4 overflow-hidden">
      {/* Decorative vertical strings in the margin (Cyberpunk layout) */}
      <div className="absolute top-1/4 right-8 hidden xl:flex flex-col gap-6 font-mono text-[9px] text-slate-600 tracking-widest writing-mode-vertical uppercase select-none">
        <span>_SYS_SYNC: SECURE</span>
        <span>_CIPHER_STATUS: ENCRYPTED</span>
        <span>_NODE_ADDR: 127.0.0.1</span>
      </div>
      
      <div className="absolute top-1/4 left-8 hidden xl:flex flex-col gap-6 font-mono text-[9px] text-slate-600 tracking-widest writing-mode-vertical uppercase select-none">
        <span>_PORT_INGRESS: 3000</span>
        <span>_SECURITY_LEVEL: 4</span>
        <span>_AUTH_PROTOCOL: JWT_V2</span>
      </div>

      {/* Main glass card */}
      <div className="w-full max-w-md glass-panel p-8 rounded-2xl border border-slate-800/80 shadow-[0_0_50px_rgba(0,242,255,0.04)] relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        
        <div className="text-center space-y-6">
          <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest">_VERIFICATION_REQUIRED_</span>
          
          {/* Fingerprint biometric module visualizer */}
          <div className="relative mx-auto w-24 h-24 bg-slate-950 rounded-xl border border-slate-900 flex items-center justify-center group overflow-hidden">
            {status === 'scanning' && (
              <div className="scanning-line"></div>
            )}
            
            <div className={`transition-all duration-500 p-4 rounded-lg ${
              status === 'success' 
                ? 'text-emerald-400 bg-emerald-500/10' 
                : status === 'error' 
                ? 'text-rose-400 bg-rose-500/10' 
                : 'text-cyan-400 group-hover:text-cyan-300'
            }`}>
              {status === 'success' ? (
                <UserCheck className="w-10 h-10" />
              ) : (
                <Fingerprint className={`w-10 h-10 ${status === 'scanning' ? 'animate-pulse' : ''}`} />
              )}
            </div>
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-black text-white">احراز هویت امنیتی نکسوس</h2>
            <p className="text-xs text-slate-400 leading-relaxed">جهت ورود به پنل، شناسه هویت و کلید امنیتی لایسنس خود را وارد نمایید.</p>
          </div>

          {status === 'scanning' && (
            <div className="font-mono text-xs text-cyan-400 animate-pulse bg-cyan-400/5 py-2.5 rounded border border-cyan-400/20">
              _درحال_انطباق_کلیدها_و_شناسه_آبسیدین...
            </div>
          )}

          {status === 'success' && (
            <div className="font-mono text-xs text-emerald-400 bg-emerald-400/5 py-2.5 rounded border border-emerald-400/20">
              _تایید_هویت_انجام_شد_ACCESS_GRANTED
            </div>
          )}

          {status === 'error' && (
            <div className="font-mono text-xs text-rose-400 bg-rose-400/5 py-2.5 rounded border border-rose-400/20 px-3">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-right">
            {/* Input 1 */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 block">_شناسه_هویت_کاربری (ایمیل)</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={identifier}
                  onChange={(e) => {
                    setIdentifier(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  disabled={status === 'scanning' || status === 'success'}
                  className="w-full bg-slate-950 border border-slate-900 rounded-lg py-3 px-4 text-sm text-cyan-100 placeholder:text-slate-700 focus:outline-none focus:border-cyan-400 transition-all text-left font-mono"
                  placeholder="name@domain.com"
                />
              </div>
            </div>

            {/* Input 2 */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 block">_کلید_امنیتی_عبور</label>
              <div className="relative">
                <input 
                  type="password" 
                  value={accessKey}
                  onChange={(e) => {
                    setAccessKey(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  disabled={status === 'scanning' || status === 'success'}
                  className="w-full bg-slate-950 border border-slate-900 rounded-lg py-3 px-4 text-sm text-cyan-100 placeholder:text-slate-700 focus:outline-none focus:border-cyan-400 transition-all text-left font-mono"
                  placeholder="••••••••••••••••"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={status === 'scanning' || status === 'success'}
              className="w-full mt-4 bg-cyan-400 hover:bg-cyan-300 disabled:bg-slate-900 disabled:text-slate-600 text-slate-950 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,242,255,0.3)] transition-all active:scale-95 cursor-pointer"
            >
              <span>_ورود_به_هسته_کاربری</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </form>

          {/* Links Row */}
          <div className="flex justify-between items-center text-xs text-slate-500 pt-2 font-mono">
            <a href="#forgot" onClick={(e) => {e.preventDefault(); alert('لطفاً جهت بازنشانی کلید عبور با پشتیبانی نکسوس مکاتبه نمایید.');}} className="hover:text-cyan-400 transition-colors">_فراموشی_کلید_عبور</a>
            <a href="#register" onClick={(e) => {e.preventDefault(); setIdentifier('client@nexus-market.io'); setAccessKey('quantumflow2026');}} className="text-cyan-400 hover:underline">_ثبت‌نام_سریع_تستی</a>
          </div>
        </div>
      </div>
    </div>
  );
}
