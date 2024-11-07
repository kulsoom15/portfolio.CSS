// "use client";
// import React from "react";
// import styles from "../style/ServicesSection.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPaintBrush, faCode } from "@fortawesome/free-solid-svg-icons";
// import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";

// const ServicesSection = () => {
//   return (
//     <section className={`${styles.container}`} id="service">
//       <div className={`${styles.textSection}`}>
//         <p className={`${styles.headingText}`}>Services</p>
//         <p className={styles.smallText}>
//           <span className={styles.line}></span> What are the services that <span>I Provide</span>
//         </p>
//       </div>

//       <section className={styles.cardContainer}>
//         {/* Mockup Designing Card */}
//         <div className={`${styles.box}`}>
//           <div className={styles.cardBx}>
//             <div className={styles.cardData}>
//               <div className={styles.cardIcon}>
//                 <FontAwesomeIcon icon={faPaintBrush} />
//               </div>
//               <div className={styles.cardContent}>
//                 <h3>Mockup Designing</h3>
//                 <p>
//                   I possess strong mockup designing skills, utilizing Figma as my primary tool.
//                   With expertise in Figma, I create visually appealing and functional mockups,
//                   ensuring high-quality designs that meet client requirements effectively.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* UI Development Card */}
//         <div className={`${styles.box}`}>
//           <div className={styles.cardBx}>
//             <div className={styles.cardData}>
//               <div className={styles.cardIcon}>
//                 <FontAwesomeIcon icon={faConnectdevelop} />
//               </div>
//               <div className={styles.cardContent}>
//                 <h3>UI Development</h3>
//                 <p>
//                   I possess strong UI development skills, utilizing HTML, CSS, SCSS, Bootstrap, and
//                   JavaScript. Skilled in crafting responsive and intuitive user interfaces,
//                   ensuring optimal user experience and aesthetic appeal across diverse platforms.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Frontend Development Card */}
//         <div className={`${styles.box}`}>
//           <div className={styles.cardBx}>
//             <div className={styles.cardData}>
//               <div className={styles.cardIcon}>
//                 <FontAwesomeIcon icon={faCode} />
//               </div>
//               <div className={styles.cardContent}>
//                 <h3>Frontend Development</h3>
//                 <p>
//                   I possess strong Frontend Development skills, specializing in Next.js, React,
//                   Tailwind CSS, and JavaScript. With expertise in mobile responsiveness and
//                   cross-browser compatibility, I ensure optimal user experiences across various
//                   devices.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default ServicesSection;

"use client";
import React from "react";
import styles from "../style/ServicesSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faCode } from "@fortawesome/free-solid-svg-icons";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";
 
const ServicesSection = () => {
  const services = [
    {
      icon: faPaintBrush,
      title: "Mockup Designing",
      description:
        "I possess strong mockup designing skills, utilizing Figma as my primary tool to create visually appealing and functional mockups.",
    },
    {
      icon: faConnectdevelop,
      title: "UI Development",
      description:
        "I have expertise in HTML, CSS, SCSS, Bootstrap, and JavaScript, crafting responsive user interfaces that ensure optimal user experience.",
    },
    {
      icon: faCode,
      title: "Frontend Development",
      description:
        "I specialize in Next.js, React, Tailwind CSS, and JavaScript, with a focus on mobile responsiveness and cross-browser compatibility.",
    },
  ];

  return (
    <section className="py-16 bg-dark text-white" id="services">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-400">Services</h2>
        <p className="text-gray-300 mt-4 mb-12">What services I provide</p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <FontAwesomeIcon icon={service.icon} size="2x" className="text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;