import React from 'react';
import Paragraph from './Paragraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faFigma, faSass } from '@fortawesome/free-brands-svg-icons';
import { faCode, faMagnifyingGlass, faPenNib } from '@fortawesome/free-solid-svg-icons';
const Competences = () => {

    return (
        <section className="competences" id='techs'>
            <div className='competences-desc'>
                <Paragraph title="Mes compétences">
                En tant que Développeur web, je maîtrise l'HTML, le CSS avec SASS, ainsi que le JavaScript et le framework React.
                Grâce à ces compétences, je crée des interfaces modernes, dynamiques et performantes. Mon expertise en structuration de code et
                en optimisation des performances me permet de livrer des applications web réactives et modulaires,
                toujours en accord avec les meilleures pratiques du développement.
                </Paragraph>
                <div className='competences-desc_cards'>
                    <div className='competences-desc_cards-card'>
                    <FontAwesomeIcon icon={faCode} style={{color: "white"}} size='3x'/>
                        <h2>Code</h2>
                    </div>
                    <div className='competences-desc_cards-card'>
                    <FontAwesomeIcon icon={faPenNib} style={{color: "white"}} size='3x'/>
                        <h2>Design</h2>
                    </div>
                    <div className='competences-desc_cards-card'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "white"}} size='3x'/>
                        <h2>SEO</h2>
                    </div>
                </div>
            </div>
            <div className='competences-techs'>
                <div className='competences-techs_dev'>
                    <h2>Stack de développement</h2>
                    <div className='competences-techs_dev-cards'>
                        <div className='competences-techs_dev-cards-html'>
                            <FontAwesomeIcon icon={faHtml5} style={{color: "#e34c26"}} size='3x'/>
                            <p>HTML5</p>
                        </div>
                        <div className='competences-techs_dev-cards-css'>
                            <FontAwesomeIcon icon={faCss3Alt} style={{color: "#1572b6"}} size='3x'/>
                            <p>CSS3</p>
                        </div>
                        <div className='competences-techs_dev-cards-sass'>
                            <FontAwesomeIcon icon={faSass} style={{color: "#cc6699"}} size='3x'/>
                            <p>Sass</p>
                        </div>
                        <div className='competences-techs_dev-cards-js'>
                            <FontAwesomeIcon icon={faJs} style={{color: "#f7df1e"}} size='3x'/>
                            <p>JavaScript</p>
                        </div>
                        <div className='competences-techs_dev-cards-react'>
                            <FontAwesomeIcon icon={faReact} style={{color: "#61dafb"}} size='3x'/>
                            <p>React</p>
                        </div>
                        <div className='competences-techs_dev-cards-node'>
                            <FontAwesomeIcon icon={faNodeJs} style={{color: "#339933"}} size='3x'/>
                            <p>Node.js</p>
                        </div>
                    </div>
                </div>
                <div className='competences-techs_design'>
                    <h2>Stack de design</h2>
                    <div className='competences-techs_design-cards'>
                        <div className='competences-techs_design-cards-figma'>
                            <FontAwesomeIcon icon={faFigma} style={{color: "#D3130D"}} size='3x'/>
                            <p>Figma</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Competences;