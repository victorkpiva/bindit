import React from "react"
import Cabecalho from "./Cabecalho"
import Contato from "./Contato"
import Video from '../Video/noob.mp4'
import styles from '../Css/Home.module.css'

function Home() {
    return (
        <section className={styles.body}>
            <Cabecalho />

            <section className={styles.card_bindit}>
                <div className={styles.card_info}>
                    <span>
                        Venha conhecer o Bind.it!
                    </span>
                </div>
            </section>

            <section>
                <div>
                    <video className={styles.video} controls>
                        <source src={Video} type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                </div>
            </section>

            <Contato />
        </section>
    )
}

export default Home;