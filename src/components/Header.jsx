import React from "react";
import { Heart } from "lucide-react";
import Section from "./Section";

const Header = ({ bride, groom, date }) => {
  return (
    <Section className="bg-ivory text-center pt-20">
      <div className="mb-8">
        <Heart className="w-16 h-16 mx-auto text-col-darkgreen animate-pulse" />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-col-champ text-name mb-4">
        ¡NOS CASAMOS!
      </h1>
      <div className="text-4xl md:text-6xl text-col-oliv text-name font-light my-6">
        {bride} & {groom}
      </div>
      <div className="text-2xl md:text-3xl text-col-lightgold text-number mt-4">
        {date}
      </div>
    </Section>
  );
};

export default Header;
