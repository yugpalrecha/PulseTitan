
// import { useState } from "react";
// import { uploadReport } from "../api";

// function ReportAnalyser() {

//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);

//   async function upload() {
//     const res = await uploadReport(file);
//     setResult(res);
//   }

//   return (

//     <div className="min-h-screen bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a1a1a] text-white px-4 py-10">

//       <div className="w-full max-w-5xl mx-auto">

//         {/* Title */}
//         <div className="mb-12 text-center">
//           <h2 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
//             Medical Report Analyzer
//           </h2>
//           <p className="text-gray-400 mt-3 text-lg">
//             Upload your report and get AI-powered health insights instantly
//           </p>
//         </div>

//         {/* Upload Card */}
//         <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">

//           <label className="block text-gray-300 mb-4">
//             Upload Medical Report (PDF)
//           </label>

//           {/* Drag-style input */}
//           <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-red-500 transition">

//             <input
//               type="file"
//               accept=".pdf"
//               onChange={e => setFile(e.target.files[0])}
//               className="hidden"
//               id="fileUpload"
//             />

//             <label htmlFor="fileUpload" className="cursor-pointer">

//               <p className="text-gray-400">
//                 Drag & drop your file here or <span className="text-red-400">browse</span>
//               </p>

//               {file && (
//                 <p className="mt-3 text-green-400 text-sm">
//                   Selected: {file.name}
//                 </p>
//               )}

//             </label>

//           </div>

//           {/* Button */}
//           <button
//             onClick={upload}
//             className="mt-8 w-full bg-gradient-to-r from-red-500 to-pink-500 
//             hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]
//             text-white font-semibold py-3 rounded-lg transition-all duration-300"
//           >
//             Analyze Report
//           </button>

//         </div>

//         {/* Result Section */}
//         {result && (

//           <div className="mt-12 backdrop-blur-xl bg-white/5 border border-red-500/30 rounded-2xl p-8 shadow-2xl">

//             <h3 className="text-2xl text-white mb-8">
//               Analysis Result
//             </h3>

//             {/* Cards */}
//             <div className="grid md:grid-cols-2 gap-6 mb-8">

//               <div className="bg-black/40 border border-gray-700 rounded-xl p-6 text-center">
//                 <p className="text-gray-400 text-sm">Severity</p>
//                 <p className="text-2xl text-red-400 font-semibold mt-2">
//                   {result.severity}
//                 </p>
//               </div>

//               <div className="bg-black/40 border border-gray-700 rounded-xl p-6 text-center">
//                 <p className="text-gray-400 text-sm">Risk Score</p>
//                 <p className="text-2xl text-yellow-400 font-semibold mt-2">
//                   {result.risk}
//                 </p>
//               </div>

//             </div>

//             {/* Explanation */}
//             <p className="text-gray-300 mb-8 leading-relaxed">
//               {result.explanation}
//             </p>

//             {/* Diseases */}
//             <h4 className="text-lg text-white mb-4">
//               Possible Diseases
//             </h4>

//             <div className="grid gap-3 mb-8">

//               {result.possibleDiseases.map((d, i) => (
//                 <div
//                   key={i}
//                   className="bg-black/40 border border-gray-700 rounded-lg p-4 flex justify-between items-center hover:border-red-500 transition"
//                 >
//                   <span>{d.condition}</span>
//                   <span className="text-red-400">{d.confidence}%</span>
//                 </div>
//               ))}

//             </div>

//             {/* Action */}
//             <div className="bg-blue-900/30 border border-blue-500/40 rounded-xl p-5 text-blue-300">
//               {result.action}
//             </div>

//           </div>

//         )}

//       </div>
//     </div>

//   );

// }

// export default ReportAnalyser;
import { useState } from "react";
import { uploadReport } from "../api";

function ReportAnalyser() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  async function upload() {
    const res = await uploadReport(file);
    setResult(res);
  }

  return (
    <div className="min-h-[calc(100vh-65px)] bg-black text-white px-4 py-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="relative text-center mb-6 overflow-hidden">
          <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[420px] h-[140px] bg-[radial-gradient(ellipse,rgba(147,51,234,0.08),transparent_70%)] pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[9px] text-[#888] uppercase tracking-widest mb-3">
              <span className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
              AI Report Analysis
            </div>

            <h1 className="text-[clamp(24px,4vw,34px)] font-extrabold tracking-[-0.03em] mb-2">
              Medical Report Analyzer
            </h1>

            <p className="text-[#555] text-xs max-w-[420px] mx-auto">
              Upload your medical report and get AI-powered analysis instantly.
            </p>
          </div>
        </div>

        {/* Upload Card */}
        <div className="bg-[#0c0c0c] border border-[#181818] rounded-[18px] p-5 hover:border-[#252525] transition-all duration-300">

          <label className="block text-[#888] mb-3 text-sm uppercase tracking-wider">
            Upload Medical Report (PDF)
          </label>

          {/* File Upload */}
          <div className="border border-dashed border-[#222] rounded-[14px] p-6 text-center bg-[#111] hover:border-purple-500/40 transition">

            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files[0])}
              className="hidden"
              id="fileUpload"
            />

            <label htmlFor="fileUpload" className="cursor-pointer block">
              <p className="text-[#777] text-sm">
                Drag & drop your file here or{" "}
                <span className="text-purple-400">browse</span>
              </p>

              {file && (
                <p className="mt-3 text-green-400 text-xs">
                  Selected: {file.name}
                </p>
              )}
            </label>
          </div>

          {/* Button */}
          <button
            onClick={upload}
            className="mt-5 w-full py-2.5 rounded-[10px] font-semibold text-white text-sm
            bg-gradient-to-r from-purple-600 to-violet-500
            hover:scale-[1.01] hover:shadow-[0_0_18px_rgba(147,51,234,0.25)]
            transition-all duration-300"
          >
            Analyze Report
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="mt-5 bg-[#0c0c0c] border border-[#181818] rounded-[18px] p-5">

            <h3 className="text-lg font-semibold text-purple-400 mb-5">
              Analysis Result
            </h3>

            {/* Severity / Risk */}
            <div className="grid md:grid-cols-2 gap-4 mb-5">

              <div className="bg-[#111] border border-[#222] rounded-[14px] p-4 text-center">
                <p className="text-[#666] text-xs uppercase tracking-wider">
                  Severity
                </p>
                <p className="text-xl font-bold text-red-400 mt-2">
                  {result.severity}
                </p>
              </div>

              <div className="bg-[#111] border border-[#222] rounded-[14px] p-4 text-center">
                <p className="text-[#666] text-xs uppercase tracking-wider">
                  Risk Score
                </p>
                <p className="text-xl font-bold text-yellow-400 mt-2">
                  {result.risk}
                </p>
              </div>

            </div>

            {/* Explanation */}
            <div className="mb-5">
              <p className="text-[#bbb] text-sm leading-relaxed">
                {result.explanation}
              </p>
            </div>

            {/* Diseases */}
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              Possible Diseases
            </h4>

            <div className="grid gap-3 mb-5">
              {result.possibleDiseases.map((d, i) => (
                <div
                  key={i}
                  className="bg-[#111] border border-[#222] rounded-[12px] p-4 flex justify-between items-center hover:border-purple-500/30 transition"
                >
                  <span className="text-sm text-[#ddd]">
                    {d.condition}
                  </span>

                  <span className="text-purple-400 text-sm font-medium">
                    {d.confidence}%
                  </span>
                </div>
              ))}
            </div>

            {/* Action */}
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-[12px] p-4 text-purple-300 text-sm">
              {result.action}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default ReportAnalyser;