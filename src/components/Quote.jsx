import React from "react";
import Section from "./Section";

const Quote = ({ text, author }) => {
  return (
    <Section className="text-center bg-gradient-to-r from-transparent via-rose-100 to-transparent">
      <blockquote className="italic text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
        {text}
      </blockquote>
      <p className="mt-4 font-bold text-rose-700">{author}</p>
    </Section>
  );
};

export default Quote;
