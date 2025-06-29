import React from 'react';
import { Calendar, ArrowRight, Heart, Brain, Apple } from 'lucide-react';

export default function NewsSection() {
  const articles = [
    {
      title: "Prévention de l'hypertension : les gestes essentiels",
      excerpt: "Découvrez les habitudes simples à adopter pour prévenir l'hypertension artérielle et protéger votre santé cardiovasculaire.",
      date: "15 Mars 2024",
      category: "Prévention",
      icon: Heart,
      image: "https://images.pexels.com/photos/4386374/pexels-photo-4386374.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Bien-être mental au travail : conseils pratiques",
      excerpt: "Comment maintenir un équilibre mental sain dans l'environnement professionnel et gérer le stress quotidien.",
      date: "10 Mars 2024", 
      category: "Bien-être",
      icon: Brain,
      image: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Nutrition et santé : les bases d'une alimentation équilibrée",
      excerpt: "Guide complet pour adopter une alimentation saine et équilibrée adaptée au mode de vie gabonais.",
      date: "5 Mars 2024",
      category: "Nutrition", 
      icon: Apple,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="actualites" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-green mb-4">Actualités & Blog</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conseils santé, prévention et actualités pour votre bien-être
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => {
            const IconComponent = article.icon;
            return (
              <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <IconComponent size={16} className="text-forest-green" />
                      <span className="text-sm font-medium text-forest-green">{article.category}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500 text-sm">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-forest-green mb-3 hover:text-olive-green transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <button className="text-forest-green font-medium hover:text-olive-green transition-colors flex items-center space-x-1">
                    <span>Lire la suite</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Social Media CTA */}
        <div className="bg-gradient-to-r from-forest-green to-olive-green rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Suivez-nous sur nos réseaux sociaux</h3>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Restez informés de nos dernières actualités santé, conseils et témoignages sur nos plateformes sociales.
          </p>
          <div className="flex justify-center space-x-4 flex-wrap gap-4">
            <button className="btn btn-secondary text-forest-green hover:text-white">
              Facebook
            </button>
            <button className="btn btn-secondary text-forest-green hover:text-white">
              LinkedIn
            </button>
            <button className="btn btn-secondary text-forest-green hover:text-white">
              TikTok
            </button>
            <button className="btn btn-secondary text-forest-green hover:text-white">
              YouTube
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}