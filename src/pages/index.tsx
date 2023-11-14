import { AboutMe } from "@/components/Home/AboutMe";
import { Projects } from "@/components/Home/Projects";
import { AboutMe as AboutMeType, Project } from "@/types/home";
import { GetStaticProps } from "next";
import Head from "next/head";

interface HomeProps {
  home: {
    aboutMe: AboutMeType;
    projects: Project[];
  };
}

const Home = ({ home }: HomeProps) => {
  const { projects, aboutMe } = home;
  return (
    <>
      <Head>
        <title>Sobre mim | Gabriel</title>
        <meta
          name="description"
          content="Desenvolvedor Full Stack apaixonado por desenvolvimento web"
        />
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
        <AboutMe aboutMe={aboutMe} />
        <Projects projects={projects} />
      </div>
    </>
  );
};

const loadHome = async () => {
  const res = await fetch(
    "https://gist.githubusercontent.com/gabrielojuara/d0ebc8283410d9a025b8e31bac5b8192/raw/3cacbdeb9731a3641e66c1f5def012e3d00d1501/home.json"
  );
  const home = await res.json();

  return home;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const home = await loadHome();

  return {
    props: { home },
  };
};

export default Home;
