import React from "react";
import Header from "./components/Header";
import MusicPlayer from "./components/MusicPlayer";
import Countdown from "./components/Countdown";
import Invitation from "./components/Invitation";
import EventDetails from "./components/EventDetails";
import DressCode from "./components/DressCode";
import Gifts from "./components/Gifts";
import DigitalAlbum from "./components/DigitalAlbum";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import { weddingData } from "./data/Weddingdata";
import { formatDateForFooter } from "./utils/dateUtils";

function App() {
  return (
    <div className="min-h-screen">
      <Header
        bride={weddingData.couple.bride}
        groom={weddingData.couple.groom}
        date={weddingData.couple.dateDisplay}
      />

      <MusicPlayer />

      <Countdown targetDate={weddingData.couple.date} />

      <Invitation date={weddingData.couple.dateDisplay} />

      <EventDetails ceremony={weddingData.ceremony} />

      <DressCode
        type={weddingData.dressCode.type}
        restrictions={weddingData.dressCode.restrictions}
        inspirationUrl={weddingData.dressCode.inspirationUrl}
      />

      <Gifts
        title={weddingData.gifts.title}
        message={weddingData.gifts.message}
      />

      <DigitalAlbum albumUrl={weddingData.album.url} />

      <RSVP
        deadline={weddingData.rsvp.deadline}
        whatsappUrl={weddingData.rsvp.whatsappUrl}
      />

      <Footer
        bride={weddingData.couple.bride}
        groom={weddingData.couple.groom}
        date={formatDateForFooter(weddingData.couple.date)}
        quote={weddingData.quotes.footer}
      />
    </div>
  );
}

export default App;
