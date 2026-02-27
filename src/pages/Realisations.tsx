import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Type definition for a project
interface Project {
  client: string;
  sector: string;
  description: string;
  mainImage: string;
  otherImages: string[];
  type: string;
}

// Data from user request
const PROJECTS: Project[] = [
  {
    client: "WASS SUYA SARL",
    sector: "Voyages & Coaching",
    description: "Création de logo & Accompagnement affiches de services",
    type: "Logo",
    mainImage: "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772128765/Blue_White_Minimal_Travel_Business_Logo_hlrjpe.png",
    otherImages: [
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772128765/Blue_and_Black_Corporate_Webinar_Instagram_Post_rr5zzo.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772128765/Black_and_Yellow_Modern_Security_Guard_Service_Flyer_jlerh0.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772128763/Red_And_Black_Minimalist_Contact_Us_Instagram_Post_bxg8cp.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772129932/AFFICHE_PRESENTATION_DES_SERVICES_WASS_SUYA_SARL_o1lxbe.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772129936/Brown_Classic_History_Journal_Mockup_Poster_ltqspj.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772129938/AFFICHES_CARRE_H%C3%94TESSE_RECRUTEMENT_WASS_SUYA_SARL_lmw4ki.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772129943/Brown_Classic_History_Journal_Mockup_Poster_3_dypjzg.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772129930/AFFICHES_PORTRAIT_H%C3%94TESSE_RECRUTEMENT_WASS_SUYA_SARL_zlvvwl.png"
    ]
  },
  {
    client: "Dokono",
    sector: "Restauration",
    description: "Création de logo, Campagne réseaux sociaux, Accompagnement community management",
    type: "Logo & Accompagnement Community management",
    mainImage: "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772127622/2C0ACCDA-E068-42AB-A830-F5D611FF64BF_L0_001-10_04_2023_10_59_27_yaklqt.jpg",
    otherImages: []
  },
  {
    client: "Amour Maternel",
    sector: "Commerce",
    description: "Accompagnement gestion du service client pour fideliser les clients",
    type: "Accompagnement Gestion Service client",
    mainImage: "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772127612/2A1FBA86-5830-4BCF-BF83-B182CAEFBB42_L0_001-13_08_2023_22_27_39_cnt4xy.jpg",
    otherImages: []
  },
  {
    client: "Twenty6group",
    sector: "Location vehicule & immobilier",
    description: "Campagne réseaux sociaux, Accompagnement gestion service clientèle",
    type: "Accompagnement campagne réseaux Sociaux & gestion service client",
    mainImage: "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772127613/C8ACFB70-00AF-4FD5-AC08-B5A500C29288_L0_001-05_01_2024_14_06_35_cgjtfp.jpg",
    otherImages: []
  },
  {
    client: "Coach Gervais",
    sector: "Sport Fitness",
    description: "Création de logo",
    type: "Logo",
    mainImage: "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772127613/776647E8-B019-4131-A978-563D034BF29F_L0_001-18_12_2023_21_07_07_ejkhls.png",
    otherImages: []
  },
  {
    client: "ça nettoie",
    sector: "Nettoyage service",
    description: "Création de logo, Accompagnement complet branding",
    type: "Logo & Affiche",
    mainImage: "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772127615/IMG_6205_rpyoke.jpg",
    otherImages: [
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772176859/2_jvjgzt.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772176841/3_x38xk8.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772176825/1_t9xdum.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772176809/2_r6xaz1.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772176800/3_s8kf4j.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772176799/1_sifjnz.png"
    ]
  },
  {
    client: "LDF",
    sector: "Immobilier",
    description: "Création de logo, Campagne réseaux sociaux & Accompagnement complet branding",
    type: "Logo - Affiche & Accompagnement branding complet",
    mainImage: "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772143284/185378a9-50ae-4e96-8cc0-7c8070d48aeb_t88qbs.jpg",
    otherImages: [
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772127626/Yellow_Clean_Contact_Us_Instagram_Post_y0cxcf.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772128757/Light_Green_Modern_Organic_Farming_Instagram_Post_1_pgvwij.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772128762/Light_Green_Modern_Organic_Farming_Instagram_Post_3_aapont.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772176625/SPP_affiche_modifi%C3%A9e_xuvxyt.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772176626/492146959_674115168700548_2199575770974346421_n_cphyvd.jpg",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772176626/487949982_662485996530132_2114859220514797131_n_luwxqu.jpg",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772176625/487784396_662485903196808_9221308771259967145_n_gjcwwz.jpg",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772176631/494642889_685546080890790_3823927033704908891_n_kcnmwr.jpg",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772176632/ce059dea-220a-4beb-836b-bbd16ed5a93e_uzvvot.jpg",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772176637/Marre_des_loyers_imx4so.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772176863/9_rbntpt.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772176866/10_msmvx2.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772176867/8_uj9ivt.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772177027/25a8e260-ea39-4342-b104-4ef6553b0238_ffob8e.jpg"
    ]
  },
  {
    client: "LeZeM",
    sector: "Livraison",
    description: "Création de logo, Campagne réseaux sociaux, Accompagnement complet branding",
    type: "Logo - Affiche & Accompagnement",
    mainImage: "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772177475/lezem_logo_fond_vert_qsdbjv.jpg",
    otherImages: [
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772177475/lezem_fond_jaune_logo_uwcmxt.jpg",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772177023/4_kx00i4.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772177019/3_fexpeb.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772177018/2_kv0sjk.png"
    ]
  },
  {
    client: "Atiéké",
    sector: "Commerce",
    description: "Création de logo",
    type: "Logo",
    mainImage: "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772177014/1_r3afva.png",
    otherImages: []
  },
  {
    client: "Vivi Beauty Style",
    sector: "Esthétique",
    description: "Accompagnement branding création d'Affiche",
    type: "Affiche & Accompagnement",
    mainImage: "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772129931/9c32aebd-4620-4022-9456-794ee7f5be68_v29rxs.jpg",
    otherImages: [
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772143473/Black_and_White_Gradient_Photo_Collage_Eyelash_Extension_Services_Instagram_Post_sftu2s.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772143475/Pink_Floral_Modern_Beauty_Salon_and_Spa_Flyer_sfy1lm.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772143477/Black_and_White_Gradient_Photo_Collage_Eyelash_Extension_Services_Instagram_Post_1_khl3g8.png"
    ]
  },
  {
    client: "Planificateur IA",
    sector: "Consulting",
    description: "Création de logo Accompagnement complet branding",
    type: "Logo / Affiche / Accompagnement",
    mainImage: "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772143238/3_fbs74d.png",
    otherImages: [
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772128758/uc5zwzlr76ywxruwaesb.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772127614/Charl%C3%A8ne_Ahoueffa_Rey_11_chjnym.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772127612/1_1_ancsk8.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772143476/Black_and_Green_Modern_Business_Instagram_Post_3_deqzll.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772178330/Black_and_Green_Modern_Business_Instagram_Post_nzevsa.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772178387/Black_and_Green_Modern_Business_Instagram_Post_2_qkacyv.png",
      "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772178399/Blue_and_Black_Modern_AI_Changing_The_World_Poster_2_bvcmrg.png"
    ]
  },
  {
    client: "ADMSECUR",
    sector: "Cybersécurité",
    description: "Accompagnement structuration communication",
    type: "Accompagnement Communication",
    mainImage: "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772127618/19_06_2022_11_38_46_fqh01b.png",
    otherImages: []
  },
  {
    client: "Vodunvi Foot Group",
    sector: "Sport",
    description: "Création de logo",
    type: "Logo",
    mainImage: "https://res.cloudinary.com/dfsspwbcs/image/upload/v1772127625/Blue_and_Red_Modern_Football_Club_Logo_-_1_tekpbk.png",
    otherImages: []
  }
];

export default function Realisations() {
  const [filter, setFilter] = useState('Tous');

  // Extract unique sectors for filters
  const sectors = ['Tous', ...Array.from(new Set(PROJECTS.map(p => p.sector)))];
  
  const filteredProjects = filter === 'Tous' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.sector === filter);

  return (
    <div className="pb-20">
      <section className="bg-sand/30 py-20 mb-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-[#fac224] bg-[#fac224]/10 text-[#145d3c] font-bold text-sm uppercase tracking-widest mb-6">Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brown">Réalisations</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chaque projet est une histoire, un défi et une réussite commune.
            <br/>Découvrez comment j'accompagne mes clients.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center">
          {sectors.map((sec, i) => (
            <button 
              key={i}
              onClick={() => setFilter(sec)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === sec 
                  ? "bg-brown text-white shadow-lg" 
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-sand hover:border-green/30"
              }`}
            >
              {sec}
              {filter === sec && <span className="ml-2 inline-block w-1 h-1 rounded-full bg-yellow align-middle mb-0.5"></span>}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="border-t border-gray-100 pt-12 first:border-0 first:pt-0"
            >
              <div className="mb-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                  <div>
                    <span className="text-green font-bold tracking-widest text-xs uppercase mb-2 block">{project.sector}</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown">{project.client}</h2>
                  </div>
                  <div className="bg-sand/20 px-4 py-2 rounded-lg text-sm font-medium text-brown/80">
                    {project.type}
                  </div>
                </div>
                <p className="text-gray-600 text-lg max-w-3xl">{project.description}</p>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Main Image (Logo) - Always first and prominent */}
                <div className={`rounded-3xl overflow-hidden shadow-md bg-white border border-gray-100 ${
                  project.otherImages.length === 0 
                    ? 'md:col-span-2 lg:col-span-3 py-10 flex items-center justify-center bg-gray-50/50' 
                    : 'aspect-square'
                }`}>
                  <img 
                    src={project.mainImage} 
                    alt={`Logo ${project.client}`} 
                    className={`${
                      project.otherImages.length === 0 
                        ? 'w-auto h-auto max-w-[250px] md:max-w-sm object-contain mx-auto' 
                        : 'w-full h-full object-cover'
                    } hover:scale-105 transition-transform duration-700`}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Other Images */}
                {project.otherImages.map((img, imgIndex) => (
                  <div key={imgIndex} className="rounded-3xl overflow-hidden shadow-sm bg-gray-50 border border-gray-100 aspect-square group">
                    <img 
                      src={img} 
                      alt={`Réalisation ${project.client} ${imgIndex + 1}`} 
                      className={`w-full h-full ${img.includes('bvcmrg.png') ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-700`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                 <Link 
                  to="/contact" 
                  className="inline-flex items-center text-brown font-bold hover:underline decoration-yellow decoration-2 underline-offset-4 group"
                >
                  J'ai un projet similaire <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Aucun projet trouvé dans cette catégorie.</p>
            <button 
              onClick={() => setFilter('Tous')}
              className="mt-4 text-brown font-medium hover:underline"
            >
              Voir tous les projets
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
