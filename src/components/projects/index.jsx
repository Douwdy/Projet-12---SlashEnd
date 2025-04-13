import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSass, faJs, faReact, faNode } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

import projectDescriptions from '../../assets/json/projectDescriptions.json';

const firstProject = projectDescriptions[Object.keys(projectDescriptions)[0]];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(firstProject);

    const handleCardClick = (projectId) => {
        setSelectedProject(projectDescriptions[projectId]);
    };

    const getSelectedProjectTechs = () => {
        const techIcons = {
            HTML: { icon: faHtml5, color: '#E34F26' },
            CSS: { icon: faCss3Alt, color: '#1572B6' },
            SASS: { icon: faSass, color: '#CC6699' },
            JavaScript: { icon: faJs, color: '#F7DF1E' },
            React: { icon: faReact, color: '#61DAFB' },
            NodeJS: { icon: faNode, color: '#8CC84B' },
            Database: { icon: faDatabase, color: '#FFD43B' },
        };

        return selectedProject.tech.split(', ').map((tech) => {
            const techInfo = techIcons[tech] || { icon: faCode, color: '#000000' };
            return (
                <FontAwesomeIcon key={tech} icon={techInfo.icon} style={{ color: techInfo.color }} aria-label={tech} />
            );
        });
    };

    return (
        <section className="projects flex-center" id="projects">
            <h4>Ils m'ont fait confiance !</h4>
            <div className="projects-deck flex-between">
                {Object.keys(projectDescriptions).map((projectId) => (
                    <div
                        key={projectId}
                        className="projects-deck_card flex-end"
                        id={projectId}
                        onClick={() => handleCardClick(projectId)}
                        aria-label={`Project ${projectDescriptions[projectId].title}`}
                    ></div>
                ))}
            </div>
            <div className="projects-desc" id="desc">
                {selectedProject && (
                    <div className="projects-desc_animation">
                        <h5 className="projects-desc_title">{selectedProject.title}</h5>
                        <p className="projects-desc_txt">{selectedProject.desc}</p>
                        <div className="projects-desc_tech">
                            {getSelectedProjectTechs()}
                        </div>
                        <a href={selectedProject.link} aria-label={`View project ${selectedProject.title}`}>
                            <div className="projects-desc_btn flex-center">Voir le projet</div>
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;