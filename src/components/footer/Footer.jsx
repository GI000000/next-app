import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'

function Footer() {
  return (
    <div className={styles.wrap}>
      <div>All Rights Reserved.</div>
      <div className={styles.iconWrap}>
        <Image src="/1.png" width={35} height={35} alt="facebook icon" className={styles.icon} />
        <Image src="/2.png" width={35} height={35} alt="instagram icon" className={styles.icon} />
        <Image src="/3.png" width={35} height={35} alt="tweeter icon" className={styles.icon} />
        <Image src="/4.png" width={35} height={35} alt="youtube icon" className={styles.icon} /> 
      </div>
    </div>
  )
}

export default Footer