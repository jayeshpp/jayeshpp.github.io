"use client";
import { sendGAEvent } from '@next/third-parties/google'
import Image from "next/image";
import { Button } from "../button";
import { Social } from '../social';

export const Intro = () => {
  /* const onDownloadCV = () => {
    sendGAEvent({ event: 'buttonClicked', value: 'downloadCV' })
    return window.open("/assets/pdf/jayeshp-cv.pdf");
  }; */

  const onSayHello = () => {
    sendGAEvent({ event: 'buttonClicked', value: 'sayHello' })
    window.location.href = `mailto:jayeshldn@gmail.com?subject=Hello! Jai&body=`;
  };

  return (
    <section className="screen-intro container px-6 md:px-20 m-auto flex flex-col items-center justify-between py-16 md:flex-row-reverse">
      <div className="flex-1">
        <Image
          src="/assets/images/jayesh.webp"
          alt="Jayesh"
          width={476}
          height={476}
          unoptimized
          className="m-auto"
          loading='eager'
        />
      </div>
      <div className="flex-1">
        <h1 className="title-1 pb-4 md:pb-8">Jayesh</h1>
        <h2 className="title-2 pb-3 md:pb-5">Frontend Engineer</h2>
        <p className="text-base md:text-xl max-w-[530px] pb-5">
          A frontend-heavy fullstack developer with a proven track record
          of delivering pixel-perfect, high-quality, and scalable web
          applications.
        </p>
        <div className="flex gap-6 items-center">
          <Button variant="secondary" onClick={onSayHello}>
            Say Hello
          </Button>

          <Social />
        </div>
        {/* <Button variant="outlined" className="ml-2" onClick={onDownloadCV}>
          Download CV
        </Button> */}
      </div>
    </section>
  );
};
