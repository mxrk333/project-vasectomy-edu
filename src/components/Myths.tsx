import { useAppContext } from '../context/AppContext';

export default function Myths() {
  const { t: allT } = useAppContext();
  const t = allT.myths;

  return (
    <section id="myths" className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto space-y-10">

        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t.title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">{t.subtitle}</p>
        </div>

        <div className="space-y-6">
          {t.items.map((item, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 border border-slate-100 dark:border-slate-800">
              {/* Myth */}
              <div className="flex items-start gap-3 mb-4">
                <span className="material-symbols-outlined text-red-500 text-2xl mt-0.5">cancel</span>
                <div>
                  <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Myth</p>
                  <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 italic">{item.myth}</p>
                </div>
              </div>
              {/* Fact */}
              <div className="flex items-start gap-3 ml-0 md:ml-9">
                <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-2xl mt-0.5">check_circle</span>
                <div>
                  <p className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-1">Fact</p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.fact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
