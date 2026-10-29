import { useState } from 'react';
import { courses as initialCourses } from '../data';
import { BookOpen, Play, Award, CheckCircle, GraduationCap, Star, ArrowLeft } from 'lucide-react';

interface LearnProps {
  onNavigate: (page: string, params?: any) => void;
}

export default function Learn({ onNavigate }: LearnProps) {
  const [courses, setCourses] = useState(initialCourses);
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);

  // Featured Course: Advanced Shaders
  const featured = courses.find(c => c.id === 'advanced-shaders') || courses[0];

  const handleStudy = (courseId: string) => {
    setActiveCourseId(courseId);
    
    // Simulate studying and increasing progress!
    setTimeout(() => {
      setCourses(prev => prev.map(c => {
        if (c.id === courseId) {
          const nextProg = Math.min(c.progress + 15, 100);
          const nextStatus = nextProg === 100 ? 'تکمیل شده' : 'درحال یادگیری';
          return { ...c, progress: nextProg, status: nextStatus };
        }
        return c;
      }));
      setActiveCourseId(null);
    }, 1500);
  };

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block mb-1">_پورتال_آموزش_مهندسی_نکسوس_</span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">پورتال یادگیری</h1>
          <p className="text-slate-400 mt-2 max-w-xl">سطح دانش فنی خود را با دوره‌های پیشرفته و مهندسی‌شده توسط متخصصان ارشد نکسوس افزایش دهید.</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-cyan-400" />
          <div className="text-right">
            <span className="text-[10px] text-slate-500 block">سطح فعلی مهارت</span>
            <span className="text-sm font-bold text-white font-mono">LEVEL_42_ARCHITECT (معمار سطح ۴۲)</span>
          </div>
        </div>
      </div>

      {/* Featured Banner Hero */}
      <div className="relative rounded-xl overflow-hidden glass-panel border border-cyan-400/20 glow-cyan p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2 aspect-video rounded-lg overflow-hidden relative">
          <img 
            className="w-full h-full object-cover" 
            alt={featured.title}
            src={featured.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-4">
            <span className="bg-cyan-500 text-slate-950 font-mono text-[9px] font-bold px-2 py-1 rounded">
              {featured.badge}
            </span>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-4">
          <span className="font-mono text-[10px] text-slate-500 block uppercase">دوره در حال یادگیری برجسته</span>
          <h2 className="text-2xl md:text-3xl font-black text-white">{featured.title}</h2>
          <p className="text-slate-300 text-sm leading-relaxed">{featured.description}</p>

          <div className="space-y-2 pt-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">میزان پیشرفت دوره</span>
              <span className="font-mono text-cyan-400 font-bold">{featured.progress}% تکمیل شده</span>
            </div>
            <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-900">
              <div 
                className="h-full bg-cyan-400 transition-all duration-1000" 
                style={{ width: `${featured.progress}%` }}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-900">
            <span className="text-slate-500 text-xs font-mono">مدت زمان: {featured.duration}</span>
            <button 
              onClick={() => handleStudy(featured.id)}
              disabled={activeCourseId === featured.id}
              className="bg-cyan-400 hover:bg-cyan-300 disabled:bg-slate-800 text-slate-950 px-6 py-2.5 rounded font-bold text-xs flex items-center gap-2 transition-transform active:scale-95"
            >
              {activeCourseId === featured.id ? (
                <span>در حال لود ماژول...</span>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>_ادامه_یادگیری_دوره</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Grid of other courses */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white border-b border-slate-950 pb-2">سایر ماژول‌های پورتال آموزش</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.filter(c => c.id !== 'advanced-shaders').map((course) => {
            const isStudying = activeCourseId === course.id;
            const isCompleted = course.progress === 100;

            return (
              <div 
                key={course.id}
                className="glass-panel rounded-xl overflow-hidden flex flex-col border border-slate-800 hover:border-cyan-400/20 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    alt={course.title}
                    src={course.image}
                  />
                  <div className="absolute top-3 right-3 bg-slate-950/90 backdrop-blur-md border border-slate-800 px-2 py-1 rounded text-[10px] font-mono text-cyan-400">
                    {course.duration}
                  </div>
                  {course.badge && (
                    <span className="absolute bottom-3 left-3 bg-purple-500 text-white font-mono text-[9px] px-2 py-0.5 rounded">
                      {course.badge}
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-grow space-y-4">
                  <div>
                    <h4 className="font-bold text-white text-base leading-snug">{course.title}</h4>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">{course.description}</p>
                  </div>

                  {/* Progress info */}
                  <div className="space-y-1.5 pt-2 mt-auto">
                    <div className="flex justify-between text-[10px] font-mono">
                      <span className="text-slate-500">پیشرفت:</span>
                      <span className="text-cyan-400 font-bold">{course.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 ${isCompleted ? 'bg-emerald-400' : 'bg-cyan-400'}`} 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-900 flex justify-between items-center text-xs">
                    <span className={`font-bold ${isCompleted ? 'text-emerald-400' : course.progress > 0 ? 'text-cyan-400' : 'text-slate-500'}`}>
                      {course.status}
                    </span>

                    {isCompleted ? (
                      <div className="flex items-center gap-1.5 text-emerald-400">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-[10px]">تکمیل شد</span>
                      </div>
                    ) : (
                      <button 
                        onClick={() => handleStudy(course.id)}
                        disabled={isStudying}
                        className="text-cyan-400 hover:text-cyan-300 font-bold font-mono text-xs flex items-center gap-1.5"
                      >
                        <span>{isStudying ? 'در حال لود...' : '_دخول_به_ماژول'}</span>
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
