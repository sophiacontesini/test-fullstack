import React, { useState } from 'react';
import styles from './Select.module.css';

function Select() {
  const [selectedValue, setSelectedValue] = useState(''); // Estado para armazenar o valor selecionado

  const handleSelectChange = event => {
    setSelectedValue(event.target.value); // Atualiza o estado com o valor selecionado
  };

  return (
    <div className={styles.form_control}>
      <select value={selectedValue} onChange={handleSelectChange}>
        <option value=''>Status</option>
        <option value='inativo'>Inativo</option>
        <option value='ativo'>Ativo</option>
        {/* <option value='opcao3'>Opção 3</option> */}
      </select>
    </div>
  );
}

export default Select;
