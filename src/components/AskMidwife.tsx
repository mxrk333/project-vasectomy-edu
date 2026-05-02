import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

export default function AskMidwife() {
  const { t: allT } = useAppContext();
  const t = allT.askMidwife;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto space-y-10">

        <div className="flex items-start gap-4">
          <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-4xl mt-1">support_agent</span>
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t.title}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">{t.subtitle}</p>
          </div>
        </div>

        <div className="space-y-3">
          {t.items.map((item, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-colors ${
                openIndex === i
                  ? 'bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800'
                  : 'bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-slate-900 dark:text-white pr-4">{item.q}</span>
                <span className={`material-symbols-outlined text-xl transition-transform duration-200 shrink-0 ${
                  openIndex === i ? 'rotate-180 text-blue-600' : 'text-slate-400'
                }`}>
                  expand_more
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
