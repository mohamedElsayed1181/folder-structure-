// import { useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import Testlanguges from "../src/components/Testlanguges/Testlanguges";





// export default function App() {
//   const { t, i18n } = useTranslation();

//   useEffect(() => {
//     const dir = i18n.language === "ar" ? "rtl" : "ltr";
//     document.documentElement.setAttribute("dir", dir);
//     document.documentElement.setAttribute("lang", i18n.language);
//   }, [i18n.language]);

//   return (
//     <div className="p-6 text-left rtl:text-right">
//       <Testlanguges />
//       <h1 className="text-3xl font-bold mb-4">{t("welcome")}</h1>
//       <h2 className="text-xl font-semibold bg-gray-200 p-2">{t("nametitle")}</h2>
//       <p className="mt-4 bg-gray-300 p-4 ">{t("para")}</p>
//     </div>
//   );
// }


import AppRoute from './router/AppRoute'

export default function App() {
  return (
    <div>
      <AppRoute />
    </div>
  )
}
