import { Search, Settings, Rocket } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Search,
    title: 'New Market Exploration',
    description: 'Identify and evaluate new markets or verticals while your core team stays focused.',
  },
  {
    icon: Settings,
    title: 'New Product Strategy',
    description: 'Lead early product definition and validation—from customer research to MVP roadmap.',
  },
  {
    icon: Rocket,
    title: 'Fractional Leadership',
    description: 'Embed as a part-time product leader to support growth-stage transitions or team gaps.',
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-slate-800/50 backdrop-blur-sm border border-teal-500/20 rounded-xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 hover:border-teal-500/40 group ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      } stagger-${index + 1}`}
    >
      <div className="mb-6 inline-block p-4 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20 transition-colors duration-300">
        <Icon size={32} className="text-teal-400 group-hover:text-teal-300 transition-colors duration-300" />
      </div>

      <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-teal-300 transition-colors duration-300">
        {service.title}
      </h3>

      <p className="text-slate-300 leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section id="services" className="px-4 py-20 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center text-white mb-6 tracking-tight">
          When You Need to Explore What's Next—
          <br />
          <span className="text-teal-400">Without Slowing Down What's Working</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
