export default function Features() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">A Path Rooted in Empathy</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">We bridge the gap between clinical excellence and human connection through every step of your journey.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center space-y-6 group">
            <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>menu_book</span>
            </div>
            <h3 className="font-headline-md text-headline-md">Evidence-Based</h3>
            <p className="text-on-surface-variant">Access the latest medical research and facts about vasectomy safety and success rates.</p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-6 group">
            <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>groups</span>
            </div>
            <h3 className="font-headline-md text-headline-md">Couple-Centric</h3>
            <p className="text-on-surface-variant">Resources designed to help partners communicate and make decisions together with confidence.</p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-6 group">
            <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>health_and_safety</span>
            </div>
            <h3 className="font-headline-md text-headline-md">Safety First</h3>
            <p className="text-on-surface-variant">Guiding you toward accredited medical facilities and trusted clinical professionals in Parañaque.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
