import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Clock, DollarSign } from 'lucide-react';

interface ToolCardProps {
  tool: {
    id: string;
    title: string;
    description: string;
    category: string;
    isPaid: boolean;
    url?: string;
    content: {
      title?: string;
      text: string;
      videoUrl?: string;
      timestamp?: string;
    }[];
  };
  darkMode: boolean;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, darkMode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'llm':
        return darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800';
      case 'visual':
        return darkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-800';
      case 'audio':
        return darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800';
      case 'research':
        return darkMode ? 'bg-amber-900 text-amber-300' : 'bg-amber-100 text-amber-800';
      case 'transcription':
        return darkMode ? 'bg-teal-900 text-teal-300' : 'bg-teal-100 text-teal-800';
      case 'document':
        return darkMode ? 'bg-indigo-900 text-indigo-300' : 'bg-indigo-100 text-indigo-800';
      case 'publishing':
        return darkMode ? 'bg-rose-900 text-rose-300' : 'bg-rose-100 text-rose-800';
      default:
        return darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-800';
    }
  };
  
  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'llm':
        return 'Текстовая модель';
      case 'visual':
        return 'Визуальная модель';
      case 'audio':
        return 'Аудио';
      case 'research':
        return 'Исследование';
      case 'transcription':
        return 'Транскрибация';
      case 'document':
        return 'Документы';
      case 'publishing':
        return 'Публикация';
      default:
        return 'Утилита';
    }
  };

  return (
    <div 
      className={`
        rounded-lg overflow-hidden transition-shadow duration-200
        ${darkMode 
          ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700' 
          : 'bg-white hover:bg-gray-50 border border-gray-200 hover:shadow-md'}
      `}
    >
      <div 
        className="p-5 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(tool.category)}`}>
                {getCategoryLabel(tool.category)}
              </span>
              {tool.isPaid && (
                <span className={`text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                  <DollarSign size={12} />
                  Платный
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold">{tool.title}</h3>
          </div>
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
        
        <p className="text-sm mb-3">{tool.description}</p>
        
        {tool.url && (
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              text-sm inline-flex items-center gap-1 transition-colors duration-200
              ${darkMode 
                ? 'text-blue-400 hover:text-blue-300' 
                : 'text-blue-600 hover:text-blue-800'}
            `}
          >
            Открыть сайт <ExternalLink size={14} />
          </a>
        )}
      </div>
      
      {isExpanded && tool.content && (
        <div className={`p-5 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          {tool.content.map((item, index) => (
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
                  Видео демонстрация {item.timestamp}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToolCard;