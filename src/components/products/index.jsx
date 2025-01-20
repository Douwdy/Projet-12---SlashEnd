import placeholder from '../../assets/img/placeholder.webp';
import IlluSEO from '../../assets/img/Illustration/SEO.webp';
import IlluDEV from '../../assets/img/Illustration/Dev.webp';
import IlluUPLOAD from '../../assets/img/Illustration/Upload.webp';

const Products = () => {
    return (
        <section className="products" id="products">
            <article className="products-item">
                <img src={IlluSEO} alt=""></img>
                <div className="products-item_desc flex-between">
                    <h3>Création de Sites Web avec SEO Intégré :</h3>
                    <p>Je m'occupe de tout le développement de votre site web, en m'assurant qu'il soit non seulement beau, mais aussi bien référencé sur les moteurs de recherche. En intégrant directement les meilleures pratiques SEO dans le code, je vous aide à obtenir une visibilité optimale dès le lancement de votre site.</p>    
                </div>
            </article>
            <article className="products-item">
                <img src={IlluDEV} alt=""></img>
                <div className="products-item_desc flex-between">
                    <h3>Sites Web Dynamiques et Interactifs en JavaScript :</h3>
                    <p>J'aime créer des sites web vivants et interactifs grâce à JavaScript, pour offrir à vos utilisateurs une expérience agréable et engageante. Que ce soit pour des fonctionnalités interactives ou des mises à jour en temps réel, je veille à ce que votre site soit à la fois pratique et plaisant à utiliser.</p>    
                </div>
            </article>
            <article className="products-item">
                <img src={IlluUPLOAD} alt=""></img>
                <div className="products-item_desc flex-between">
                    <h3>Conception et Mise en Ligne de A à Z :</h3>
                    <p>De l'idée initiale à la mise en ligne, je prends en charge toutes les étapes de la création de votre site web. Je conçois des interfaces attractives et intuitives, puis je m'occupe de mettre votre site en ligne, pour qu'il soit prêt à attirer et fidéliser vos visiteurs dès le premier jour.</p>    
                </div>
            </article>
        </section>
    );
};

export default Products;