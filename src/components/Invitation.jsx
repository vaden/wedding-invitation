import React from "react";
import Section from "./Section";

const Invitation = ({ date }) => {
  // Parse date string "20 de Diciembre de 2025"
  const dateParts = date.match(/(\d+) de (\w+) de (\d+)/);
  const day = dateParts ? dateParts[1] : "20";
  const month = dateParts ? dateParts[2] : "Diciembre";
  const year = dateParts ? dateParts[3] : "2025";

  return (
    <Section className="text-center bg-ivory">
      <h2 className="text-3xl md:text-4xl text-col-champ mb-8 font-bold">
        Tenemos el gusto de invitarte a
      </h2>
      <div className="text-4xl text-col-antra font-light mb-8">
        Nuestra Boda
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl text-col-antra flex-wrap">
        <span className="text-number">Sábado</span>
        <span className="text-5xl font-bold text-col-darkgreen text-number">
          {day}
        </span>
        <span className="text-number">{month}</span>
        <span className="text-3xl text-col-darkgreen text-number">{year}</span>
      </div>
    </Section>
  );
};

export default Invitation;
