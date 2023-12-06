import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.wrap}>
      <div>©All Rights Reserved.</div>
      <div className={styles.iconWrap}>
        <Link href="https://www.facebook.com/" target='blank' className={styles.icon}><Image src="/1.png" width={25} height={25} alt="facebook icon" /></Link>
        <Link href="https://www.instagram.com/" target='blank' className={styles.icon}><Image src="/2.png" width={25} height={25} alt="instagram icon" /></Link>
        <Link href="https://twitter.com/" target='blank' className={styles.icon}><Image src="/3.png" width={25} height={25} alt="tweeter icon" /></Link>
        <Link href="https://www.youtube.com/" target='blank' className={styles.icon}><Image src="/4.png" width={25} height={25} alt="youtube icon" /></Link> 
      </div>
    </div>
  )
}

export default Footer