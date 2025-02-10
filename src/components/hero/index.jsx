import arrow from '../../assets/img/Arrow.svg';
import bubble from '../../assets/img/bubble.svg';

const Hero = () => {
    return (
        <section className="hero flex-center" aria-label="Section principale">
            <div className="hero-bubble" aria-label="Bulle de texte avec emojis">
                <p className="hero-bubble_emojis">🎈🚀😉</p>
                <img src={bubble} alt="Bulle de texte"></img>
            </div>
            <div className="hero-title" aria-label="Votre site sur mesure">
                <h1>Votre site sur</h1>
                <div className="hero-title-animation">
                    <p className="hero-title-animation_1">m</p>
                    <p className="hero-title-animation_2">e</p>
                    <p className="hero-title-animation_3">s</p>
                    <p className="hero-title-animation_4">u</p>
                    <p className="hero-title-animation_5">r</p>
                    <p className="hero-title-animation_6">e</p>
                </div>
            </div>
            <div className="hero-subtitle" aria-label="Sous-titre">
                <h2>Gagnez en visibilité avec un site taillé pour votre entreprise</h2>
            </div>
            <div className="hero-btn" aria-label="Boutons pour présenter mon projet">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_ckIXxlyNAlX3YNRW1XLHlFtbHMtbJqOdGTsMCMR4sy9cqw/viewform?usp=sf_link" aria-label="Lien pour présenter mon projet">
                    <div className="hero-btn_1 flex-center">
                        Présenter mon projet 🚀
                    </div>
                </a>
                <div className="hero-btn_2"></div>
            </div>
            <div className="hero-arrow" aria-label="Lien vers la présentation">
                <a href="#presentation">
                    <img src={arrow} alt="Flèche"></img>
                </a>
            </div>
        </section>
    );
};

export default Hero;