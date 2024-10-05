import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-700 py-3 flex items-center justify-center">
      <p className="text-slate-900">© {year} Invent3. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
