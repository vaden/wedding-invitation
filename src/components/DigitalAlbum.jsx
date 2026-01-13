import React from "react";
import { Camera } from "lucide-react";
import Section from "./Section";

const DigitalAlbum = ({ albumUrl }) => {
  return (
    <Section className="bg-ivory text-center">
      <Camera className="w-12 h-12 mx-auto text-col-lightgold mb-4" />
      <h2 className="text-3xl md:text-4xl text-col-champ mb-6 font-bold">
        Álbum Digital
      </h2>
      <p className="text-2xl font-bold text-col-antra mb-4">¡Únete al álbum!</p>
      <p className="text-xl text-col-antra mb-6 max-w-2xl mx-auto">
        En el siguiente enlace puedes compartir las fotos de la boda con
        nosotros.
      </p>
      <a
        href={albumUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-darkgreen darkgreen-hov text-white rounded-full transition"
      >
        <Camera className="w-5 h-5" />
        Sube tus fotos aquí
      </a>
    </Section>
  );
};

export default DigitalAlbum;
