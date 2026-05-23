// import { useState } from "react";
// import { askMedical } from "../api";

// const commonSymptoms = [
//   "Headache",
//   "Fever",
//   "Cough",
//   "Fatigue",
//   "Nausea",
//   "Chest Pain",
//   "Shortness of Breath",
//   "Dizziness",
//   "Joint Pain",
//   "Sore Throat",
//   "Back Pain",
//   "Abdominal Pain",
//   "Insomnia"
// ];

// function SymptomChecker() {
//   const [symptoms, setSymptoms] = useState([]);
//   const [input, setInput] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [severity, setSeverity] = useState("Moderate");
//   const [duration, setDuration] = useState("");
//   const [result, setResult] = useState("");
//   const [loading, setLoading] = useState(false);

//   const addSymptom = (symptom) => {
//     if (symptom && !symptoms.includes(symptom)) {
//       setSymptoms([...symptoms, symptom]);
//       setInput("");
//     }
//   };

//   const analyzeSymptoms = async () => {
//     const prompt = `
// Patient Details:
// Symptoms: ${symptoms.join(", ")}
// Age: ${age}
// Gender: ${gender}
// Severity: ${severity}
// Duration: ${duration}

// Analyze likely causes and recommendations.
// `;

//     try {
//       setLoading(true);
//       const res = await askMedical(prompt);
//       setResult(res.answer);
//     } catch (err) {
//       setResult("Failed to analyze symptoms.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto text-white">

//       <div className="text-center mb-10">
//         <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
//           Symptom Checker
//         </h1>
//         <p className="text-gray-400 mt-3 text-lg">
//           Analyze symptoms with AI-powered medical insights
//         </p>
//       </div>

//       <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 shadow-2xl">

//         <h3 className="text-gray-400 uppercase tracking-wider mb-4">
//           Your Symptoms
//         </h3>

//         <div className="flex gap-3 mb-4">
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type a symptom..."
//             className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 outline-none"
//           />

//           <button
//             onClick={() => addSymptom(input)}
//             className="bg-pink-600 px-5 rounded-xl text-xl hover:bg-pink-700"
//           >
//             +
//           </button>
//         </div>

//         <div className="flex flex-wrap gap-3 mb-6">
//           {commonSymptoms.map((symptom) => (
//             <button
//               key={symptom}
//               onClick={() => addSymptom(symptom)}
//               className="px-4 py-2 rounded-full border border-gray-700 text-gray-300 hover:bg-pink-600 hover:border-pink-600 transition"
//             >
//               {symptom}
//             </button>
//           ))}
//         </div>

//         {symptoms.length > 0 && (
//           <div className="mb-6 flex flex-wrap gap-2">
//             {symptoms.map((symptom, i) => (
//               <span
//                 key={i}
//                 className="bg-pink-600/20 text-pink-400 px-4 py-2 rounded-full"
//               >
//                 {symptom}
//               </span>
//             ))}
//           </div>
//         )}

//         <div className="grid md:grid-cols-4 gap-4 mb-6">

//           <input
//             type="number"
//             placeholder="Age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             className="bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3"
//           />

//           <select
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             className="bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3"
//           >
//             <option value="">Gender</option>
//             <option>Male</option>
//             <option>Female</option>
//             <option>Other</option>
//           </select>

//           <select
//             value={severity}
//             onChange={(e) => setSeverity(e.target.value)}
//             className="bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3"
//           >
//             <option>Mild</option>
//             <option>Moderate</option>
//             <option>Severe</option>
//           </select>

//           <input
//             placeholder="Duration (e.g. 3 days)"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//             className="bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3"
//           />
//         </div>

//         <button
//           onClick={analyzeSymptoms}
//           className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-red-500 text-lg font-semibold hover:opacity-90 transition"
//         >
//           {loading ? "Analyzing..." : "Analyze Symptoms"}
//         </button>

//         {result && (
//           <div className="mt-8 bg-[#0d0d0d] border border-gray-800 rounded-2xl p-6">
//             <h3 className="text-xl font-semibold text-pink-400 mb-3">
//               Analysis Result
//             </h3>
//             <p className="text-gray-300 whitespace-pre-line">
//               {result}
//             </p>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// export default SymptomChecker;
import { useState } from "react";
import { askMedical } from "../api";

const commonSymptoms = [
  "Headache",
  "Fever",
  "Cough",
  "Fatigue",
  "Nausea",
  "Chest Pain",
  "Shortness of Breath",
  "Dizziness",
  "Joint Pain",
  "Sore Throat",
  "Back Pain",
  "Abdominal Pain",
  "Insomnia",
];

function SymptomChecker() {
  const [symptoms, setSymptoms] = useState([]);
  const [input, setInput] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [severity, setSeverity] = useState("Moderate");
  const [duration, setDuration] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const addSymptom = (symptom) => {
    if (symptom && !symptoms.includes(symptom)) {
      setSymptoms([...symptoms, symptom]);
      setInput("");
    }
  };

  const analyzeSymptoms = async () => {
    const prompt = `
Patient Details:
Symptoms: ${symptoms.join(", ")}
Age: ${age}
Gender: ${gender}
Severity: ${severity}
Duration: ${duration}

Analyze likely causes and recommendations.
`;

    try {
      setLoading(true);
      const res = await askMedical(prompt);
      setResult(res.answer);
    } catch {
      setResult("Failed to analyze symptoms.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-65px)] bg-black text-white px-4 py-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="relative text-center mb-6 overflow-hidden">
          <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[420px] h-[140px] bg-[radial-gradient(ellipse,rgba(236,72,153,0.08),transparent_70%)] pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[9px] text-[#888] uppercase tracking-widest mb-3">
              <span className="w-1 h-1 bg-pink-400 rounded-full animate-pulse" />
              AI Diagnosis
            </div>

            <h1 className="text-[clamp(24px,4vw,34px)] font-extrabold tracking-[-0.03em] mb-2">
              Symptom Checker
            </h1>

            <p className="text-[#555] text-xs max-w-[420px] mx-auto">
              Analyze symptoms with AI-powered medical insights.
            </p>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#0c0c0c] border border-[#181818] rounded-[18px] p-5 hover:border-[#252525] transition-all duration-300">

          <h3 className="text-[#888] uppercase tracking-wider mb-3 text-xs">
            Your Symptoms
          </h3>

          {/* Input */}
          <div className="flex gap-2 mb-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a symptom..."
              className="flex-1 bg-[#111] border border-[#222] rounded-[10px] px-3 py-2.5 text-sm text-white focus:outline-none focus:border-pink-500 transition"
            />

            <button
              onClick={() => addSymptom(input)}
              className="px-4 rounded-[10px] bg-pink-600 hover:bg-pink-500 text-lg font-semibold transition"
            >
              +
            </button>
          </div>

          {/* Common Symptoms */}
          <div className="flex flex-wrap gap-2 mb-4">
            {commonSymptoms.map((symptom) => (
              <button
                key={symptom}
                onClick={() => addSymptom(symptom)}
                className="px-3 py-1.5 rounded-full border border-[#222] bg-[#111] text-[#bbb] text-xs
                hover:bg-pink-600/10 hover:border-pink-500/40 hover:text-pink-400 transition"
              >
                {symptom}
              </button>
            ))}
          </div>

          {/* Selected Symptoms */}
          {symptoms.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {symptoms.map((symptom, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs"
                >
                  {symptom}
                </span>
              ))}
            </div>
          )}

          {/* Patient Details */}
          <div className="grid md:grid-cols-4 gap-2 mb-4">

            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="bg-[#111] border border-[#222] rounded-[10px] px-3 py-2.5 text-sm text-white focus:outline-none focus:border-pink-500"
            />

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="bg-[#111] border border-[#222] rounded-[10px] px-3 py-2.5 text-sm text-white focus:outline-none focus:border-pink-500"
            >
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <select
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              className="bg-[#111] border border-[#222] rounded-[10px] px-3 py-2.5 text-sm text-white focus:outline-none focus:border-pink-500"
            >
              <option>Mild</option>
              <option>Moderate</option>
              <option>Severe</option>
            </select>

            <input
              placeholder="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="bg-[#111] border border-[#222] rounded-[10px] px-3 py-2.5 text-sm text-white focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Button */}
          <button
            onClick={analyzeSymptoms}
            className="w-full py-2.5 rounded-[10px] font-semibold text-white text-sm
            bg-gradient-to-r from-pink-600 to-red-500
            hover:scale-[1.01] hover:shadow-[0_0_18px_rgba(236,72,153,0.25)]
            transition-all duration-300"
          >
            {loading ? "Analyzing..." : "Analyze Symptoms"}
          </button>

          {/* Result */}
          {result && (
            <div className="mt-5 bg-[#101010] border border-[#1d1d1d] rounded-[14px] p-4">
              <h3 className="text-base font-semibold text-pink-400 mb-2">
                Analysis Result
              </h3>
              <p className="text-[#cfcfcf] whitespace-pre-line leading-relaxed text-sm">
                {result}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default SymptomChecker;