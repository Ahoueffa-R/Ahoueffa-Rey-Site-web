import { Link } from 'react-router-dom';

export default function MentionsLegales() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20 max-w-4xl">
      <h1 className="text-4xl font-bold text-brown mb-8">Mentions Légales</h1>
      
      <div className="prose prose-lg text-gray-600 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-brown mb-4">1. Édition du site</h2>
          <p>
            En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Propriétaire du site :</strong> Charlène Ahoueffa Rey</li>
            <li><strong>Contact :</strong> ahoueffa.rey@gmail.com</li>
            <li><strong>Adresse :</strong> Cotonou, Sainte Rita</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brown mb-4">2. Hébergement</h2>
          <p>
            Le site est hébergé par Vercel Inc., situé au 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brown mb-4">3. Propriété intellectuelle</h2>
          <p>
            Charlène Ahoueffa Rey est propriétaire des droits de propriété intellectuelle et détient les droits d'usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
          </p>
          <p className="mt-2">
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
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
