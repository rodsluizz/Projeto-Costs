import {FaLinkedin, FaGithub} from 'react-icons/fa'
import styles from '../layout/Footer.module.css'


export default function Footer(){
    return(
        <footer className={styles.footer}>
            <p>Criado e Desenvolvido por <b>Rodrigo Cunha</b></p>
            <ul className={styles.listaIcones}>
                <li className={styles.icones}><FaLinkedin></FaLinkedin></li>
                <li className={styles.icones}><FaGithub></FaGithub></li>
            </ul>
        </footer>
    )
}