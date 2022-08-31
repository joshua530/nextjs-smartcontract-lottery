import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"
import styles from "../styles/Home.module.css"
// import ManualHeader from "../components/ManualHeader"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart contract lottery</title>
        <meta name="description" content="Smart contract lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ManualHeader /> */}
      <Header />
      <LotteryEntrance />
    </div>
  )
}
