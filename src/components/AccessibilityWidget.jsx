import React, { useEffect, useState, useRef } from "react";
const toggleClass = (cls, on) => {
    const root = document.documentElement;
    if (on) root.classList.add(cls);
    else root.classList.remove(cls);
};

const OPTIONS = [
    { key: "largeText", label: "הגדלת טקסט", cls: "a11y-large-text" },
    { key: "xLargeText", label: "טקסט גדול במיוחד", cls: "a11y-xlarge-text" },
    { key: "highContrast", label: "ניגודיות גבוהה", cls: "a11y-contrast" },
    { key: "grayscale", label: "גווני אפור", cls: "a11y-grayscale" },
    { key: "invert", label: "היפוך צבעים", cls: "a11y-invert" },
    { key: "readableFont", label: "גופן קריא", cls: "a11y-readable-font" },
    { key: "underlineLinks", label: "קו תחתון לקישורים", cls: "a11y-underline-links" },
    { key: "highlightLinks", label: "הדגשת קישורים", cls: "a11y-highlight-links" },
    { key: "stopAnimations", label: "עצירת אנימציות", cls: "a11y-stop-anim" },
];
export default function AccessibilityWidget() {
    const [open, setOpen] = useState(false);
    const [prefs, setPrefs] = useState({});
    const panelRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        try {
            const saved = JSON.parse(localStorage.getItem("a11y_prefs") || "{}");
            setPrefs(saved);
            OPTIONS.forEach(o => toggleClass(o.cls, !!saved[o.key]));
        } catch { }
    }, []);

    useEffect(() => {
        const onDocClick = (e) => {
            if (open && panelRef.current && !panelRef.current.contains(e.target) && !btnRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        const onEsc = (e) => e.key === "Escape" && setOpen(false);
        document.addEventListener("mousedown", onDocClick);
        document.addEventListener("keydown", onEsc);
        return () => {
            document.removeEventListener("mousedown", onDocClick);
            document.removeEventListener("keydown", onEsc);
        };
    }, [open]);
    const togglePref = (key, cls) => {
        const next = { ...prefs, [key]: !prefs[key] };
        setPrefs(next);
        toggleClass(cls, !!next[key]);
        localStorage.setItem("a11y_prefs", JSON.stringify(next));
    };

    const resetAll = () => {
        const clean = {};
        setPrefs(clean);
        OPTIONS.forEach(o => toggleClass(o.cls, false));
        localStorage.removeItem("a11y_prefs");
    };

    return (
        <>
            <button
                ref={btnRef}
                type="button"
                aria-haspopup="true"
                aria-expanded={open}
                aria-controls="a11y-panel"
                className="a11y-fab"
                onClick={() => setOpen(v => !v)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="white"
                >
                    <path d="M12 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1 4h-2v7h6v7h2v-9h-6V6zM7 20a5 5 0 0 1 0-10h1v2H7a3 3 0 0 0 0 6 3 3 0 0 0 2.82-2h2.05A5.001 5.001 0 0 1 7 20z" />
                </svg>

            </button>
            {open && (
                <div
                    ref={panelRef}
                    id="a11y-panel"
                    className="a11y-panel"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Accessibility settings"
                >
                    <header className="a11y-panel__hdr">
                        <strong>תפריט נגישות</strong>
                        <button className="a11y-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
                    </header>

                    <ul className="a11y-list">
                        {OPTIONS.map(opt => (
                            <li key={opt.key}>
                                <label className="a11y-row">
                                    <input
                                        type="checkbox"
                                        checked={!!prefs[opt.key]}
                                        onChange={() => togglePref(opt.key, opt.cls)}
                                    />
                                    <span>{opt.label}</span>
                                </label>
                            </li>
                        ))}
                    </ul>

                    <div className="a11y-actions">
                        <button className="a11y-reset" onClick={resetAll} aria-label="Reset accessibility">
                           אפס הגדרות
                        </button>
                    </div>

                    <p className="a11y-note" aria-live="polite">
                       ההעדפות נשמרות לביקור הבא שלך
                    </p>
                </div>
            )}
        </>
    );
}
