import Link from "next/link";

const social = [
  {
    label: "LinkedIn",
    icon: "linkedin.svg",
    src: "https://www.linkedin.com/in/jayeshldn/",
  },
  {
    label: "GitHub",
    icon: "github.svg",
    src: "https://github.com/jayeshpp",
  },
  {
    label: "StackOverflow",
    icon: "stackoverflow.svg",
    src: "https://stackoverflow.com/users/3907617/jayesh",
  },
  /* {
    label: "Instagram",
    icon: "insta.svg",
  }, */
];

export const Social = () =>  (
  <div className="flex gap-4">
    {social.map(({ label, icon, src }) => (
      <Link key={label} href={src} target="_blank" className="relative transition-all hover:scale-125">
        <img
          src={`/assets/icons/${icon}`}
          alt={label}
          title={label}
          key={label}
          width={25}
          height={25}
        />
      </Link>
    ))}
  </div>
);
