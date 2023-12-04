import NewFooter from "./newFooter"
import NewNavbar from "./newNavbar"

export default function ConditionUtilisation(){


    return(
        <>
        <NewNavbar />

        <section class="terms">
        <div class="container">
            <h2>Conditions d'utilisation de SmartGate</h2>
            <p>Bienvenue sur SmartGate, une plateforme d'apprentissage en ligne ouverte et décentralisée. En utilisant notre site Web et nos services, vous acceptez de vous conformer aux présentes conditions d'utilisation. Veuillez lire attentivement ces conditions avant d'utiliser notre plateforme. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser SmartGate.</p>
        </div>
    </section>

    <section class="usage">
        <div class="container">
            <h3>Utilisation du site</h3>
            <p>1.1. Vous acceptez d'utiliser SmartGate uniquement à des fins légales et conformément aux lois et réglementations en vigueur. Vous ne devez pas utiliser notre plateforme d'une manière qui pourrait porter atteinte aux droits d'autrui ou qui pourrait être considérée comme frauduleuse, abusive, obscène, menaçante, diffamatoire ou autrement inappropriée.</p>
            <p>1.2. Vous comprenez que SmartGate est une plateforme décentralisée qui utilise la technologie blockchain pour la sécurité et la transparence des transactions. En tant qu'utilisateur, vous êtes responsable de la confidentialité de votre wallet et de l'accès à vos jetons SGT.</p>
        </div>
    </section>

    <section class="intellectual-property">
        <div class="container">
            <h3>Propriété intellectuelle</h3>
            <p>2.1. Tout le contenu présenté sur SmartGate, y compris les cours, les vidéos, les images, les marques de commerce, les logos et autres contenus, est la propriété intellectuelle de leurs propriétaires respectifs. Vous ne pouvez pas utiliser, copier, reproduire, distribuer ou modifier ces contenus sans l'autorisation expresse du propriétaire.</p>
            <p>2.2. En publiant du contenu sur SmartGate, vous accordez à SmartGate une licence non exclusive, mondiale, libre de redevances, transférable et pouvant être sous-licenciée pour utiliser, afficher, reproduire et distribuer ce contenu dans le cadre de nos services.</p>
        </div>
    </section>

    <section class="liability">
        <div class="container">
            <h3>Responsabilité</h3>
            <p>3.1. SmartGate ne garantit pas l'exactitude, l'exhaustivité ou la pertinence du contenu présenté sur notre plateforme. Nous ne sommes pas responsables des erreurs, omissions ou inexactitudes du contenu.</p>
            <p>3.2. En utilisant SmartGate, vous acceptez que votre accès et votre utilisation de notre plateforme se font à vos propres risques. SmartGate ne peut être tenu responsable des dommages directs, indirects, spéciaux, consécutifs ou punitifs résultant de l'utilisation de notre plateforme.</p>
        </div>
    </section>

    <section class="modifications">
        <div class="container">
            <h3>Modifications des conditions</h3>
            <p>4.1. SmartGate se réserve le droit de modifier ces conditions d'utilisation à tout moment. Les modifications prendront effet dès leur publication sur notre site Web. Il vous incombe de vérifier régulièrement les conditions mises à jour.</p>
            <p>4.2. En continuant d'utiliser SmartGate après la publication des modifications, vous acceptez les nouvelles conditions d'utilisation.</p>
        </div>
    </section>

    <section class="termination">
        <div class="container">
            <h3>Résiliation</h3>
            <p>5.1. SmartGate à travers sa gouvernance DAO se réserve le droit de résilier ou de suspendre votre accès à notre plateforme en cas de violation des présentes conditions d'utilisation ou pour tout autre motif.</p>
            <p>5.2. En cas de résiliation, les dispositions relatives à la propriété intellectuelle et à la responsabilité survivront à la résiliation.</p>
        </div>
    </section>

    <section class="contact">
        <div class="container">
            <h3>Pour toute question concernant nos conditions d'utilisation, veuillez nous contacter à l'adresse suivante : support@smartgate.com.</h3>
            <p>Dernière mise à jour : juillet 2023.</p>
        </div>
    </section>

    <footer>
            <NewFooter />
    </footer>
        </>
    )
}