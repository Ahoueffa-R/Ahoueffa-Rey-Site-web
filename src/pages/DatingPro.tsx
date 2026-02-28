import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Target, Check, AlertCircle } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import emailjs from 'emailjs-com';
import confetti from 'canvas-confetti';

export default function DatingPro() {
  const [formData, setFormData] = useState({
    nom: '',
    entreprise: '',
    email: '',
    whatsapp: '',
    ville_pays: '',
    type_activite: '',
    objectif: '',
    budget: '',
    disponibilites: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const messageContent = `
      Entreprise: ${formData.entreprise}
      WhatsApp: ${formData.whatsapp}
      Ville/Pays: ${formData.ville_pays}
      Activité: ${formData.type_activite}
      Objectif Principal: ${formData.objectif}
    `.trim();

    let supabaseError = null;
    let emailError = null;

    // 1. Supabase Insertion (Decoupled)
    try {
      if (isSupabaseConfigured()) {
        const { error } = await supabase!
          .from('inscriptions_dating')
          .insert([
            {
              nom: formData.nom,
              email: formData.email,
              budget: formData.budget,
              disponibilites: formData.disponibilites,
              message: messageContent
            }
          ]);

        if (error) throw error;
      } else {
        console.warn("Supabase not configured, skipping DB insertion.");
      }
    } catch (err: any) {
      console.error('Supabase error:', err);
      supabaseError = err;
      // Continue to EmailJS regardless of Supabase error
    }

    // 2. EmailJS Notification (Decoupled)
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_PRO;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            to_name: "Charlène",
            from_name: formData.nom,
            message: messageContent,
            budget: formData.budget,
            disponibilites: formData.disponibilites,
            reply_to: formData.email
          },
          publicKey
        );
      } else {
        console.warn("EmailJS credentials missing in .env");
        if (!supabaseError) {
             // If Supabase worked but EmailJS config is missing, we still consider it a success but warn
             console.warn("Email notification skipped due to missing config.");
        }
      }
    } catch (err: any) {
      console.error('EmailJS error:', err);
      emailError = err;
    } finally {
      // Ensure loading state is stopped
      if (supabaseError && emailError) {
        setStatus('error');
        setErrorMessage("Une erreur technique est survenue. Veuillez nous contacter directement sur WhatsApp.");
      } else {
        setStatus('success');
        triggerConfetti();
        setFormData({
          nom: '', entreprise: '', email: '', whatsapp: '', ville_pays: '', 
          type_activite: '', objectif: '', budget: '', disponibilites: ''
        });
      }
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green/10 p-12 rounded-3xl text-center max-w-2xl border border-green/20 shadow-xl"
        >
          <div className="w-24 h-24 bg-green text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
            <Check size={48} />
          </div>
          <h2 className="text-3xl font-bold text-brown mb-4">Demande envoyée avec succès !</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Charlène a bien reçu vos informations et reviendra vers vous sous 48h.
          </p>
          <div className="bg-white p-6 rounded-xl border border-green/20 mb-8 shadow-sm">
            <p className="font-medium text-brown mb-2">Prochaine étape :</p>
            <p className="text-sm text-gray-600">
              Surveillez votre boîte mail (et vos spams au cas où). Vous recevrez bientôt les détails pour finaliser votre inscription.
            </p>
          </div>
          <button 
            onClick={() => setStatus('idle')}
            className="text-brown font-bold hover:underline decoration-yellow decoration-2 underline-offset-4"
          >
            Retour au formulaire
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-brown text-white py-20 rounded-b-[3rem] mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Calendar size={300} />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 !text-[#fac224] text-sm font-bold tracking-wide mb-6 border border-[#fac224]" style={{ color: '#fac224' }}>
            SESSION INTENSIVE 1:1
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 !text-[#fac224] font-serif" style={{ color: '#fac224' }}>Dating Professionnel</h1>
          <p className="text-xl !text-white max-w-2xl mx-auto mb-8" style={{ color: '#FFFFFF' }}>
            Un rendez-vous stratégique pour débloquer votre potentiel et obtenir des réponses concrètes en 90 minutes.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16">
        {/* Left Column: Content */}
        <div className="space-y-12">
          <div>
            <span className="text-green font-bold tracking-widest text-sm uppercase mb-2 block">Vision</span>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-brown">
              Le Concept
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Le Dating Professionnel est une séance stratégique de 1h30 pour structurer votre activité avec méthode. Il s'agit d'un échange approfondi destiné aux entrepreneurs, commerçants, créatifs et professionnels en phase de lancement, de relance ou de repositionnement.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Ce n'est pas une simple consultation. C'est un <strong className="text-brown decoration-yellow/50 underline decoration-2 underline-offset-2">accélérateur de décision</strong>. 
              Pendant cette session, nous allons droit au but. Pas de théorie inutile, nous travaillons sur VOTRE problématique actuelle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-sand/30 p-6 rounded-2xl border-l-4 border-green">
              <h3 className="font-bold text-brown mb-2">Pour qui ?</h3>
              <p className="text-sm text-gray-600">Entrepreneurs, porteurs de projet, commerçants qui se sentent bloqués ou qui veulent valider une direction.</p>
            </div>
            <div className="bg-sand/30 p-6 rounded-2xl border-l-4 border-green">
              <h3 className="font-bold text-brown mb-2">Objectifs</h3>
              <p className="text-sm text-gray-600">Clarifier une offre, structurer un lancement, revoir un positionnement ou résoudre un blocage opérationnel.</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-brown">Déroulé de la session</h3>
            <ul className="space-y-4">
              {[
                "Analyse préalable de votre questionnaire",
                "90 minutes d'échange intensif en visio ou présentiel",
                "Plan d'action immédiat à la fin de la séance",
                "Suivi WhatsApp pendant 48h post-session"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-green/10 p-1 rounded-full mt-1">
                    <span className="text-green font-bold text-xs">{i + 1}</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {[
              {
                text: "1h30 avec Ahoueffa m'a fait gagner 6 mois de réflexion. Son approche directe m'a permis de voir ce que je refusais d'admettre et de pivoter rapidement.",
                author: "Marc D., Restaurateur"
              },
              {
                text: "J'avais du mal à structurer l'offre de mon institut. En 1h30, Ahoueffa a tout remis à plat. Une vision claire et une stratégie que je peux appliquer dès demain.",
                author: "Viviane, Institut de Beauté"
              },
              {
                text: "Un regard expert indispensable. Ahoueffa a su identifier les leviers de croissance pour mon activité d'import-export. Ces 1h30 ont été un véritable investissement.",
                author: "Saïd, Import-Export Automobile"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-yellow/5 p-6 rounded-2xl border border-yellow/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-yellow/10 rounded-bl-full -mr-8 -mt-8"></div>
                <div className="flex gap-4 relative z-10">
                  <div className="w-10 h-10 bg-white rounded-full flex-shrink-0 flex items-center justify-center text-yellow font-bold text-lg shadow-sm">"</div>
                  <div>
                    <p className="italic text-gray-700 mb-2 text-sm">
                      "{testimonial.text}"
                    </p>
                    <p className="font-bold text-brown text-xs">— {testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-white shadow-xl rounded-3xl p-8 md:p-10 border border-gray-100 h-fit sticky top-24">
          <h3 className="text-2xl font-bold mb-6 text-brown">Réserver votre session</h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Nom complet</label>
                <input 
                  type="text" 
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Entreprise</label>
                <input 
                  type="text" 
                  name="entreprise"
                  value={formData.entreprise}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-all"
                  placeholder="Nom du projet"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-all"
                  placeholder="hello@exemple.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">WhatsApp</label>
                <input 
                  type="tel" 
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-all"
                  placeholder="+33 6..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Ville / Pays</label>
              <input 
                type="text" 
                name="ville_pays"
                value={formData.ville_pays}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-all"
                placeholder="Ex: Paris, France"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Objectif principal</label>
              <textarea 
                name="objectif"
                required
                value={formData.objectif}
                onChange={handleChange}
                rows={3}
                className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-all"
                placeholder="Quel est le point bloquant majeur aujourd'hui ?"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Budget</label>
                <select 
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-all"
                >
                  <option value="">Sélectionner</option>
                  <option value="100 euro à 500 euro">100 euro à 500 euro</option>
                  <option value="500 euro à 1000 euro">500 euro à 1000 euro</option>
                  <option value="Plus de 1000 euro">Plus de 1000 euro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Disponibilités</label>
                <input 
                  type="text" 
                  name="disponibilites"
                  value={formData.disponibilites}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-all"
                  placeholder="Ex: Lundi matin"
                />
              </div>
            </div>

            {errorMessage && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center gap-2">
                <AlertCircle size={16} />
                {errorMessage}
              </div>
            )}

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-brown text-white py-4 rounded-xl font-bold text-lg hover:bg-brown/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Envoi en cours...
                  </>
                ) : (
                  "Valider ma demande"
                )}
              </button>
              <p className="text-xs text-center text-gray-500 mt-3">
                Le paiement sera demandé ultérieurement via un lien sécurisé.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
