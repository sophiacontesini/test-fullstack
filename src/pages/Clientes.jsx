import React, { useState, useEffect } from 'react';
import { FiUser } from 'react-icons/fi';
import styles from './Clientes.module.css';
import { useNavigate } from 'react-router-dom';

export default function Clientes() {
  const [clientes, setClientes] = useState([]);

  const navigate = useNavigate();

  const handleNovoCliente = () => {
    navigate('/cadastrar');
  };
  useEffect(() => {
    // Fetch dos dados dos clientes do JSON Server
    fetch('http://localhost:5000/clientes')
      .then(response => response.json())
      .then(data => setClientes(data));
  }, []);

  const handleRemoverCliente = async id => {
    try {
      const response = await fetch(`http://localhost:5000/clientes/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        console.log('Cliente removido com sucesso!');
        // Atualizar a lista de clientes após a exclusão
        setClientes(clientes.filter(cliente => cliente.id !== id));
      } else {
        console.error('Erro ao remover cliente');
      }
    } catch (error) {
      console.error('Erro ao remover cliente:', error);
    }
  };

  return (
    <div className={styles.clientes_container}>
      <div>
        <h1>
          <FiUser />
          Painel de Clientes
        </h1>
      </div>
      <hr className={styles.divider} />
      <div className={styles.newClient}>
        <div>
          <h3>Listagem de Usuários</h3>
          <h4>Escolha um cliente para visualizar os detalhes</h4>
        </div>
        <button className={styles.btn} type='text' onClick={handleNovoCliente}>
          Novo Cliente
        </button>
      </div>
      <div>
        <h2>Lista de Clientes</h2>
        <div className={styles.list_container}>
          <ul>
            {clientes.map(cliente => (
              <li key={cliente.id}>
                <p>Nome: {cliente.name}</p>
                <p>E-mail: {cliente.email}</p>
                <p>CPF: {cliente.cpf}</p>
                <p>Telefone: {cliente.telefone}</p>
                <p>Status: {cliente.status}</p>
                <button
                  className={styles.btn}
                  onClick={() => handleRemoverCliente(cliente.id)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
