import { ArrowDown, Linkedin } from 'lucide-react';

export default function Hero() {
  const handleBookCall = () => {
    window.open('https://calendly.com/vickyirvin/30-minute-meeting', '_blank');
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center mb-8 animate-fade-in">
          <img
            src="/1674073753279.jpeg"
            alt="Vicky Irvin"
            className="w-16 h-16 rounded-full object-cover border-2 border-teal-400/30 mb-3"
          />
          <div className="flex items-center gap-2">
            <p className="text-teal-300 text-sm font-medium">Vicky Irvin</p>
            <a
              href="https://www.linkedin.com/in/vickyirvin/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#0A66C2] hover:bg-[#004182] transition-colors duration-200 rounded"
              style={{ width: '16px', height: '16px', padding: '2px' }}
              aria-label="LinkedIn profile"
            >
              <Linkedin size={10} strokeWidth={2.5} className="text-white" />
            </a>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight animate-fade-in leading-tight">
          Flexible Product Leadership to Augment Your Team
        </h1>

        <p className="text-lg md:text-xl text-teal-100 mb-4 max-w-3xl mx-auto animate-slide-up stagger-1 leading-relaxed">
          I partner with growth-stage SaaS businesses as a hands-on fractional leader—delivering proven expertise from seed stage through $200M in ARR.
        </p>

        <p className="text-base md:text-lg text-teal-200/80 mb-10 max-w-2xl mx-auto animate-slide-up stagger-2">
          I specialize in leading new product initiatives, helping companies explore fresh opportunities without pulling their core teams off critical work.
        </p>

        <button
          onClick={handleBookCall}
          className="animate-slide-up stagger-3 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50 focus:outline-none focus:ring-4 focus:ring-teal-400/50"
        >
          Book a Discovery Call
        </button>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-teal-300 hover:text-teal-200 transition-colors duration-300 animate-bounce cursor-pointer focus:outline-none"
        aria-label="Scroll to services"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}
