import Image from "next/image";

export const About = () => (
  <div className="container m-auto flex items-center justify-between py-16">
    <div className="flex-1">
      <div className="title-1 pb-8">Jayesh</div>
      <div className="title-2 pb-5">Frontend Engineer</div>
      <p className="max-w-[500px]">
        I am a frontend-heavy fullstack developer with a proven track record of
        delivering pixel-perfect, high-quality, and scalable web applications.
      </p>
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
  </div>
);
