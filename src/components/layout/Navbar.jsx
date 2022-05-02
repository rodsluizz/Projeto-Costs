import {Link} from 'react-router-dom'
import Container from './Container'
import styles from '../layout/Navbar.module.css'
import Logo from '../../img/costs_logo.png'

export default function Navbar(){
    return(
        <>
            <nav className={styles.navbar}>
                <Container>
                    <Link to='/'><img src={Logo} alt="Costs" /></Link>
                    <ul className={styles.lista}>
                        <li className={styles.itens}>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className={styles.itens}>
                            <Link to='/projects'>Projetos</Link>
                        </li>
                        <li className={styles.itens}>
                            <Link to='/company'>Empresa</Link>
                        </li>
                        <li className={styles.itens}>
                            <Link to='/contact'>Contato</Link>
                        </li>
                    </ul>
                </Container>
            </nav>
        </>
    )
}