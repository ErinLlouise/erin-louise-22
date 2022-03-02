import Head from "next/head";
import Home from "./home";
import About from "./about";
import Timeline from "./timeline";
import Connect from "./connect";
import Works from "./works";

export default function Erin() {
  return (
    <div>
      <Head>
        <title>ERIN LOUISE</title>
        <meta name="description" content="Erin Louise Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home />
        <About />
        <Timeline />
        <Connect />
        <Works />
      </main>
    </div>
  );
}
