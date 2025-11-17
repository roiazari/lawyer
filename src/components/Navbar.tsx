import { Scale, Menu, X } from 'lucide-react'; // 👈 ייבא את Menu ו-X
import React, { useState } from 'react'; // 👈 ייבא את useState


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
  // 👈 1. הוסף מצב לשליטה על תפריט הנייד
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollToSection = (id: string) => {
    scrollToSection(id);
    // סגור את התפריט הנייד לאחר בחירת פריט
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* 👈 צד ימין: לוגו ושם עורך הדין */}
          <div className="flex items-center gap-2">
            <Scale className={`w-8 h-8 transition-colors duration-300 ${scrollY > 50 ? 'text-amber-700' : 'text-white'
              }`} />

            <span className={`text-2xl font-bold transition-colors duration-300 ${scrollY > 50 ? 'text-gray-900' : 'text-white'
              }`}>
              {lawyerName}
            </span>
          </div>

          {/* 👈 צד שמאל: תפריט דסקטופ (גלוי רק ב-md) */}
          <div className="hidden md:flex gap-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleScrollToSection(id)} // השתמש ב-handleScrollToSection
                className={`transition-all duration-300 font-medium ${scrollY > 50
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

          {/* 👈 כפתור המבורגר (גלוי רק מתחת ל-md) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${scrollY > 50
                  ? 'text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
                }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 👈 תפריט נייד נפתח/נסגר */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden transition-all duration-500 ease-in-out ${scrollY > 50 ? 'bg-white shadow-md' : 'bg-gray-900/90'
        }`}>
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleScrollToSection(id)} // השתמש ב-handleScrollToSection
              className={`block text-right px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${activeSection === id
                  ? 'bg-amber-100 text-amber-700'
                  : scrollY > 50
                    ? 'text-gray-700 hover:bg-gray-50 hover:text-amber-700'
                    : 'text-white hover:bg-white/10 hover:text-amber-200'
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;