import React from 'react'
import styles from "./button.module.css"
import Link from 'next/link'

function Button({url, title}) {
  return (
    <Link href={url}>
        <button className={styles.button}>{title}</button>
    </Link>
  )
}

export default Button