import { motion } from 'motion/react';
import { ArrowRight, Users, Briefcase, PenTool, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

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

export default function Home() {
  return (
    <div className="pb-0">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] md:min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: "url('https://res.cloudinary.com/dfsspwbcs/image/upload/v1771690605/Gemini_Generated_Image_cnu377cnu377cnu3_khdlp6.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(4px)'
          }}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#6d3921]/60 to-transparent" />
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-20 text-center flex flex-col items-center justify-center h-full pt-20 pb-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-10 drop-shadow-lg px-2">
              <span className="text-white block sm:inline">Structurez </span>
              <span className="text-[#fac224] block sm:inline">votre communication</span>
              <span className="text-white block sm:inline"> et </span>
              <span className="text-[#fac224] block sm:inline">votre image de marque</span>
              <span className="text-white block sm:inline"> pour développer votre entreprise</span>
            </h1>
            
            <p className="text-base md:text-xl text-sand/90 mb-12 max-w-2xl mx-auto leading-relaxed font-sans drop-shadow-md px-4">
              Je vous accompagne pour structurer votre image de marque, clarifier votre positionnement et renforcer votre visibilité locale avec une stratégie de communication concrète et humaine.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Link 
                to="/services" 
                className="w-full sm:w-auto bg-[#6d3921] text-white px-8 py-4 rounded-full font-medium text-base md:text-lg hover:bg-[#5a2d1b] hover:ring-2 hover:ring-yellow/50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center"
              >
                Découvrir mes services
              </Link>
              <Link 
                to="/dating-pro" 
                className="w-full sm:w-auto bg-transparent border-2 border-sand text-sand px-8 py-4 rounded-full font-medium text-base md:text-lg hover:bg-sand hover:text-[#6d3921] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 relative text-center"
              >
                Réserver un Dating Pro
                <span className="absolute -top-3 -right-3 bg-yellow text-brown text-[10px] font-bold px-2 py-1 rounded-full shadow-sm animate-bounce">POPULAIRE</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1 rounded-full border border-[#fac224] bg-[#fac224]/10 text-[#145d3c] font-bold text-sm uppercase tracking-widest mb-6">Mon Approche Terrain</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-brown">Structuration de Communication & Image de Marque pour Entrepreneurs</h2>
            <div className="text-xl text-gray-600 leading-relaxed space-y-6 text-left md:text-center">
              <p>
                J’accompagne les entrepreneurs, commerçants et petites structures directement sur le terrain pour structurer leur <span className="decoration-yellow/50 underline decoration-2 underline-offset-2">communication d’entreprise</span> et construire une image de marque solide, professionnelle et cohérente.
              </p>
              <p>
                Mon rôle est de comprendre votre réalité opérationnelle, vos défis quotidiens et vos objectifs de développement afin de mettre en place une stratégie de communication claire, efficace et adaptée à votre activité, à votre marché et à vos moyens.
              </p>
              <p>
                Je travaille à vos côtés, dans votre commerce ou votre entreprise, pour observer, analyser et affiner votre positionnement, construire une identité visuelle cohérente et transformer votre vision en une stratégie de communication professionnelle concrète et applicable.
              </p>
              <p>
                L’objectif est de bâtir une image de marque crédible, lisible et utile pour votre développement commercial. Le résultat : une présence digitale professionnelle qui attire des <span className="decoration-yellow/50 underline decoration-2 underline-offset-2">prospects qualifiés</span>, les <span className="decoration-yellow/50 underline decoration-2 underline-offset-2">convertit en clients</span>, optimise <span className="decoration-yellow/50 underline decoration-2 underline-offset-2">les recommandations</span> et favorise la <span className="decoration-yellow/50 underline decoration-2 underline-offset-2">fidélisation client</span> — contribuant ainsi à l’augmentation de votre <span className="decoration-yellow/50 underline decoration-2 underline-offset-2">chiffre d’affaires</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="bg-sand/10 py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-1 rounded-full border border-[#fac224] bg-[#fac224]/10 text-[#145d3c] font-bold text-sm uppercase tracking-widest mb-6">Mes Solutions</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown mb-6">Accompagnement Sur Mesure</h2>
            <p className="text-xl text-gray-600 max-w-xl mx-auto font-sans">Des solutions concrètes pour chaque étape de votre développement.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[380px]"
          >
            {/* Large Card */}
            <motion.div variants={fadeInUp} className="md:col-span-2 h-full">
              <Link to="/services" className="group block h-full bg-gradient-to-b from-white to-[#f8f7f4] rounded-[2rem] p-10 relative overflow-hidden shadow-[0_20px_40px_rgba(109,57,33,0.08)] hover:shadow-[0_30px_60px_rgba(109,57,33,0.12)] transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Briefcase size={200} strokeWidth={1} />
                </div>
                <div className="h-full flex flex-col justify-between relative z-10">
                  <div className="mb-6 group-hover:scale-105 transition-transform duration-500">
                    <Briefcase className="text-brown" size={64} strokeWidth={1} />
                  </div>
                  <div>
                    <span className="text-green text-xs font-bold uppercase tracking-wider mb-2 block">STRATÉGIE</span>
                    <h3 className="text-3xl font-serif font-bold mb-4 text-brown">Conseil & Accompagnement</h3>
                    <p className="text-gray-600 text-lg font-sans leading-relaxed">Une vision stratégique pour structurer votre projet de A à Z, avec un suivi personnalisé.</p>
                  </div>
                </div>
              </Link>
            </motion.div>
            
            {/* Tall Card (Dating Pro) */}
            <motion.div variants={fadeInUp} className="md:row-span-2 h-full">
              <Link to="/dating-pro" className="group block h-full bg-gradient-to-br from-[#145d3c] to-[#0d3d28] text-[#e9e8e3] rounded-[2rem] p-10 relative overflow-hidden shadow-[0_20px_40px_rgba(20,93,60,0.15)] hover:shadow-[0_30px_60px_rgba(20,93,60,0.2)] transition-all duration-500 hover:-translate-y-1 ring-1 ring-white/10">
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(255,255,255,0.05)] pointer-events-none rounded-[2rem]" />
                <div className="absolute top-6 right-6 bg-yellow/20 backdrop-blur-md text-yellow px-3 py-1 rounded-full text-xs font-bold border border-yellow/30">
                  POPULAIRE
                </div>
                <div className="absolute -bottom-12 -right-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500 rotate-12 text-[#e9e8e3]">
                  <Calendar size={300} strokeWidth={0.5} />
                </div>
                <div className="h-full flex flex-col justify-between relative z-10">
                  <div className="mb-6 group-hover:scale-105 transition-transform duration-500">
                    <Calendar className="text-[#e9e8e3]" size={64} strokeWidth={1} />
                  </div>
                  <div>
                    <span className="text-[#e9e8e3]/80 text-xs font-bold uppercase tracking-wider mb-2 block">Session Intensive</span>
                    <h3 className="text-4xl font-serif font-bold mb-6 text-yellow" style={{ color: '#fac224' }}>Dating Pro</h3>
                    <p className="text-[#e9e8e3]/90 mb-8 text-lg leading-relaxed font-sans">Une session intensive pour débloquer votre potentiel business en un temps record.</p>
                    <span className="inline-flex items-center bg-[#6d3921] text-[#e9e8e3] px-8 py-3 rounded-full text-sm font-bold hover:bg-[#5a2d1b] transition-all duration-300 group-hover:ring-2 group-hover:ring-yellow/50 shadow-lg">
                      Réserver maintenant
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
            
            {/* Standard Card */}
            <motion.div variants={fadeInUp} className="h-full">
              <Link to="/services" className="group block h-full bg-gradient-to-b from-white to-[#f8f7f4] rounded-[2rem] p-10 relative overflow-hidden shadow-[0_20px_40px_rgba(109,57,33,0.08)] hover:shadow-[0_30px_60px_rgba(109,57,33,0.12)] transition-all duration-500 hover:-translate-y-1">
                <div className="mb-6 group-hover:scale-105 transition-transform duration-500">
                  <Users className="text-brown" size={64} strokeWidth={1} />
                </div>
                <span className="text-green text-xs font-bold uppercase tracking-wider mb-2 block">SOCIAL MEDIA</span>
                <h3 className="text-2xl font-serif font-bold mb-3 text-brown">Community Management</h3>
                <p className="text-gray-600 font-sans leading-relaxed">Animation de vos réseaux et engagement de votre communauté.</p>
              </Link>
            </motion.div>
            
            {/* Standard Card */}
            <motion.div variants={fadeInUp} className="h-full">
              <Link to="/services" className="group block h-full bg-gradient-to-b from-white to-[#f8f7f4] rounded-[2rem] p-10 relative overflow-hidden shadow-[0_20px_40px_rgba(109,57,33,0.08)] hover:shadow-[0_30px_60px_rgba(109,57,33,0.12)] transition-all duration-500 hover:-translate-y-1">
                <div className="mb-6 group-hover:scale-105 transition-transform duration-500">
                  <PenTool className="text-brown" size={64} strokeWidth={1} />
                </div>
                <div className="absolute top-6 right-6 bg-yellow text-brown px-2 py-1 rounded-full text-[10px] font-bold shadow-sm">
                  POPULAIRE
                </div>
                <span className="text-green text-xs font-bold uppercase tracking-wider mb-2 block">STRATÉGIE</span>
                <h3 className="text-2xl font-serif font-bold mb-3 text-brown">Branding & Création visuelle</h3>
                <p className="text-gray-600 font-sans leading-relaxed">Création d'une identité forte qui marque les esprits : logo, charte graphique et supports de communication.</p>
              </Link>
            </motion.div>
          </motion.div>
          
          <div className="mt-16 text-center">
            <Link to="/services" className="inline-flex items-center text-brown font-medium hover:underline text-lg decoration-yellow/50 hover:decoration-yellow transition-all">
              Voir tous les services <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-1 rounded-full border border-[#fac224] bg-[#fac224]/10 text-[#145d3c] font-bold text-sm uppercase tracking-widest mb-6">Processus</span>
            <h2 className="text-4xl font-bold mb-6 text-brown">Ma Méthode</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              <span className="inline-block px-3 py-1 bg-[#fac224] text-[#6d3921] font-bold rounded-lg shadow-sm transform -rotate-3 mr-2">4</span>
              étapes claires pour transformer votre vision en réalité opérationnelle.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { step: "01", title: "Immersion", desc: "Je m'imprègne de votre univers et de vos contraintes terrain." },
              { step: "02", title: "Diagnostic", desc: "Analyse franche de vos forces et axes d'amélioration." },
              { step: "03", title: "Stratégie", desc: "Plan d'action concret, chiffré et planifié." },
              { step: "04", title: "Déploiement", desc: "Mise en œuvre opérationnelle et suivi des résultats." }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="relative p-8 rounded-[2rem] bg-sand/10 hover:bg-sand/20 transition-colors duration-300 group border border-transparent hover:border-green/10"
              >
                <span className="text-7xl font-serif font-bold text-[#145d3c] absolute top-4 right-4 drop-shadow-sm group-hover:text-[#145d3c]/80 transition-colors duration-500">{item.step}</span>
                <div className="relative z-10 pt-8">
                  <h3 className="text-2xl font-bold mb-4 text-brown group-hover:text-green transition-colors">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
