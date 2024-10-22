import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';
import CriarGrupo from './CriarGrupo';
import Perfil from './Perfil';
import MeusGrupos from './MeusGrupos';
import styles from '../Css/Dashboard.module.css';

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <DashboardHeader />
      <div className={styles.content}>
        <Routes>
          <Route path="criar-grupo" element={<CriarGrupo />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="meus-grupos" element={<MeusGrupos />} />
          <Route path="*" element={<Navigate to="criar-grupo" />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
