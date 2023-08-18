import { Link } from 'react-router-dom';
import Container from './Container';
import logouol from '../../img/logouol.jpeg';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to='/'>
          <img src={logouol} alt='logo' />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles.item}>
            <Link to='/clientes'>Clientes</Link>
          </li>
          <li className={styles.item}>
            <Link to='/cadastrar'>Cadastrar</Link>
          </li>
          <li className={styles.item}>
            <Link to='/contact'>Contato</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;
