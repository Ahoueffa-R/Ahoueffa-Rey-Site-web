import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    entreprise: '',
    pays: '',
    email: '',
    whatsapp: '',
    type_besoin: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    let supabaseError = null;
    let emailError = null;

    // 1. Supabase Insertion
    try {
      if (isSupabaseConfigured()) {
        const { error } = await supabase!
          .from('demandes_contact')
          .insert([
            {
              nom_complet: formData.nom,
              entreprise: formData.entreprise,
              pays: formData.pays,
              email: formData.email,
              whatsapp: formData.whatsapp,
              type_besoin: formData.type_besoin,
              budget_estimatif: formData.budget,
              message: formData.message
            }
          ]);

        if (error) throw error;
      } else {
        console.warn("Supabase not configured, skipping DB insertion.");
      }
    } catch (err: any) {
      console.error('Supabase error:', err);
      supabaseError = err;
    }

    // 2. EmailJS Notification
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            nom_complet: formData.nom,
            entreprise: formData.entreprise,
            email: formData.email,
            whatsapp: formData.whatsapp,
            pays: formData.pays,
            type_besoin: formData.type_besoin,
            budget_estimatif: formData.budget,
            message: formData.message,
            reply_to: formData.email
          },
          publicKey
        );
      } else {
        console.warn("EmailJS credentials missing in .env");
        if (!supabaseError) {
             console.warn("Email notification skipped due to missing config.");
        }
      }
    } catch (err: any) {
      console.error('EmailJS error:', err);
      emailError = err;
    } finally {
      // 3. Final Status Decision
      if (supabaseError && emailError) {
        setStatus('error');
        setErrorMessage("Une erreur technique est survenue. Veuillez nous contacter directement sur WhatsApp.");
      } else {
        setStatus('success');
        setFormData({
          nom: '', entreprise: '', pays: '', email: '', whatsapp: '', 
          type_besoin: '', budget: '', message: ''
        });
      }
    }
  };

  return (
    <div className="pb-20">
      <section className="bg-sand/30 py-20 mb-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brown">Contactez-moi</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un projet ? Une question ? Une envie de collaborer ?
            <br/>Écrivez-moi, je vous réponds personnellement.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-brown">Parlons de votre projet</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Je privilégie les échanges directs et humains. N'hésitez pas à me donner un maximum de détails sur votre besoin pour que je puisse vous répondre efficacement.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brown/10 p-3 rounded-full text-brown">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <a href="mailto:ahoueffa.rey@gmail.com" className="text-gray-600 hover:text-brown transition-colors">ahoueffa.rey@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brown/10 p-3 rounded-full text-brown">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">WhatsApp</h3>
                  <p className="text-gray-600">+2290198378939</p>
                  <p className="text-xs text-gray-500 mt-1">Réponse sous 24h ouvrées</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brown/10 p-3 rounded-full text-brown">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Localisation</h3>
                  <p className="text-gray-600">Basée à Cotonou</p>
                  <p className="text-xs text-gray-500 mt-1">Travail sur Cotonou, Abidjan et Paris, présentiel et à distance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green/10 p-8 rounded-3xl">
            <h3 className="font-bold text-green mb-2">Besoin d'une réponse rapide ?</h3>
            <p className="text-sm text-gray-700 mb-4">
              Pour les demandes urgentes ou les prises de rendez-vous immédiates, privilégiez le Dating Pro.
            </p>
            <Link to="/dating-pro" className="inline-block bg-white text-green px-6 py-2 rounded-full text-sm font-bold hover:bg-green hover:text-white transition-colors">
              Réserver un créneau
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-green text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brown mb-4">Message envoyé !</h3>
              <p className="text-gray-600 mb-8">
                Votre message a bien été transmis à Charlène. Vous recevrez une réponse très prochainement !
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-brown font-medium hover:underline"
              >
                Envoyer un autre message
              </button>
            </motion.div>
          ) : (
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
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Pays</label>
                <input 
                  type="text" 
                  name="pays"
                  value={formData.pays}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Type de besoin</label>
                  <select 
                    name="type_besoin"
                    value={formData.type_besoin}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-all"
                  >
                    <option value="">Sélectionner</option>
                    <option value="Conseil">Conseil & Stratégie</option>
                    <option value="Branding">Branding & Identité</option>
                    <option value="Community Management">Community Management</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Budget estimatif</label>
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
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-all"
                  placeholder="Dites-m'en plus sur votre projet..."
                ></textarea>
              </div>

              {errorMessage && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center gap-2">
                  <AlertCircle size={16} />
                  {errorMessage}
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-brown text-white py-4 rounded-xl font-bold text-lg hover:bg-brown/90 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    Envoyer <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
