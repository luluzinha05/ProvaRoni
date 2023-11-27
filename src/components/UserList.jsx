import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Style.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='cabecalho2'>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/userdetails/${user.id}`} className='link'>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Link to={"/home"} className='link'> Voltar Para Página Inicial</Link>
    </div>
  );
}

export default UserList;
