import heroImage from '../assets/hero-new.png';
import { useAppContext } from '../context/AppContext';

export default function Hero() {
  const { t: allT } = useAppContext();
  const t = allT.hero;

  return (
    <section id="home" className="min-h-screen flex items-center py-24 px-6 bg-white dark:bg-slate-950 transition-colors overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          <div className="space-y-4">
            <p className="text-blue-600 dark:text-blue-400 text-sm font-bold tracking-widest uppercase">
              {t.badge}
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-900 dark:text-white leading-tight">
              {t.title}
            </h1>

            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.subtitle}
            </p>

            {/* Trust Section */}
            <div className="space-y-2 pt-1">
              <h3 className="text-base font-semibold text-slate-800 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-xl">verified_user</span>
                {t.trustHeading}
              </h3>
              <ul className="space-y-1">
                {t.trustItems.map((item: { icon: string; text: string }, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-base mt-0.5 shrink-0">
                      {item.icon}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed italic">
              {t.closingStatement}
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#whatis" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md shadow-blue-600/20">
                {t.primaryBtn}
              </a>
              <a href="#contact" className="px-8 py-3 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                {t.secondaryBtn}
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <img
              src={heroImage}
              alt="Happy Filipino couple"
              className="w-full max-w-sm rounded-2xl shadow-xl"
            />
          </div>

        </div>

        {/* Purpose Section */}
        {t.purpose && (
          <div className="mt-16 md:mt-20 pt-8 md:pt-12 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {t.purpose.title}
              </p>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.purpose.q1}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.purpose.a1}
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white md:mt-7">{t.purpose.q2}</h3>
              <ul className="space-y-2">
                {t.purpose.a2.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    <span className="material-symbols-outlined text-blue-500 text-[18px] mt-0.5 shrink-0">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
