// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

// interface NavbarProps {
//   cart: any;
// }

// function Navbar({ cart }: NavbarProps) {
//   const Language = ["English", "Tagalog", "Chinese", "Japanese"];
//   let [LanguageIndex, SetLanguage] = useState(0);

//   return (
//     <>
//       <div className="container-fluid background-red header">
//         <div className="row align-items-center">
//           <div className="col-auto header-side">
//             <div className="dropdown">
//               <button
//                 className="btn dropdown-toggle text-white"
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 {Language[LanguageIndex]}
//               </button>
//               <ul className="dropdown-menu">
//                 {Language.map(
//                   (item, index) =>
//                     LanguageIndex !== index && (
//                       <li key={item}>
//                         <a
//                           className="dropdown-item"
//                           href="#"
//                           onClick={() => SetLanguage(index)}
//                         >
//                           {item}
//                         </a>
//                       </li>
//                     )
//                 )}
//               </ul>
//             </div>
//           </div>

//           <div className="col text-center">
//             <div id="logo">
//               <a href="#">
//                 <img
//                   src="./logo.svg"
//                   className="logo-svg m-0 p-0"
//                   alt="Jollibee Logo"
//                 ></img>
//               </a>
//             </div>
//           </div>

//           <div className="col-auto d-flex justify-content-center align-items-center header-side">
//             <a
//               href="#"
//               className="d-flex justify-content-center align-items-center"
//             >
//               <img src="./cart.png" className="cart-png" alt="Cart" />
//               <p className="mb-3 cart-num text-light p-1 ">{cart.count}</p>
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// function SplashPage() {
//   return (
//     <Link to="/" className="body-start">
//       <div>
//         <img src="./jollibee.png" alt="jollibee" className="jollibee-png"></img>
//         <h1 className="text-start">Tap anywhere to begin!</h1>
//       </div>
//     </Link>
//   );
// }

// function Sample() {
//   const [isFirstTime, setIsFirstTime] = useState(false);
//   const [cart, setCart] = useState({ count: 0 });

//   useEffect(() => {
//     if (!localStorage.getItem("isFirstTime")) {
//       localStorage.setItem("isFirstTime", "");
//       setIsFirstTime(true);
//     } else setIsFirstTime(false);

//     let c = localStorage.getItem("cart");
//     if (typeof c != "string") {
//       localStorage.setItem("cart", JSON.stringify(cart));
//     } else {
//       setCart(JSON.parse(c));
//     }
//   }, []);

//   useEffect(() => {
//     Navigate({ to: isFirstTime ? "/start" : "/" });
//   }, [isFirstTime])

//   return (
//     <div className="App">
//       <Navbar cart={cart} />
//       <Router>
//         <Routes>
//           <Route path="/start" element={<SplashPage />} />
//           <Route path="/" element={null} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default Sample;
