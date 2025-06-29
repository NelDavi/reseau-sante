import { Shield, Users, Stethoscope, Clock, CheckCircle, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onQuoteClick: () => void;
}

export default function ServicesSection({ onQuoteClick }: ServicesSectionProps) {
  const services = [
    {
      title: "Couverture collective adaptée",
      description: "Ajustée au nombre d'employés et au budget de votre entreprise",
      icon: Users
    },
    {
      title: "Garanties essentielles",
      description: "Consultations, hospitalisation, médicaments, maternité, prévention",
      icon: Shield
    },
    {
      title: "Flexibilité totale",
      description: "Choix du niveau de couverture par paliers selon vos besoins",
      icon: Stethoscope
    },
    {
      title: "Support 24/7",
      description: "Service client réactif et dédié aux entreprises",
      icon: Clock
    }
  ];

  const advantages = [
    "Accès direct à un grand réseau de structures médicales partenaires",
    "Tarifs négociés pour toutes les prestations médicales",
    "Facilité de suivi via notre plateforme digitale",
    "Historique complet des soins et remboursements",
    "Assistance personnalisée pour chaque entreprise"
  ];

  const steps = [
    {
      step: "1",
      title: "Souscription de l'entreprise",
      description: "L'entreprise choisit une offre et signe un contrat Réseau santé +"
    },
    {
      step: "2",
      title: "Enregistrement des salariés", 
      description: "Chaque employé reçoit sa carte Réseau Santé+ avec un identifiant personnel"
    },
    {
      step: "3",
      title: "Accès aux soins",
      description: "Les employés se rendent dans les structures partenaires avec leur carte"
    },
    {
      step: "4",
      title: "Suivi et assistance",
      description: "Accès facile aux remboursements et à l'assistance via notre plateforme"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-green mb-4">Nos offres et services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des offres santé conçues spécialement pour les entreprises moyennes au Gabon
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-forest-green p-3 rounded-full w-fit mb-4">
                  <IconComponent className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-forest-green mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Advantages */}
        <div className="bg-light-green rounded-3xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-forest-green mb-6">
                Avantages d'adhérer au Réseau santé+
              </h3>
              <p className="text-gray-700 mb-8">
                En adhérant à notre Réseau Santé+, vous bénéficiez de nombreux atouts pour votre entreprise et vos employés.
              </p>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-forest-green mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={onQuoteClick}
                className="btn btn-primary mt-8"
              >
                Demander un devis
                <ArrowRight size={20} />
              </button>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Équipe médicale"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* How it works */}
        <div>
          <h3 className="text-3xl font-bold text-forest-green text-center mb-12">
            Comment ça fonctionne ?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-forest-green text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-forest-green mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}