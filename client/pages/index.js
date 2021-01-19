import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DrugStat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          DrugStat
        </h1>
      <p>
        <ul>
          <li><Link href="/statistics">Statistics</Link></li>
          <li><Link href="/journal">Journal</Link></li>
        </ul>
      </p>
      </main>
    </div>
  )
}
