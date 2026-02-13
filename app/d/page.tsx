"use client";

import { useEffect, useRef, useState } from "react";

export default function Page() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playbackError, setPlaybackError] = useState<string | null>(null);

  const tryPlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      setPlaybackError(null);
      // Some TV browsers require an explicit play() attempt even with autoplay.
      await video.play();
    } catch (e) {
      // Autoplay can be blocked; keep the page usable (e.g. user presses OK).
      setPlaybackError(e instanceof Error ? e.message : "Playback blocked");
    }
  };

  useEffect(() => {
    // Attempt immediately, then again once metadata is available.
    void tryPlay();
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => void tryPlay();
    video.addEventListener("loadedmetadata", onLoaded);
    return () => video.removeEventListener("loadedmetadata", onLoaded);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
console.log("playbackError", playbackError);

  return (
    <main
      onClick={() => void tryPlay()}
      onKeyDown={() => void tryPlay()}
      tabIndex={0}
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        display: "grid",
        placeItems: "center",
        outline: "none",
      }}
      aria-label="Daphne intro video"
    >
      <video
        ref={videoRef}
        src="/daphne-intro.mp4"
        autoPlay
        loop
        playsInline
        preload="auto"
        // Avoid fullscreen hijacking on some devices; keep it simple for TVs.
        controls={false}
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "contain",
          background: "#000",
        }}
      />

      {playbackError ? (
        <div
          style={{
            position: "fixed",
            left: 16,
            bottom: 16,
            right: 16,
            color: "#fff",
            fontSize: 14,
            lineHeight: 1.4,
            opacity: 0.9,
          }}
        >
          Autoplay may be blocked on this device. Press OK/Enter (or click) to
          start playback.
        </div>
      ) : null}
    </main>
  );
}
