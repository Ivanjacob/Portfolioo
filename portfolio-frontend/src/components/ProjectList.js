import React, { useEffect, useState } from 'react';
import axios from 'axios'


const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('/api/projects/')
            .then(response => setProjects(response.data))
            .catch(error => console.error(error));
    }, []);
    
    return (
        <div>
            <h1>My Projects</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <p><strong>Tech Stack:</strong> {project.tech_stack} </p>
                        <a href={project.github_link}>View on GitHub</a>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default ProjectList;