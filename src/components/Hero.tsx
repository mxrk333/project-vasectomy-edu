export default function Hero() {
  return (
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
  );
}
