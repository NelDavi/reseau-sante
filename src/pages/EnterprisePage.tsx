import React from 'react';
import EnterpriseSection from '../components/EnterpriseSection';

interface EnterprisePageProps {
  onQuoteClick: () => void;
}

export default function EnterprisePage({ onQuoteClick }: EnterprisePageProps) {
  return (
    <main className="pt-8">
      <EnterpriseSection onQuoteClick={onQuoteClick} />
    </main>
  );
}