import pfp from '../../assets/img/pfp-fullsize.png';

const Presentation = () => {
    return (
        <section className="presentation flex-center" id="presentation">
            <h2>Qui je suis ?</h2>
            <img src={pfp} alt=""></img>
            <h3>Guillaume</h3>
            <p>Je suis un développeur web freelance passionné et motivé, avec une  expérience significative dans la création de sites web et d'applications  web. Je suis spécialisé dans les technologies modernes du développement  web, telles que SASS, NodeJS et JavaScript.</p>
        </section>
    );
};

export default Presentation;