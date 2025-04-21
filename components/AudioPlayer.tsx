"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Music2 } from "lucide-react";

const AudioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play().catch((e) => {
        console.warn("Autoplay blocked:", e);
      });
    }

    setPlaying(!playing);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch((err) => {
          console.warn("Autoplay failed (likely due to browser policy):", err);
        });
    }
  }, []);

  return (
    <>
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 bg-white shadow-xl rounded-full p-4 hover:bg-pink-100 transition"
        aria-label="Toggle music"
      >
        {playing ? (
          <Music2 className="text-pink-400" />
        ) : (
          <Music className="text-gray-400" />
        )}
      </button>
      <audio ref={audioRef} loop>
        <source src="/audio/wedding.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default AudioPlayer;
