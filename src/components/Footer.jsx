import React from "react";
import { Heart } from "lucide-react";
import Section from "./Section";

const Footer = ({ bride, groom, date, quote }) => {
  return (
    <Section className="bg-euca text-center pb-20">
      <div className="text-4xl md:text-5xl text-col-darkgreen text-name font-light mb-4">
        {bride} & {groom}
      </div>
      <div className="text-2xl text-col-antra text-number mb-8">{date}</div>
      <blockquote className="italic text-lg text-col-darkgray max-w-2xl mx-auto">
        "{quote.text}"
      </blockquote>
      <p className="mt-4 font-bold text-col-darkgreen">{quote.author}</p>
      <Heart className="w-8 h-8 mx-auto mt-8 text-col-darkgreen animate-pulse" />
    </Section>
  );
};

export default Footer;
