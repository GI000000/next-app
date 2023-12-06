import Button from '@/components/button/Button'
import styles from './page.module.css'
import Image from 'next/image'
import Hero from 'public/hero.png'

export default function Home() {
  return (
    <main className={styles.container}>
      <div>
        <h1>Better design for your digital products.</h1>
        <p>Turning your Idea into Reality. We bring together the teams from the
          global tech industry</p>
          <Button url={'/about'} title={"See Out Works"} />
      </div>
      <div>
        <Image src={Hero} width={500} height={500} alt="hero" className={styles.hero}/>
      </div>
    </main>
  )
}
