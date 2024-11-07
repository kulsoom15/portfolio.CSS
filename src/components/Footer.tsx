// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="footer bg-[#2a2a2e] text-white py-6">
//       <div className="container mx-auto flex justify-center items-center flex-col">
//         {/* Logo Section */}
//         <span className="text-2xl font-semibold mb-4">LOGO</span>

//         {/* "All rights reserved" Text */}
//         <p className="text-sm text-center text-slate-400 mb-4">
//           &copy; {new Date().getFullYear()} All rights reserved.
//         </p>

//         {/* Optional Links for Privacy Policy, Terms */}
//         <div className="flex space-x-4">
//           <a href="/privacy-policy" className="text-slate-400 hover:text-white text-sm">
//             Privacy Policy
//           </a>
//           <a href="/terms" className="text-slate-400 hover:text-white text-sm">
//             Terms of Service
//           </a>
//         </div>

//         {/* Optional Social Media Links (e.g., LinkedIn, GitHub) */}
//         <div className="flex space-x-4 mt-4">
//           <a
//             href="https://www.linkedin.com/in/iamzeerak/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-slate-400 hover:text-white"
//           >
//             <i className="fab fa-linkedin"></i>
//           </a>
//           <a
//             href="mailto:zeerakabidi71@gmail.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-slate-400 hover:text-white"
//           >
//             <i className="far fa-envelope"></i>
//           </a>
//           <a
//             href="https://wa.me/923493388756"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-slate-400 hover:text-white"
//           >
//             <i className="fab fa-whatsapp"></i>
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// Footer Component

import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Logo & Description */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-white">LOGO</h2>
            <p className="mt-2 text-gray-400">
              Creating impactful web solutions with a touch of creativity and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold text-purple-400">Quick Links</h3>
            <ul className="space-y-2 mt-2">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold text-purple-400">Follow Me</h3>
            <div className="flex justify-center lg:justify-start space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center lg:text-left">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Kulsoom Shahid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



