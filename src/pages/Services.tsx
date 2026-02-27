import { motion } from 'motion/react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Conseil & Accompagnement",
    description: "Un regard extérieur et humain pour accompagner votre projet. De l'idée à la concrétisation, je vous guide étape par étape.",
    features: ["Étude de faisabilité", "Business Plan simplifié", "Stratégie de lancement"],
    color: "bg-green/10"
  },
  {
    title: "Branding & Création Visuelle",
    description: "Création d'une identité forte qui marque les esprits. Logo, charte graphique et supports de communication.",
    features: ["Identité visuelle", "Supports print & web", "Direction artistique"],
    color: "bg-green/10"
  },
  {
    title: "Community Management",
    description: "Ne laissez plus vos réseaux sociaux à l'abandon. Je crée du contenu engageant pour fédérer votre communauté.",
    features: ["Calendrier éditorial", "Création de contenu", "Modération & Animation"],
    color: "bg-green/10"
  },
  {
    title: "Gestion Service Client",
    description: "L'expérience client est la clé de la fidélisation. Je vous aide à mettre en place des process fluides et humains.",
    features: ["Scripts de réponse", "Gestion des litiges", "Optimisation du parcours"],
    color: "bg-[#fac224]/10"
  },
  {
    title: "Accompagnement Image & Branding",
    description: "Un coaching en image sur-mesure pour artistes, créatifs et leaders déterminés. Développez une identité digitale forte, cohérente et percutante.",
    features: ["Séances 1:1", "Déblocage stratégique", "Suivi mensuel"],
    color: "bg-yellow/10"
  },
  {
    title: "Direction Com' Externalisée",
    description: "Gestion externalisée de votre pôle communication. Je pilote vos équipes ou prestataires pour une cohérence totale.",
    features: ["Management d'équipe", "Pilotage budgétaire", "Reporting & KPI"],
    color: "bg-brown text-white is-dark"
  }
];

export default function Services() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full border border-[#fac224] bg-[#fac224]/10 text-[#145d3c] font-bold text-sm uppercase tracking-widest mb-6">Expertise</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brown">Mes Services</h1>
          <p className="text-xl text-gray-600">
            Des solutions concrètes adaptées aux entrepreneurs et petites structures.
            Chaque service est pensé pour apporter de la valeur immédiate à votre activité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-3xl p-8 flex flex-col h-full ${service.color} ${service.title.includes('Direction') ? 'shadow-xl' : 'hover:shadow-lg transition-shadow'}`}
            >
              {service.title.includes('Direction') && (
                <div className="mb-4">
                  <span className="bg-yellow/20 text-yellow px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Premium</span>
                </div>
              )}
              <h3 
                className={`text-2xl font-bold mb-4 ${service.title.includes('Direction') ? 'text-[#fac224]' : 'text-brown'}`}
                style={service.title.includes('Direction') ? { color: '#fac224' } : {}}
              >
                {service.title}
              </h3>
              <p className={`mb-8 flex-grow ${service.title.includes('Direction') ? 'text-white/80' : 'text-gray-600'}`}>
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className={service.title.includes('Direction') ? 'text-yellow' : 'text-green'} />
                    <span className={service.title.includes('Direction') ? 'text-white/90' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className={`inline-flex items-center font-medium mt-auto group ${
                  service.title.includes('Direction') 
                    ? 'text-white hover:text-yellow transition-colors' 
                    : 'text-brown hover:text-green transition-colors'
                }`}
              >
                En savoir plus <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-sand/30 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin d'une solution sur mesure ?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Chaque projet est unique. Discutons de vos besoins spécifiques et construisons ensemble l'accompagnement qui vous convient.
          </p>
          <Link 
            to="/contact" 
            className="bg-brown text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-brown/90 transition-all inline-block"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
