import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'

function page() {
  return (
    <div className={styles.mainContainer}>
      <Link href={"/blog/123"} className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAM1BMVEXMzMyVlZXPz8+SkpKWlpbLy8u7u7vIyMiZmZmcnJzBwcHExMSoqKifn5+4uLiurq6qqqrE7XzUAAAFLklEQVR4nO2a2XLcOgxExUXcJJL6/68NwF0zvrZTt1KJVX1eMpAoudjTBEBOtg0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBPkP9v/Ovjv/u6H4Ccc7ImpbDPOy/xV9hgkjlmfNzDt/gJyHyG9uk4nRA+234nxFv81YtC9FrpmNvXIVN0FKYxIEW+nR7lQBmUMvXjEUXhbHoFX+Pre/7rw0XVTxq9hqRmu/0o/awTTT57ktUiGU7lGscef2vCNFzTcK+FLu8LTugYo+6vD6LFOvyZmfwVstZtfkaIGOSWvFDFfuSWk2OS4Tv2K8O3PVxanBxfQl+HtNmJWB4/hc6W4nb7GbBHmnyncAfbLOliNzKjqzJqkT57RcVeNJwf3yN9CyUTnCzbfgnPdqOlXeOz3H4G9lS5ra5didyvRdLhUG3R0qq8vl69R1Q95wln2MuqqnQ4znaU+XQtukHop2Q/mZTfW+kwytX5ysy2o1vVfJu8RJzF14bQWhn6tHQhwanmUcvVYc/KtZIRFdUee5XvhGOn8vd7oX8aq8kJVT6ZVWxqGEdCctzkS9rP5XY4VW21X2pd1KG7bZNca8jCZ5OrvMh2c26S7nyzFfrXuWgmXb45q+B1YtOM2Dkzn6ESEevVVhPaIK26KOw+67tcW6LvRR6+1+/5vfx0kmabNfnKGitQsktSOtHX2OHWbEUlhUMqAepWAvauSaDcJ60e7U6grCBDL1CcJfwjth41238oX17ls25tdaUh21lplDg/rABcWo+N5WsXgtJFvi62UfoR8mXhSaAun2/dcmk9SL45/933nUMN2X5bpDbno5fu1NhdXD+G26wSRlJq7MODEk+Q76jrq8vnhnxsREmXu3xy5rH6oBIxif+on6Qer02r5tKmP8Bbw76411s/l75a3+Xbq3xiuu8uH3U2Wov4kYV4o1e8tWhkm3zTfU+Qz3BBZHh2ktXM99w35Lznvq2sZv1R77vTBq/JamepOF5yX3hC7pO0t8oF2qvmHD4pHcerfJQ1hX9vPqhBFOKq0twqr36pvM+Qr6F1OUWafd7BpUL6cVAV3IvVqLZQy/N2kkxpT6RRrceCN6VxcaPvo+3ME+RTi3ykz+xmWa61jTZ6bZtL46vnqeCAvDcPAyznzzqa2+a5JX5I2yzzWbguSlfXFeToZml3z900bYfbpi2/lAlLOkVuXm7Qko/HcCTteeO6SVs2cWTrny/fJju1dHA70gTJivtBas+ql/ZTxVuPQoU3cfNyF4HMt67npES9v9eGMitXX7KLUZOegOyH9bHuZTn18bqzvm4rZLh3zXyfbHaK+1U++lrj0JIf1ZOSOU2rP+ztWyr44Qz5kiqtC+1pa4uWRWmc+ReQ1Wf7Vfa8fMi/Xj68Mrazl72JowzKx6TFprS2vaGYZHzKgUthyEeuEmdKpFbNWjRxfaXEV1db8ZaX/6XmZV2EgXqZDulWuhiXTXbNpfxLUY0fc1paGPJx9hKK6nE/3aMcJ7g83w5I+KSljCdXumX3YJTunVD9bYlSZn28Jc6dOyUltDofclhamfLtiWerRmqi6smxv22xaIn7+imr9dyTrk+Kv0g/fnxUbRtr/KSlu63/y0CGHGO2S3zFmOzrcDk+yPv1Qbtkznim6bU9UfyksvHGiyRv8e+/7tMYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH+bXxpuKt0kTh2FAAAAAElFTkSuQmCC" alt="Blog Image" width={400} height={200} className={styles.image}/>
        </div>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Blog title</h1>
          <p className={styles.par}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur perspiciatis, dolorem quos iure explicabo et dolorum optio! Commodi iure, placeat sunt quaerat id rerum, at incidunt accusamus ullam exercitationem quidem.</p>
        </div>
      </Link>
    </div>
  )
}

export default page