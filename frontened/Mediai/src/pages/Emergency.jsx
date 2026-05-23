
// import { useState } from "react";
// import { callEmergency } from "../api";

// function Emergency() {

//   const [symptoms, setSymptoms] = useState("");
//   const [message, setMessage] = useState("");

//   async function handleCall() {
//     const res = await callEmergency(symptoms);
//     setMessage(res.message);
//   }

//   return (

//     <div className="min-h-screen bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a1a1a] text-white px-4 py-10">

//       <div className="w-full max-w-4xl mx-auto">

//         {/* Title */}
//         <div className="mb-12 text-center">
//           <h2 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
//             Emergency Assistance
//           </h2>
//           <p className="text-gray-400 mt-3 text-lg">
//             Immediate help — notify your emergency contact instantly
//           </p>
//         </div>

//         {/* Card */}
//         <div className="backdrop-blur-xl bg-white/5 border border-red-500/20 rounded-2xl p-8 shadow-2xl">

//           {/* Warning Banner */}
//           <div className="mb-6 bg-red-900/20 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm">
//             ⚠️ Use this feature only in urgent situations
//           </div>

//           <label className="block text-gray-300 mb-3">
//             Describe Symptoms
//           </label>

//           <textarea
//             rows="7"
//             placeholder="Example: Chest pain, breathing difficulty, dizziness..."
//             value={symptoms}
//             onChange={(e)=>setSymptoms(e.target.value)}
//             className="w-full bg-black/40 border border-gray-700 rounded-lg p-4 text-gray-300 
//             placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 
//             focus:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition"
//           />

//           {/* Emergency Button */}
//           <button
//             onClick={handleCall}
//             className="mt-8 w-full bg-gradient-to-r from-red-600 to-red-800 
//             hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)]
//             text-white font-bold py-4 rounded-xl text-lg transition-all duration-300"
//           >
//             🚨 Send Emergency Alert
//           </button>

//           {/* Response */}
//           {message && (
//             <div className="mt-6 p-5 bg-green-900/30 border border-green-500/40 text-green-300 rounded-xl">
//               {message}
//             </div>
//           )}

//         </div>

//       </div>

//     </div>

//   );

// }

// export default Emergency;
import { useState } from "react";
import { callEmergency } from "../api";

function Emergency() {
  const [symptoms, setSymptoms] = useState("");
  const [message, setMessage] = useState("");

  async function handleCall() {
    const res = await callEmergency(symptoms);
    setMessage(res.message);
  }

  return (
    <div className="min-h-[calc(100vh-65px)] bg-black text-white px-4 py-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="relative text-center mb-6 overflow-hidden">
          <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[420px] h-[140px] bg-[radial-gradient(ellipse,rgba(220,38,38,0.10),transparent_70%)] pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[9px] text-[#888] uppercase tracking-widest mb-3">
              <span className="w-1 h-1 bg-red-400 rounded-full animate-pulse" />
              Critical Support
            </div>

            <h1 className="text-[clamp(24px,4vw,34px)] font-extrabold tracking-[-0.03em] mb-2">
              Emergency Assistance
            </h1>

            <p className="text-[#555] text-xs max-w-[420px] mx-auto">
              Immediate help — notify your emergency contact instantly.
            </p>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#0c0c0c] border border-[#181818] rounded-[18px] p-5 hover:border-[#252525] transition-all duration-300">

          {/* Warning */}
          <div className="mb-4 bg-red-500/10 border border-red-500/20 rounded-[12px] p-3 text-red-400 text-xs">
            ⚠️ Use this feature only in urgent situations
          </div>

          {/* Label */}
          <label className="block text-[#888] mb-3 text-sm uppercase tracking-wider">
            Describe Symptoms
          </label>

          {/* Textarea */}
          <textarea
            rows="6"
            placeholder="Example: Chest pain, breathing difficulty, dizziness..."
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            className="w-full bg-[#111] border border-[#222] rounded-[12px] p-4 text-sm text-white
            placeholder-[#555] focus:outline-none focus:border-red-500 transition"
          />

          {/* Button */}
          <button
            onClick={handleCall}
            className="mt-5 w-full py-3 rounded-[12px] font-semibold text-white text-sm
            bg-gradient-to-r from-red-600 to-red-700
            hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(220,38,38,0.30)]
            transition-all duration-300"
          >
            🚨 Send Emergency Alert
          </button>

          {/* Response */}
          {message && (
            <div className="mt-5 bg-green-500/10 border border-green-500/20 rounded-[12px] p-4 text-green-300 text-sm">
              {message}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Emergency;