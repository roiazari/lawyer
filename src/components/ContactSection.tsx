import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import React, { useState } from 'react';
import { LAWYER_INFO } from '../data/lawyerInfo';

const FORM_SPREE_ENDPOINT = "https://formspree.io/f/xeovwabl"; // 🛑 הכתובת החדשה

const ContactSection: React.FC = () => {
    // 🛑 הנתונים משמשים באופן מלא כפי שהוגדרו
    const { contact, hours } = LAWYER_INFO;

    // 🛑 ניהול מצב הטופס
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false); // למניעת כפילויות

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        try {
            const response = await fetch(FORM_SPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ fullName: '', phone: '', email: '', message: '' }); // איפוס הטופס
                
                // הסתרת הודעת ההצלחה לאחר 4 שניות
                setTimeout(() => setIsSubmitted(false), 4000); 
            } else {
                // Formspree מחזיר שגיאה
                alert("אירעה שגיאה בשליחת ההודעה. אנא ודא שכל השדות מלאים ונסה שוב.");
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("אירעה שגיאת רשת. אנא בדוק את החיבור ונסה שוב.");
        } finally {
            setIsSending(false);
        }
    };
    
    // 🛑 לוגיקה ליצירת לינק לגוגל מפות
    const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            צור קשר
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            נשמח לעמוד לשירותך ולהעניק לך ייעוץ משפטי מקצועי. צור קשר עוד היום לקביעת פגישת ייעוץ ראשונית.
                        </p>

                        <div className="space-y-6">
                            {/* פרטי קשר (טלפון) - כעת כל הבלוק לחיץ */}
                            <a 
                                href={`tel:${contact.phone}`} 
                                className="flex items-start gap-4 group hover:no-underline cursor-pointer" // 🛑 עוטף את הכל ב-<a>
                            >
                                <div className="bg-amber-100 p-3 rounded-lg group-hover:bg-amber-200 transition-colors duration-300">
                                    <Phone className="w-6 h-6 text-amber-700" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 mb-1">טלפון</div>
                                    {/* 🛑 הפכתי ל-<span> כדי למנוע קינון <a> */}
                                    <span className="text-gray-600 group-hover:text-amber-700 transition-colors">
                                        0{contact.phone}
                                    </span>
                                </div>
                            </a>

                            {/* פרטי קשר (דוא"ל) - כעת כל הבלוק לחיץ */}
                            <a 
                                href={`mailto:${contact.email}`} 
                                className="flex items-start gap-4 group hover:no-underline cursor-pointer" // 🛑 עוטף את הכל ב-<a>
                            >
                                <div className="bg-amber-100 p-3 rounded-lg group-hover:bg-amber-200 transition-colors duration-300">
                                    <Mail className="w-6 h-6 text-amber-700" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 mb-1">דוא"ל</div>
                                    {/* 🛑 הפכתי ל-<span> כדי למנוע קינון <a> */}
                                    <span className="text-gray-600 group-hover:text-amber-700 transition-colors">
                                        {contact.email}
                                    </span>
                                </div>
                            </a>

                            {/* פרטי קשר (כתובת) - כעת כל הבלוק לחיץ ומנווט למפה */}
                            <a 
                                href={mapLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-start gap-4 group hover:no-underline cursor-pointer" // 🛑 עוטף את הכל ב-<a>
                            >
                                <div className="bg-amber-100 p-3 rounded-lg group-hover:bg-amber-200 transition-colors duration-300">
                                    <MapPin className="w-6 h-6 text-amber-700" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 mb-1">כתובת</div>
                                    {/* 🛑 הפכתי ל-<span> כדי למנוע קינון <a> */}
                                    <span className="text-gray-600 group-hover:text-amber-700 transition-colors">
                                        {contact.address}
                                    </span>
                                </div>
                            </a>
                        </div>

                        {/* שעות פעילות */}
                        <div className="mt-12 p-6 bg-amber-50 rounded-xl border-r-4 border-amber-700">
                            <h3 className="font-bold text-gray-900 mb-2">שעות פעילות</h3>
                            <p className="text-gray-700">
                                ימים א'-ה': {hours.sundayToThursday}<br />
                                יום ו': {hours.friday}
                            </p>
                        </div>
                    </div>

                    {/* 🛑 טופס יצירת קשר */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            השאר הודעה
                        </h3>
                        
                        {isSubmitted ? (
                            // 🛑 הודעת הצלחה
                            <div className="text-center py-12 bg-green-50 rounded-lg border-2 border-green-300">
                                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce-once" />
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">ההודעה נשלחה בהצלחה!</h4>
                                <p className="text-gray-600">תודה על פנייתך. נחזור אליך בהקדם.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">שם מלא</label>
                                    <input
                                        id="fullName"
                                        type="text"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                                        placeholder="הכנס את שמך המלא"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">טלפון</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none text-right"
                                        placeholder="מספר טלפון"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">דוא"ל</label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none "
                                        placeholder="כתובת דוא״ל"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">הודעה</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none resize-none"
                                        placeholder="ספר לנו על המקרה שלך..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className="w-full bg-amber-700 hover:bg-amber-800 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSending ? 'שולח...' : 'שלח הודעה'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;