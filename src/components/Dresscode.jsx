import React from "react";
import Section from "./Section";

const DressCode = ({ type, restrictions, inspirationUrl }) => {
  return (
    <Section className="bg-ivory text-center">
      <h2 className="text-3xl md:text-4xl text-col-champ mb-8 font-bold">
        Código de Vestimenta
      </h2>
      <div className="bg-euca rounded-lg p-8 max-w-2xl mx-auto">
        <p className="text-2xl font-bold text-col-darkgray mb-4">{type}</p>
        <p className="text-col-antra leading-relaxed">{restrictions}</p>
        <a
          href={inspirationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-2 bg-darkgreen darkgreen-hov text-white rounded-full transition"
        >
          Inspírate, clic aquí
        </a>
      </div>
    </Section>
  );
};

export default DressCode;
