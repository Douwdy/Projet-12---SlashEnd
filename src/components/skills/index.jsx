import React from 'react';
import skillsList from '../../assets/json/skillsList.json';

const Skills = () => {
    return (
    <section className="skills flex-center" id="skills">
        <h3>Mon parcours</h3>
        {skillsList.map((skill, index) => (
            <article className='skills-article' key={index}>
                <h4 className='skills-article_title'>{skill.title}</h4>
                <p className='skills-article_desc'>{skill.description}</p>
                <h4 className='skills-article_date'>{skill.date}</h4>
            </article>
        ))}
    </section>
    );
};

export default Skills;