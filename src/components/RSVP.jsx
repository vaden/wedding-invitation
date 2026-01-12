import React from "react";
import { MessageCircle } from "lucide-react";
import Section from "./Section";

const RSVP = ({ deadline, whatsappUrl }) => {
  return (
    <Section className="bg-euca text-center">
      <MessageCircle className="w-12 h-12 mx-auto text-col-lightgold mb-4" />
      <h2 className="text-3xl md:text-4xl text-col-darkgray mb-6 font-bold">
        Confirmación de Asistencia
      </h2>
      <p className="text-col-antra mb-2">Tu asistencia es importante.</p>
      <p className="text-col-antra mb-6">
        Por favor confirmar vía WhatsApp antes del{" "}
        <span className="font-bold text-col-darkgreen">{deadline}</span>
      </p>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition text-lg font-semibold shadow-lg"
      >
        <MessageCircle className="w-6 h-6" />
        Clic aquí para confirmar
      </a>
    </Section>
  );
};

export default RSVP;
