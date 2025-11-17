import { Scale, Users, MapPin, Gavel, Handshake, Shield, BookOpen, Award, Landmark, Building2, FileText, Car, Home } from 'lucide-react';

export const LAWYER_INFO = {
  name: 'עו"ד דנה כהן',
  title: 'ייצוג משפטי מקצועי ומסור למען זכויותיך',
  contact: {
    phone: '542412474',
    email: 'dana_choen@gamil.co.il',
    address: 'רחוב הרצל 123, תל אביב',
  },
  hours: {
    sundayToThursday: '09:00 - 18:00',
    friday: '09:00 - 13:00',
  },
  stats: [
    { end: 15, label: 'שנות ניסיון', suffix: '+' },
    { end: 500, label: 'תיקים מוצלחים', suffix: '' },
    { end: 98, label: 'שביעות רצון', suffix: '%' },
  ],
  services: [
    {
      icon: Scale,
      title: 'דיני משפחה',
      description: 'ייצוג בתיקי גירושין, משמורת, מזונות והסכמי ממון'
    },
    {
      icon: BookOpen,
      title: 'דיני נזיקין',
      description: 'תביעות נזקי גוף, תאונות דרכים ורשלנות רפואית'
    },
    {
      icon: Users,
      title: 'דיני עבודה',
      description: 'ייצוג עובדים ומעסיקים בסכסוכי עבודה'
    },
    {
      icon: Award,
      title: 'דיני מקרקעין',
      description: 'ייצוג בעסקאות נדל"ן, חוזים ותביעות רישום'
    },
    {
      icon: Scale,
      title: 'דיני חוזים',
      description: 'ניסוח וייצוג בהליכים הקשורים לחוזים מסחריים'
    },
    {
      icon: BookOpen,
      title: 'דיני תעבורה',
      description: 'ייצוג בעבירות תנועה ותאונות דרכים'
    }
  ],
  expertise: [
    {
      icon: Award,
      title: 'ניסיון מוכח',
      description: 'עשרות שנות ניסיון בטיפול בתיקים מורכבים'
    },
    {
      icon: BookOpen,
      title: 'זמינות מלאה', // שונה מ Clock - שימוש חוזר באייקון זמין
      description: 'תמיכה ויעוץ לאורך כל שעות היום'
    },
    {
      icon: Users, // שונה מ User - שימוש חוזר באייקון זמין
      title: 'גישה אישית',
      description: 'כל לקוח מקבל את מלוא תשומת הלב והמקצועיות'
    },
    {
      icon: Lock,
      title: 'שקיפות מלאה',
      description: 'תקשורת ברורה ועדכונים שוטפים על התיק'
    },

  ],
  benefits: [ // רשימה חדשה עבור "למה לבחור בנו"
    "ניסיון מוכח של למעלה מ-15 שנה בבתי המשפט בכל הערכאות.",
    "מחויבות לגישה אישית ושקיפות מלאה לאורך כל הדרך המשפטית.",
    "התמחות עמוקה בתחומי הליטיגציה המסחרית ודיני המשפחה.",
    "זמינות גבוהה ויחס אישי לכל לקוח ולקוח.",
    "הגנה בלתי מתפשרת על זכויותיך עם אסטרטגיה מנצחת.",
  ],

  services: [
    {
      icon: Scale,
      title: 'דיני משפחה',
      description: 'ייצוג בתיקי גירושין, משמורת, מזונות והסכמי ממון',
      details: [
        { icon: Handshake, text: "ייצוג וליווי בהליכי גירושין מורכבים" },
        { icon: FileText, text: "עריכת הסכמי ממון וחיים משותפים" },
        { icon: Users, text: "תביעות משמורת, מזונות ילדים וחלוקת רכוש" },
        { icon: Shield, text: "גישור משפחתי להשגת הסכמות" }
      ]
    },
    {
      icon: BookOpen,
      title: 'דיני נזיקין',
      description: 'תביעות נזקי גוף, תאונות דרכים ורשלנות רפואית',
      details: [
        { icon: Car, text: "תביעות נזקי גוף עקב תאונות דרכים" },
        { icon: Scale, text: "ייצוג בתיקי רשלנות רפואית וביטוח לאומי" },
        { icon: FileText, text: "הערכת נזק וליווי מול חברות הביטוח" },
        { icon: Award, text: "תביעות פיצויים בגין פגיעות בעבודה" }
      ]
    },
    {
      icon: Users,
      title: 'דיני עבודה',
      description: 'ייצוג עובדים ומעסיקים בסכסוכי עבודה',
      details: [
        { icon: Gavel, text: "ייצוג עובדים ומעסיקים בבית הדין לעבודה" },
        { icon: Shield, text: "טיפול בפיטורין שלא כדין והלנת שכר" },
        { icon: Handshake, text: "ליווי וטיפול בהטרדה מינית במקום העבודה" },
        { icon: FileText, text: "ניסוח וייעוץ בנוגע לחוזים אישיים וקיבוציים" }
      ]
    },
    {
      icon: Award,
      title: 'דיני מקרקעין',
      description: 'ייצוג בעסקאות נדל"ן, חוזים ותביעות רישום',
      details: [
        { icon: Home, text: 'ליווי וייצוג בעסקאות מכירה ורכישת דירה/נדל"ן' },
        { icon: FileText, text: "עריכת חוזי שכירות וקבוצות רכישה" },
        { icon: Users, text: "ייצוג בסכסוכי שכנים ופינוי מושכר" },
        { icon: Landmark, text: "תכנון מס שבח ורכישה" }
      ]
    },
    {
      icon: Landmark,
      title: 'משפט מסחרי',
      description: 'ליטיגציה מסחרית ודיני חוזים',
      details: [
        { icon: Gavel, text: "ייצוג בבתי משפט בסכסוכים עסקיים" },
        { icon: FileText, text: "ניסוח וסקירת חוזים מסחריים מורכבים" },
        { icon: Scale, text: "תביעות להפרת הסכמים וביטול עסקאות" },
        { icon: Handshake, text: "ייעוץ שוטף לחברות ועסקים קטנים" }
      ]
    },
    {
      icon: Building2,
      title: 'דיני תעבורה',
      description: 'ייצוג בעבירות תנועה, שלילת רישיון ותאונות דרכים',
      details: [
        { icon: Gavel, text: "ייצוג בבתי משפט לתעבורה" },
        { icon: FileText, text: "טיפול בדוחות תנועה ומהירות" },
        { icon: Car, text: "השבתת רישיון ונהיגה בשכרות" },
        { icon: Shield, text: "ליווי לאחר תאונות דרכים קלות וחמורות" }
      ]
    }
  ],

};