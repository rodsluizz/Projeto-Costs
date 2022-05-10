import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'

export default function ProjectForm({btnText}){
    return <>
        <form action="" className={styles.formulario}>
            <Input 
            placeholder='Digite o nome do seu projeto: ' 
            type='text'
            id='nome_projeto'
            name='name'
            text='Nome do projeto:'
            />
            <Input 
            placeholder='Digite o valor total do orçamento: ' 
            type='number'
            id='valor_projeto'
            name='budget'
            text='Valor do projeto:'
            />
            <Select
            name='category_id'
            text='Selecionar categoria:'
            />
            <Submit
            text={btnText}
            />
            
        </form>
    </>
}