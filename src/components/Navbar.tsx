import { Scale } from 'lucide-react';
import React from 'react';


interface NavbarProps {
  scrollY: number;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  lawyerName: string;
}

const navItems = [
  { id: 'hero', label: 'ראשי' },
  { id: 'about', label: 'אודות' },
  { id: 'services', label: 'שירותים' },
  { id: 'expertise', label: 'התמחות' },
  { id: 'contact', label: 'יצירת קשר' }
];

const Navbar: React.FC<NavbarProps> = ({ scrollY, activeSection, scrollToSection, lawyerName }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Scale className={`w-8 h-8 transition-colors duration-300 ${
              scrollY > 50 ? 'text-amber-700' : 'text-white'
            }`} />

            <span className={`text-2xl font-bold transition-colors duration-300 ${
              scrollY > 50 ? 'text-gray-900' : 'text-white'
            }`}>
              {lawyerName}
            </span>
          </div>

          <div className="hidden md:flex gap-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`transition-all duration-300 font-medium ${
                  scrollY > 50
                    ? activeSection === id
                      ? 'text-amber-700'
                      : 'text-gray-700 hover:text-amber-700'
                    : 'text-white hover:text-amber-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;