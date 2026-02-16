import React from "react";
import { Calendar, Heart } from "lucide-react";
import Section from "./Section";
import EventCard from "./EventCard";

const EventDetails = ({ ceremony, reception }) => {
  return (
    <Section className="bg-euca">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <EventCard
          icon={Heart}
          title={ceremony.title}
          venue={ceremony.venue}
          location={ceremony.location}
          city={ceremony.city}
          time={ceremony.time}
          mapUrl={ceremony.mapUrl}
        />
        <EventCard
          icon={Calendar}
          title={reception.title}
          venue={reception.venue}
          location={reception.location}
          city={reception.city}
          time={reception.time}
        />
      </div>
    </Section>
  );
};

export default EventDetails;
