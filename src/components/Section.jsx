import React from "react";

const Section = ({ children, className = "", id = "" }) => {
  return (
    <section id={id} className={`py-12 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto text-principal">{children}</div>
    </section>
  );
};

export default Section;
