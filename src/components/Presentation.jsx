import pfp from '../assets/guillaume.png';
import cv from '../assets/CV.pdf';
import Buttons from './Buttons';
import Paragraph from './Paragraph';

const Presentation = () => {
    return (
        <section className="presentation">
            <div className="presentation-picture">
                <img src={pfp} alt="Guillaume" />
                <h1>Guillaume</h1>
            </div>
            <div className="presentation-txt">
                <Paragraph title='Présentation'>
                Je suis un développeur web freelance passionné et motivé, avec une  expérience significative dans la création de sites web et d'applications  web. Je suis spécialisé dans les technologies modernes du développement  web, telles que HTML, CSS et JavaScript.
                </Paragraph>
                <div className='presentation-txt_links'>
                    <Buttons content='Voir mon CV' border={false} path={cv} download={true}/>
                    <Buttons content='Découvrir mon portfolio' border={true} path='#portfolio'/>
                </div>
            </div>
        </section>
    );
};

export default Presentation;