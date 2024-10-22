// components/ConfirmAlert.js

import React from 'react';
import styles from '../Css/Alert.module.css';

function ConfirmAlert({ onConfirm, onCancel }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.alert}>
                <h2>Tem certeza que deseja sair?</h2>
                <div className={styles.buttons}>
                    <button onClick={onConfirm}>Sim, sair</button>
                    <button onClick={onCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmAlert;
