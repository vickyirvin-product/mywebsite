import { Mail, ArrowRight } from 'lucide-react';

export default function CTAFooter() {
  const handleBookCall = () => {
    window.location.href = 'mailto:contact@example.com?subject=Discovery Call Request';
  };

  return (
    <section className="px-4 py-20 relative">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-teal-500/20 to-slate-800/40 backdrop-blur-sm border border-teal-500/30 rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Ready to Explore New Opportunities?
            </h2>

            <p className="text-lg md:text-xl text-teal-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how fractional product leadership can help your team explore what's next without losing momentum on what's working.
            </p>

            <button
              onClick={handleBookCall}
              className="group bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50 focus:outline-none focus:ring-4 focus:ring-teal-400/50 inline-flex items-center gap-3"
            >
              <Mail size={24} />
              Book a Discovery Call
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <div className="mt-8 text-sm text-teal-200/70">
              30-minute consultation · No commitment required
            </div>
          </div>
        </div>

        <footer className="mt-12 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Fractional Product Leadership. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
