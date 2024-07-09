import Link from "next/link";

const experience = [
  {
    company: "PJ Technologies",
    title: "Consultant",
    tenure: "May 2024 - Present",
    logo: "dummy_200x200.png",
    show: false,
  },
  {
    company: "Amazon UK Ltd",
    title: "Web Development Engineer II",
    tenure: "Nov 2023 - May 2024",
    logo: "amazon_logo.jpeg",
    link: "https://www.amazon.co.uk/",
    show: true,
  },
  {
    company: "Xoxoday by Giift",
    title: "Lead Frontend Engineer - Architect",
    tenure: "Nov 2021 – Nov 2023",
    logo: "giift_logo.jpeg",
    link: "https://www.xoxoday.com/",
    show: true,
  },
  {
    company: "Fabric Inc",
    title: "Senior Software Engineer",
    tenure: "Mar 2020 - Oct 2021",
    logo: "fabric_logo.jpeg",
    link: "https://fabric.inc/",
    show: true,
  },
  {
    company: "BlueStone.com",
    title: "Senior UI Developer",
    tenure: "Mar 2015 - Feb 2020",
    logo: "bluestone_logo.jpeg",
    link: "https://bluestone.com/",
    show: true,
  },
  {
    company: "Tranz networkz",
    title: "Web Developer",
    tenure: "Jan 2010 - Feb 2015",
    logo: "dummy_200x200",
    show: false,
  },
];

const qualification = [
  {
    title: "Bachelor of Computer Application",
    autority: "Bharathiar University",
  },
  {
    title: "Programming in HTML5 with Javascript and CSS3",
    autority: "Microsoft",
  },
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    autority: "Credly",
    link: "https://www.credly.com/badges/5632613f-5d51-4775-9247-88b19afc7ef2/public_url",
  },
];

const ExperienceBlock = () => (
  <ul>
    {experience
      .filter((e) => e.show)
      .map(({ company, title, tenure, logo, link }: any) => (
        <li className="flex items-start gap-4 mb-5">
          <Link href={link} target="_blank">
            <img
              src={`/assets/images/${logo}`}
              alt={company}
              width={50}
              height={50}
            />
          </Link>
          <span>
            <b>{company}</b>
            <p className="">{title}</p>
            <p className="text-xs italic">{tenure}</p>
          </span>
        </li>
      ))}
  </ul>
);

const QualificationBlock = () => (
  <ul>
    {qualification.map(({ title, autority, link }) => (
      <li className="flex items-start gap-4 mb-5">
        <span>
          <p className="">{title}</p>
          <p className="text-xs italic">{autority}</p>
          {link ? (
            <Link target="_blank" href={link} className="text-xs">
              Credentials
            </Link>
          ) : null}
        </span>
      </li>
    ))}
  </ul>
);

export const Experience = () => (
  <section className="screen-experience container px-6 md:px-20 m-auto flex flex-col items-start justify-between py-16 md:flex-row">
    <div className="flex-1">
      <h2 className="pb-6">Experiences</h2>
      <ExperienceBlock />
    </div>
    <div className="flex-1">
      <h2 className="pb-6">Qualifications</h2>
      <QualificationBlock />
    </div>
  </section>
);
