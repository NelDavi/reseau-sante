import { Building2, Guitar as Hospital, Pill, FlaskConical, HandHeart } from 'lucide-react';
import AXA from '../assets/images/axa.png';
import SANLAM from '../assets/images/sanlam.png';
import OGAR from '../assets/images/ogar.jpg';


export default function PartnersSection() {
  const insurancePartners = [
    { name: "AXA", logo: AXA },
    { name: "SANLAM", logo: SANLAM }, 
    { name: "OGAR", logo: OGAR }
  ];

  const healthPartners = [
    { name: "Cliniques", icon: Building2, count: "15+" },
    { name: "Hôpitaux", icon: Hospital, count: "25+" },
    { name: "Pharmacies", icon: Pill, count: "50+" },
    { name: "Laboratoires", icon: FlaskConical, count: "20+" }
  ];

  const benefits = [
    "Visibilité accrue grâce à notre présence digitale continue",
    "Accès privilégié à une nouvelle patientèle d'entreprises affiliées",
    "Intégration dans un projet innovant et solidaire",
    "Participation à la modernisation de la santé au Gabon"
  ];

  return (
    <section id="partenaires" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-green mb-4">Nos partenaires</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un réseau solide de partenaires d'assurance et de santé pour vous garantir les meilleurs soins
          </p>
        </div>

        {/* Insurance Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-forest-green text-center mb-8">
            Nos partenaires d'assurance
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {insurancePartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className=" rounded-full w-20 h-20 flex items-center justify-center ">
                    <img src={partner.logo} alt="" />
                    
                  </div>
                  <h4 className="text-xl font-bold text-forest-green">{partner.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-forest-green text-center mb-8">
            Nos partenaires santé
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthPartners.map((partner, index) => {
              const IconComponent = partner.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-olive-green p-4 rounded-full w-fit mx-auto mb-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-forest-green mb-2">{partner.name}</h4>
                  <div className="text-2xl font-bold text-olive-green">{partner.count}</div>
                  <p className="text-sm text-gray-600">Partenaires</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why become a partner */}
        <div className="bg-forest-green rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Partenariat médical"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <HandHeart size={32} className="text-green-200" />
                <h3 className="text-3xl font-bold">Pourquoi devenir partenaire ?</h3>
              </div>
              <p className="text-green-100 mb-8 leading-relaxed">
                Devenir partenaire du Réseau santé + constitue une véritable opportunité stratégique pour votre établissement.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-green-200 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                    </div>
                    <span className="text-green-100">{benefit}</span>
                  </div>
                ))}
              </div>
              <button className="btn btn-secondary mt-8 text-forest-green hover:text-white">
                Devenir partenaire
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}