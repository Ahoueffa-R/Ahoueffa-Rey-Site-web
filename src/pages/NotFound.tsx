import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold text-sand mb-4">404</h1>
      <h2 className="text-3xl font-bold text-brown mb-6">Oups ! Page introuvable.</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Il semblerait que vous vous soyez perdu en chemin. Pas de panique, revenons à l'essentiel.
      </p>
      <Link 
        to="/" 
        className="bg-brown text-white px-8 py-3 rounded-full font-medium hover:bg-brown/90 transition-colors"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
