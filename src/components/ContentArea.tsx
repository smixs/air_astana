import React from 'react';
import ToolCard from './ToolCard';
import ConceptCard from './ConceptCard';
import WorkflowCard from './WorkflowCard';
import WelcomeScreen from './WelcomeScreen';

interface ContentAreaProps {
  sections: any[];
  activeSection: string;
  searchQuery: string;
  darkMode: boolean;
}

const ContentArea: React.FC<ContentAreaProps> = ({ 
  sections, 
  activeSection,
  searchQuery,
  darkMode
}) => {
  const activeContent = sections.find(section => section.id === activeSection);
  
  // Handle search query
  const getFilteredContent = () => {
    if (!searchQuery.trim()) {
      return sections;
    }
    
    const query = searchQuery.toLowerCase();
    
    return sections.map(section => {
      // Filter items within each section
      const filteredItems = section.items?.filter((item: any) => {
        return (
          item.title.toLowerCase().includes(query) || 
          item.description.toLowerCase().includes(query) ||
          item.content?.some((c: any) => 
            c.text?.toLowerCase().includes(query) || 
            c.title?.toLowerCase().includes(query)
          )
        );
      });
      
      return {
        ...section,
        items: filteredItems,
        hasResults: filteredItems?.length > 0
      };
    }).filter(section => section.hasResults);
  };
  
  const filteredSections = searchQuery ? getFilteredContent() : [];
  
  if (activeSection === 'welcome' && !searchQuery) {
    return <WelcomeScreen darkMode={darkMode} />;
  }
  
  // Render search results
  if (searchQuery) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">Результаты поиска: {searchQuery}</h2>
        
        {filteredSections.length === 0 ? (
          <div className={`p-8 text-center rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <p className="text-lg">По запросу «{searchQuery}» ничего не найдено.</p>
            <p className="mt-2 text-gray-500">Попробуйте другой запрос.</p>
          </div>
        ) : (
          filteredSections.map(section => (
            <div key={section.id} className="mb-12">
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <div className="space-y-4">
                {section.id === 'text-models' && section.items?.map((item: any) => (
                  <ToolCard key={item.id} tool={item} darkMode={darkMode} />
                ))}
                
                {section.id === 'visual-models' && section.items?.map((item: any) => (
                  <ToolCard key={item.id} tool={item} darkMode={darkMode} />
                ))}
                
                {section.id === 'utilities' && section.items?.map((item: any) => (
                  <ToolCard key={item.id} tool={item} darkMode={darkMode} />
                ))}
                
                {section.id === 'concepts' && section.items?.map((item: any) => (
                  <ConceptCard key={item.id} concept={item} darkMode={darkMode} />
                ))}
                
                {section.id === 'workflows' && section.items?.map((item: any) => (
                  <WorkflowCard key={item.id} workflow={item} darkMode={darkMode} />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
  
  // Render active section
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{activeContent?.title}</h2>
      <p className="mb-6">{activeContent?.description}</p>
      
      <div className="space-y-4">
        {activeSection === 'text-models' && activeContent?.items?.map((tool: any) => (
          <ToolCard key={tool.id} tool={tool} darkMode={darkMode} />
        ))}
        
        {activeSection === 'visual-models' && activeContent?.items?.map((tool: any) => (
          <ToolCard key={tool.id} tool={tool} darkMode={darkMode} />
        ))}
        
        {activeSection === 'utilities' && activeContent?.items?.map((tool: any) => (
          <ToolCard key={tool.id} tool={tool} darkMode={darkMode} />
        ))}
        
        {activeSection === 'concepts' && activeContent?.items?.map((concept: any) => (
          <ConceptCard key={concept.id} concept={concept} darkMode={darkMode} />
        ))}
        
        {activeSection === 'workflows' && activeContent?.items?.map((workflow: any) => (
          <WorkflowCard key={workflow.id} workflow={workflow} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
};

export default ContentArea;