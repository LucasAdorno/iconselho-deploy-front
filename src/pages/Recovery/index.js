import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import iconLogo from '../../assets/icon-logo.png';
import { Container } from './styles';
import api from '../../services/api';

export default function Recovery() {

  const [email, setEmail] = useState('');

  const HandleRecovery = () => {
    api.post('sendrecovery', { email }).then(()=>{
      alert('Confira sua caixa de email para recuperar sua senha')
    }).catch(()=>{
      alert('Email invalido!')
    })
  }

  return (
    <Container>
      <img src={iconLogo} alt='logo do laboratorio icon' />
      <input placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <button onClick={() => HandleRecovery()} > Recuperar </button>
      <Link to='/'>
        <button style={{background: '#333'}} >Retornar</button>
      </Link>
    </Container>
  );
}