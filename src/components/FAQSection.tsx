import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Qu'est-ce que Réseau santé + ?",
      answer: "Réseau santé + est un réseau de partenaires santé qui propose aux entreprises une couverture médicale complète pour leurs employés. Notre objectif est de rendre les soins de qualité accessibles partout au Gabon grâce à une approche innovante et numérique."
    },
    {
      question: "Comment souscrire ?",
      answer: "Pour y adhérer, il vous suffit de remplir notre formulaire de souscription en ligne ou de contacter notre service adhésion. Un conseiller vous accompagnera à chaque étape du processus de souscription."
    },
    {
      question: "Est-ce obligatoire pour les entreprises ?",
      answer: "Non, elle n'est pas obligatoire, mais fortement recommandée. En offrant une couverture santé à vos employés, vous améliorez leur bien-être et leur fidélité, tout en renforçant votre responsabilité sociale d'entreprise."
    },
    {
      question: "Quels documents sont requis ?",
      answer: "Pour souscrire, vous devez fournir : un registre de commerce ou un justificatif d'activité, la liste des employés à couvrir, et les pièces d'identité des employés concernés."
    },
    {
      question: "Combien coûte la couverture ?",
      answer: "Le coût dépend du nombre d'employés à couvrir et du niveau de garanties choisi. Nous proposons plusieurs formules adaptées aux budgets des PME. Demandez votre devis gratuit pour obtenir un tarif personnalisé."
    },
    {
      question: "Dans quelles villes êtes-vous présents ?",
      answer: "Nous sommes présents dans les principales villes du Gabon avec un réseau de partenaires santé répartis sur l'ensemble du territoire national. Notre objectif est de couvrir tout le pays."
    },
    {
      question: "Comment vos employés utilisent-ils leur couverture ?",
      answer: "Chaque employé reçoit une carte Réseau Santé+ avec un identifiant personnel. Il peut se rendre directement chez nos partenaires santé et bénéficier des tarifs négociés et de la prise en charge."
    },
    {
      question: "Proposez-vous un support client ?",
      answer: "Oui, nous offrons un service client réactif et dédié aux entreprises, disponible pour vous accompagner et répondre à toutes vos questions concernant votre couverture santé."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <HelpCircle size={32} className="text-forest-green" />
            <h2 className="text-4xl font-bold text-forest-green">FAQ</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Réponses aux questions fréquemment posées
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-forest-green pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp size={24} className="text-forest-green" />
                  ) : (
                    <ChevronDown size={24} className="text-forest-green" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Vous avez d'autres questions ? N'hésitez pas à nous contacter !
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn btn-primary"
          >
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
}