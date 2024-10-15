import Illustration from "../assets/template.png";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-desc">
                <h1>Votre site sur mesure</h1>
                <h2>Gagnez en visibilité avec un site taillé pour votre entreprise</h2>
                <a href="#services" className="cta">En savoir plus</a>
            </div>
            <img src={Illustration} alt="test" className="hero-img" />
        </section>
    );
};

export default Hero;