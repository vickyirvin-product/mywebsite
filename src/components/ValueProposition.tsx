import { CheckCircle2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const benefits = [
  'Keep your core team focused on existing product momentum',
  'Accelerate new initiatives with experienced leadership',
  'Reduce hiring risk with flexible, part-time engagement',
  'Gain strategic insights from pattern recognition across companies',
];

export default function ValueProposition() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="px-4 py-20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">
              The Right Leadership,
              <br />
              <span className="text-teal-400">At the Right Time</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Growth-stage companies often face a dilemma: exploring new product opportunities requires senior product leadership, but pulling your existing team off current work slows momentum.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              As a fractional product leader, I embed with your team to drive new initiatives forward—bringing the experience and strategic thinking you need, without the commitment of a full-time hire.
            </p>
          </div>

          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-slate-800/30 backdrop-blur-sm border border-teal-500/20 rounded-lg p-5 hover:border-teal-500/40 transition-all duration-300"
              >
                <CheckCircle2 size={24} className="text-teal-400 flex-shrink-0 mt-1" />
                <p className="text-slate-200 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
