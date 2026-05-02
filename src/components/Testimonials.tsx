import { useAppContext } from '../context/AppContext';

export default function Testimonials() {
  const { t: allT } = useAppContext();
  const t = allT.testimonials;

  return (
    <section id="testimonials" className="py-20 px-6 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto space-y-10">

        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t.title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.stories.map((story, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-100 dark:border-slate-700 space-y-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className="material-symbols-outlined text-yellow-500 text-lg">star</span>
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">"{story.quote}"</p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">person</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">{story.name}</p>
                  <p className="text-xs text-slate-400">{story.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
