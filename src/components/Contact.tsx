import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import qrImage from '../assets/qr-vasectomy.png';

export default function Contact() {
  const { t: allT } = useAppContext();
  const t = allT.contact;
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(res => {
      setIsSubmitting(false);
      if (res.ok) setSubmitted(true);
    }).catch(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto space-y-10">

        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t.title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">{t.subtitle}</p>
        </div>

        {/* Health Center Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {t.locations.map((loc: { name: string; subtitle: string; location: string; fbPage: string; email: string; contactNumber: string }, i: number) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">local_hospital</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">{loc.name}</h4>
                  {loc.subtitle && <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{loc.subtitle}</p>}
                </div>
              </div>

              <div className="space-y-3 pl-1">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-slate-400 text-[18px] mt-0.5">location_on</span>
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.location)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline leading-relaxed flex items-start gap-1 group"
                  >
                    {loc.location}
                    <span className="material-symbols-outlined text-[14px] mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">directions</span>
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-slate-400 text-[18px] mt-0.5">mail</span>
                  <div className="flex flex-col gap-1">
                    {Array.isArray(loc.email) ? loc.email.map((e: string, j: number) => (
                      <a key={j} href={`mailto:${e}`} className="text-sm text-blue-600 dark:text-blue-400 hover:underline break-all">{e}</a>
                    )) : (
                      <a href={`mailto:${loc.email}`} className="text-sm text-blue-600 dark:text-blue-400 hover:underline break-all">{loc.email}</a>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 text-[18px]">call</span>
                  {loc.contactNumber === 'To be updated' ? (
                    <span className="text-sm text-slate-400 italic">{loc.contactNumber}</span>
                  ) : (
                    <a href={`tel:${loc.contactNumber}`} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">{loc.contactNumber}</a>
                  )}
                </div>

                {loc.fbPage && (
                  <div className="flex items-center gap-3">
                    <svg className="w-[18px] h-[18px] text-[#1877F2] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                    <a href={loc.fbPage} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">{loc.name}</a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* QR Code */}
          <div className="flex flex-col">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-100 dark:border-slate-800 space-y-4 flex flex-col items-center justify-center flex-1">
              <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">qr_code_2</span>
                {t.qrTitle}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">{t.qrDesc}</p>
              <button 
                onClick={() => setShowQrModal(true)}
                className="bg-white dark:bg-slate-800 rounded-lg p-4 inline-block border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors group relative cursor-pointer"
              >
                <img
                  src={qrImage}
                  alt="QR Code"
                  className="w-40 h-40 object-contain group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5 rounded-lg">
                  <span className="material-symbols-outlined text-blue-600 bg-white rounded-full p-1 shadow-sm">zoom_in</span>
                </div>
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col">
            {submitted ? (
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center space-y-4">
                <span className="material-symbols-outlined text-green-600 text-5xl">check_circle</span>
                <h3 className="text-xl font-bold text-green-800 dark:text-green-300">{t.successTitle}</h3>
                <p className="text-green-700 dark:text-green-400">{t.successMsg}</p>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/ajax/chinaldea67@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="New Inquiry - Cutting Ties" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">{t.nameLabel}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-5 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none transition-all shadow-sm"
                    placeholder={t.namePlaceholder}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">{t.emailLabel}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-5 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none transition-all shadow-sm"
                    placeholder={t.emailPlaceholder}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">{t.messageLabel} <span className="text-slate-400 font-normal">(Optional)</span></label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-5 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none transition-all shadow-sm resize-none"
                    placeholder={t.messagePlaceholder}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="material-symbols-outlined text-lg animate-spin">progress_activity</span>
                  ) : (
                    <span className="material-symbols-outlined text-lg">send</span>
                  )}
                  {isSubmitting ? 'Sending...' : t.sendBtn}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      {/* QR Modal */}
      {showQrModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
          onClick={() => setShowQrModal(false)}
        >
          <div 
            className="bg-white dark:bg-slate-900 p-8 rounded-2xl max-w-sm w-full relative shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowQrModal(false)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">{t.qrTitle}</h3>
            <img
              src={qrImage}
              alt="QR Code Large"
              className="w-full h-auto aspect-square object-contain rounded-lg border border-slate-100 dark:border-slate-800"
            />
            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">
              Scan to open website on your phone
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
