'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-gray-100 rounded-2xl p-6 border border-gray-200">
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer list-none">
              <h4 className="text-xl font-semibold text-primary">{item.question}</h4>
              <ChevronDown className="transition-transform duration-300 group-open:rotate-180 text-secondary" size={24} />
            </summary>
            <div className="mt-4">
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          </details>
        </div>
      ))}
    </div>
  );
}
