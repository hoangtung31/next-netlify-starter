import styles from './Footer.module.css'
import Script from 'next/script'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/ic_fox.png" alt="Fox Logo" className={styles.logo}/> for you
      </footer>
    </>
  )
}
