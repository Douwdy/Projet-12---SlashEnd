import placeholder from '../../assets/img/placeholder.webp';

const Products = () => {
    return (
        <section className="products" id="products">
            <article className="products-item">
                <img src={placeholder} alt=""></img>
                <div className="products-item_desc flex-between">
                    <h2>Création de Sites Web avec SEO Intégré :</h2>
                    <p>Je m'occupe de tout le développement de votre site web, en m'assurant qu'il soit non seulement beau, mais aussi bien référencé sur les moteurs de recherche. En intégrant directement les meilleures pratiques SEO dans le code, je vous aide à obtenir une visibilité optimale dès le lancement de votre site.</p>    
                </div>
            </article>
            <article className="products-item">
                <img src={placeholder} alt=""></img>
                <div className="products-item_desc flex-between">
                    <h2>Sites Web Dynamiques et Interactifs en JavaScript :</h2>
                    <p>J'aime créer des sites web vivants et interactifs grâce à JavaScript, pour offrir à vos utilisateurs une expérience agréable et engageante. Que ce soit pour des fonctionnalités interactives ou des mises à jour en temps réel, je veille à ce que votre site soit à la fois pratique et plaisant à utiliser.</p>    
                </div>
            </article>
            <article className="products-item">
                <img src={placeholder} alt=""></img>
                <div className="products-item_desc flex-between">
                    <h2>Conception et Mise en Ligne de A à Z :</h2>
                    <p>De l'idée initiale à la mise en ligne, je prends en charge toutes les étapes de la création de votre site web. Je conçois des interfaces attractives et intuitives, puis je m'occupe de mettre votre site en ligne, pour qu'il soit prêt à attirer et fidéliser vos visiteurs dès le premier jour.</p>    
                </div>
            </article>
        </section>
    );
};

export default Products;