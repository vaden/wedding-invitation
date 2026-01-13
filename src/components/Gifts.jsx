import React from "react";
import { Gift } from "lucide-react";
import Section from "./Section";

const Gifts = ({ title, message }) => {
  return (
    <Section className="bg-euca text-center">
      <Gift className="w-12 h-12 mx-auto text-col-lightgold mb-4" />
      <h2 className="text-3xl md:text-4xl text-col-darkgray mb-6 font-bold">
        Regalo
      </h2>
      <p className="text-2xl font-bold text-col-antra mb-4">{title}</p>
      <p className="text-xl text-col-antra max-w-2xl mx-auto">{message}</p>
    </Section>
  );
};

export default Gifts;
