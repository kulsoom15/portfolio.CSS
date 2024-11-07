// import React from 'react';
// import { AiOutlineMail } from "react-icons/ai";
// import { BsTelephone } from "react-icons/bs";

// const ContactSection = () => {
//   return (
//     <div
//       id='contact'
//       className='pt-32 container mx-auto px-4'
//       style={{ color: '#ffffff', maxWidth: '800px' }}
//     >
//       <div className='grid md:grid-cols-2 gap-10'>
//         {/* Contact Info Section */}
//         <div className='space-y-8'>
//           <h2 className='text-5xl text-white font-bold'>Get In Touch</h2>
//           <p className='text-gray-300 text-lg pt-2'>
//             "Feel free to drop me a message, give me a call, or send me an email — I'm always here to connect and discuss exciting opportunities!"
//           </p>
//           <div className='flex gap-3 items-center text-gray-300'>
//             <AiOutlineMail size={30} />
//             <span>xyz@gmail.com</span>
//           </div>
//           <div className='flex gap-3 items-center text-gray-300'>
//             <BsTelephone size={30} />
//             <span>(031) 000-0000</span>
//           </div>
//         </div>

//         {/* Contact Form Section */}
//         <div className='space-y-6'>
//           <div className='flex flex-col gap-1'>
//             <label htmlFor='name' className='text-gray-300'>Name</label>
//             <input
//               type="text"
//               id='name'
//               className='h-[40px] p-2 bg-transparent border border-gray-600 text-white focus:outline-none focus:border-accent'
//             />
//           </div>

//           <div className='flex flex-col gap-1'>
//             <label htmlFor='email' className='text-gray-300'>Email</label>
//             <input
//               type="email"
//               id='email'
//               className='h-[40px] p-2 bg-transparent border border-gray-600 text-white focus:outline-none focus:border-accent'
//             />
//           </div>

//           <div className='flex flex-col gap-1'>
//             <label htmlFor='message' className='text-gray-300'>Message</label>
//             <textarea
//               id='message'
//               rows={4}
//               className='p-2 bg-transparent border border-gray-600 text-white focus:outline-none focus:border-accent'
//             ></textarea>
//           </div>

          
//           <button className='bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out'>
//            Send
//         </button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;

import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto max-w-lg px-6">
        <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-300 text-lg mb-8">
          Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>
        <div className="flex gap-4 items-center text-gray-300 mb-4">
          <AiOutlineMail size={24} />
          <span>xyz@gmail.com</span>
        </div>
        <div className="flex gap-4 items-center text-gray-300 mb-12">
          <BsTelephone size={24} />
          <span>(031) 000-0000</span>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input type="text" id="name" className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input type="email" id="email" className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea id="message" className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 h-32"></textarea>
          </div>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg transition duration-300 hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

