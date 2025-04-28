import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock } from 'lucide-react';

interface ConceptCardProps {
  concept: {
    id: string;
    title: string;
    description: string;
    content: {
      title?: string;
      text: string;
      videoUrl?: string;
      timestamp?: string;
    }[];
  };
  darkMode: boolean;
}

const ConceptCard: React.FC<ConceptCardProps> = ({ concept, darkMode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`
        rounded-lg overflow-hidden transition-shadow duration-200
        ${darkMode 
          ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700' 
          : 'bg-white hover:bg-gray-50 border border-gray-200 hover:shadow-md'}
      `}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`
                text-xs font-medium px-2 py-1 rounded-full
                ${darkMode ? 'bg-amber-900 text-amber-300' : 'bg-amber-100 text-amber-800'}
              `}>
                Концепт
              </span>
            </div>
            <h3 className="text-lg font-bold">{concept.title}</h3>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        <p className="text-sm">{concept.description}</p>
      </div>
      
      {isExpanded && concept.content && (
        <div className={`p-5 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          {concept.content.map((item, index) => (
            <div key={index} className="mb-4 last:mb-0">
              {item.title && <h4 className="font-semibold mb-1">{item.title}</h4>}
              <p className="text-sm mb-2">{item.text}</p>
              {item.videoUrl && item.timestamp && (
                <a
                  href={item.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    text-xs inline-flex items-center gap-1 transition-colors duration-200
                    ${darkMode 
                      ? 'text-blue-400 hover:text-blue-300' 
                      : 'text-blue-600 hover:text-blue-800'}
                  `}
                >
                  <Clock size={12} />
                  Видео объяснение {item.timestamp}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConceptCard;