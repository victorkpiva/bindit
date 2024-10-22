import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../Css/DashboardHeader.module.css';
import logo from '../Images/bindlogo.png';
import Alert from './Alert';

function DashboardHeader() {
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        setShowAlert(true);
    };

    const handleConfirmLogout = () => {

        navigate('/home'); // Redireciona para a página home após logout
        setShowAlert(false);
    };

    const handleCancelLogout = () => {
        setShowAlert(false);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                </div>

                <div className={styles.menu}>
                    <NavLink to="/dashboard/perfil" className={({ isActive }) => isActive ? `${styles.animatedLink} ${styles.active}` : styles.animatedLink}>Perfil</NavLink>
                    <NavLink to="/dashboard/meus-grupos" className={({ isActive }) => isActive ? `${styles.animatedLink} ${styles.active}` : styles.animatedLink}>Meus Grupos</NavLink>
                    <NavLink to="/dashboard/criar-grupo" className={({ isActive }) => isActive ? `${styles.animatedLink} ${styles.active}` : styles.animatedLink}>Criar Grupo</NavLink>
                    <a className={styles.animatedLink} onClick={handleLogoutClick}>Sair</a>
                </div>
            </nav>

            {showAlert && (
                <Alert
                    onConfirm={handleConfirmLogout}
                    onCancel={handleCancelLogout}
                />
            )}
        </header>
    );
}

export default DashboardHeader;
