
import React from 'react';
import { FaqItem } from '../types';
import { PlusIcon, MinusIcon } from './icons';

interface FaqItemProps {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItemComponent: React.FC<FaqItemProps> = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-700/50 bg-gray-900/40 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left p-5 focus:outline-none"
      >
        <h3 className="text-lg font-medium text-gray-200 uppercase tracking-wide">{faq.question}</h3>
        <span>
          {isOpen ? <MinusIcon className="w-6 h-6 text-purple-400" /> : <PlusIcon className="w-6 h-6 text-gray-400" />}
        </span>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-5 pt-0">
          <p className="text-gray-400">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqItemComponent;
