import React from 'react';
import { 
  BrainCircuit, 
  Image, 
  Wrench, 
  Lightbulb, 
  BookOpen, 
  Home,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  sections: any[];
  activeSection: string;
  setActiveSection: (section: string) => void;
  darkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  sections, 
  activeSection, 
  setActiveSection,
  darkMode
}) => {
  
  const getIcon = (id: string) => {
    switch(id) {
      case 'welcome':
        return <Home size={18} />;
      case 'text-models':
        return <BrainCircuit size={18} />;
      case 'visual-models':
        return <Image size={18} />;
      case 'utilities':
        return <Wrench size={18} />;
      case 'concepts':
        return <Lightbulb size={18} />;
      case 'workflows':
        return <BookOpen size={18} />;
      default:
        return <ChevronRight size={18} />;
    }
  };

  return (
    <nav>
      <ul className="space-y-1">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => setActiveSection(section.id)}
              className={`
                w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors duration-200
                ${activeSection === section.id 
                  ? darkMode 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-100 text-blue-800' 
                  : darkMode
                    ? 'hover:bg-gray-700'
                    : 'hover:bg-gray-100'
                }
              `}
            >
              <span className={activeSection === section.id ? 'text-current' : darkMode ? 'text-blue-400' : 'text-blue-600'}>
                {getIcon(section.id)}
              </span>
              <span className="font-medium">{section.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;