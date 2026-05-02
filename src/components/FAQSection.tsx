import { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { translations } from '../data/translations';

interface Message {
  from: 'user' | 'midwife';
  text: string;
}

export default function FAQSection() {
  const { t: allT, language } = useAppContext();
  const t = allT.askMidwife;
  const [messages, setMessages] = useState<Message[]>([
    { from: 'midwife', text: language === 'TL' ? 'Kumusta! Ako ang inyong Midwife Assistant. Magtanong lang kayo tungkol sa vasectomy. (Halimbawa: sakit, recovery, side effects, o gastos)' : 'Hello! I\'m your Midwife Assistant. Feel free to ask me anything about vasectomy. (e.g., pain, recovery, side effects, or cost)' }
  ]);
  const [input, setInput] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Reset greeting when language changes
  useEffect(() => {
    setMessages([
      { from: 'midwife', text: language === 'TL' ? 'Kumusta! Ako ang inyong Midwife Assistant. Magtanong lang kayo tungkol sa vasectomy. (Halimbawa: sakit, recovery, side effects, o gastos)' : 'Hello! I\'m your Midwife Assistant. Feel free to ask me anything about vasectomy. (e.g., pain, recovery, side effects, or cost)' }
    ]);
  }, [language]);

  const findAnswer = (query: string): string => {
    const q = query.toLowerCase();

    // Map each FAQ item index to its explicit English and Tagalog keywords
    const keywords = [
      // 0: Pain
      { tl: ['masakit', 'sakit'], en: ['painful', 'pain', 'hurt'] },
      // 1: Permanent
      { tl: ['permanente', 'habang buhay'], en: ['forever'], shared: ['permanent'] },
      // 2: Recovery
      { tl: ['pahinga', 'gaano katagal'], en: ['how long', 'heal'], shared: ['recovery', 'recover', 'rest'] },
      // 3: Sex
      { tl: ['makipag-sex', 'kama'], en: ['intercourse', 'drive', 'performance'], shared: ['sex', 'libido'] },
      // 4: Side effects
      { tl: ['epekto'], en: ['risk', 'danger'], shared: ['side effect', 'effect', 'side'] },
      // 5: Free/Cost
      { tl: ['libre', 'magkano', 'bayad'], en: ['free', 'cost', 'price'], shared: ['health center'] },
    ];

    for (let i = 0; i < keywords.length; i++) {
      const kw = keywords[i];
      
      // If user uses Tagalog words, respond in Tagalog
      if (kw.tl && kw.tl.some(w => q.includes(w))) {
        return translations.TL.askMidwife.items[i].a;
      }
      // If user uses English words, respond in English
      if (kw.en && kw.en.some(w => q.includes(w))) {
        return translations.EN.askMidwife.items[i].a;
      }
      // If user uses a shared word (like 'permanent'), fall back to the UI language
      if (kw.shared && kw.shared.some(w => q.includes(w))) {
        return language === 'TL' 
          ? translations.TL.askMidwife.items[i].a 
          : translations.EN.askMidwife.items[i].a;
      }
    }

    // Determine language of the query based on common filler words for the fallback message
    const isTagalog = /\b(ang|mga|ba|na|ng|sa|ito|ako|ano|bakit|paano|saan|kailan|po|opo)\b/.test(q);
    if (isTagalog) {
      return 'Pasensya na, hindi ko masagot ang tanong na iyan. Subukan mong magtanong tungkol sa: sakit, recovery, side effects, o gastos.';
    }
    
    const isEnglish = /\b(what|how|where|when|why|is|are|do|does|can|will|the|a|an)\b/.test(q);
    if (isEnglish) {
      return 'Sorry, I couldn\'t find an answer for that. Try asking about: pain, recovery, side effects, or cost.';
    }

    // Default fallback to UI language
    return language === 'TL'
      ? 'Pasensya na, hindi ko masagot ang tanong na iyan. Subukan mong magtanong tungkol sa: sakit, recovery, side effects, o gastos.'
      : 'Sorry, I couldn\'t find an answer for that. Try asking about: pain, recovery, side effects, or cost.';
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { from: 'user', text: userMsg }]);

    setTimeout(() => {
      const answer = findAnswer(userMsg);
      setMessages(prev => [...prev, { from: 'midwife', text: answer }]);
    }, 600);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-5xl mx-auto space-y-10">

        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t.title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {t.items.map((item, i) => (
              <div
                key={i}
                className={`rounded-xl border transition-colors ${
                  openFaq === i
                    ? 'bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800'
                    : 'bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-sm text-slate-900 dark:text-white pr-4">{item.q}</span>
                  <span className={`material-symbols-outlined text-lg transition-transform duration-200 shrink-0 ${
                    openFaq === i ? 'rotate-180 text-blue-600' : 'text-slate-400'
                  }`}>expand_more</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Ask a Midwife Chatbot */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col h-[480px]">
            {/* Header */}
            <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-lg">support_agent</span>
              </div>
              <div>
                <p className="font-semibold text-sm text-slate-900 dark:text-white">{t.title}</p>
                <p className="text-xs text-green-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block"></span>
                  Online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.from === 'user'
                      ? 'bg-blue-600 text-white rounded-br-md'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-bl-md'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-slate-100 dark:border-slate-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={language === 'TL' ? 'Magtanong dito...' : 'Type your question...'}
                  className="flex-1 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-colors"
                />
                <button
                  onClick={handleSend}
                  className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">send</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
