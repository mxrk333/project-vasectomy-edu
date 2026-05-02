import { useAppContext } from '../context/AppContext';

export default function Benefits() {
  const { t: allT } = useAppContext();
  const t = allT.benefits;

  return (
    <section id="benefits" className="py-20 px-6 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto space-y-10">

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.items.map((item, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-100 dark:border-slate-700 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
