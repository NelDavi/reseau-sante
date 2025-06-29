import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Facebook, Linkedin, Youtube } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      value: "+241 76364087",
      action: "tel:+24176364087"
    },
    {
      icon: Mail,
      title: "Email",
      value: "Réseausanté+infos@gmail.com",  
      action: "mailto:Réseausanté+infos@gmail.com"
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "Nombakele descente saint Germain, Libreville",
      action: "#"
    },
    {
      icon: Clock,
      title: "Horaires",
      value: "Lun-Ven: 8h-18h, Sam: 8h-12h",
      action: "#"
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "YouTube", icon: Youtube, url: "#" },
    { name: "TikTok", icon: MessageCircle, url: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-green mb-4">Contactez-nous</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-forest-green mb-6">Envoyez-nous un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="select select-bordered w-full"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="devis">Demande de devis</option>
                  <option value="information">Demande d'information</option>
                  <option value="partenariat">Devenir partenaire</option>
                  <option value="support">Support technique</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="textarea textarea-bordered w-full"
                  placeholder="Votre message..."
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                <Send size={20} />
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-forest-green mb-6">Nos coordonnées</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-forest-green p-3 rounded-full flex-shrink-0">
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-green">{info.title}</h4>
                        {info.action.startsWith('#') ? (
                          <p className="text-gray-600">{info.value}</p>
                        ) : (
                          <a 
                            href={info.action}
                            className="text-gray-600 hover:text-forest-green transition-colors"
                          >
                            {info.value}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-green-500 rounded-3xl p-8 text-white shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <MessageCircle size={32} />
                <div>
                  <h3 className="text-2xl font-bold">WhatsApp</h3>
                  <p className="text-green-100">Contactez-nous directement</p>
                </div>
              </div>
              <a 
                href="https://wa.me/24176364087"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full text-forest-green hover:text-white"
              >
                <MessageCircle size={20} />
                Discuter sur WhatsApp
              </a>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-forest-green mb-6">Suivez-nous</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center space-x-2 p-3 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-forest-green transition-colors"
                    >
                      <IconComponent size={20} className="text-forest-green" />
                      <span className="text-gray-700 font-medium">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-forest-green mb-6 text-center">Notre localisation</h3>
            <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin size={48} className="mx-auto mb-4 text-forest-green" />
                <p className="text-lg font-medium">Carte Google Maps</p>
                <p className="text-sm">Nombakele descente saint Germain, Libreville</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}