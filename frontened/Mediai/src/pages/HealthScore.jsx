// import { useState } from "react";
// import { getHealthScore } from "../api";

// function HealthScore(){

// const [sleep,setSleep]=useState("");
// const [exercise,setExercise]=useState("");
// const [diet,setDiet]=useState("average");
// const [smoking,setSmoking]=useState(false);
// const [alcohol,setAlcohol]=useState("low");
// const [stress,setStress]=useState("medium");

// const [result,setResult]=useState(null);

// async function calculate(){

// const data={
// sleep:Number(sleep),
// exercise:Number(exercise),
// diet,
// smoking,
// alcohol,
// stress
// };

// const res=await getHealthScore(data);
// setResult(res);
// }

// return(

// <div className="min-h-screen bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a1a1a] text-white px-4 py-10">

// <div className="w-full max-w-5xl mx-auto">

// {/* Title */}
// <div className="mb-12 text-center">
// <h2 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
// Health Score Calculator
// </h2>
// <p className="text-gray-400 mt-3 text-lg">
// Analyze your lifestyle and get AI-powered health insights
// </p>
// </div>

// {/* Form Card */}
// <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">

// <div className="grid md:grid-cols-2 gap-6">

// {/* Input Style */}
// {[
// {label:"Sleep Hours (per night)", value:sleep, set:setSleep, placeholder:"e.g. 7"},
// {label:"Exercise Days (per week)", value:exercise, set:setExercise, placeholder:"e.g. 3"}
// ].map((field,idx)=>(
// <div key={idx}>
// <label className="text-gray-300 block mb-2">{field.label}</label>
// <input
// placeholder={field.placeholder}
// value={field.value}
// onChange={e=>field.set(e.target.value)}
// className="w-full bg-black/40 border border-gray-700 rounded-lg p-3 text-gray-300 
// focus:outline-none focus:ring-2 focus:ring-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.5)]
// transition"
// />
// </div>
// ))}

// {/* Diet */}
// <div>
// <label className="text-gray-300 block mb-2">Diet Quality</label>
// <select
// onChange={e=>setDiet(e.target.value)}
// className="w-full bg-black/40 border border-gray-700 rounded-lg p-3 text-gray-300 focus:ring-2 focus:ring-red-500"
// >
// <option value="good">Good Diet</option>
// <option value="average">Average Diet</option>
// </select>
// </div>

// {/* Alcohol */}
// <div>
// <label className="text-gray-300 block mb-2">Alcohol Consumption</label>
// <select
// onChange={e=>setAlcohol(e.target.value)}
// className="w-full bg-black/40 border border-gray-700 rounded-lg p-3 text-gray-300 focus:ring-2 focus:ring-red-500"
// >
// <option value="low">Low</option>
// <option value="moderate">Moderate</option>
// <option value="high">High</option>
// </select>
// </div>

// {/* Stress */}
// <div>
// <label className="text-gray-300 block mb-2">Stress Level</label>
// <select
// onChange={e=>setStress(e.target.value)}
// className="w-full bg-black/40 border border-gray-700 rounded-lg p-3 text-gray-300 focus:ring-2 focus:ring-red-500"
// >
// <option value="low">Low</option>
// <option value="medium">Medium</option>
// <option value="high">High</option>
// </select>
// </div>

// {/* Smoking */}
// <div className="flex items-center gap-3 mt-7">
// <label className="text-gray-300">Smoking</label>
// <input
// type="checkbox"
// onChange={e=>setSmoking(e.target.checked)}
// className="accent-red-500 scale-125"
// />
// </div>

// </div>

// {/* Button */}
// <button
// onClick={calculate}
// className="mt-10 w-full bg-gradient-to-r from-red-500 to-pink-500 
// hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]
// text-white font-semibold py-3 rounded-lg transition-all duration-300"
// >
// Calculate Health Score
// </button>

// </div>

// {/* Result */}
// {result && (

// <div className="mt-12 backdrop-blur-xl bg-white/5 border border-red-500/30 rounded-2xl p-8 shadow-2xl">

// {/* Score */}
// <div className="text-center mb-8">
// <h3 className="text-5xl font-bold text-red-400">
// {result.health_score}
// </h3>
// <p className="text-gray-400 mt-2 text-lg">
// Health Score
// </p>
// </div>

// {/* Status */}
// <div className="text-center mb-8">
// <span className="px-4 py-2 rounded-full bg-red-500/20 text-red-400 border border-red-500/40">
// {result.status}
// </span>
// </div>

// {/* Suggestions */}
// <h4 className="text-xl text-white mb-4">Suggestions</h4>

// <div className="grid gap-3">
// {result.suggestions.map((s,i)=>(
// <div
// key={i}
// className="bg-black/40 border border-gray-700 p-4 rounded-lg hover:border-red-500 transition"
// >
// {s}
// </div>
// ))}
// </div>

// </div>

// )}

// </div>
// </div>

// );

// }

// export default HealthScore;
import { useState } from "react";
import { getHealthScore } from "../api";

function HealthScore() {
  const [sleep, setSleep] = useState("");
  const [exercise, setExercise] = useState("");
  const [diet, setDiet] = useState("average");
  const [smoking, setSmoking] = useState(false);
  const [alcohol, setAlcohol] = useState("low");
  const [stress, setStress] = useState("medium");

  const [result, setResult] = useState(null);

  async function calculate() {
    const data = {
      sleep: Number(sleep),
      exercise: Number(exercise),
      diet,
      smoking,
      alcohol,
      stress,
    };

    const res = await getHealthScore(data);
    setResult(res);
  }

  return (
    <div className="min-h-[calc(100vh-65px)] bg-black text-white px-8 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="relative text-center mb-12 overflow-hidden">
          <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[650px] h-[260px] bg-[radial-gradient(ellipse,rgba(220,38,38,0.12),transparent_70%)] pointer-events-none" />

          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-[11px] text-[#888] uppercase tracking-widest mb-5"
              style={{ opacity: 0, animation: "fadeUp 0.8s ease forwards" }}
            >
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
              Health Analytics
            </div>

            <h1
              className="text-[clamp(34px,5vw,56px)] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4"
              style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.15s forwards" }}
            >
              Health Score Calculator
            </h1>

            <p
              className="text-[#4a4a4a] text-[17px] max-w-[520px] mx-auto"
              style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.3s forwards" }}
            >
              Analyze your lifestyle and receive AI-powered wellness insights.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div
          className="bg-[#0c0c0c] border border-[#181818] rounded-[24px] p-8 hover:border-[#252525] transition-all duration-300"
          style={{ opacity: 0, animation: "cardIn 0.7s ease 0.2s forwards" }}
        >
          <div className="grid md:grid-cols-2 gap-6">

            {/* Sleep */}
            <InputField
              label="Sleep Hours (Per Night)"
              value={sleep}
              onChange={setSleep}
              placeholder="e.g. 7"
            />

            {/* Exercise */}
            <InputField
              label="Exercise Days (Per Week)"
              value={exercise}
              onChange={setExercise}
              placeholder="e.g. 3"
            />

            {/* Diet */}
            <SelectField
              label="Diet Quality"
              value={diet}
              onChange={setDiet}
              options={[
                { label: "Good Diet", value: "good" },
                { label: "Average Diet", value: "average" },
              ]}
            />

            {/* Alcohol */}
            <SelectField
              label="Alcohol Consumption"
              value={alcohol}
              onChange={setAlcohol}
              options={[
                { label: "Low", value: "low" },
                { label: "Moderate", value: "moderate" },
                { label: "High", value: "high" },
              ]}
            />

            {/* Stress */}
            <SelectField
              label="Stress Level"
              value={stress}
              onChange={setStress}
              options={[
                { label: "Low", value: "low" },
                { label: "Medium", value: "medium" },
                { label: "High", value: "high" },
              ]}
            />

            {/* Smoking */}
            <div className="flex items-center gap-4 mt-8">
              <label className="text-[#b5b5b5] font-medium">Smoking</label>
              <input
                type="checkbox"
                checked={smoking}
                onChange={(e) => setSmoking(e.target.checked)}
                className="accent-red-500 scale-125"
              />
            </div>
          </div>

          {/* Button */}
          <button
            onClick={calculate}
            className="mt-10 w-full rounded-[14px] py-4 font-semibold text-white
            bg-gradient-to-r from-red-600 to-red-500
            hover:scale-[1.015] hover:shadow-[0_0_25px_rgba(220,38,38,0.35)]
            transition-all duration-300"
          >
            Calculate Health Score
          </button>
        </div>

        {/* Result */}
        {result && (
          <div
            className="mt-10 bg-[#0c0c0c] border border-[#181818] rounded-[24px] p-8"
            style={{ opacity: 0, animation: "cardIn 0.6s ease forwards" }}
          >
            <div className="text-center mb-8">
              <h2 className="text-6xl font-extrabold text-red-400 mb-2">
                {result.health_score}
              </h2>
              <p className="text-[#666] text-lg">Health Score</p>
            </div>

            <div className="flex justify-center mb-8">
              <span className="px-5 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
                {result.status}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-5">Suggestions</h3>

            <div className="grid gap-4">
              {result.suggestions.map((s, i) => (
                <div
                  key={i}
                  className="bg-[#101010] border border-[#1e1e1e] rounded-[16px] p-4 text-[#cfcfcf]
                  hover:border-red-500/30 transition"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

/* Reusable Input */
function InputField({ label, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block mb-2 text-[#b5b5b5] font-medium">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-[#111] border border-[#222] rounded-[14px] px-4 py-3 text-white
        focus:outline-none focus:border-red-500 transition"
      />
    </div>
  );
}

/* Reusable Select */
function SelectField({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block mb-2 text-[#b5b5b5] font-medium">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#111] border border-[#222] rounded-[14px] px-4 py-3 text-white
        focus:outline-none focus:border-red-500 transition"
      >
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default HealthScore;