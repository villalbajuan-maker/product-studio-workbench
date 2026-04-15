import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import WhatWeDo from './components/WhatWeDo';
import ArtifactPreview from './components/ArtifactPreview';
import WhoItIsFor from './components/WhoItIsFor';
import Outcomes from './components/Outcomes';
import CTASection from './components/CTASection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Nav />
      <main>
        <Hero
          onPrimaryCTA={() => scrollToId('contact')}
          onSecondaryCTA={() => scrollToId('artifact')}
        />
        <Problem />
        <WhatWeDo />
        <ArtifactPreview />
        <WhoItIsFor />
        <Outcomes />
        <CTASection onCTA={() => scrollToId('contact')} />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
