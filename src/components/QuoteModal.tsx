import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    employeeCount: '',
    email: '',
    phone: '',
    coverageLevel: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote form submitted:', formData);
    alert('Votre demande de devis a été envoyée. Nous vous répondrons sous 48h.');
    setFormData({ companyName: '', employeeCount: '', email: '', phone: '', coverageLevel: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-forest-green">Demande de devis</h2>
          <button
            onClick={onClose}
            className="btn btn-ghost btn-circle"
          >
            <X size={24} />
          </button>
        </div>

        <p className="text-gray-600 mb-8">
          Obtenez une estimation rapide et gratuite en remplissant le formulaire ci-dessous
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                Nom de l'entreprise *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                placeholder="Nom de votre entreprise"
              />
            </div>
            
            <div>
              <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre d'employés à couvrir *
              </label>
              <select
                id="employeeCount"
                name="employeeCount"
                required
                value={formData.employeeCount}
                onChange={handleInputChange}
                className="select select-bordered w-full"
              >
                <option value="">Sélectionnez</option>
                <option value="1-10">1 à 10 employés</option>
                <option value="11-25">11 à 25 employés</option>
                <option value="26-50">26 à 50 employés</option>
                <option value="51-100">51 à 100 employés</option>
                <option value="100+">Plus de 100 employés</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email *
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
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                placeholder="+241 XX XX XX XX"
              />
            </div>
          </div>

          <div>
            <label htmlFor="coverageLevel" className="block text-sm font-medium text-gray-700 mb-2">
              Niveau de couverture souhaité
            </label>
            <select
              id="coverageLevel"
              name="coverageLevel"
              value={formData.coverageLevel}
              onChange={handleInputChange}
              className="select select-bordered w-full"
            >
              <option value="">Sélectionnez un niveau</option>
              <option value="basic">Couverture de base</option>
              <option value="standard">Couverture standard</option>
              <option value="premium">Couverture premium</option>
              <option value="custom">Couverture sur mesure</option>
            </select>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg">
              <Send size={20} />
              Envoyer ma demande
            </button>
            <p className="text-sm text-gray-600 mt-4">
              🔁 Réponse sous 48 heures ouvrées
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}