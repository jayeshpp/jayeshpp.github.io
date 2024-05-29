"use client";
import Image from "next/image";
import { Button } from "../button";

export const About = () => {
  const onDownloadCV = () => {
    return window.open("/assets/pdf/jayeshp-cv.pdf");
  };

  const onSayHello = () => {
    window.location.href = `mailto:jayesh.puthalathpoyil@gmail.com?subject=Hello! Jai&body=`;
  };

  return (
    <section className="container m-auto flex items-center justify-between py-16">
      <div className="flex-1">
        <h1 className="title-1 pb-8">Jayesh</h1>
        <h2 className="title-2 pb-5">Frontend Engineer</h2>
        <p className="text-xl max-w-[530px] pb-5">
          I am a frontend-heavy fullstack developer with a proven track record
          of delivering pixel-perfect, high-quality, and scalable web
          applications.
        </p>
        <Button variant="secondary" onClick={onSayHello}>
          Say Hello
        </Button>
        <Button variant="outlined" className="ml-2" onClick={onDownloadCV}>
          Download CV
        </Button>
      </div>
      <div className="flex-1">
        <Image
          src="/assets/images/jayesh.webp"
          alt="Jayesh"
          width={476}
          height={476}
          unoptimized
          className="m-auto"
        />
      </div>
    </section>
  );
};
