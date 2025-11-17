import { Award, Scale } from 'lucide-react';
import React from 'react';
import CounterNumber from './CounterNumber';
import { LAWYER_INFO } from '../data/lawyerInfo';

interface AboutSectionProps {
    // ניתן להעביר כאן נתונים מותאמים אישית אם תרצה, אך כרגע הם בקובץ LAWYER_INFO
}

const AboutSection: React.FC<AboutSectionProps> = () => {
    return (
        <section id="about" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="animate-slide-in-right">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            אודות המשרד
                        </h2>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            משרד עורכי הדין שלנו מתמחה במתן שירותים משפטיים ברמה הגבוהה ביותר. עם ניסיון של למעלה מ-15 שנה בתחום המשפט, אנו מחויבים להגן על זכויות הלקוחות שלנו ולהשיג עבורם את התוצאות הטובות ביותר.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            אנו גאים בגישה האישית והמקצועית שלנו, תוך הקפדה על שקיפות מלאה ותקשורת רציפה עם לקוחותינו לאורך כל התהליך המשפטי.
                        </p>
                        <div className="mt-8 flex gap-8">
                            {LAWYER_INFO.stats.map((stat, index) => (
                                <div key={index} className="text-center animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="text-5xl font-bold text-gray-400 mb-2">
                                        <CounterNumber end={stat.end} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative animate-slide-in-left">
                        <div className="aspect-square bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl shadow-2xl flex items-center justify-center">
                            <img
                                src="/pic.png" // הנתיב לתמונה בתיקיית public
                                alt="עורכת דין"
                                className="w-full rounded-2xl h-full object-cover opacity-80" // שיניתי את העיצוב כדי להתאים לתמונה
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-xl shadow-xl">
                            <div className="flex items-center gap-4">
                                <Scale className="w-12 h-12 text-amber-700" />
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">מצוינות</div>
                                    <div className="text-gray-600">ומקצועיות</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;