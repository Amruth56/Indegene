import React from "react";

function NavLink({ text }) {
  return (
    <a href="#" className="leading-none hover:text-blue-600 transition-colors">
      {text}
    </a>
  );
}

export default NavLink;
