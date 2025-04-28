import { useState, useRef } from 'react';
import { MoonIcon, SunIcon, SearchIcon } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import SearchBar from './components/SearchBar';
import WelcomeScreen from './components/WelcomeScreen';
import { sections } from './data/appData';

function App() {
  const [activeSection, setActiveSection] = useState('welcome');
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mainContentRef = useRef<HTMLElement>(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`py-4 px-6 md:px-8 flex justify-between items-center shadow-sm sticky top-0 z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex items-center">
          <button 
            className="mr-4 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <h1 className="text-xl md:text-2xl font-bold">
            <span className="text-blue-500">🧠 </span>
            <span className="">Блокнот Знаний</span>
            <span className="text-blue-500"> AIMasters</span>
          </h1>
        </div>
        
        <div className="flex items-center">
          <div className="relative mr-4 hidden md:block">
            <SearchBar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          <button 
            onClick={toggleDarkMode} 
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
        </div>
      </header>

      <div className="md:hidden px-4 py-2">
        <SearchBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Mobile Sidebar */}
        <div 
          className={`
            fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden transition-opacity duration-300
            ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className={`w-64 h-full ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar 
              sections={sections}
              activeSection={activeSection} 
              setActiveSection={(section) => {
                setActiveSection(section);
                setIsMobileMenuOpen(false);
                mainContentRef.current?.scrollTo(0, 0);
              }}
              darkMode={darkMode}
            />
          </div>
        </div>

        {/* Desktop Sidebar */}
        <div className={`hidden md:block w-64 p-4 sticky top-[73px] self-start overflow-y-auto max-h-[calc(100vh-73px)] ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <Sidebar 
            sections={sections} 
            activeSection={activeSection} 
            setActiveSection={setActiveSection}
            darkMode={darkMode}
          />
        </div>

        {/* Main Content */}
        <main ref={mainContentRef} className="flex-1 p-4 md:p-8 overflow-y-auto">
          {/* Render ContentArea only if not welcome screen or if searching */}
          {(activeSection !== 'welcome' || searchQuery) && (
            <ContentArea 
              sections={sections}
              activeSection={activeSection}
              searchQuery={searchQuery}
              darkMode={darkMode}
            />
          )}
          {/* Render WelcomeScreen only if welcome screen and not searching */}
          {activeSection === 'welcome' && !searchQuery && (
             <WelcomeScreen darkMode={darkMode} setActiveSection={setActiveSection} />
           )}
        </main>
      </div>

      {/* Footer */}
      <footer className={`py-4 px-6 text-center text-sm ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-600'}`}>
        <p>© 2025 AIMasters by Сергей Шима • Это твой карманный справочник по нейронкам • Пользуйся, внедряй и становись круче! • <a href="https://tdigroup.uz" target="_blank" rel="noopener noreferrer" className={`hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>tdigroup.uz</a></p>
      </footer>
    </div>
  );
}

export default App;