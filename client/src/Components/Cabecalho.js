import styles from '../Css/Cabecalho.module.css'
import logo from '../Images/bindlogo.png'
import { Link } from 'react-router-dom';

function Cabecalho() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className="menu-left">
          <a href="#section1" className={styles.animatedLink}>Sobre nós</a>
          <Link to={"/visao"}><a href="#section2" className={styles.animatedLink}>Visão</a></Link>
        </div>


        <div className="logo-container">
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>

        <div className="menu-right">
          <Link to={"/login"}><a className={styles.animatedLink}>Entrar</a></Link>
          <Link to={"/cadastro"}><button className={styles.cadastro}>Cadastre-se</button></Link>
        </div>

      </nav>
    </header>
  )
}

export default Cabecalho;