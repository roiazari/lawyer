// src/components/ServicesSection.tsx

import React from 'react';
import { LAWYER_INFO } from '../data/lawyerInfo';
// 🛑 שימו לב: אין צורך לייבא CheckCircle יותר!
import FadeInOnScroll from './FadeInOnScroll'; 
// ודא שכל האייקונים הדרושים (Scale, Users, Handshake וכו') מיובאים כאן אם אתה לא משתמש ב-import גלובלי.

const ServicesSection: React.FC = () => {
    
    // בדיקת תקינות (בסיסית)
    if (!LAWYER_INFO.services.every(s => s.details && Array.isArray(s.details))) {
        return <section className="py-24 bg-red-100 text-center">שגיאת נתונים: חסרים פרטי 'details' ב-lawyerInfo.ts.</section>;
    }

    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ... כותרות ... */}

                <div className="grid md:grid-cols-3 gap-8">
                    {LAWYER_INFO.services.map((service, index) => (
                        <FadeInOnScroll key={index} delay={index * 150}> 
                            <div
                                className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col justify-start border-t-4 border-amber-700 hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* כותרת ראשית */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center border-b pb-2 border-gray-200">
                                    {service.title}
                                </h3>
                                
                                {/* 🛑 רשימת היתרונות המותאמת */}
                                <ul className="space-y-3 text-right text-base mt-4">
                                    {service.details.map((detail, idx) => {
                                        // 🛑 ניגשים לאייקון ולטקסט מתוך האובייקט
                                        const Icon = detail.icon;
                                        return (
                                            <li key={idx} className="flex items-start text-gray-700">
                                                <Icon className="w-5 h-5 flex-shrink-0 text-amber-700 mt-1 ml-2" />
                                                <span>{detail.text}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                                
                            </div>
                        </FadeInOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;