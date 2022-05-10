import styles from './Submit.module.css'

export default function Input({text}){
    return(
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}