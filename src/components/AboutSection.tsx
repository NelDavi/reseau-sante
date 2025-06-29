import React from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="qui-sommes-nous" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-green mb-4">Qui sommes-nous ?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Né d'une initiative de trois courtiers gabonais, Réseau santé + révolutionne l'accès aux soins de santé au Gabon
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Équipe médicale"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-forest-green">Notre histoire</h3>
            <p className="text-gray-600 leading-relaxed">
              Née d'une initiative de trois courtiers gabonais, Réseau santé + repose sur la mise en place d'un réseau de partenaires santé engagés et accessibles, intégrant les nouvelles technologies pour offrir une expérience fluide, humaine et adaptée aux réalités des entreprises moyennes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              À la croisée de la digitalisation des services de santé, nous incarnons une assurance de confiance, proche de nos adhérents et tournée vers l'avenir.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-forest-green p-3 rounded-full w-fit mb-6">
              <Target className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-forest-green mb-4">Notre mission</h3>
            <p className="text-gray-600">
              Offrir un réseau de partenaires santé accessible et humain grâce à un réseau de partenaires engagés et une technologie de proximité.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-olive-green p-3 rounded-full w-fit mb-6">
              <Eye className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-forest-green mb-4">Notre vision</h3>
            <p className="text-gray-600">
              Proposer un réseau de santé moderne et efficace, disponible partout au Gabon, devenir l'acteur référent au Gabon puis en Afrique.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-accent-green p-3 rounded-full w-fit mb-6">
              <Heart className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-forest-green mb-4">Nos valeurs</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Users size={16} className="text-olive-green" />
                <span className="text-gray-600 font-medium">Proximité</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target size={16} className="text-olive-green" />
                <span className="text-gray-600 font-medium">Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}