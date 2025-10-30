import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import SocialProof from './components/SocialProof';
import ValueProposition from './components/ValueProposition';
import CTAFooter from './components/CTAFooter';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      <Hero />
      <ServicesGrid />
      <SocialProof />
      <ValueProposition />
      <CTAFooter />
    </div>
  );
}

export default App;