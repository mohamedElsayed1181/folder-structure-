import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";

const LANGUAGES = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
];

export default function LangugeButton() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang =
    LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  const changeLang = (lng: string) => {
    const selectedLang = LANGUAGES.find((l) => l.code === lng);
    i18n.changeLanguage(lng);
    setIsOpen(false);
    if (selectedLang) {
      document.documentElement.dir = selectedLang.dir;
    }
  };

  useEffect(() => {
    const savedLang = i18n.language;
    const selectedLang = LANGUAGES.find((l) => l.code === savedLang);
    if (selectedLang) {
      document.documentElement.dir = selectedLang.dir;
    }
  }, [i18n.language]);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between items-center px-4 py-2 text-sm font-medium bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 transition dark:text-white dark:bg-gray-600 dark:border-dark"
      >
        {currentLang.label}
        <FaChevronDown className="ml-2 text-xs" />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLang(lang.code)}
                className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left dark:text-black dark:hover:bg-gray-200 dark:bg-white"
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
