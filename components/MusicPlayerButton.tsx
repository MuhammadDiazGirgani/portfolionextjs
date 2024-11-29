import React, { useState, useRef } from "react";
import Image from "next/image";
import playIcon from "/public/icons/play.png";
import pauseIcon from "/public/icons/pause.png";

const MusicPlayerButton: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        className="bg-slate-100 rounded-full w-11 transition duration-500"
        onClick={togglePlayPause}
      >
        <Image
          src={isPlaying ? pauseIcon : playIcon}
          alt={isPlaying ? "Pause Icon" : "Play Icon"}
          width={45}
        />
      </button>
      <audio ref={audioRef} src="/music/soundtrack.mp3" />
    </div>
  );
};

export default MusicPlayerButton;
