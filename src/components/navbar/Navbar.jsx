import React from 'react'
import styles from "./navbar.module.css"

function Navbar() {
  const links = [
    {
      id: 1,
      title: "Home"
    },
    {
      id: 2,
      title: "About"
    },
    {
      id: 3,
      title: "Contact Us"
    }
  ];

  return (
    <div className={styles.links}>
      {links.map(link => (<h1>{link.title}</h1>))}
    </div>
  )
}

export default Navbar