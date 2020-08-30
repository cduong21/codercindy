import Head from "next/head";
import Introduction from '../components/Introduction';
import Unicorn from '../components/Unicorn';
import AboutMe from '../components/AboutMe/AboutMe';
import CodingSkills from '../components/CodingSkills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cindy Duong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Introduction />
      <Unicorn />
      <AboutMe />
      <CodingSkills/>
    </div>
  );
}
