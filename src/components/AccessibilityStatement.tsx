import React, { useEffect, useRef } from "react";
// 🛑 נניח שהנתונים זמינים תחת משתנה SITE_CONFIG בקובץ זה
// צריך לוודא שהנתיב לקובץ נכון בפרויקט שלך:
import { LAWYER_INFO } from '../data/lawyerInfo'; // שינוי הנתיב לפי המבנה שלך

// הגדרת הפרופס הנדרשים כעת
interface StatementProps {
    isOpen: boolean;
    onClose: () => void;
    orgName?: string;
    contactName?: string;
    email?: string;
    phone?: string;
    hours?: string;
    lastUpdated?: string;
}

// 🛑 עדכון ברירות המחדל (Default Props) להשתמש בנתונים מ-LAWYER_INFO
export default function AccessibilityStatement({
    isOpen,
    onClose,
    orgName = LAWYER_INFO.name, // שימוש בשם עורכת הדין/משרד
    contactName = "אחראי נגישות מטעם המשרד", // ייתכן שתצטרך להוסיף שדה זה ל-lawyerInfo.ts
    email = LAWYER_INFO.contact.email,
    phone = LAWYER_INFO.contact.phone,
    hours = `א'-ה': ${LAWYER_INFO.hours.sundayToThursday}`, // שימוש בנתונים משעות הפעילות
    lastUpdated = "01/11/2025", // ניתן להשאיר כקבוע או להוסיף לקובץ הנתונים
}: StatementProps) {

    const contentRef = useRef<HTMLDivElement>(null);

    // לוגיקה לסגירה בלחיצה על מקש ESC
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        // 1. שכבת רקע (Overlay): ממלאת את כל המסך, מקובעת, עם רקע כהה שקוף, Z-Index גבוה.
        <div
            className="fixed inset-0 bg-black bg-opacity-70 z-[1000] flex justify-center items-center p-4 overflow-y-auto"
            onClick={onClose} // סגירה בלחיצה מחוץ למודל
            role="dialog"
            aria-modal="true"
            aria-labelledby="a11y-title"
        >
            {/* 2. תוכן המודל (החלון הגלול) */}
            <div
                ref={contentRef}
                // מידות, עיצוב וגלילה: גודל מקסימלי, רקע לבן, גלילה עצמאית
                className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative text-right shadow-2xl"
                onClick={(e) => e.stopPropagation()} // מונע סגירה בלחיצה על התוכן
            >
                {/* כפתור סגירה */}
                <button
                    onClick={onClose}
                    className="absolute top-4 left-4 text-gray-500 hover:text-gray-900 text-3xl font-light leading-none z-10"
                    aria-label="סגור הצהרת נגישות"
                >
                    &times;
                </button>

                {/* 3. תוכן ההצהרה */}
                <header className="a11y-hero mb-6" aria-labelledby="a11y-title">
                    <h1 id="a11y-title" className="text-3xl font-bold text-gray-900">הצהרת נגישות</h1>
                    <p className="text-gray-600 mt-2">
                        {orgName} מחויבת להנגשת אתר האינטרנט והשירותים הדיגיטליים שלה, בהתאם לתקן הישראלי ת"י 5568 (המבוסס על WCAG 2.1 AA).
                    </p>
                </header>

                {/* התוכן הפנימי של ההצהרה */}
                <div className="a11y-container p-0">
                    <nav className="a11y-toc mb-8" aria-label="תוכן עניינים">
                        <a href="#commitment">המחויבות שלנו</a>
                        <a href="#standards">תקנים ועמידה בהם</a>
                        <a href="#measures">אמצעי הנגשה מיושמים</a>
                        <a href="#compatibility">תאימות טכנית</a>
                        <a href="#known-issues">מגבלות ידועות</a>
                        <a href="#feedback">משוב ובקשות להתאמות</a>
                        <a href="#contact">פרטי התקשרות</a>
                        <a href="#legal">הערות משפטיות ומדיניות</a>
                    </nav>

                    <section id="commitment" className="mb-8">
                        <h2>המחויבות שלנו</h2>
                        <p>
                            אנו שואפים להבטיח כי השירותים הדיגיטליים שלנו יהיו נגישים לאנשים עם מוגבלויות מגוונות, כולל משתמשים בטכנולוגיות מסייעות. מטרתנו היא לאפשר שירות שוויוני, מכבד, מקצועי ונגיש, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות ותקנות הנגישות לשירות.
                        </p>
                    </section>

                    <section id="standards" className="mb-8">
                        <h2>תקנים ועמידה בהם</h2>
                        <ul className="list-disc pr-5 text-gray-700 space-y-2">
                            <li>
                                יעד העמידה בתקן: <strong>WCAG 2.1 רמה AA</strong> (ועל בסיסו התקן הישראלי ת"י 5568).
                            </li>
                            <li>
                                אנו מקפידים על קריטריוני הצלחה מרכזיים כגון תוכן נתפס, ניווט ופעולה, ממשקים מובנים וקוד יציב (POUR).
                            </li>
                            <li>
                                התאמות הנגישות באתר בוצעו בהתאם להמלצות התקן ובכפוף לשיקולים טכנולוגיים ומשאביים.
                            </li>
                        </ul>
                    </section>

                    <section id="measures" className="mb-8">
                        <h2>אמצעי נגישות מיושמים</h2>
                        <div className="a11y-grid grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                            <ul className="list-disc pr-5 space-y-2">
                                <li>ניווט באמצעות מקלדת לכל הפונקציונליות המרכזית.</li>
                                <li>סדר טאבים הגיוני ואינדיקטור פוקוס ברור.</li>
                                <li>טקסט חלופי (Alt Text) לתמונות, אייקונים ומדיה.</li>
                                <li>כותרות היררכיות (h1–h6) ושימוש ב-HTML סמנטי.</li>
                                <li>תוכן ניתן לשינוי גודל (עד 200%) ללא איבוד מידע.</li>
                                <li>תאימות גבוהה לקוראי מסך (כגון NVDA ו-JAWS).</li>
                                <li>יחס ניגודיות צבעים של לפחות 4.5:1.</li>
                            </ul>
                            <ul className="list-disc pr-5 space-y-2">
                                <li>תוויות (Labels) ברורות לשדות טופס.</li>
                                <li>מנגנון "דלג לתוכן" (Skip to content) לניווט מהיר.</li>
                                <li>מניעת הבהובים מהירים (מעל 3 פעמים בשנייה).</li>
                                <li>פריסה רספונסיבית המשתנה למכשירים ניידים.</li>
                                <li>שליטה על אנימציות והפחתת תנועה (בהתאם להגדרות מערכת ההפעלה).</li>
                                <li>שימוש נכון בתכונות ARIA (במידת הצורך).</li>
                            </ul>
                        </div>
                    </section>

                    <section id="compatibility" className="mb-8">
                        <h2>תאימות טכנית</h2>
                        <p className="text-gray-700">
                            האתר מתוכנן לעבוד עם הדפדפנים המודרניים וטכנולוגיות מסייעות, לרבות קוראי מסך ומערכות הגדלה. החוויה הטובה ביותר היא בדפדפנים Chrome, Edge, Firefox, ו-Safari מעודכנים.
                        </p>
                    </section>

                    <section id="known-issues" className="mb-8">
                        <h2>מגבלות ידועות ומפת דרכים</h2>
                        <p className="text-gray-700">
                            אנו פועלים לשיפור מתמיד. אם נתקלת בבעיה שאינה מפורטת כאן, אנא הודע לנו. נושאים שנמצאים בבדיקה:
                        </p>
                        <ul className="list-disc pr-5 text-gray-700 space-y-2">
                            <li>
                                ייתכן שווידג'טים חיצוניים (צד שלישי) ותיקים אינם נתמכים באופן מלא על ידי מקלדת – אנו מספקים חלופות או מתאמים תיקונים עם הספקים ככל הניתן.
                            </li>
                            <li>
                                קבצי PDF היסטוריים אינם נגישים במלואם; קבצים נגישים זמינים על פי דרישה.
                            </li>
                        </ul>
                    </section>

                    <section id="feedback" className="mb-8">
                        <h2>משוב ובקשות להתאמות</h2>
                        <p className="text-gray-700">
                            אם נתקלת בקושי, נדרשת לך עזרה, או שאתה זקוק לפורמט חלופי, אנא פנה אלינו. אנו מתחייבים להגיב בתוך 5 ימי עסקים ולספק פתרון נגיש בהקדם האפשרי.
                        </p>
                    </section>

                    <section id="contact" aria-labelledby="contact-heading" className="mb-8">
                        <h2 id="contact-heading">פרטי התקשרות נגישות</h2>
                        <div className="a11y-card p-4 border border-gray-200 rounded-lg bg-gray-50">
                            <p className="text-gray-700">
                                <strong>אחראי נגישות: {contactName}</strong><br />
                                דוא"ל: <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a><br />
                                טלפון: <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="text-blue-600 hover:underline">{phone}</a><br />
                                שעות מענה: {hours}
                            </p>
                        </div>
                    </section>

                    <section id="legal">
                        <h2>הערות משפטיות ומדיניות</h2>
                        <ul className="list-disc pr-5 text-gray-700 space-y-2">
                            <li>
                                הצהרה זו מיושרת לתקן הישראלי 5568, המבוסס על WCAG 2.1 AA, ולחוק שוויון זכויות לאנשים עם מוגבלות.
                            </li>
                            <li>
                                כאשר עמידה מלאה אינה אפשרית בשל אילוצים טכנולוגיים או אילוצי ספקים, אנו מספקים התאמות סבירות וחלופות.
                            </li>
                        </ul>
                        <p className="text-gray-500 text-sm mt-4">
                            <strong>עדכון אחרון:</strong> {lastUpdated}. הצהרה זו נבדקת לפחות אחת לשנה.
                        </p>
                    </section>

                </div>

            </div>
        </div>
    );
}