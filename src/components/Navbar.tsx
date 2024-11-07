// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import NavLink from "./NavLink";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import MenuOverlay from "./MenuOverlay";

// const navLinks = [
//   {
//     title: "About",
//     path: "#about",
//   },
//   {
//     title: "Services",
//     path: "#services",
//   },
//   {
//     title: "Contact",
//     path: "#contact",
//   },
// ];

// const Navbar = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   return (
//     <nav className="fixed border border-[#33353F] top-0 left-0 z-10 bg-[#121212] bg-opacity-100" style={{ width: "100%", maxWidth: "100vw",zIndex:999999 }}>
//       <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
//         <Link
//           href={"/"}
//           className="text-2xl md:text-5xl text-white font-semibold"
//         >
//           LOGO
//         </Link>
//         <div className="mobile-menu block md:hidden">
//           {!navbarOpen ? (
//             <button
//               onClick={() => setNavbarOpen(true)}
//               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
//             >
//               <Bars3Icon className="h-5 w-5" />
//             </button>
//           ) : (
//             <button
//               onClick={() => setNavbarOpen(true)}
//               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
//             >
//               <XMarkIcon className="h-5 w-5" />
//             </button>
//           )}
//         </div>
//         <div className="menu hidden md:block md:w-auto" id="navbar">
//           <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <NavLink href={link.path} title={link.title} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navLinks = [
    { title: "About", path: "#about" },
    { title: "Services", path: "#services" },
    { title: "Contact", path: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">LOGO</Link>
        <button onClick={() => setNavbarOpen(!navbarOpen)} className="text-white md:hidden">
          {navbarOpen ? "✕" : "☰"}
        </button>
        <ul className={`md:flex space-y-4 md:space-y-0 md:space-x-8 ${navbarOpen ? "block" : "hidden"} md:block`}>
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.path} title={link.title} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

     
