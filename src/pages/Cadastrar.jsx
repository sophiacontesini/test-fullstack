import React, { useState } from 'react';
import SubmitButton from '../components/form/SubmitButton';
import Input from '../components/form/Input';
import Select from '../components/form/Select';
import styles from './Cadastrar.module.css';
import { FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function Cadastrar() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [status, setStatus] = useState('ativo');

  const handleVoltar = () => {
    navigate('/');
  };

  const handleCreateUser = () => {
    console.log('Botão "Criar" clicado');
    const newUser = {
      name,
      email,
      cpf,
      telefone,
      status
    };

    fetch('http://localhost:5000/clientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(response => {
        if (response.ok) {
          console.log('Cliente cadastrado com sucesso!');
          // Limpar os campos do formulário após o cadastro
          setName('');
          setEmail('');
          setCpf('');
          setTelefone('');
          setStatus('ativo');
        } else {
          console.error('Erro ao cadastrar cliente');
        }
      })
      .catch(error => {
        console.error('Erro ao cadastrar cliente:', error);
      });
  };

  return (
    <div className={styles.cadastrar_container}>
      <div>
        <h1>
          <FiUser />
          Painel de Clientes
        </h1>
      </div>
      <hr className={styles.divider} />
      <div>
        <h2>Novo usuário</h2>
        <p>Informe os campos a seguir para criar novo usuário:</p>
      </div>
      <div>
        <Input
          type='text'
          name='name'
          placeholder='Nome'
          value={name}
          handleOnChange={e => setName(e.target.value)}
        />
        <Input
          type='text'
          name='email'
          placeholder='E-mail'
          value={email}
          handleOnChange={e => setEmail(e.target.value)}
        />
        <Input
          type='text'
          name='cpf'
          placeholder='CPF'
          value={cpf}
          handleOnChange={e => setCpf(e.target.value)}
        />
        <Input
          type='text'
          name='telefone'
          placeholder='Telefone'
          value={telefone}
          handleOnChange={e => setTelefone(e.target.value)}
        />
        <Select
          name='status'
          value={status}
          handleOnChange={e => setStatus(e.target.value)}
        >
          <option value='Ativo'>Ativo</option>
          <option value='Inativo'>Inativo</option>
          <option value='Aguardando ativação'>Aguardando Ativação</option>
          <option value='Desativado'>Desativado</option>
        </Select>
      </div>
      <div className={styles.btn}>
        <SubmitButton text='Criar' onClick={handleCreateUser} />
        <SubmitButton text='Voltar' onClick={handleVoltar} />
      </div>
    </div>
  );
}
