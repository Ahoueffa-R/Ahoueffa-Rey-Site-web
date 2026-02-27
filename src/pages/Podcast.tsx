import { useState } from 'react';
import { Mic, Play } from 'lucide-react';

export default function Podcast() {
  const [showToast, setShowToast] = useState(false);

  const handleCategoryClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="pb-20">
      <section className="bg-yellow/10 py-20 mb-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Mic size={32} className="text-brown" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brown">Her Voice</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Le podcast qui donne la voix aux parcours inspirants. 
            Business, Société, Couple, Développement personnel. 
            <br/><span className="text-sm font-medium mt-2 block opacity-70">(Inclusif Femmes/Hommes)</span>
          </p>

          {/* Spotify Embed Player */}
          <div className="max-w-3xl mx-auto py-8">
            <iframe 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/show/4hx5q2giAbN9JgXBKcslH1?utm_source=generator&theme=0" 
              width="100%" 
              height="600" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="shadow-lg"
            ></iframe>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <a 
              href="https://open.spotify.com/show/4hx5q2giAbN9JgXBKcslH1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brown text-white px-6 py-3 rounded-full font-medium flex items-center hover:bg-brown/90 transition-colors"
            >
              <Play size={18} className="mr-2 fill-current" /> Écouter sur Spotify
            </a>
            <a 
              href="https://podcasts.apple.com/bj/podcast/her-voice/id1733022203" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-brown px-6 py-3 rounded-full font-medium flex items-center hover:bg-sand transition-colors"
            >
              <Play size={18} className="mr-2 fill-current" /> Apple Podcasts
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {["Tous", "Business", "Société", "Couple", "Développement personnel"].map((cat, i) => (
            <button 
              key={i}
              onClick={handleCategoryClick}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                i === 0 
                  ? "bg-brown text-white shadow-md" 
                  : "bg-sand/30 text-gray-700 hover:bg-sand hover:text-green"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Toast Notification */}
        {showToast && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-brown text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium z-50 animate-fade-in-up">
            Filtrage par thématique bientôt disponible. Retrouvez l'intégralité des épisodes dans le lecteur ci-dessus.
          </div>
        )}
      </div>
    </div>
  );
}
