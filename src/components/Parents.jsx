import React from "react";
import Section from "./Section";

const Parents = ({ brideParents, groomParents }) => {
  return (
    <Section className="text-center bg-gradient-to-b from-rose-50 to-pink-50">
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
        Nos llena de alegría compartir con ustedes nuestra unión.
        <br />
        Con inmenso amor e ilusión, de la mano de Dios y con la bendición de
        nuestros padres
      </p>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white/60 p-6 rounded-lg shadow">
          <p className="text-gray-800">{brideParents[0]}</p>
          <p className="text-rose-600 my-2">&</p>
          <p className="text-gray-800">{brideParents[1]}</p>
        </div>
        <div className="bg-white/60 p-6 rounded-lg shadow">
          <p className="text-gray-800">{groomParents[0]}</p>
          <p className="text-rose-600 my-2">&</p>
          <p className="text-gray-800">{groomParents[1]}</p>
        </div>
      </div>
    </Section>
  );
};

export default Parents;
