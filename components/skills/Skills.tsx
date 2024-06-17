import React from "react";

const skillSetMap = {
  frontend: [
    {
      title: "HTML 5",
      level: 95,
      ranking: 1,
      icon: "html5.svg",
    },
    {
      title: "CSS 3",
      level: 95,
      ranking: 1,
      icon: "css3.svg",
    },
    {
      title: "JavaScript",
      level: 90,
      ranking: 1,
      icon: "js.svg",
    },
    {
      title: "Typescript",
      level: 80,
      ranking: 1,
      icon: "ts.svg",
    },
    {
      title: "ReactJS",
      level: 90,
      ranking: 1,
      icon: "react.svg",
    },
    {
      title: "NextJS",
      level: 90,
      ranking: 1,
      icon: "nextjs.svg",
    },
    {
      title: "Redux",
      level: 90,
      ranking: 1,
      icon: "redux.svg",
    },
    {
      title: "GraphQL",
      level: 90,
      ranking: 1,
      icon: "graphql.svg",
    },
    {
      title: "AWS",
      level: 90,
      ranking: 1,
      icon: "aws.svg",
    },
    {
      title: "Webpack",
      level: 90,
      ranking: 1,
      icon: "webpack.svg",
    },
  ],
};

interface IIconBoxProps {
  title: string;
  level: number;
  icon: string;
  ranking: number;
}

const IconBox: React.FC<IIconBoxProps> = ({ title, level, icon }) => (
  <div className="text-center w-[90px] rounded-sm px-2 py-2">
    <span className="skill-icon ">
      <img src={`/assets/icons/${icon}`} alt={title} className="m-auto" />
    </span>
    <div className="text-xs pt-2">{title}</div>
  </div>
);

export const Skills = () => {
  return (
    <section className="container h-[600px] px-6 md:px-20 gap-10 m-auto flex flex-col items-center justify-between md:flex-row-reverse">
      <article className="flex-1">
        <h1 className="pb-4">
          My
          <br />
          Expertise
        </h1>
        <p className="max-w-[530px]">
          A seasoned front-end developer skilled in <b>React</b> and{" "}
          <b>TypeScript</b>, with extensive experience in building scalable
          applications and optimizing performance. I excel in API integration (
          <b>RESTful</b> and <b>GraphQL</b>), state management (<b>Redux</b>),
          and creating <b>mobile-first</b>, user-centric designs. I am
          proficient in testing (unit, integration, end-to-end) and have a
          strong grasp of <b>CI/CD</b> workflows and Git best practices.
        </p>
      </article>
      <div className="flex-1">
        <div className="flex gap-4 flex-wrap max-w-[530px]">
          {skillSetMap["frontend"].map(({ title, level, icon, ranking }) => (
            <IconBox
              title={title}
              level={level}
              icon={icon}
              ranking={ranking}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
