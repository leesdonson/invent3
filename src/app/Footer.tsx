import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-[#030712] border-slate-700 py-3 flex items-center flex-col justify-center">
      <p className="text-slate-50">© {year} Invent3. All rights reserved.</p>
      <p className="text-slate-200 text-sm">
        Demo project by: ColorBytes (Syntax Pacific Limited)
      </p>
    </footer>
  );
};

export default Footer;
