import { Experience } from "../components/experience";
import { Intro } from "../components/intro";
import { Skills } from "../components/skills";

export default function Home() {
  return (
    <main>
      <Intro />
      <Skills />
      <Experience />
    </main>
  );
}
