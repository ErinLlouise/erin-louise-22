import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ERIN LOUISE</title>
        <meta name="description" content="Erin Louise Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>ERIN LOUISE</h1>
      </main>
    </div>
  );
}
