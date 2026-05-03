import { useAppContext } from '../context/AppContext';
import typesImg from '../assets/vasectomy-types.png';
import howWorksImg from '../assets/vasectomy-how-works.png';
import procedureImg from '../assets/vasectomy-procedure.png';

export default function WhatIs() {
  const { t: allT } = useAppContext();
  const t = allT.whatis;

  return (
    <section id="whatis" className="py-20 px-6 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Title + Definition */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {t.title}
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto" />
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.definition}
          </p>
        </div>

        {/* Types of Vasectomy */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl">category</span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.typesTitle}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              {t.types.map((type: { name: string; desc: string }, i: number) => (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 space-y-2 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-xl">
                      {i === 0 ? 'content_cut' : 'radio_button_unchecked'}
                    </span>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{type.name}</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <img
                src={typesImg}
                alt="Comparing vasectomy types"
                className="w-full max-w-md rounded-xl shadow-md border border-slate-200 dark:border-slate-700"
              />
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl">science</span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.howTitle}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <img
                src={howWorksImg}
                alt="How vasectomy works — before and after"
                className="w-full max-w-md rounded-xl shadow-md border border-slate-200 dark:border-slate-700"
              />
            </div>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed order-1 lg:order-2">
              {t.howDesc}
            </p>
          </div>
        </div>

        {/* Procedure Overview */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl">medical_services</span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.procedureTitle}</h3>
          </div>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.procedureIntro}
          </p>
          <div className="flex justify-center">
            <img
              src={procedureImg}
              alt="Vasectomy procedure steps"
              className="w-full max-w-2xl rounded-xl shadow-md border border-slate-200 dark:border-slate-700"
            />
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {t.procedureItems.map((item: string, i: number) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed italic border-l-2 border-blue-300 dark:border-blue-700 pl-4">
            {t.procedureRecovery}
          </p>
        </div>

        {/* Safety & Effectiveness */}
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-8 border border-blue-100 dark:border-blue-900 space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl">verified_user</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.safetyTitle}</h3>
            </div>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">{t.safetyDesc}</p>

            <h4 className="text-lg font-semibold text-slate-800 dark:text-white pt-2">{t.effectivenessTitle}</h4>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">{t.effectivenessDesc}</p>
          </div>

          {/* Important Reminders */}
          <div className="bg-amber-50 dark:bg-amber-950/20 rounded-xl p-6 border border-amber-200 dark:border-amber-900 space-y-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-2xl">warning</span>
              <h4 className="text-base font-semibold text-amber-800 dark:text-amber-300">
                {allT.hero.badge === 'Cutting Ties, Keeping Love' ? 'Mahalagang Paalala' : 'Important Reminders'}
              </h4>
            </div>
            <ul className="space-y-2">
              {t.reminders.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-lg mt-0.5 shrink-0">priority_high</span>
                  <span className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* References */}
          <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
            {t.references}
          </p>
        </div>

      </div>
    </section>
  );
}
