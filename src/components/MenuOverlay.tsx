// import React from "react";
// import NavLink from "./NavLink";

// const MenuOverlay = ({ links }) => {
//   return (
    
//       <ul className="flex flex-col items-center space-y-4">
//         {links.map((link, index) => (
//           <li key={index}>
//             <NavLink href={link.path} title={link.title} />
//           </li>
//         ))}
//       </ul>
    
//   );
// };

// export default MenuOverlay;

// Define the type for each link
interface Link {
  path: string;
  title: string;
}

interface MenuOverlayProps {
  links: Link[]; // Array of Link objects
}

// Update the MenuOverlay component with proper typing
const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col items-center space-y-4">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;


