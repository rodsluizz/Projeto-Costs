import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

export default function LinkButton({to, text, margem}){
    return(
        <Link className={`${styles.btn} ${styles[margem]}`} to={to}>
            {text}
        </Link>
    )
}