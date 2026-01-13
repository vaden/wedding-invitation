import React from "react";
import Section from "./Section";

const Quote = ({ text, author }) => {
  return (
    <Section className="text-center bg-ivory">
      <blockquote className="italic text-name text-3xl text-col-antra max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
        {text}
      </blockquote>
      <p className="mt-4 font-bold text-rose-700">{author}</p>
    </Section>
  );
};

export default Quote;
