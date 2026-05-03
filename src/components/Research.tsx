import { useAppContext } from '../context/AppContext';
import anatomyPdf from '../assets/AnatomyPosterTagalog2.pdf';
import dohPdf from '../assets/phl-rh-32-01-operationalguidance-2014-eng-clinical-standards-manual-family-planning.pdf';

export default function Research() {
  const { t: allT } = useAppContext();
  const t = allT.research;

  return (
    <section id="research" className="py-20 px-6 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto space-y-10">

        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t.title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.stats.map((stat: { value: string, label: string }, i: number) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-100 dark:border-slate-700 text-center space-y-3">
              <p className="text-5xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-slate-400 dark:text-slate-500 italic mb-8">{t.source}</p>

        {/* Resources */}
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
