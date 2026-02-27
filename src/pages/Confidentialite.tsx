import { Link } from 'react-router-dom';

export default function Confidentialite() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20 max-w-4xl">
      <h1 className="text-4xl font-bold text-brown mb-8">Politique de Confidentialité</h1>
      
      <div className="prose prose-lg text-gray-600 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-brown mb-4">1. Collecte des données</h2>
          <p>
            Nous collectons les informations suivantes via nos formulaires de contact et de réservation :
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Nom et Prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone (WhatsApp)</li>
            <li>Informations relatives à votre entreprise et votre projet</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brown mb-4">2. Utilisation des données</h2>
          <p>
            Les données collectées sont utilisées uniquement pour :
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Répondre à vos demandes de contact</li>
            <li>Gérer les réservations de sessions Dating Pro</li>
            <li>Vous envoyer des informations relatives à nos services (si consenti)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brown mb-4">3. Vos droits</h2>
          <p>
            Conformément à la réglementation européenne (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles.
          </p>
          <p className="mt-2">
            Pour exercer ce droit, contactez-nous par email à : ahoueffa.rey@gmail.com
          </p>
        </section>

        <div className="pt-8 border-t border-gray-200">
          <Link to="/" className="text-brown hover:underline font-medium">
            &larr; Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
