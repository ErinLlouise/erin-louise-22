import Head from "next/head";
import Nav from "./nav";
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        {/* // eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@100;200;300;400;500;600;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/Founders_Grotesk_Font_Family/TestFoundersGrotesk400.otf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <main>
        <Nav />
        <Home />
        <About />
        <Timeline />
        <Connect />
        <Works />
      </main>
    </div>
  );
}
