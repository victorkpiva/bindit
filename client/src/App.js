import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cadastro from './Components/Cadastro';
import Home from './Components/Home';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Visao from './Components/Visao';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/visao" element={<Visao />} />
        <Route path="/dashboard/*" element={<Dashboard />} >
          <Route path="*" element={<Navigate to="criar-grupo" />} />
        </Route>

        <Route path="*" element={<Navigate to="home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
