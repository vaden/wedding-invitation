import React, { useState, useRef, useEffect } from "react";
import { Pause, Play } from "lucide-react";
import Section from "./Section";

const MusicPlayer = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  const volume = 0.2;

  const musicUrl = "/music.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;

      if (musicPlaying) {
        audioRef.current.play().catch((err) => {
          console.log("Erreur de lecture:", err);
          setMusicPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [musicPlaying, volume]);

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  return (
    <Section className="bg-euca text-center">
      <audio ref={audioRef} src={musicUrl} loop preload="metadata" />

      <button
        onClick={toggleMusic}
        className="flex items-center gap-2 mx-auto px-6 py-3 bg-darkgreen text-white rounded-full darkgreen-hov transition shadow-lg"
      >
        {musicPlaying ? (
          <>
            <Pause className="w-5 h-5" />
            Pausar música
          </>
        ) : (
          <>
            <Play className="w-5 h-5" />
            Clic en play ► para activar la música
          </>
        )}
      </button>
    </Section>
  );
};

export default MusicPlayer;
