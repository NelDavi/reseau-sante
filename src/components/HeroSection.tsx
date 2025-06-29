import { ArrowRight, Shield, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import LOGO from '../assets/images/rs+.jpg';

interface HeroSectionProps {
  onQuoteClick: () => void;
}

export default function HeroSection({ onQuoteClick }: HeroSectionProps) {
  return (
    <section id="accueil" className="bg-gradient-to-br from-forest-green to-olive-green text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Réseau santé +
              </h1>
              <p className="text-xl lg:text-2xl font-medium text-green-100">
                Partout à vos côtés
              </p>
              <p className="text-lg text-green-100 leading-relaxed">
                Solutions de couverture médicale innovantes pour les entreprises moyennes au Gabon. 
                Nous démocratisons l'accès aux soins de qualité grâce à notre réseau de partenaires engagés.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Shield size={20} className="text-green-200" />
                <span className="font-medium">Innovation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={20} className="text-green-200" />
                <span className="font-medium">Proximité</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={20} className="text-green-200" />
                <span className="font-medium">Accessibilité</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onQuoteClick}
                className="btn btn-secondary btn-lg text-forest-green hover:text-white"
              >
                Demander un devis
                <ArrowRight size={20} />
              </button>
              <Link 
                to="/partenaires"
                className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-forest-green"
              >
                Devenir partenaire
              </Link>
              <Link 
                to="/contact"
                className="btn btn-ghost btn-lg text-white hover:bg-white hover:text-forest-green"
              >
                Nous contacter
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={LOGO} 
                alt="Consultation médicale"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl text-forest-green">
              <div className="text-2xl font-bold">100+</div>
              <div className="text-sm font-medium">Partenaires santé</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-olive-green rounded-xl p-6 shadow-xl text-white">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm font-medium">Support client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}