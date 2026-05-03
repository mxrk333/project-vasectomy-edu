import { useState } from 'react';
import logoIcon from '../assets/icon.svg';
import { useAppContext } from '../context/AppContext';

export default function Footer() {
  const { t: allT, isReferencesModalOpen, setReferencesModalOpen } = useAppContext();
  const t = allT.footer;

  return (
    <>
      <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-16 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto space-y-10">

          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center">
                <img src={logoIcon} alt="Logo" className="h-16 w-16 invert" />
              </div>
              <p className="text-sm max-w-xs leading-relaxed">{t.tagline}</p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {t.links.map((link: string, i: number) => {
                const isReference = link === 'References';
                // Map the localized names to the respective section IDs
                const getHref = () => {
                  if (link.includes('Ano ang') || link.includes('What is')) return '#whatis';
                  if (link.includes('Myths')) return '#myths';
                  if (link.includes('Benepisyo') || link.includes('Benefits')) return '#benefits';
                  if (link.includes('FAQ')) return '#faq';
                  if (link.includes('Research')) return '#research';
                  return '#';
                };
                
                return isReference ? (
                  <button
                    key={i}
                    onClick={() => setReferencesModalOpen(true)}
                    className="text-sm hover:text-white transition-colors cursor-pointer text-slate-400"
                  >
                    {link}
                  </button>
                ) : (
                  <a 
                    key={i} 
                    href={getHref()} 
                    className="text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    {link}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6">
            <p className="text-xs text-slate-500">{t.copyright}</p>
          </div>

        </div>
      </footer>

      {/* References Modal */}
      {isReferencesModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900/50">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {t.referencesModalTitle}
              </h3>
              <button 
                onClick={() => setReferencesModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-500"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4">
              <ul className="space-y-4">
                {t.allReferences.map((ref: { text: string; url: string }, i: number) => (
                  <li key={i} className="flex gap-3 items-start p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-800">
                    <span className="material-symbols-outlined text-blue-500 mt-0.5 text-xl shrink-0">link</span>
                    <a 
                      href={ref.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline leading-relaxed"
                    >
                      {ref.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
