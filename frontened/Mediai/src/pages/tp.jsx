// import { useState } from "react";
// import { loginUser } from "../api/authApi";

// function Login({ setPage }) {
//   const [form, setForm] = useState({
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleLogin = async () => {
//     try {
//       const res = await loginUser(form);

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       alert("Login Successful");
//       window.location.reload();

//     } catch (error) {
//       alert(error.response?.data?.message || "Login Failed");
//     }
//   };

//   return (
//     <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-black overflow-hidden">
//       {/* Background glow */}
//       <div className="absolute inset-0 bg-gradient-radial from-gray-900 via-black to-black"></div>

//       <div className="w-full max-w-5xl h-[540px] relative" style={{ perspective: "2500px" }}>
//         <div className="relative w-full h-full">

//           {/* Left Welcome Panel */}
//           <div
//             className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 overflow-hidden"
//             style={{
//               transformStyle: "preserve-3d",
//               animation: "slideInLeft3D 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
//               transformOrigin: "left center",
//               clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
//               boxShadow: "20px 0 60px rgba(0,0,0,0.8)",
//             }}
//           >
//             <div className="absolute top-0 right-0 w-80 h-80 bg-slate-600 opacity-10 rounded-full -translate-y-24 translate-x-24 blur-3xl"></div>
//             <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-500 opacity-10 rounded-full translate-y-32 -translate-x-32 blur-3xl"></div>

//             <div className="relative z-10 flex flex-col items-center justify-center h-full px-12">
//               <h1
//                 className="text-6xl font-bold text-white mb-6 tracking-wider"
//                 style={{ opacity: 0, animation: "fadeInScale 1.5s ease-out 2s forwards" }}
//               >
//                 WELCOME!
//               </h1>
//               <div
//                 className="h-1 bg-white mb-8"
//                 style={{ width: 0, animation: "expandWidth 2s ease-out 3s forwards" }}
//               ></div>
//               <p
//                 className="text-white text-lg text-center font-light"
//                 style={{ opacity: 0, animation: "fadeIn 1.5s ease-out 3.5s forwards" }}
//               >
//                 Sign in to continue your journey
//               </p>
//             </div>

//             <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-slate-400 to-transparent opacity-50"></div>
//           </div>

//           {/* Right Login Panel */}
//           <div
//             className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-br from-gray-950 via-black to-gray-900"
//             style={{
//               transformStyle: "preserve-3d",
//               animation: "slideInRight3D 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
//               transformOrigin: "right center",
//               clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
//               boxShadow: "-20px 0 60px rgba(0,0,0,0.8)",
//             }}
//           >
//             <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-slate-700 opacity-5 rounded-full blur-3xl"></div>

//             <div className="relative z-10 flex flex-col justify-center h-full px-14 py-8">

//               {/* Logo */}
//               <div
//                 className="flex justify-center mb-6"
//                 style={{ opacity: 0, transform: "scale(0.5)", animation: "popIn 1s ease-out 2.2s forwards" }}
//               >
//                 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-2xl border border-slate-600">
//                   <span className="text-3xl">🔐</span>
//                 </div>
//               </div>

//               {/* Title */}
//               <div
//                 className="text-center mb-8"
//                 style={{ opacity: 0, animation: "fadeIn 1.5s ease-out 2.8s forwards" }}
//               >
//                 <h2 className="text-3xl font-bold text-white mb-2">Login</h2>
//                 <p className="text-gray-400 text-base">Sign in to your account</p>
//               </div>

//               {/* Form */}
//               <div style={{ opacity: 0, animation: "fadeIn 1.5s ease-out 3.3s forwards" }}>

//                 {/* Email */}
//                 <div className="mb-5">
//                   <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
//                   <div className="relative">
//                     <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                       <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" />
//                     </svg>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="you@example.com"
//                       value={form.email}
//                       onChange={handleChange}
//                       className="w-full pl-11 pr-4 py-3.5 bg-gray-900 border-2 border-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-slate-600 transition-all placeholder-gray-600"
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div className="mb-5">
//                   <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
//                   <div className="relative">
//                     <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                       <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
//                     </svg>
//                     <input
//                       type="password"
//                       name="password"
//                       placeholder="Enter your password"
//                       value={form.password}
//                       onChange={handleChange}
//                       className="w-full pl-11 pr-4 py-3.5 bg-gray-900 border-2 border-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-slate-600 transition-all placeholder-gray-600"
//                     />
//                   </div>
//                 </div>

//                 {/* Button */}
//                 <button
//                   onClick={handleLogin}
//                   className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white py-3.5 rounded-xl font-semibold text-base transition-all shadow-2xl hover:shadow-slate-700/50"
//                 >
//                   Login
//                 </button>
//               </div>

//               {/* Footer */}
//               <div
//                 className="mt-6 pt-5 border-t border-gray-800 text-center"
//                 style={{ opacity: 0, animation: "fadeIn 1.5s ease-out 4s forwards" }}
//               >
//                 <p className="text-sm text-gray-400">
//                   Don't have an account?{" "}
//                   <span
//                     onClick={() => setPage("register")}
//                     className="cursor-pointer text-gray-300 font-semibold hover:text-white transition"
//                   >
//                     Create account
//                   </span>
//                 </p>
//               </div>
//             </div>

//             <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent opacity-50"></div>
//           </div>

//         </div>
//       </div>

//       <style>{`
//         @keyframes slideInLeft3D {
//           0% { transform: translateX(-150%) translateZ(-500px) rotateY(-45deg); opacity: 0; }
//           60% { transform: translateX(5%) translateZ(-50px) rotateY(2deg); }
//           100% { transform: translateX(0) translateZ(0) rotateY(0); opacity: 1; }
//         }
//         @keyframes slideInRight3D {
//           0% { transform: translateX(150%) translateZ(-500px) rotateY(45deg); opacity: 0; }
//           60% { transform: translateX(-5%) translateZ(-50px) rotateY(-2deg); }
//           100% { transform: translateX(0) translateZ(0) rotateY(0); opacity: 1; }
//         }
//         @keyframes fadeIn {
//           0% { opacity: 0; transform: translateY(30px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeInScale {
//           0% { opacity: 0; transform: scale(0.8) translateY(30px); }
//           100% { opacity: 1; transform: scale(1) translateY(0); }
//         }
//         @keyframes popIn {
//           0% { opacity: 0; transform: scale(0.3); }
//           50% { transform: scale(1.1); }
//           100% { opacity: 1; transform: scale(1); }
//         }
//         @keyframes expandWidth {
//           0% { width: 0; opacity: 0; }
//           100% { width: 10rem; opacity: 1; }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Login;
import { useState } from "react";
import { loginUser } from "../api/authApi";

function Login({ setPage, setToken }) {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async () => {
    try {
      const res = await loginUser(form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful");

      setToken(res.data.token);
      setPage("dashboard");

    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900 via-black to-black"></div>

      <div
        className="w-full max-w-5xl h-[540px] relative"
        style={{ perspective: "2500px" }}
      >
        <div className="relative w-full h-full">

          {/* Left Welcome Panel */}
          <div
            className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              animation:
                "slideInLeft3D 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
              transformOrigin: "left center",
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
              boxShadow: "20px 0 60px rgba(0,0,0,0.8)",
            }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-slate-600 opacity-10 rounded-full -translate-y-24 translate-x-24 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-500 opacity-10 rounded-full translate-y-32 -translate-x-32 blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full px-12">
              <h1
                className="text-6xl font-bold text-white mb-6 tracking-wider"
                style={{
                  opacity: 0,
                  animation: "fadeInScale 1.5s ease-out 2s forwards",
                }}
              >
                WELCOME!
              </h1>

              <div
                className="h-1 bg-white mb-8"
                style={{
                  width: 0,
                  animation: "expandWidth 2s ease-out 3s forwards",
                }}
              ></div>

              <p
                className="text-white text-lg text-center font-light"
                style={{
                  opacity: 0,
                  animation: "fadeIn 1.5s ease-out 3.5s forwards",
                }}
              >
                Sign in to continue your journey
              </p>
            </div>

            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-slate-400 to-transparent opacity-50"></div>
          </div>

          {/* Right Login Panel */}
          <div
            className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-br from-gray-950 via-black to-gray-900"
            style={{
              transformStyle: "preserve-3d",
              animation:
                "slideInRight3D 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
              transformOrigin: "right center",
              clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
              boxShadow: "-20px 0 60px rgba(0,0,0,0.8)",
            }}
          >
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-slate-700 opacity-5 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col justify-center h-full px-14 py-8">

              {/* Logo */}
              <div
                className="flex justify-center mb-6"
                style={{
                  opacity: 0,
                  transform: "scale(0.5)",
                  animation: "popIn 1s ease-out 2.2s forwards",
                }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-2xl border border-slate-600">
                  <span className="text-3xl">🔐</span>
                </div>
              </div>

              {/* Title */}
              <div
                className="text-center mb-8"
                style={{
                  opacity: 0,
                  animation: "fadeIn 1.5s ease-out 2.8s forwards",
                }}
              >
                <h2 className="text-3xl font-bold text-white mb-2">Login</h2>
                <p className="text-gray-400 text-base">
                  Sign in to your account
                </p>
              </div>

              {/* Form */}
              <div
                style={{
                  opacity: 0,
                  animation: "fadeIn 1.5s ease-out 3.3s forwards",
                }}
              >
                {/* Email */}
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>

                  <div className="relative">
                    <svg
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m2 7 10 7 10-7" />
                    </svg>

                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-900 border-2 border-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-slate-600 transition-all placeholder-gray-600"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Password
                  </label>

                  <div className="relative">
                    <svg
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>

                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={form.password}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-900 border-2 border-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-slate-600 transition-all placeholder-gray-600"
                    />
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={handleLogin}
                  className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white py-3.5 rounded-xl font-semibold text-base transition-all shadow-2xl hover:shadow-slate-700/50"
                >
                  Login
                </button>
              </div>

              {/* Footer */}
              <div
                className="mt-6 pt-5 border-t border-gray-800 text-center"
                style={{
                  opacity: 0,
                  animation: "fadeIn 1.5s ease-out 4s forwards",
                }}
              >
                <p className="text-sm text-gray-400">
                  Don't have an account?{" "}
                  <span
                    onClick={() => setPage("register")}
                    className="cursor-pointer text-gray-300 font-semibold hover:text-white transition"
                  >
                    Create account
                  </span>
                </p>
              </div>

            </div>

            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent opacity-50"></div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes slideInLeft3D {
          0% { transform: translateX(-150%) translateZ(-500px) rotateY(-45deg); opacity: 0; }
          60% { transform: translateX(5%) translateZ(-50px) rotateY(2deg); }
          100% { transform: translateX(0) translateZ(0) rotateY(0); opacity: 1; }
        }

        @keyframes slideInRight3D {
          0% { transform: translateX(150%) translateZ(-500px) rotateY(45deg); opacity: 0; }
          60% { transform: translateX(-5%) translateZ(-50px) rotateY(-2deg); }
          100% { transform: translateX(0) translateZ(0) rotateY(0); opacity: 1; }
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.8) translateY(30px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes expandWidth {
          0% { width: 0; opacity: 0; }
          100% { width: 10rem; opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default Login;