import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>VideoPlayer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.welcomeCard}>
          <h1 className={styles.title}>Welcome to VideoPlayer</h1>
          <p>Click on start button to watch a video.</p>
          <Link href="/video/1" className={styles.link}>Start</Link>
        </section>
      </main>
    </>
  )
}
