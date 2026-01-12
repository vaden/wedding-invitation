import React, { useState, useEffect } from "react";
import Section from "./Section";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date(targetDate);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Hrs" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Seg" },
  ];

  return (
    <Section className="bg-ivory">
      <h2 className="text-3xl md:text-4xl text-center text-col-champ mb-8 font-bold">
        ¡FALTAN!
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {timeUnits.map((item, index) => (
          <div
            key={index}
            className="bg-euca text-white text-number rounded-lg p-6 text-center shadow-lg"
          >
            <div className="text-4xl md:text-5xl font-bold">
              {String(item.value).padStart(2, "0")}
            </div>
            <div className="text-sm mt-2 uppercase tracking-wide">
              {item.label}
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-6 text-col-oliv text-xl font-semibold">
        PARA EL GRAN DÍA
      </p>
    </Section>
  );
};

export default Countdown;
