import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Briefcase, Users, PenTool, MessageSquare } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  return (
    <div className="pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 md:py-32 bg-sand/20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-2 md:order-1"
            >
              <span className="inline-block px-4 py-1 rounded-full border border-[#fac224] bg-[#fac224]/10 text-[#145d3c] font-bold text-sm uppercase tracking-widest mb-6">
                Mon Profil
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brown mb-6 leading-tight">
                Compétente pour structurer <span className="text-[#fac224]">Communication</span> & Image de Marque
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 font-medium mb-6">
                Transformez votre vision en une stratégie de communication claire, structurée et performante.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                Je ne suis pas une agence classique. Je suis votre partenaire stratégique de terrain. J'aide les entrepreneurs et les structures ambitieuses à bâtir une <strong>image de marque</strong> solide et une <strong>communication opérationnelle</strong> qui convertit.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="bg-brown text-white px-8 py-3 rounded-full font-medium hover:bg-brown/90 transition-all shadow-lg hover:-translate-y-1"
                >
                  Discutons de votre projet
                </Link>
                <Link 
                  to="/services" 
                  className="bg-white text-brown border border-brown/20 px-8 py-3 rounded-full font-medium hover:bg-sand/30 transition-all"
                >
                  Découvrir mes services
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 relative"
            >
              <div className="relative aspect-[3/4] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://res.cloudinary.com/dfsspwbcs/image/upload/v1771691368/Gemini_Generated_Image_www9gvwww9gvwww9_w37ohs.jpg" 
                  alt="Charlène Ahoueffa Rey - Experte Communication" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/60 to-transparent opacity-60"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-sand max-w-xs hidden md:block">
                <p className="font-serif text-4xl font-bold text-[#fac224] mb-1">100%</p>
                <p className="text-brown font-bold text-sm uppercase tracking-wider">Engagement Terrain</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PARCOURS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brown mb-8 text-center">
              De la Gestion RH à la <span className="underline decoration-[#fac224] decoration-4 underline-offset-4">Structuration Stratégique</span> de Communication
            </h2>
            
            <div className="prose prose-lg text-gray-600 mx-auto text-justify md:text-left">
              <p>
                Mon parcours est atypique, et c'est précisément ce qui fait la singularité de mon approche. Titulaire d'un <strong>BTS en Gestion des Ressources Humaines</strong>, j'ai acquis très tôt une compréhension fine de l'humain, des dynamiques d'équipe et de la structuration organisationnelle.
              </p>
              <p>
                Cependant, c'est sur le terrain que ma véritable vocation pour la communication s'est révélée. Je ne suis pas une théoricienne de bureau. Je suis une <strong>autodidacte passionnée</strong> qui a construit son expertise en pilotant concrètement des projets réels.
              </p>
              <p>
                De la gestion de service client à la <strong>direction de communication externalisée</strong>, en passant par le <strong>community management</strong> et le <strong>branding</strong>, j'ai appris à transformer des besoins opérationnels en stratégies de communication performantes.
              </p>
              <p className="font-medium text-brown text-xl border-l-4 border-[#fac224] pl-6 italic my-8 bg-sand/10 py-4 pr-4 rounded-r-xl">
                "Cette double compétence RH et Communication me permet aujourd'hui d'aborder votre image de marque avec une vision globale : structurée, humaine et orientée résultats."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. EXPERTISE TERRAIN SECTION */}
      <section className="py-20 bg-sand/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-green font-bold tracking-widest text-sm uppercase mb-4 block">Savoir-Faire</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brown mb-6">Expérience Terrain & Expertise Opérationnelle</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une expertise bâtie sur la pratique et la réussite de projets concrets.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Briefcase size={32} />,
                title: "Direction Com' Externalisée",
                desc: "Je deviens votre directrice de communication à temps partagé. Je pilote votre stratégie, coordonne vos prestataires et garantis la cohérence de votre image de marque sur tous les canaux."
              },
              {
                icon: <Users size={32} />,
                title: "Community Management Stratégique",
                desc: "Plus qu'une simple animation, je construis des communautés engagées. Création de contenu, modération et stratégie digitale pour accroître votre visibilité et votre autorité."
              },
              {
                icon: <PenTool size={32} />,
                title: "Branding & Création Visuelle",
                desc: "Votre identité visuelle est votre premier ambassadeur. Je conçois des logos, chartes graphiques et supports qui incarnent vos valeurs et marquent durablement les esprits."
              },
              {
                icon: <MessageSquare size={32} />,
                title: "Structuration Service Client",
                desc: "L'expérience client est au cœur de la fidélisation. J'optimise vos processus de gestion service client pour transformer chaque interaction en opportunité de croissance."
              },
              {
                icon: <CheckCircle size={32} />,
                title: "Pilotage Opérationnel",
                desc: "Je transforme la vision stratégique en plan d'action. Suivi des KPI, gestion de projet et optimisation des ressources pour une communication entrepreneur efficace."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brown/10 group"
              >
                <div className="w-14 h-14 bg-sand/30 rounded-2xl flex items-center justify-center text-brown mb-6 group-hover:bg-brown group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-brown mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. METHODE SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brown mb-6">
                Une Méthode Basée sur la <span className="text-[#fac224]">Structure</span>, l’Humain et l’Exécution
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Je fuis le jargon marketing complexe et les théories inapplicables. Ma méthode est pragmatique : <strong>observer, structurer, agir</strong>.
                </p>
                <p>
                  Je crois fermement que la structure est le catalyseur de la performance. Mon approche terrain me permet de comprendre vos réalités quotidiennes et de proposer des solutions d'<strong>accompagnement communication</strong> adaptées, réalistes et immédiatement rentables.
                </p>
                <p>
                  Que ce soit pour votre <strong>positionnement de marque</strong> ou votre communication digitale, je ne laisse rien au hasard. Chaque action est pensée pour servir vos objectifs business.
                </p>
                <div className="pt-4">
                  <p className="font-serif text-2xl font-bold text-brown">
                    "Pas de blabla, de la structure et des résultats."
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-brown text-white p-10 rounded-[3rem] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#fac224] rounded-full filter blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 space-y-8">
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-[#fac224] opacity-50">01</span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Audit & Immersion</h4>
                    <p className="text-white/80 text-sm">Je plonge dans votre univers pour comprendre vos forces et vos blocages.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-[#fac224] opacity-50">02</span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Structuration Stratégique</h4>
                    <p className="text-white/80 text-sm">Je construis le plan d'action et les outils nécessaires à votre déploiement.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-[#fac224] opacity-50">03</span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Déploiement Opérationnel</h4>
                    <p className="text-white/80 text-sm">Je pilote la mise en œuvre pour garantir l'atteinte de vos objectifs.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. WHY WORK WITH ME SECTION */}
      <section className="py-20 bg-sand/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brown mb-8">Pourquoi me confier votre Communication ?</h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Vous êtes entrepreneur et vous manquez de temps ou de recul ? Vous sentez que votre <strong>image de marque</strong> ne reflète pas la qualité de votre travail ?
            </p>
            <p className="text-lg text-gray-600 mb-12">
              Je suis là pour structurer votre communication et vous permettre de vous concentrer sur votre cœur de métier. En tant qu'<strong>experte communication au Bénin</strong> et à l'international, je vous apporte la sérénité d'une stratégie maîtrisée et d'une exécution sans faille.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/services" 
                className="bg-brown text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brown/90 transition-all shadow-xl hover:-translate-y-1"
              >
                Voir mes solutions
              </Link>
              <Link 
                to="/realisations" 
                className="bg-white text-brown border border-brown/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/80 transition-all flex items-center justify-center gap-2 group"
              >
                Voir mon portfolio <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
