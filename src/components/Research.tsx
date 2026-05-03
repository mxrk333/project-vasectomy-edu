import { useAppContext } from '../context/AppContext';
export default function Research() {
  const { t: allT } = useAppContext();
  const t = allT.research;

  return (
    <section id="research" className="py-20 px-6 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Research Findings */}
        {t.findings && (
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl text-amber-500">science</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t.findings.sectionTitle}</h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{t.findings.sectionSubtitle}</p>
            </div>

            {/* Summary */}
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl p-6">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{t.findings.summary}</p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.findings.keyStats.map((stat: { value: string, label: string }, i: number) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-100 dark:border-slate-700 text-center space-y-2">
                  <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">{stat.value}</p>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Key Results */}
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-500">lab_research</span>
                Key Results
              </h4>
              <div className="space-y-3">
                {t.findings.keyResults.map((result: string, i: number) => (
                  <div key={i} className="flex gap-3 bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700">
                    <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{i + 1}</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Influences + Conclusion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Key Influences */}
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-2xl p-6 space-y-4">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-500">trending_up</span>
                  {t.findings.keyInfluencesTitle}
                </h4>
                <ul className="space-y-2">
                  {t.findings.keyInfluences.map((item: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <span className="material-symbols-outlined text-amber-500 text-[16px]">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conclusion */}
              <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 space-y-4">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">task_alt</span>
                  Conclusion
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t.findings.conclusion}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
