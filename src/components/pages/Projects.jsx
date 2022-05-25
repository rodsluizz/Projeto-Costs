import Message from '../layout/Message'
import styles from '../pages/Projects.module.css'
import { useLocation } from 'react-router-dom'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'
import {useState, useEffect} from 'react'

export default function Projects(){

    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return(
        <div className={styles.containerPai}>
            <div className={styles.topoDashBoard}>
                <h1>Projetos Criados</h1>
                <LinkButton to='/newproject' text='Criar Projeto' margem='margem'/>
            </div>
            {message && <Message type='success' msg={message} />}
            <Container customClass='start'>
                {projects.length > 0 &&
                    projects.map((project) => 
                    <ProjectCard
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                    />
                )}
            </Container>
        </div>
    )
}