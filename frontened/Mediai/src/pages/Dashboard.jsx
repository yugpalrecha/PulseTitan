import { useEffect } from "react";
const modules = [
  {
    id: "health-score",
    page: "health",
    title: "Health Score",
    tag: "Wellness",
    desc: "Track your overall wellness index and monitor trends in real time with AI-driven insights.",
    stroke: "#0d9488",
    bg: "bg-[#0b1e1c] border-[#0d2e2a]",
    accent: "from-[#0d9488]",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
  {
    id: "symptom-checker",
    page: "symptom",
    title: "Symptom Checker",
    tag: "Diagnosis",
    desc: "Describe your symptoms and get instant AI-powered analysis with recommended next steps.",
    stroke: "#ca8a04",
    bg: "bg-[#1c1800] border-[#2c2500]",
    accent: "from-[#ca8a04]",
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </>
    ),
  },
  {
    id: "analyze-report",
    page: "report",
    title: "Analyze Report",
    tag: "Reports",
    desc: "Upload your lab or medical reports and let AI extract key findings and flag anomalies.",
    stroke: "#9333ea",
    bg: "bg-[#180e24] border-[#261436]",
    accent: "from-[#9333ea]",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </>
    ),
  },
  {
    id: "emergency",
    page: "call",
    title: "Emergency",
    tag: "Critical",
    desc: "One-tap access to emergency contacts, nearby hospitals, and critical first-aid guidance.",
    stroke: "#dc2626",
    bg: "bg-[#1e0c0c] border-[#2e1212]",
    accent: "from-[#dc2626]",
    icon: (
      <>
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </>
    ),
  },
  {
    id: "medicine-reminder",
    page: "reminder",
    title: "Medicine Reminder",
    tag: "Schedule",
    desc: "Set smart schedules for your medications and never miss a dose with timely reminders.",
    stroke: "#16a34a",
    bg: "bg-[#0b1c10] border-[#0d2c18]",
    accent: "from-[#16a34a]",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </>
    ),
  },
  {
    id: "ask-ai",
    page: "ai",
    title: "Ask AI",
    tag: "Assistant",
    desc: "Chat freely with your personal health AI — ask questions, get advice, and understand your body.",
    stroke: "#2563eb",
    bg: "bg-[#0c0e20] border-[#121530]",
    accent: "from-[#2563eb]",
    icon: (
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    ),
  },
];

function Dashboard({ setPage }) {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-[calc(100vh-65px)] bg-black text-white flex flex-col">

      {/* Hero */}
      <div className="relative text-center px-10 pt-16 pb-12 overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] to-black pointer-events-none" />
        <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-[radial-gradient(ellipse,rgba(110,110,140,0.13),transparent_70%)] pointer-events-none" />

        <div className="relative z-10">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-[11px] text-[#888] uppercase tracking-widest mb-6"
            style={{ opacity: 0, animation: "fadeUp 0.8s ease forwards" }}
          >
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            AI Healthcare Active
          </div>

          {/* Title */}
          <h1
            className="text-[clamp(36px,5.5vw,62px)] font-extrabold text-white tracking-[-0.03em] leading-[1.08] mb-4"
            style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.15s forwards" }}
          >
            Welcome Back
            {user?.name && <span className="text-slate-400">, {user.name}</span>}
          </h1>

          {/* Subtitle */}
          <p
            className="text-[17px] text-[#4a4a4a] max-w-[460px] mx-auto leading-relaxed mb-9"
            style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.3s forwards" }}
          >
            Your AI-powered healthcare companion is ready to assist you today.
          </p>

          {/* Stats */}
          <div
            className="flex justify-center items-center mb-9"
            style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.45s forwards" }}
          >
            {[
              ["98%", "Uptime"],
              ["6",   "Modules"],
              ["AI",  "Powered"],
              ["24/7","Available"],
            ].map(([val, label], i) => (
              <div key={label} className="flex items-center">
                {i > 0 && <div className="w-px h-10 bg-[#1f1f1f] mx-10" />}
                <div className="text-center">
                  <div className="text-[22px] font-bold text-[#e2e8f0] tracking-tight">{val}</div>
                  <div className="text-[11px] text-[#444] uppercase tracking-widest mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            className="h-px bg-gradient-to-r from-transparent via-white/12 to-transparent mx-auto"
            style={{ width: 0, animation: "expandLine 1.2s ease 0.6s forwards" }}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="flex-1 px-12 pb-14 flex flex-col">

        <div
          className="text-[11px] text-[#333] uppercase tracking-[0.12em] text-center mb-7"
          style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.5s forwards" }}
        >
          Your Modules
        </div>

        <div className="grid grid-cols-3 gap-5 flex-1">
          {modules.map((mod, i) => (
            <div
              key={mod.id}
              onClick={() => setPage(mod.page)}
              className="group relative bg-[#0c0c0c] border border-[#181818] rounded-[22px] p-8 cursor-pointer flex flex-col
                hover:border-[#2a2a2a] hover:bg-[#101010] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              style={{ opacity: 0, animation: `cardIn 0.6s ease ${0.1 + i * 0.1}s forwards` }}
            >
              {/* Shine sweep */}
              <div className="absolute top-0 left-[-100%] w-[55%] h-full bg-gradient-to-r from-transparent via-white/[0.025] to-transparent group-hover:left-[160%] transition-[left] duration-500 pointer-events-none" />

              {/* Accent line */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-[22px] bg-gradient-to-r ${mod.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`w-[50px] h-[50px] rounded-[14px] border flex items-center justify-center mb-6 flex-shrink-0 ${mod.bg}`}>
                <svg width="22" height="22" fill="none" stroke={mod.stroke} strokeWidth="2" viewBox="0 0 24 24">
                  {mod.icon}
                </svg>
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="text-[16px] font-bold text-[#dde1e7] mb-2 tracking-[-0.015em]">{mod.title}</div>
                <div className="text-[13px] text-[#3d3d3d] leading-relaxed">{mod.desc}</div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-6 pt-[18px] border-t border-[#141414]">
                <span
                  className="text-[10px] uppercase tracking-[0.1em]"
                  style={{ color: mod.stroke, opacity: 0.5 }}
                >
                  {mod.tag}
                </span>
                <div className="w-[30px] h-[30px] rounded-full bg-[#161616] border border-[#222] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1e1e1e] group-hover:border-[#2d2d2d] transition-all">
                  <svg width="12" height="12" fill="none" stroke="#555" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes expandLine {
          from { width: 0; }
          to   { width: 220px; }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Dashboard;
// const modules = [
//   {
//     id: "health-score",
//     page: "health",
//     title: "Health Score",
//     desc: "Track your overall wellness index and monitor trends in real time with AI-driven insights.",
//     stroke: "#0d9488",
//     bg: "bg-[#0b1e1c] border-[#0d2e2a]",
//     icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
//   },
//   {
//     id: "symptom-checker",
//     page: "symptom",
//     title: "Symptom Checker",
//     desc: "Describe your symptoms and get instant AI-powered analysis with recommended next steps.",
//     stroke: "#ca8a04",
//     bg: "bg-[#1c1800] border-[#2c2500]",
//     icon: (
//       <>
//         <circle cx="11" cy="11" r="8" />
//         <path d="m21 21-4.35-4.35" />
//       </>
//     ),
//   },
//   {
//     id: "analyze-report",
//     page: "report",
//     title: "Analyze Report",
//     desc: "Upload your lab or medical reports and let AI extract key findings and flag anomalies.",
//     stroke: "#9333ea",
//     bg: "bg-[#180e24] border-[#261436]",
//     icon: (
//       <>
//         <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
//         <polyline points="14,2 14,8 20,8" />
//         <line x1="16" y1="13" x2="8" y2="13" />
//         <line x1="16" y1="17" x2="8" y2="17" />
//       </>
//     ),
//   },
//   {
//     id: "emergency",
//     page: "call",
//     title: "Emergency",
//     desc: "One-tap access to emergency contacts, nearby hospitals, and critical first-aid guidance.",
//     stroke: "#dc2626",
//     bg: "bg-[#1e0c0c] border-[#2e1212]",
//     icon: (
//       <>
//         <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
//         <line x1="12" y1="9" x2="12" y2="13" />
//         <line x1="12" y1="17" x2="12.01" y2="17" />
//       </>
//     ),
//   },
//   {
//     id: "medicine-reminder",
//     page: "reminder",
//     title: "Medicine Reminder",
//     desc: "Set smart schedules for your medications and never miss a dose with timely reminders.",
//     stroke: "#16a34a",
//     bg: "bg-[#0b1c10] border-[#0d2c18]",
//     icon: (
//       <>
//         <circle cx="12" cy="12" r="10" />
//         <polyline points="12,6 12,12 16,14" />
//       </>
//     ),
//   },
//   {
//     id: "ask-ai",
//     page: "ai",
//     title: "Ask AI",
//     desc: "Chat freely with your personal health AI — ask questions, get advice, and understand your body.",
//     stroke: "#2563eb",
//     bg: "bg-[#0c0e20] border-[#121530]",
//     icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
//   },
// ];

// function Dashboard({ setPage }) {
//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     const handleBack = (e) => {
//       setPage(e.state?.page || "dashboard");
//     };

//     window.addEventListener("popstate", handleBack);
//     return () => window.removeEventListener("popstate", handleBack);
//   }, [setPage]);

//   const navigateTo = (page) => {
//     window.history.pushState({ page }, "", `#${page}`);
//     setPage(page);
//   };

//   return (
//     <div className="min-h-[calc(100vh-65px)] bg-black text-white flex flex-col">
      
//       {/* Hero */}
//       <div className="relative text-center px-10 pt-16 pb-12 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] to-black" />
//         <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-[radial-gradient(ellipse,rgba(110,110,140,0.13),transparent_70%)]" />

//         <div className="relative z-10">
//           <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-[11px] text-[#888] uppercase tracking-widest mb-6">
//             <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
//             AI Healthcare Active
//           </div>

//           <h1 className="text-[clamp(36px,5.5vw,62px)] font-extrabold mb-4">
//             Welcome Back
//             {user?.name && <span className="text-slate-400">, {user.name}</span>}
//           </h1>

//           <p className="text-[17px] text-[#4a4a4a] max-w-[460px] mx-auto">
//             Your AI-powered healthcare companion is ready to assist you today.
//           </p>
//         </div>
//       </div>

//       {/* Cards */}
//       <div className="px-12 pb-14">
//         <div className="grid grid-cols-3 gap-5">
//           {modules.map((mod) => (
//             <div
//               key={mod.id}
//               onClick={() => navigateTo(mod.page)}
//               className="bg-[#0c0c0c] border border-[#181818] rounded-[22px] p-8 cursor-pointer hover:border-[#2a2a2a] hover:bg-[#101010] hover:-translate-y-1 transition-all duration-300"
//             >
//               <div className={`w-[50px] h-[50px] rounded-[14px] border flex items-center justify-center mb-6 ${mod.bg}`}>
//                 <svg
//                   width="22"
//                   height="22"
//                   fill="none"
//                   stroke={mod.stroke}
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                 >
//                   {mod.icon}
//                 </svg>
//               </div>

//               <h3 className="text-[16px] font-bold text-[#dde1e7] mb-2">
//                 {mod.title}
//               </h3>

//               <p className="text-[13px] text-[#3d3d3d]">
//                 {mod.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
