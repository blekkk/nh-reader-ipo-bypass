import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Forms from '../components/Forms'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blek!</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.container_profile}>
          <img src="/jahy_crop-min.jpg" className={styles.img}/>
          <h1 className={styles.title}>
            Blek!
          </h1>
          <a href="https://discord.com/oauth2/authorize?client_id=789172527569305610&scope=bot&permissions=19520" className={styles.btn}>Add</a>
        </div>
        <div className={styles.container_form}>
          <Forms/>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>forked from <a href="https://github.com/gfjaru/nh-reader-ipo-bypass"> nh-reader-ipo-bypass</a></p>
      </footer>
    </div>
  )
}
