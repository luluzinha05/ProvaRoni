import React from 'react';
import { Link } from 'react-router-dom'
import './Style.css';

const Home = () => {
  return (
    <div className='cabecalho'>
      <h2>Inicio</h2>
      <p>Página principal.</p>
      <Link to={"/userlist"} className='link'>Redireciona Para Lista de Usuários</Link>
    </div>
  );
}

export default Home;