import React from "react";

function FooterColumn({ children, width }) {
  return (
    <div className={`${width} max-md:ml-0 max-md:w-full`}>
      <div className="flex flex-col grow pr-6 pb-14 w-full max-md:mt-8">
        {children}
      </div>
    </div>
  );
}

export default FooterColumn;
