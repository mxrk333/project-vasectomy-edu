import { useAppContext } from '../context/AppContext';
import anatomyPdf from '../assets/AnatomyPosterTagalog2.pdf';
import dohPdf from '../assets/phl-rh-32-01-operationalguidance-2014-eng-clinical-standards-manual-family-planning.pdf';

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

        {/* Downloadable Resources */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{t.resourcesTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.resources.map((res: { title: string, size: string, downloadName: string }, i: number) => {
              const fileUrl = i === 0 ? anatomyPdf : dohPdf;
              return (
                <a 
                  key={i} 
                  href={fileUrl}
                  download={res.downloadName}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0 group-hover:bg-red-100 dark:group-hover:bg-red-900/40 transition-colors">
                    <span className="material-symbols-outlined text-red-500">picture_as_pdf</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{res.title}</h4>
                    <p className="text-xs text-slate-500">{res.size}</p>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-500 transition-colors">download</span>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
