import React from "react";
import styles from '../Css/Visao.module.css';
import logo from '../Images/bindlogo.png';

function Sobre() {
    return (
        <div className={styles.body}>
            <div className={styles.visaoContainer}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                </div>
                <div className={styles.visaoContent}>
                    <h1>Visão da Empresa</h1>
                    <p>
                        Bind.it é uma empresa voltada para gamers que desejam criar grupos de pessoas seletas com o mesmo estilo de jogo. Nossa plataforma permite que jogadores de todos os níveis encontrem e formem equipes com objetivos e interesses comuns.
                    </p>
                    <p>
                        Seja você um jogador de Counter-Strike ou qualquer outro jogo competitivo, na Bind.it você pode ser o líder e criar seu próprio grupo. Nossa plataforma facilita a criação e gestão de equipes para que você e seus amigos possam se concentrar no que realmente importa: vencer campeonatos e se divertir.
                    </p>
                    <p>
                        A missão da Bind.it é proporcionar uma experiência unificada para todos os integrantes do grupo, garantindo que todos joguem com o mesmo objetivo. Queremos que você encontre pessoas que compartilhem sua paixão e determinação, formando grupos coesos e prontos para qualquer desafio.
                    </p>
                </div>
            </div>
        </div>

    );
}
export default Sobre;