import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, ListOrdered } from 'lucide-react';

interface WorkflowCardProps {
  workflow: {
    id: string;
    title: string;
    description: string;
    steps: {
      title: string;
      description: string;
    }[];
    videoUrl?: string;
    timestamp?: string;
  };
  darkMode: boolean;
}

const WorkflowCard: React.FC<WorkflowCardProps> = ({ workflow, darkMode }) => {
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
                text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1
                ${darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}
              `}>
                <ListOrdered size={12} />
                Воркфлоу
              </span>
            </div>
            <h3 className="text-lg font-bold">{workflow.title}</h3>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        <p className="text-sm">{workflow.description}</p>
      </div>
      
      {isExpanded && (
        <div className={`p-5 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <ol className="list-decimal pl-5 mb-4 space-y-2">
            {workflow.steps.map((step, index) => (
              <li key={index}>
                <div className="mb-2">
                  <h4 className="font-semibold">{step.title}</h4>
                  <p className="text-sm">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          
          {workflow.videoUrl && workflow.timestamp && (
            <a
              href={workflow.videoUrl}
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
              Видео демонстрация {workflow.timestamp}
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkflowCard;