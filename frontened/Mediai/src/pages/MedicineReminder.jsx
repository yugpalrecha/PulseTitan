
// import { useState } from "react";

// function MedicineReminder(){

// const [medicine,setMedicine] = useState("");
// const [time,setTime] = useState("");
// const [reminders,setReminders] = useState([]);

// function addReminder(){

// if(medicine === "" || time === "") return;

// const newReminder = {
// medicine: medicine,
// time: time
// };

// setReminders([...reminders,newReminder]);

// startTimer(newReminder);

// setMedicine("");
// setTime("");

// }

// function startTimer(reminder){

// const now = new Date();

// const selectedTime = reminder.time.split(":");
// const hour = selectedTime[0];
// const minute = selectedTime[1];

// const target = new Date();

// target.setHours(hour);
// target.setMinutes(minute);
// target.setSeconds(0);

// let delay = target.getTime() - now.getTime();

// if(delay < 0){
// delay = delay + 24*60*60*1000;
// }

// setTimeout(function(){

// const audio = new Audio("/alarm.mp3");
// audio.play();

// alert("Time to take " + reminder.medicine);

// },delay);

// }

// return(

// <div className="min-h-screen bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a1a1a] text-white px-4 py-10">

// <div className="w-full max-w-4xl mx-auto">

// {/* Title */}
// <div className="mb-12 text-center">
// <h2 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
// Medicine Reminder
// </h2>
// <p className="text-gray-400 mt-3 text-lg">
// Never miss your medication — stay healthy, stay on time
// </p>
// </div>

// {/* Form Card */}
// <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">

// <div className="grid md:grid-cols-2 gap-6">

// <div>
// <label className="text-gray-300 block mb-2">
// Medicine Name
// </label>

// <input
// value={medicine}
// onChange={(e)=>setMedicine(e.target.value)}
// placeholder="Paracetamol"
// className="w-full bg-black/40 border border-gray-700 rounded-lg p-3 text-gray-300 
// focus:outline-none focus:ring-2 focus:ring-red-500 
// focus:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition"
// />
// </div>

// <div>
// <label className="text-gray-300 block mb-2">
// Reminder Time
// </label>

// <input
// type="time"
// value={time}
// onChange={(e)=>setTime(e.target.value)}
// className="w-full bg-black/40 border border-gray-700 rounded-lg p-3 text-gray-300 
// focus:outline-none focus:ring-2 focus:ring-red-500"
// />
// </div>

// </div>

// {/* Button */}
// <button
// onClick={addReminder}
// className="mt-8 w-full bg-gradient-to-r from-red-500 to-pink-500 
// hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]
// text-white font-semibold py-3 rounded-lg transition-all duration-300"
// >
// Add Reminder
// </button>

// </div>

// {/* Reminders */}
// {reminders.length > 0 && (

// <div className="mt-12 backdrop-blur-xl bg-white/5 border border-red-500/30 rounded-2xl p-8 shadow-2xl">

// <h3 className="text-xl text-red-400 mb-6">
// Active Reminders
// </h3>

// <div className="grid gap-4">

// {reminders.map((r,i)=>(
// <div
// key={i}
// className="bg-black/40 border border-gray-700 p-5 rounded-xl flex justify-between items-center hover:border-red-500 transition"
// >

// <div>
// <p className="text-white font-medium">
// {r.medicine}
// </p>
// <p className="text-gray-400 text-sm">
// Scheduled Time
// </p>
// </div>

// <div className="text-red-400 font-semibold">
// {r.time}
// </div>

// </div>
// ))}

// </div>

// </div>

// )}

// </div>
// </div>

// );

// }

// export default MedicineReminder;
import { useState } from "react";

function MedicineReminder() {
  const [medicine, setMedicine] = useState("");
  const [time, setTime] = useState("");
  const [reminders, setReminders] = useState([]);

  function addReminder() {
    if (!medicine || !time) return;

    const newReminder = { medicine, time };

    setReminders([...reminders, newReminder]);
    startTimer(newReminder);

    setMedicine("");
    setTime("");
  }

  function startTimer(reminder) {
    const now = new Date();

    const [hour, minute] = reminder.time.split(":");

    const target = new Date();
    target.setHours(hour);
    target.setMinutes(minute);
    target.setSeconds(0);

    let delay = target.getTime() - now.getTime();

    if (delay < 0) delay += 24 * 60 * 60 * 1000;

    setTimeout(() => {
      const audio = new Audio("/alarm.mp3");
      audio.play();
      alert("Time to take " + reminder.medicine);
    }, delay);
  }

  return (
    <div className="min-h-[calc(100vh-65px)] bg-black text-white px-6 py-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="relative text-center mb-8 overflow-hidden">
          <div className="absolute top-[-35px] left-1/2 -translate-x-1/2 w-[420px] h-[130px] bg-[radial-gradient(ellipse,rgba(34,197,94,0.10),transparent_70%)] pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-[10px] text-[#888] uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Medication Tracker
            </div>

            <h1 className="text-[36px] font-extrabold tracking-[-0.03em] mb-2">
              Medicine Reminder
            </h1>

            <p className="text-[#555] text-sm">
              Never miss your medication schedule.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-[#0c0c0c] border border-[#181818] rounded-[20px] p-6 hover:border-[#252525] transition">

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block text-[#888] mb-2 text-sm uppercase tracking-wider">
                Medicine Name
              </label>

              <input
                value={medicine}
                onChange={(e) => setMedicine(e.target.value)}
                placeholder="Paracetamol"
                className="w-full bg-[#111] border border-[#222] rounded-[12px] px-4 py-3 text-sm text-white
                placeholder-[#555] focus:outline-none focus:border-green-500 transition"
              />
            </div>

            <div>
              <label className="block text-[#888] mb-2 text-sm uppercase tracking-wider">
                Reminder Time
              </label>

              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-[#111] border border-[#222] rounded-[12px] px-4 py-3 text-sm text-white
                focus:outline-none focus:border-green-500 transition"
              />
            </div>

          </div>

          {/* Button */}
          <button
            onClick={addReminder}
            className="mt-6 w-full py-3 rounded-[12px] font-semibold text-white text-sm
            bg-gradient-to-r from-green-600 to-emerald-500
            hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(34,197,94,0.25)]
            transition-all duration-300"
          >
            Add Reminder
          </button>
        </div>

        {/* Reminders */}
        {reminders.length > 0 && (
          <div className="mt-6 bg-[#0c0c0c] border border-[#181818] rounded-[20px] p-6">

            <h3 className="text-green-400 text-base font-semibold mb-5">
              Active Reminders
            </h3>

            <div className="grid gap-4">
              {reminders.map((r, i) => (
                <div
                  key={i}
                  className="bg-[#111] border border-[#222] rounded-[14px] px-5 py-4 flex justify-between items-center hover:border-green-500/30 transition"
                >
                  <div>
                    <p className="text-white font-medium">
                      {r.medicine}
                    </p>
                    <p className="text-sm text-[#666]">
                      Scheduled Time
                    </p>
                  </div>

                  <div className="text-green-400 font-semibold">
                    {r.time}
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default MedicineReminder;