// "use client";
// import React, { useTransition, useState } from "react";
// import Image from "next/image";
// import TabButton from "./TabButton"; // Ensure this component is properly styled

// // Define the tab content
// const TAB_DATA = [
//   {
//     title: "Skills",
//     id: "skills",
//     content: (
//       <ul className="list-disc pl-4">
//         <li>HTML</li>
//         <li>CSS</li>
//         <li>Typescript</li>
//         <li>Next.js</li>
//         <li>JavaScript</li>
//         <li>React</li>
//         <li>Tailwind CSS</li>
//         <li>Git</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Education",
//     id: "education",
//     content: (
//       <ul className="list-disc pl-4">
//         <li>Bachelor's in Biotechnology from UoK</li>
//         <li>Certificate in AI & Cloud Computing from GIAIC</li>
//       </ul>
//     ),
//   },
// ];

// const AboutSection = () => {
//   const [tab, setTab] = useState("skills");
//   const [isPending, startTransition] = useTransition();

//   const handleTabChange = (id) => {
//     startTransition(() => {
//       setTab(id);
//     });
//   };

//   return (
//     <section className="text-white bg-[#333333] py-16" id="about">
//       <div className="container mx-auto md:grid md:grid-cols-2 gap-8 items-center px-6 md:px-12 lg:px-24">
//         {/* Image Section */}
//         <div className="flex justify-center mb-8 md:mb-0">
//           <Image 
//             src="/images/about-image.png" 
//             alt="About image" 
//             width={500} 
//             height={500} 
//             className="rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Content Section */}
//         <div className="text-left">
//           <h2 className="text-4xl font-bold text-purple-400">About Me</h2>
//           <p className="text-base lg:text-lg mt-4 text-gray-300">
//             I am a full stack web developer with a passion for creating
//             interactive and responsive web applications. I have experience
//             working with HTML, CSS, JavaScript, React, Figma, Node.js, Next.js, Typescript, and Git. I am a quick learner always looking to expand my skill set. I'm a team player and excited to work with others to create amazing applications.
//           </p>

//           {/* Tab Buttons */}
//           <div className="flex mt-8 space-x-4">
//             {TAB_DATA.map((item) => (
//               <TabButton
//                 key={item.id}
//                 selectTab={() => handleTabChange(item.id)}
//                 active={tab === item.id}
//                 className={`px-4 py-2 text-sm font-semibold rounded-md transition duration-200 ${
//                   tab === item.id ? "bg-purple-500 text-white" : "bg-gray-700 text-gray-400"
//                 }`}
//               >
//                 {item.title}
//               </TabButton>
//             ))}
//           </div>

//           {/* Tab Content */}
//           <div className="mt-6 p-4 bg-gray-600 rounded-lg transition-opacity duration-300 ease-in-out">
//             {TAB_DATA.find((t) => t.id === tab)?.content}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 text-gray-300">
        <li>HTML</li>
        <li>CSS</li>
        <li>Typescript</li>
        <li>Next.js</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 text-gray-300">
        <li>Bachelor's in Biotechnology from UoK</li>
        <li>Certificate in AI & Cloud Computing from GIAIC</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  // const handleTabChange = (id) => {
  //   startTransition(() => setTab(id));
  // };
  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white bg-gray-900 py-16" id="about">
      <div className="container mx-auto md:grid md:grid-cols-2 gap-8 px-6 md:px-12 lg:px-24">
        <div className="flex justify-center mb-8 md:mb-0">
          <Image src="/images/about-image.png" alt="About image" width={500} height={500} className="rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-purple-400">About Me</h2>
          <p className="text-base lg:text-lg mt-4 text-gray-300">
            I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience with various technologies including React, Node.js, and more.
          </p>
          <div className="flex mt-8 space-x-4">
            {TAB_DATA.map((item) => (
              <TabButton key={item.id} selectTab={() => handleTabChange(item.id)} active={tab === item.id}>
                {item.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gray-600 rounded-lg transition-opacity duration-300 ease-in-out">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


