import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-dark text-white mt-5 p-4 text-center"
      style={{ width: "100%", zIndex: 10 }}
    >
      Copyright &copy; {new Date().getFullYear()} DevSpace
    </div>
  );
};
export default Footer;
