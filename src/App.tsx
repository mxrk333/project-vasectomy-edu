
function App() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-white/20 dark:border-slate-800 shadow-[0px_20px_50px_rgba(0,98,255,0.05)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full">
          <div className="text-xl font-bold tracking-tighter text-blue-600 dark:text-blue-400">
            Cutting Ties, Keeping Love
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            <a className="text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 pb-1 font-['Inter'] antialiased tracking-tight" href="#">Home</a>
            <a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors font-['Inter'] antialiased tracking-tight hover:scale-105 transition-transform duration-200" href="#">What is Vasectomy?</a>
            <a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors font-['Inter'] antialiased tracking-tight hover:scale-105 transition-transform duration-200" href="#">Myths vs Facts</a>
            <a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors font-['Inter'] antialiased tracking-tight hover:scale-105 transition-transform duration-200" href="#">Benefits</a>
            <a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors font-['Inter'] antialiased tracking-tight hover:scale-105 transition-transform duration-200" href="#">Research</a>
            <a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors font-['Inter'] antialiased tracking-tight hover:scale-105 transition-transform duration-200" href="#">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input className="bg-surface-container-low border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-primary w-48" placeholder="Search..." type="text"/>
              <span className="material-symbols-outlined absolute right-3 top-2 text-outline text-sm" style={{fontVariationSettings: "'FILL' 0"}} data-icon="search">search</span>
            </div>
            <button className="material-symbols-outlined text-slate-600 hover:text-blue-600 transition-colors" data-icon="language">language</button>
            <button className="material-symbols-outlined text-slate-600 hover:text-blue-600 transition-colors" data-icon="dark_mode">dark_mode</button>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[819px] flex items-center justify-center px-8 overflow-hidden">
          {/* Abstract 3D Accents */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase tracking-widest">
                Modern Family Planning
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-background">
                Empowering Choices for Modern Families
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                A brief, friendly introduction to vasectomy as a safe, effective, and permanent family planning option. We're here to help you navigate this choice with clinical precision and human empathy.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-primary-container text-on-primary-container font-headline-md rounded-xl hover:scale-105 transition-transform shadow-ambient">
                  Get Started
                </button>
                <button className="px-8 py-4 border-2 border-primary text-primary font-headline-md rounded-xl hover:bg-primary-fixed transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-ambient glass-card p-4">
                <img className="w-full h-auto rounded-2xl object-cover aspect-[4/3]" alt="A warm, professional healthcare setting featuring a friendly female doctor talking reassuringly to a smiling Filipino couple." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPY-0VnPjaT1MPPwu0vnonQcixNtq6N4IxFqV0f-vBXfReKcKy9jvFSF87eFGkvqMlI2DjpjE6yFZoAnCFevoGuc3ElivUEvp0pWG-_jvSk1CdAGZ-KIkBPwYP6MGKL5ePSuwTWmOtveerovkmsJti9en-fdtXjPScQfPYlHNx2BFDpl-oC_6iFvPT-R5S09ooEjfU6f7VV4f2thq1kzthe8vjeUvTEoSCm-KTIGZMgM5smiouC8bk1DMl-Qpk2Wjgl5pJikP70Vg"/>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Bento Grid */}
        <section className="py-24 bg-surface-container-low px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Mission Card */}
              <div className="md:col-span-8 glass-card p-12 rounded-3xl flex flex-col justify-center space-y-6 shadow-ambient border-primary/5">
                <span className="material-symbols-outlined text-primary text-4xl" data-icon="volunteer_activism">volunteer_activism</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Our Mission &amp; Purpose</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Our mission is to provide evidence-based education and support for couples in <span className="font-bold text-primary">Barangay San Isidro, Parañaque City</span>. We believe that informed choices lead to stronger, happier families.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xs font-bold text-primary">SI</div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-200 flex items-center justify-center text-xs font-bold text-primary">PC</div>
                  </div>
                  <span className="text-sm font-label-caps text-outline uppercase">Supporting Parañaque Families</span>
                </div>
              </div>
              
              {/* Local Connection Card */}
              <div className="md:col-span-4 bg-primary text-on-primary p-12 rounded-3xl shadow-ambient relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <span className="material-symbols-outlined text-9xl" data-icon="location_on">location_on</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4">Location Focus</h3>
                <p className="font-body-md opacity-90 mb-6">Dedicated clinical services and educational workshops right here in San Isidro.</p>
                <div className="h-32 w-full rounded-xl overflow-hidden mb-4">
                  <img className="w-full h-full object-cover" alt="Aerial view of a vibrant residential neighborhood in Parañaque City" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBArnMfIi498JVIGCv7cZTZoLTRQiTMOZstNfZeBXCgclTbrE13mt2Ro0k-rq_5DW3_zy2wSFfRCzX9gv7IFH5k0rbgdRFz1N95E5hnHpwlgmT7NlBWerLwi98d8SfIfrAbtIaHcNmgiVE7jLSZpdz3M9NcI6iMuXUH8DURCNtcAh1g0qCl46yXuXj2KkFvyADCTTstqLQIQqPaHw4mahSyYO6V2mQnZLQ66ScnLxJ3heqKOc1hZZH0MvzOXa5oh2X-yAQ7n9br_2U"/>
                </div>
                <a className="inline-flex items-center gap-2 font-bold hover:underline" href="#">
                  View Clinics <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features/Process */}
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

        {/* Final Call to Action */}
        <section className="py-24 px-8">
          <div className="max-w-5xl mx-auto glass-card rounded-[2rem] overflow-hidden shadow-ambient flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-12 space-y-8">
              <h2 className="font-headline-lg text-headline-lg">Ready to take the next step?</h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Join hundreds of families in Parañaque who have chosen a future of peace of mind and shared responsibility.
              </p>
              <button className="w-full py-4 bg-primary text-on-primary font-headline-md rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                Get Started Today <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="w-full md:w-1/2 h-full min-h-[400px]">
              <img className="w-full h-full object-cover" alt="A happy Filipino couple laughing and relaxing in a sun-drenched home garden, symbolizing peace of mind and recovery." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd8OosJe8LDoFXO622YevTrvfITxTe1CqwaluyHXZQOAdZ6S4GbVop7Cmmj9uX3sU1y5S-Rg7C4f64ThfugKZ2n86wl6B_V4mrJGy_R_GBMK5Hh8chLU0NaVswVjjEL2zH5B866rKyFsUgENM3TRc2lIbnpdWeHYcS3X2x2ZfdInJCLcDycTQ4KprTFyZS-6BaTy6Ca9TNGXlgUDmGPBelw8zXaYwntHOqb0nIKZkFLK4ke0fob8HDw1XVLOr8Uwqfrrgy_wmpjV0"/>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-lg py-12 border-t border-slate-200 dark:border-slate-800 flat no-shadows">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="font-bold text-blue-600 text-xl">Cutting Ties, Keeping Love</div>
            <p className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400">
              © 2024 Cutting Ties, Keeping Love. Clinical precision meets human empathy.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 md:justify-end">
            <a className="text-slate-500 hover:text-blue-600 transition-colors hover:underline decoration-blue-600 underline-offset-4 text-sm font-['Inter']" href="#">Privacy Policy</a>
            <a className="text-slate-500 hover:text-blue-600 transition-colors hover:underline decoration-blue-600 underline-offset-4 text-sm font-['Inter']" href="#">Terms of Service</a>
            <a className="text-slate-500 hover:text-blue-600 transition-colors hover:underline decoration-blue-600 underline-offset-4 text-sm font-['Inter']" href="#">Clinical Sources</a>
            <a className="text-slate-500 hover:text-blue-600 transition-colors hover:underline decoration-blue-600 underline-offset-4 text-sm font-['Inter']" href="#">Medical Disclaimer</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
