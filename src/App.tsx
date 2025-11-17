import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ExpertiseSection from './components/ExpertiseSection';
import ContactSection from './components/ContactSection';
import AccessibilityWidget from './components/AccessibilityWidget';
import Footer from './components/Footer';
import { LAWYER_INFO } from './data/lawyerInfo';
import WhatsAppButton from './components/WhatsAppButton';
import Contact from './components/Contact';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['hero', 'about', 'services', 'expertise', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // קביעת קטע פעיל כאשר הוא נמצא בטווח 100 פיקסלים מהחלק העליון של המסך
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar
        scrollY={scrollY}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        lawyerName={LAWYER_INFO.name}
      />
      
      <main>
        <HeroSection
          scrollToSection={scrollToSection}
          lawyerName={LAWYER_INFO.name}
          lawyerTitle={LAWYER_INFO.title}
        />
        <AboutSection />
        <ServicesSection />
        <ExpertiseSection />
        <ContactSection />
        <AccessibilityWidget/>
        <WhatsAppButton/>
      </main>

      <Footer lawyerName={LAWYER_INFO.name} />
    </div>
  );
}

export default App;