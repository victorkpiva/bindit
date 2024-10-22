import styles from '../Css/Contato.module.css'

function Contato(){
    return(
        <section className={styles.contactArea}>
            <div className={styles.contactText} id='section1'>
                <h2>Um pouco sobre nós</h2>
                <span>
                    Somos uma empresa formada com base na necessidade da criação de grupos voltado
                    para a área de e-sports, buscamos sempre evoluir nossos produtos e oferecer um 
                    suporte de qualidade se precisar de algo não hesite em nos contatar.
                </span>
            </div>

            <div className={styles.formContato}>
                <h2>Contato</h2>
                <form>
                    <div className={styles.infoUser}>
                        <input type="text" name="name" className={styles.textBox} placeholder="Seu Nome" required />
                        <input type="email" name="email" className={styles.textBox} placeholder="Seu Email" required />
                    </div>
                    <textarea name="mensagem" rows="5" placeholder="Sua Mensagem" required className={styles.textarea}/>
                    <input type="submit" name="submit" className={styles.sendBtn} value="Enviar" />
                </form>
            </div>
        </section>
    )
}

export default Contato;
