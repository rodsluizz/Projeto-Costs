import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
import {useNavigate} from 'react-router-dom'

export default function NewProject(){

    //responsável por redirecionar o usuario pra outra página após a criação do projeto.
    const navigate = useNavigate()
    const history = useNavigate()

    //função que cria o projeto
    function createPost(project){
        //initialize cost and services
        project.cost = 0
        project.service = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            history('/projects', { message: 'Projeto criado com sucesso! '})
        })
        .catch(err => console.log(err))
    }

    return(
        <div className={styles.divNewProject}>
            <h1 className={styles.h1}>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços.</p>
            <ProjectForm handleSubmit={createPost} btnText='Criar Projeto'/>
        </div>
    )
}