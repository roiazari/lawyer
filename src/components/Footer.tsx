import React, { useState } from 'react'; // 👈 חובה לייבא useState
import { Linkedin, Facebook, Instagram, Github } from 'lucide-react';
// 👈 יש לוודא שהנתיב הזה נכון לקומפוננטת המודל שלך
import AccessibilityStatement from './AccessibilityStatement'; 

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const [isStatementOpen, setIsStatementOpen] = useState(false); // 👈 מצב חדש למודל

    const socialLinks = [
        {
            icon: Linkedin,
            href: 'https://www.linkedin.com/in/roi-azari/',
            label: 'LinkedIn',
            color: 'hover:text-blue-400'
        },
        {
            icon: Facebook,
            href: 'https://www.facebook.com/roi.azari.2025/?locale=he_IL',
            label: 'Facebook',
            color: 'hover:text-blue-500'
        },
        {
            icon: Instagram,
            href: 'https://www.instagram.com/148roi/',
            label: 'Instagram',
            color: 'hover:text-pink-400'
        }

    ];

    const openStatement = (e: React.MouseEvent) => {
        e.preventDefault(); // מונע ניווט
        setIsStatementOpen(true);
    };

    return (
        <> {/* 👈 עוטף את הפוטר והמודל ב-Fragment */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* עוטף את כל תוכן הפוטר העליון ומרכז אותו */}
                    <div className="flex flex-col items-center justify-center gap-8 mb-12">
                        {/* בלוק "עקבו אחריי" - עכשיו ממורכז לחלוטין */}
                        <div className="text-center">
                            <h4 className="text-sm font-semibold text-gray-300 mb-3">עקבו אחריי</h4>
                            <div className="flex space-x-4 space-x-reverse justify-center">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:scale-110`}
                                            aria-label={social.label}
                                        >
                                            <Icon className="h-10 w-10" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div> {/* סוף הדיב המרכזי העוטף */}

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                        <p className="text-gray-400 text-sm mb-2">
                            © {currentYear} סיגל קליין. כל הזכויות שמורות.
                        </p>
                        
                        {/* 👇 הקישור להצהרת הנגישות - פותח את המודל */}
                        <a 
                            href="#" 
                            onClick={openStatement}
                            className="text-gray-400 hover:text-blue-400 text-sm font-medium transition-colors duration-200 cursor-pointer"
                        >
                            הצהרת נגישות
                        </a>
                        
                    </div>
                </div>
            </footer>

            {/* 👇 קומפוננטת המודל - מוצבת מחוץ לפוטר כדי לצוף מעל הכל */}
            {isStatementOpen && (
                <AccessibilityStatement 
                    isOpen={isStatementOpen}
                    onClose={() => setIsStatementOpen(false)} 
                />
            )}
        </>
    );
};

export default Footer;