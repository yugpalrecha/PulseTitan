import { useEffect, useState } from "react";

import HealthScore from "./pages/HealthScore";
import AskAI from "./pages/AskAI";
import ReportAnalyser from "./pages/ReportAnalyser";
import Emergency from "./pages/Emergency";
import MedicineReminder from "./pages/MedicineReminder";
import Login from "./pages/tp.jsx";
import Register from "./pages/Register.jsx";
import SymptomChecker from "./pages/SymptomChecker.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const getInitialPage = () => {
    const hash = window.location.hash.replace("#", "");
    if (!localStorage.getItem("token")) return "login";
    return hash || "dashboard";
  };

  const [page, setPage] = useState(getInitialPage);

  const navigateTo = (newPage) => {
    window.history.pushState({ page: newPage }, "", `#${newPage}`);
    setPage(newPage);
  };

  useEffect(() => {
    if (token && !window.location.hash) {
      window.history.replaceState({ page: "dashboard" }, "", "#dashboard");
    }

    const handlePopState = (e) => {
      const hash = window.location.hash.replace("#", "");
      const targetPage = e.state?.page || hash || (token ? "dashboard" : "login");
      setPage(targetPage);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [token]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.history.replaceState({}, "", "#login");
    setToken(null);
    setPage("login");
  };

  const isFullscreen =
    page === "login" ||
    page === "register" ||
    (token && page === "dashboard");

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-gray-200">

      {/* HEADER */}
      <div className="border-b border-[#1a1a1a] px-10 py-4 flex items-center justify-between">

        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => token && navigateTo("dashboard")}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 border border-slate-600 flex items-center justify-center">
            <svg width="18" height="18" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <span className="text-lg font-bold text-white tracking-tight">PulseTitan</span>
        </div>

        <div className="flex items-center gap-3">
          {!token && (
            <>
              <button
                onClick={() => navigateTo("login")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  page === "login"
                    ? "bg-slate-700 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => navigateTo("register")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  page === "register"
                    ? "bg-slate-700 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Register
              </button>
            </>
          )}

          {token && (
            <button
              onClick={logout}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-red-600/20 text-red-400 border border-red-600/30 hover:bg-red-600/30 hover:text-red-300 transition-all"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div className={isFullscreen ? "" : "px-14 py-10"}>
        {page === "login"    && <Login setPage={navigateTo} setToken={setToken} />}
        {page === "register" && <Register setPage={navigateTo} setToken={setToken} />}
        {token && page === "dashboard" && <Dashboard setPage={navigateTo} />}
        {token && page === "health"    && <HealthScore />}
        {token && page === "ai"        && <AskAI />}
        {token && page === "report"    && <ReportAnalyser />}
        {token && page === "call"      && <Emergency />}
        {token && page === "reminder"  && <MedicineReminder />}
        {token && page === "symptom"   && <SymptomChecker />}
      </div>
    </div>
  );
}

export default App;




// // import { useState } from "react";

// // import HealthScore from "./pages/HealthScore";
// // import AskAI from "./pages/AskAI";
// // import ReportAnalyser from "./pages/ReportAnalyser";
// // import Emergency from "./pages/Emergency";
// // import MedicineReminder from "./pages/MedicineReminder";
// // import Login from "./pages/tp.jsx";
// // import Register from "./pages/Register.jsx";
// // import SymptomChecker from "./pages/SymptomChecker.jsx";
// // import Dashboard from "./pages/Dashboard.jsx";
// // function App() {
// //   const token = localStorage.getItem("token");

// // const [page, setPage] = useState(token ? "dashboard" : "login");

// //   return (
// //     <div className="min-h-screen bg-[#0b0b0b] text-gray-200">

// //       {/* HEADER */}
// //       <div className="border-b border-gray-800 px-14 py-5 flex items-center justify-between">

// //         <h1 className="text-2xl font-semibold flex items-center gap-2">
// //           🧠 AI Medical Assistant
// //         </h1>

// //         <div className="flex gap-4 flex-wrap text-sm">

// //           {!token && (
// //             <>
// //               <button
// //                 onClick={() => setPage("login")}
// //                 className={`px-4 py-2 rounded-md ${
// //                   page === "login"
// //                     ? "bg-blue-600 text-white"
// //                     : "bg-gray-800 hover:bg-gray-700"
// //                 }`}
// //               >
// //                 Login
// //               </button>
               
// //               <button
// //                 onClick={() => setPage("register")}
// //                 className={`px-4 py-2 rounded-md ${
// //                   page === "register"
// //                     ? "bg-green-600 text-white"
// //                     : "bg-gray-800 hover:bg-gray-700"
// //                 }`}
// //               >
// //                 Register
// //               </button>
// //             </>
// //           )}

// //           {token && (
// //             <>
// //               <button
// //                 onClick={() => setPage("health")}
// //                 className={`px-4 py-2 rounded-md ${
// //                   page === "health"
// //                     ? "bg-gray-700 text-white"
// //                     : "hover:bg-gray-800"
// //                 }`}
// //               >
// //                 Health Score
// //               </button>
// // <button onClick={() => setPage("symptom")}>
// //   Symptom Checker
// // </button>
// //               <button
// //                 onClick={() => setPage("ai")}
// //                 className={`px-4 py-2 rounded-md ${
// //                   page === "ai"
// //                     ? "bg-gray-700 text-white"
// //                     : "hover:bg-gray-800"
// //                 }`}
// //               >
// //                 Ask AI
// //               </button>

// //               <button
// //                 onClick={() => setPage("report")}
// //                 className={`px-4 py-2 rounded-md ${
// //                   page === "report"
// //                     ? "bg-gray-700 text-white"
// //                     : "hover:bg-gray-800"
// //                 }`}
// //               >
// //                 Analyze Report
// //               </button>

// //               <button
// //                 onClick={() => setPage("call")}
// //                 className={`px-4 py-2 rounded-md ${
// //                   page === "call"
// //                     ? "bg-gray-700 text-white"
// //                     : "hover:bg-gray-800"
// //                 }`}
// //               >
// //                 Emergency
// //               </button>

// //               <button
// //                 onClick={() => setPage("reminder")}
// //                 className={`px-4 py-2 rounded-md ${
// //                   page === "reminder"
// //                     ? "bg-gray-700 text-white"
// //                     : "hover:bg-gray-800"
// //                 }`}
// //               >
// //                 Medicine Reminder
// //               </button>

// //               <button
// //                 onClick={() => {
// //                   localStorage.removeItem("token");
// //                   localStorage.removeItem("user");
// //                   window.location.reload();
// //                 }}
// //                 className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700"
// //               >
// //                 Logout
// //               </button>
// //               <button onClick={() => setPage("dashboard")}>
// //   Dashboard
// // </button>
// //             </>
// //           )}

// //         </div>
// //       </div>


// //       {/* PAGE CONTENT */}
// //       <div className="px-14 py-10">

// //         {page === "login" && <Login setPage={setPage} />}
// // {page === "register" && <Register setPage={setPage} />}
// //          {token && page === "dashboard" && <Dashboard />}
// //         {token && page === "health" && <HealthScore />}
// //         {token && page === "ai" && <AskAI />}
// //         {token && page === "report" && <ReportAnalyser />}
// //         {token && page === "call" && <Emergency />}
// //         {token && page === "reminder" && <MedicineReminder />}
// // {page === "symptom" && <SymptomChecker />}

// //       </div>

// //     </div>
// //   );
// // }

// // export default App;
// import { useState } from "react";

// import HealthScore from "./pages/HealthScore";
// import AskAI from "./pages/AskAI";
// import ReportAnalyser from "./pages/ReportAnalyser";
// import Emergency from "./pages/Emergency";
// import MedicineReminder from "./pages/MedicineReminder";
// import Login from "./pages/tp.jsx";
// import Register from "./pages/Register.jsx";
// import SymptomChecker from "./pages/SymptomChecker.jsx";
// import Dashboard from "./pages/Dashboard.jsx";

// function App() {
//   const token = localStorage.getItem("token");
//   const [page, setPage] = useState(token ? "dashboard" : "login");

//   return (
//     <div className="min-h-screen bg-[#0b0b0b] text-gray-200">

//       {/* HEADER */}
//       <div className="border-b border-[#1a1a1a] px-10 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <div
//           className="flex items-center gap-3 cursor-pointer"
//           onClick={() => token && setPage("dashboard")}
//         >
//           <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 border border-slate-600 flex items-center justify-center">
//             <svg width="18" height="18" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24">
//               <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
//             </svg>
//           </div>
//           <span className="text-lg font-bold text-white tracking-tight">PulseTitan</span>
//         </div>

//         {/* Right side */}
//         <div className="flex items-center gap-3">

//           {!token && (
//             <>
//               <button
//                 onClick={() => setPage("login")}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//                   page === "login"
//                     ? "bg-slate-700 text-white"
//                     : "text-gray-400 hover:text-white hover:bg-white/5"
//                 }`}
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => setPage("register")}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//                   page === "register"
//                     ? "bg-slate-700 text-white"
//                     : "text-gray-400 hover:text-white hover:bg-white/5"
//                 }`}
//               >
//                 Register
//               </button>
//             </>
//           )}

//           {token && (
//             <button
//               onClick={() => {
//                 localStorage.removeItem("token");
//                 localStorage.removeItem("user");
//                 window.location.reload();
//               }}
//               className="px-4 py-2 rounded-lg text-sm font-medium bg-red-600/20 text-red-400 border border-red-600/30 hover:bg-red-600/30 hover:text-red-300 transition-all"
//             >
//               Logout
//             </button>
//           )}

//         </div>
//       </div>

//       {/* PAGE CONTENT */}
//       <div className={page === "login" || page === "register" ? "" : "px-14 py-10"}>
//         {page === "login" && <Login setPage={setPage} />}
//         {page === "register" && <Register setPage={setPage} />}
//         {token && page === "dashboard" && <Dashboard setPage={setPage} />}
//         {token && page === "health" && <HealthScore />}
//         {token && page === "ai" && <AskAI />}
//         {token && page === "report" && <ReportAnalyser />}
//         {token && page === "call" && <Emergency />}
//         {token && page === "reminder" && <MedicineReminder />}
//         {token && page === "symptom" && <SymptomChecker />}
//       </div>

//     </div>
//   );
// }

// export default App;