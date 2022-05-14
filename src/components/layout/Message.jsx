import styles from './Message.module.css'

export default function Message({type, msg}){
    return(
        <div className={`${styles.message} ${styles[type]}`}>
            <h1>{msg}</h1>
        </div>
    )
}