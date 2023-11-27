import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Style.css';

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      <h2>Detalhes do Usuário</h2>
      {user ? (
        <div className='cabecalho3'>
          <p>Nome: {user.name}</p>
          <p>Email: {user.email}</p>
          <Link to={"/home"} className='link'> Voltar Para Página Inicial</Link>
          {}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserDetails;
