import React from 'react';
import { Building, Users, FileText, CheckCircle, TrendingUp, Shield, Heart, Clock } from 'lucide-react';

interface EnterpriseSectionProps {
  onQuoteClick: () => void;
}

export default function EnterpriseSection({ onQuoteClick }: EnterpriseSectionProps) {
  const subscriptionSteps = [
    {
      icon: Building,
      title: "Prise de contact",
      description: "Par formulaire ou appel direct pour évaluer vos besoins"
    },
    {
      icon: Users,
      title: "Évaluation des besoins", 
      description: "Nombre d'employés et niveau de couverture souhaité"
    },
    {
      icon: FileText,
      title: "Transmission des documents",
      description: "Registre de commerce, liste du personnel, pièces d'identité"
    },
    {
      icon: CheckCircle,
      title: "Signature et activation",
      description: "Signature du contrat et activation de la couverture"
    }
  ];

  const hrBenefits = [
    {
      icon: TrendingUp,
      title: "Valorisez votre marque employeur",
      description: "Renforcez votre politique RH et votre attractivité"
    },
    {
      icon: Heart,
      title: "Fidélisez vos collaborateurs", 
      description: "Un employé bien couvert est rassuré et plus motivé"
    },
    {
      icon: Shield,
      title: "Réduisez l'absentéisme",
      description: "Des soins accessibles favorisent la prévention"
    },
    {
      icon: Clock,
      title: "Investissement stratégique",
      description: "Pour la croissance et le développement de votre entreprise"
    }
  ];

  return (
    <section id="entreprise" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-green mb-4">Espace entreprise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solutions simplifiées pour les petites et moyennes entreprises
          </p>
        </div>

        {/* Subscription Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-forest-green text-center mb-12">
            Modalités de souscription
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subscriptionSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-forest-green p-4 rounded-full w-fit mx-auto mb-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-forest-green mb-3">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <p className="text-forest-green font-medium">
              ✓ Processus sécurisé et adapté à votre organisation
            </p>
          </div>
        </div>

        {/* HR Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-forest-green text-center mb-12">
            Avantages RH d'offrir une couverture santé
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hrBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-olive-green p-3 rounded-full w-fit mb-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-forest-green mb-3">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quote CTA */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-forest-green mb-4">
            Prêt à protéger vos employés ?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Obtenez une estimation rapide et gratuite adaptée à votre entreprise. 
            Notre équipe vous accompagne dans toutes les étapes de votre souscription.
          </p>
          <button 
            onClick={onQuoteClick}
            className="btn btn-primary btn-lg"
          >
            Demander mon devis gratuit
          </button>
          <p className="text-sm text-gray-600 mt-4">
            🔁 Réponse sous 48 heures ouvrées
          </p>
        </div>
      </div>
    </section>
  );
}