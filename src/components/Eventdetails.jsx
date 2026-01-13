import React from "react";
import { Calendar, Heart, Clock, MapPin, Icon } from "lucide-react";
import Section from "./Section";

const EventCard = ({
  icon: Icon,
  title,
  venue,
  subtitle,
  location,
  address,
  city,
  time,
  mapUrl,
}) => {
  return (
    <div className="bg-ivory rounded-lg shadow-lg p-8 text-center">
      <Icon className="w-12 h-12 mx-auto text-col-oliv mb-4" />
      <h3 className="text-4xl font-bold text-col-lightgold mb-6">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{venue}</p>
      {subtitle && <p className="font-bold text-col-antra">{subtitle}</p>}
      {location && <p className="text-2xl text-col-antra mt-2">{location}</p>}
      {address && <p className="text-col-antra">{address}</p>}
      <p className="text-2xl text-col-antra">{city}</p>
      <div className="flex items-center justify-center gap-2 mt-4 text-col-oliv">
        <Clock className="w-8 h-8" />
        <span className="text-2xl font-bold text-number">Hora: {time}</span>
      </div>
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-6 px-6 py-2 text-xl text-white rounded-full bg-darkgreen darkgreen-hov transition"
      >
        <MapPin className="w-4 h-4" />
        Ver ubicación aquí
      </a>
    </div>
  );
};

const EventDetails = ({ ceremony }) => {
  return (
    <Section className="bg-euca">
      <div className="grid md:grid-cols-1 gap-8">
        <EventCard
          icon={Calendar}
          title={ceremony.title}
          venue={ceremony.venue}
          location={ceremony.location}
          city={ceremony.city}
          time={ceremony.time}
          mapUrl={ceremony.mapUrl}
        />
      </div>
    </Section>
  );
};

export default EventDetails;
