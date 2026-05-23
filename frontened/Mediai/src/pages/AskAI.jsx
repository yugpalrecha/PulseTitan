
// import { useState } from "react";
// import { askMedical } from "../api";

// function AskAI() {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");

//   async function ask() {
//     const res = await askMedical(question);
//     setAnswer(res.answer);
//   }

//   return (
//     <div className="min-h-[calc(100vh-65px)] bg-black text-white px-6 py-6">
//       <div className="max-w-4xl mx-auto">

//         {/* Header */}
//         <div className="relative text-center mb-8 overflow-hidden">
//           <div className="absolute top-[-35px] left-1/2 -translate-x-1/2 w-[420px] h-[130px] bg-[radial-gradient(ellipse,rgba(37,99,235,0.10),transparent_70%)] pointer-events-none" />

//           <div className="relative z-10">
//             <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-[10px] text-[#888] uppercase tracking-widest mb-4">
//               <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
//               AI Assistant
//             </div>

//             <h1 className="text-[36px] font-extrabold tracking-[-0.03em] mb-2">
//               Ask Medical AI
//             </h1>

//             <p className="text-[#555] text-sm">
//               Get intelligent medical insights instantly.
//             </p>
//           </div>
//         </div>

//         {/* Input Card */}
//         <div className="bg-[#0c0c0c] border border-[#181818] rounded-[20px] p-6 hover:border-[#252525] transition">

//           <label className="block text-[#888] mb-3 text-sm uppercase tracking-wider">
//             Ask Your Question
//           </label>

//           <textarea
//             rows="5"
//             placeholder="Example: What are the symptoms of diabetes?"
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             className="w-full bg-[#111] border border-[#222] rounded-[12px] p-4 text-sm text-white
//             placeholder-[#555] focus:outline-none focus:border-blue-500 transition resize-none"
//           />

//           <button
//             onClick={ask}
//             className="mt-6 w-full py-3 rounded-[12px] font-semibold text-white text-sm
//             bg-gradient-to-r from-blue-600 to-cyan-500
//             hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]
//             transition-all duration-300"
//           >
//             Ask AI
//           </button>

//         </div>

//         {/* Answer */}
//         {answer && (
//           <div className="mt-6 bg-[#0c0c0c] border border-[#181818] rounded-[20px] p-6">

//             <h3 className="text-blue-400 text-base font-semibold mb-4">
//               AI Response
//             </h3>

//             <div className="bg-[#111] border border-[#222] rounded-[14px] p-5 text-[#d1d1d1] text-sm leading-relaxed">
//               {answer}
//             </div>

//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// export default AskAI;
import { useState } from "react";
import { askMedical } from "../api";

function AskAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function ask() {
    if (!question.trim()) return;
    try {
      setLoading(true);
      setAnswer("");
      const res = await askMedical(question);
      setAnswer(res.answer);
    } catch (e) {
      setAnswer("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // Parse **bold** and numbered lists
  function renderAnswer(text) {
    return text.split("\n").filter(Boolean).map((line, i) => {
      const numbered = line.match(/^(\d+)\.\s+(.*)/);
      const content = numbered ? numbered[2] : line;

      const formatted = content.split(/\*\*(.*?)\*\*/g).map((part, j) =>
        j % 2 === 1 ? <strong key={j} className="text-white">{part}</strong> : part
      );

      return numbered ? (
        <div key={i} className="flex gap-3 py-2.5 border-b border-[#1a1a1a] last:border-0">
          <span className="w-6 h-6 flex-shrink-0 rounded-full bg-blue-600/15 border border-blue-500/20 text-blue-400 text-[11px] font-bold flex items-center justify-center mt-0.5">
            {numbered[1]}
          </span>
          <p className="text-[#ccc] text-sm leading-relaxed">{formatted}</p>
        </div>
      ) : (
        <p key={i} className="text-[#aaa] text-sm leading-relaxed mb-3">{formatted}</p>
      );
    });
  }

  return (
    <div className="min-h-[calc(100vh-65px)] bg-black text-white px-6 py-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-[10px] text-[#888] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            AI Assistant
          </div>
          <h1 className="text-[36px] font-extrabold tracking-[-0.03em] mb-2">Ask Medical AI</h1>
          <p className="text-[#555] text-sm">Get intelligent medical insights instantly.</p>
        </div>

        {/* Input */}
        <div className="bg-[#0c0c0c] border border-[#181818] rounded-[20px] p-6">
          <label className="block text-[#888] mb-3 text-sm uppercase tracking-wider">Your Question</label>
          <textarea
            rows="5"
            placeholder="Example: What are the symptoms of diabetes?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full bg-[#111] border border-[#222] rounded-[12px] p-4 text-sm text-white placeholder-[#555] focus:outline-none focus:border-blue-500 transition resize-none"
          />
          <button
            onClick={ask}
            disabled={loading || !question.trim()}
            className="mt-4 w-full py-3 rounded-[12px] font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            {loading ? "Thinking..." : "Ask AI"}
          </button>
        </div>

        {/* Answer */}
        {answer && (
          <div className="mt-6 bg-[#0c0c0c] border border-[#181818] rounded-[20px] p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-lg bg-blue-600/15 border border-blue-500/20 flex items-center justify-center">
                <svg width="14" height="14" fill="none" stroke="#60a5fa" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="text-blue-400 text-sm font-semibold uppercase tracking-wider">AI Response</h3>
            </div>

            <div className="bg-[#0a0a0a] border border-[#1e1e1e] rounded-[14px] p-5">
              {renderAnswer(answer)}
            </div>

            <p className="text-[#333] text-[11px] mt-4 text-center">
              AI-generated info — always consult a qualified doctor.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default AskAI;