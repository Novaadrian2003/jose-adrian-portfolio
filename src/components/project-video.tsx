"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";

const ProjectVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      await video.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("No se pudo reproducir el video:", error);
    }
  };

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-border bg-black shadow-lg">
      <div className="relative">
        <video
          ref={videoRef}
          src={src}
          controls
          playsInline
          preload="metadata"
          className="block h-auto w-full"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />

        {!isPlaying && (
          <button
            type="button"
            onClick={handlePlay}
            aria-label="Reproducir video"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-2xl backdrop-blur-md transition-transform hover:scale-110"
          >
            <Play className="ml-1 h-7 w-7 fill-current" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectVideo;