import styles from './ProjectCard.module.css'
import {Link} from 'react-router-dom'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

export default function ProjectCard({ id, name, budget, category, handleRemove }){
    return(
        <div className={styles.card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R$ {budget}
            </p>
            <p className={styles.categories_balls}>
                <span className={`${styles[category.toLowerCase()]}`}> </span>  {category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to='/'>
                    <BsPencil/> Editar
                </Link>
                <button>
                    <BsFillTrashFill/> Excluir
                </button>
            </div>
        </div>
    )
}