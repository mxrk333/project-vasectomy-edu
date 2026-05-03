import { useAppContext } from '../context/AppContext';

export default function Overview() {
  const { t: allT } = useAppContext();
  const t = allT.overview;

  return (
    <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Overview */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl">visibility</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              {t.overviewTitle}
            </h2>
          </div>
          <div className="w-16 h-1 bg-blue-600 rounded-full" />
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.overviewDesc}
          </p>
        </div>

        {/* Mission & Purpose */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl">flag</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              {t.missionTitle}
            </h2>
          </div>
          <div className="w-16 h-1 bg-blue-600 rounded-full" />

          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.missionDesc}
          </p>

          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {t.missionSubDesc}
          </p>

          <ul className="space-y-2">
            {t.missionItems.map((item: string, i: number) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
              >
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-xl mt-0.5 shrink-0">check_circle</span>
                <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed italic border-l-2 border-blue-300 dark:border-blue-700 pl-4">
            {t.missionClosing}
          </p>
        </div>

      </div>
    </section>
  );
}
