import React, { useState } from 'react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projectDescriptions = {
        ridingCities: {
            title: "Riding Cities",
            desc: "Le projet Riding Cities avait pour but d'intégrer la section Les membres fondateurs uniquement en HTML étant donné que le CSS était déjà écrit. Ce projet a été réalisé dans le cadre de ma formation chez OpenClassrooms.",
            link: "https://github.com/Douwdy/Projet-2---Riding-Cities"
        },
        booki: {
            title: "Booki",
            desc: "Le projet Booki avait pour but de coder la page d'accueil d'une agence de voyage type booking.com en HTML et CSS. Ce projet a été réalisé dans le cadre de ma formation chez OpenClassrooms.",
            link: "https://github.com/Douwdy/Projet-3---Booki"
        },
        ohMyFood: {
            title: "Oh My Food",
            desc: "Le projet OhMyFood avait pour but de coder le site d'une application de commande de nourriture type UberEats. Il a été réalisé en HTML et SASS. Ce projet a été réalisé dans le cadre de ma formation chez OpenClassrooms.",
            link: "https://douwdy.github.io/Projet-4---OhMyFood/"
        },
        printIt: {
            title: "Print It",
            desc: "Le projet Print It avait pour but de coder un carrousel en JavaScript pour la page d'accueil du site web d'une imprimerie. Ce projet a été réalisé dans le cadre de ma formation chez OpenClassrooms.",
            link: "https://github.com/Douwdy/Projet-5---Print-It"
        },
        sophieBluel: {
            title: "Sophie Bluel",
            desc: "Le projet Sophie Bluel avait pour but de coder un portfolio complet pour une architecte d'intérieur. Le site a été réalisé avec HTML, SASS et JavaScript. Le projet devait contenir un système de connexion pour manager les projets, ajout, suppression. Ce projet a été réalisé dans le cadre de ma formation chez OpenClassrooms.",
            link: "https://github.com/Douwdy/Projet-6---Sophie-Bluel"
        },
        kasa: {
            title: "Kasa",
            desc: "Le projet Kasa avait pour but de coder un site de location de logement entièrement avec React. Ce projet a été réalisé dans le cadre de ma formation chez OpenClassrooms.",
            link: "https://github.com/Douwdy/Projet-7---Kasa"
        },
        ninaCarducci: {
            title: "Nina Carducci",
            desc: "Le projet Nina Carducci avait pour but d'optimiser le portfolio d'une photographe, tant côté SEO que du côté temps de chargement, accessibilité, etc. Ce projet a été réalisé dans le cadre de ma formation chez OpenClassrooms.",
            link: "https://douwdy.github.io/Projet-8---Nina-Carducci/"
        },
        Events: {
            title: "724Events",
            desc: "Le projet 724Events avait pour but de débugguer le site d'une agence d'événementiel. Le projet à débugguer était code en React. Ce projet a été réalisé dans le cadre de ma formation chez OpenClassrooms.",
            link: "https://github.com/Douwdy/Projet-9---724events"
        },
        argentBank: {
            title: "Argent Bank",
            desc: "Le projet ArgentBank avait pour but de coder une application bancaire en React. Le cahier des charges comprenait une connexion sécurisée via une API et la possibilité pour l'utilisateur de changer son pseudonyme. Ce projet a été réalisé dans le cadre de ma formation chez OpenClassrooms.",
            link: "https://github.com/Douwdy/Projet-10---ArgentBank"
        },
        refsco81: {
            title: "Refsco81",
            desc: "Le projet Refsco81 avait pour but de coder un site web basique mais respectant tout de même les normes d'accessibilité et de SEO. Le but du site est de guider les parents ayant un enfant handicapé pour réaliser les démarches pour obtenir de l'aide pour leur enfant à l'école.",
            link: "https://refsco81.fr"
        }
    };

    const handleCardClick = (projectId) => {
        setSelectedProject(projectDescriptions[projectId]);
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
                    ></div>
                ))}
            </div>
            <div className="projects-desc" id="desc">
                {selectedProject && (
                    <div className="projects-desc_animation">
                        <h6 className="projects-desc_title">{selectedProject.title}</h6>
                        <p className="projects-desc_txt">{selectedProject.desc}</p>
                        <a href={selectedProject.link}>
                            <div className="projects-desc_btn flex-center">Voir le projet</div>
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;