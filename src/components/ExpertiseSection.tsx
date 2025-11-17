import React from 'react';
import { CheckCircle } from 'lucide-react'; 
import { LAWYER_INFO } from '../data/lawyerInfo';
// 🛑 ייבוא קומפוננטת FadeInOnScroll
import FadeInOnScroll from './FadeInOnScroll'; 

const ExpertiseSection: React.FC = () => {
    
  return (
    <section id="expertise" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            למה לבחור במשרדנו?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            המחויבות שלנו להצלחתך היא מה שמייחד אותנו
          </p>
        </div>

        {/* הפריסה העיקרית של שני טורים */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* טור 1: הפסקה הארוכה המרכזית */}
          <div>
            <h3 className="text-3xl font-semibold text-amber-400 mb-6">
              מצוינות משפטית, עם דגש על יחס אישי
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              במשרדנו, אנו מאמינים כי ייצוג משפטי אפקטיבי מתחיל בהבנה עמוקה של הצרכים הייחודיים של הלקוח. אנו לא רואים בתיק שלך רק "מקרה", אלא סיפור אישי הדורש פתרון יצירתי, מקצועי ואינטגרלי. עם ניסיון עשיר בליטיגציה וניהול משברים, אנו מציעים לא רק ידע משפטי עדכני, אלא גם תמיכה רגשית וליווי צמוד מהרגע הראשון ועד להשגת התוצאה הטובה ביותר עבורך.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              האסטרטגיה שלנו מבוססת על שקיפות מלאה, הערכת סיכונים מציאותית ובניית נתיב פעולה ברור, תוך שימת דגש על סגירת התיק במהירות וביעילות מרבית, בבית המשפט ומחוצה לו.
            </p>
          </div>

          {/* 🛑 טור 2: רשימת היתרונות (Staggered List) */}
          <div className="space-y-4 pt-4 max-w-md mx-auto">
            {LAWYER_INFO.benefits.map((benefit, index) => (
              // 🛑 שימוש ב-FadeInOnScroll
              // החישוב index * 150 נותן 0ms, 150ms, 300ms, 450ms... להשהיה מדורגת.
              <FadeInOnScroll key={index} delay={index * 150}> 
                <div
                  // 🛑 המחלקות הללו נשארות רק לעיצוב, ללא קשר לאנימציה
                  className="flex items-start bg-white bg-opacity-10 p-4 rounded-lg shadow-md"
                >
                  <CheckCircle className="w-6 h-6 flex-shrink-0 text-amber-400 mt-1 ml-3" />
                  <p className="text-gray-200 text-lg">{benefit}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;