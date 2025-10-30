import { TrendingUp, Target, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Stat {
  icon: React.ElementType;
  label: string;
  value: string;
}

const stats: Stat[] = [
  {
    icon: Target,
    label: '0→1 Product Launches',
    value: 'Multiple',
  },
  {
    icon: TrendingUp,
    label: 'Revenue Scale',
    value: '$8M → $35M',
  },
  {
    icon: Users,
    label: 'Growth-Stage Focus',
    value: 'SaaS Teams',
  },
];

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = stat.icon;

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
      className={`text-center transition-all duration-500 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      } stagger-${index + 1}`}
    >
      <div className="mb-4 inline-block p-4 bg-teal-500/10 rounded-full">
        <Icon size={40} className="text-teal-400" />
      </div>
      <div className="text-3xl md:text-4xl font-semibold text-white mb-2">
        {stat.value}
      </div>
      <div className="text-teal-200 text-sm md:text-base">
        {stat.label}
      </div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="px-4 py-20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-800/30 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-12">
          <h2 className="text-2xl md:text-3xl font-light text-center text-white mb-12">
            Track Record of Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
