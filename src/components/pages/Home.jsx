import LinkButton from '../layout/LinkButton'
import styles from './Home.module.css'


export default function Home(){
    return(
        <section className={styles.home}>
            <h1 className={styles.h1}>Bem-vindo ao <span>Costs</span></h1>
            <h2 className={styles.h2}>Comece a gerenciar os seus projetos agora mesmo!</h2>
            <LinkButton to='/newproject' text='Criar Projeto'/>
        </section>
    )
}