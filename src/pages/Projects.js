import Project from '../components/project/Project'

import { projects } from './../helpers/projectsList'

function Projects() {

    return (

        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">

                    {projects.map((project, index) => {
                        const key=`${project.title}_${project.skills}`
                        
                        return (
                            <Project
                                key={key}
                                title={project.title}
                                img={project.img}
                                index = {index}>
                            </Project>
                        )
                    })}

                </ul>
            </div>
        </main>

    )

}

export default Projects;