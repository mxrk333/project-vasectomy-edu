import { useAppContext } from '../context/AppContext';

export default function WhatIs() {
  const { t: allT } = useAppContext();
  const t = allT.whatis;

  return (
    <section id="whatis" className="py-20 px-6 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto space-y-12">

        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {t.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.definition}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* How it works */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-100 dark:border-slate-700 space-y-3">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-2xl">science</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.howTitle}</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.howDesc}
            </p>
          </div>

          {/* Procedure */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-100 dark:border-slate-700 space-y-3">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-2xl">medical_services</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.procedureTitle}</h3>
            </div>
            <ul className="space-y-2">
              {t.procedureItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-lg mt-0.5">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Safety */}
        <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-8 border border-blue-100 dark:border-blue-900">
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl mt-1">verified_user</span>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.safetyTitle}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t.safetyDesc}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
