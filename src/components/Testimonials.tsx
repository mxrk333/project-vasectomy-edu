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

        <div className="grid grid-cols-1 gap-6">
          {t.stories.map((story: { quote: string; name?: string; detail?: string }, i: number) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-100 dark:border-slate-700 space-y-4 flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-blue-200 dark:text-blue-900 text-5xl leading-none">format_quote</span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic text-lg">"{story.quote}"</p>
              {(story.name || story.detail) && (
                <div className="flex flex-col items-center gap-2 pt-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">{story.name ? 'person' : 'location_on'}</span>
                  </div>
                  <div>
                    {story.name && <p className="font-semibold text-slate-900 dark:text-white text-sm">{story.name}</p>}
                    {story.detail && <p className="text-xs text-slate-500 dark:text-slate-400">{story.detail}</p>}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
