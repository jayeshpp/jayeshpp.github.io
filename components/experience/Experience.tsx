
const experience = [
  {
    company: 'Amazon UK Ltd',
    title: 'Web development engineer II',
    tenure: 'Nov 2023 - May 2024',
    logo: 'amazon_logo.jpeg',
  },
  {
    company: 'Xoxoday(now Giift)',
    title: 'Lead Frontend Engineer',
    tenure: 'Nov 2021 – Nov 2023',
    logo: 'giift_logo.jpeg',
  },
  {
    company: 'Fabric Inc',
    title: 'Senior Software Engineer',
    tenure: 'Mar 2020 - Oct 2021',
    logo: 'fabric_logo.jpeg',
  },
  {
    company: 'BlueStone.com',
    title: 'Senior UI Developer',
    tenure: 'Mar 2015 - Feb 2020',
    logo: 'bluestone_logo.jpeg',
  }
]

const ExperienceBlock = () => (
  <ul>
    {experience.map(({company,title, tenure, logo}) => (
      <li className="flex items-start gap-4 mb-5">
        <img src={`/assets/images/${logo}`} alt={company} width={50} height={50}  />
        <span>
          <b>{company}</b>
          <p className="">{title}</p>
          <p className="text-xs italic">{tenure}</p>
        </span>
      </li>
    ))}
  </ul>
)


export const Experience = () => (
  <section className="screen-experience container px-6 md:px-20 m-auto flex flex-col items-start justify-between py-16 md:flex-row">
    <div className="flex-1">
      <h2 className="pb-6">Experiences</h2>
        <ExperienceBlock />
    </div>
    <div className="flex-1">
      {/* <h2>Qualifications</h2> */}
    </div>
  </section>
);
