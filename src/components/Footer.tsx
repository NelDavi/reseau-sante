import { Heart, Phone, Mail, MapPin, Facebook, Linkedin, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: "Accueil", id: "accueil" },
    { name: "Qui sommes-nous", id: "qui-sommes-nous" },
    { name: "Nos services", id: "services" },
    { name: "Partenaires", id: "partenaires" },
    { name: "Contact", id: "contact" }
  ];

  const services = [
    "Couverture collective",
    "Garanties essentielles", 
    "Support 24/7",
    "Plateforme digitale",
    "Réseau de partenaires"
  ];

  return (
    <footer className="bg-forest-green text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white p-2 rounded-lg">
                <Heart className="text-forest-green" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Réseau santé +</h3>
                <p className="text-sm text-green-200">Partout à vos côtés</p>
              </div>
            </div>
            <p className="text-green-100 mb-6 leading-relaxed">
              Solutions de couverture médicale innovantes pour les entreprises moyennes au Gabon. 
              Proximité, innovation et qualité des soins.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100091406982749" 
              target="_blank"
              rel="noopener noreferrer" className="text-green-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Liens rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-green-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Nos services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-green-200">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-green-200 mt-1 flex-shrink-0" />
                <a href="tel:+24176364087" className="text-green-200 hover:text-white transition-colors">
                  +241 76364087
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-green-200 mt-1 flex-shrink-0" />
                <a href="mailto:Réseausanté+infos@gmail.com" className="text-green-200 hover:text-white transition-colors break-all">
                  Réseausanté+infos@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-green-200 mt-1 flex-shrink-0" />
                <span className="text-green-200">
                  Nombakele descente saint Germain, Libreville
                </span>
              </div>
            </div>
            
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/24176364087"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg mt-6 transition-colors"
            >
              <MessageCircle size={16} />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-green-600">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-green-200">
              © {currentYear} La centrale d'assurance. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-green-200 hover:text-white transition-colors">
                Mentions légales
              </button>
              <button className="text-green-200 hover:text-white transition-colors">
                Politique de confidentialité
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}