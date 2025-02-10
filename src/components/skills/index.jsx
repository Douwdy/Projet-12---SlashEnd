import React from 'react';
import skillsList from '../../assets/json/skillsList.json';

const Skills = () => {
    return (
    <section className="skills flex-center" id="skills" aria-label="Mon parcours">
        <h3>Mon parcours</h3>
        {skillsList.map((skill, index) => (
            <article className='skills-article' key={index} aria-label={`Skill ${index + 1}`}>
                <h4 className='skills-article_title' aria-label={`Title: ${skill.title}`}>{skill.title}</h4>
                <p className='skills-article_desc' aria-label={`Description: ${skill.description}`}>{skill.description}</p>
                <h4 className='skills-article_date' aria-label={`Date: ${skill.date}`}>{skill.date}</h4>
            </article>
        ))}
    </section>
    );
};

export default Skills;