import heroImage from '../assets/hero-new.png';
import { useAppContext } from '../context/AppContext';

export default function Hero() {
  const { t: allT } = useAppContext();
  const t = allT.hero;

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-6 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <p className="text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wide uppercase">
              {t.badge}
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              {t.title}
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
              {t.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#whatis" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                {t.primaryBtn}
              </a>
              <a href="#contact" className="px-8 py-3 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                {t.secondaryBtn}
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src={heroImage}
              alt="Happy Filipino couple"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
