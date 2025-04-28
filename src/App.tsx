import { useState, useRef } from 'react';
import { MoonIcon, SunIcon, SearchIcon, Menu, X, Home, FileText, Image as ImageIcon, Wrench, Lightbulb } from 'lucide-react';
import ContentArea from './components/ContentArea';
import SearchBar from './components/SearchBar';
import WelcomeScreen from './components/WelcomeScreen';
import { sections } from './data/appData';

function App() {
  const [activeSection, setActiveSection] = useState('welcome');
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const mainContentRef = useRef<HTMLElement>(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`py-4 px-6 md:px-8 flex justify-between items-center shadow-sm sticky top-0 z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        {/* Левая часть хедера: Бургер (моб) + Иконки Навигации (десктоп) */}
        <div className="flex items-center">
          {/* Бургер (только мобильные) */}
          <button 
            className="mr-4 md:hidden"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Иконки разделов - только для десктопа - теперь слева */} 
          <div className="hidden md:flex items-center gap-1">
            {/* Иконка "Главная" */} 
            <button
              onClick={() => setActiveSection('welcome')}
              title="Главная"
              className={`p-2 rounded-full ${activeSection === 'welcome' ? (darkMode ? 'bg-gray-700' : 'bg-gray-100') : (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100')}`}
            >
              <Home size={20} className={`${activeSection === 'welcome' ? (darkMode ? 'text-blue-400' : 'text-blue-600') : ''}`} />
            </button>

            {/* Остальные иконки разделов */} 
            {sections.map((section) => {
              if (section.id === 'welcome') return null;

              let IconComponent;
              let iconColorClass;
              switch (section.id) {
                case 'text-models':
                  IconComponent = FileText;
                  iconColorClass = darkMode ? 'text-blue-400' : 'text-blue-600';
                  break;
                case 'visual-models':
                  IconComponent = ImageIcon;
                  iconColorClass = darkMode ? 'text-purple-400' : 'text-purple-600';
                  break;
                case 'utilities':
                  IconComponent = Wrench;
                  iconColorClass = darkMode ? 'text-green-400' : 'text-green-600';
                  break;
                case 'concepts':
                  IconComponent = Lightbulb;
                  iconColorClass = darkMode ? 'text-amber-400' : 'text-amber-600';
                  break;
                default:
                  return null;
              }

              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  title={section.title}
                  className={`p-2 rounded-full transition-colors ${activeSection === section.id ? (darkMode ? 'bg-gray-700' : 'bg-gray-100') : (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100')}`}
                >
                  <IconComponent size={20} className={`${iconColorClass}`} />
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Правая часть хедера: Поиск и Тема */}
        <div className="flex items-center gap-2">
          {/* Поиск */} 
          <div className="relative hidden md:block">
            <SearchBar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          {/* Кнопка темы */} 
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

      {/* Мобильная навигация (выпадающая) */}
      {isMobileNavOpen && (
        <nav className={`md:hidden border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-md`}>
          <div className="px-4 py-3 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setIsMobileNavOpen(false);
                  mainContentRef.current?.scrollTo(0, 0);
                }}
                className={`
                  block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2
                  ${activeSection === section.id 
                    ? (darkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-700') 
                    : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900')}
                `}
              >
                {section.id === 'welcome' && <Home size={18} />}
                {section.title}
              </button>
            ))}
          </div>
        </nav>
      )}

      {/* Десктопная навигация */}
      {/* 
        <div className={`hidden md:block w-64 p-4 ...`}>
          Раньше здесь был Sidebar 
        </div> 
      */}

        {/* Main Content - теперь занимает всю ширину под хедером */}
        <main ref={mainContentRef} className="p-4 md:p-8 overflow-y-auto">
          {/* Логика рендера ContentArea и WelcomeScreen остается прежней */}
          {(activeSection !== 'welcome' || searchQuery) && (
            <ContentArea 
              sections={sections}
              activeSection={activeSection}
              searchQuery={searchQuery}
              darkMode={darkMode}
            />
          )}
          {activeSection === 'welcome' && !searchQuery && (
             <WelcomeScreen darkMode={darkMode} setActiveSection={setActiveSection} />
           )}
        </main>
      {/* Убираем закрывающий тег от flex-col md:flex-row */}
      {/* </div> */} 

      {/* Footer */}
      <footer className={`py-4 px-6 text-center text-sm ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-600'}`}>
        <p>© 2025 AIMasters by Сергей Шима • Это твой карманный справочник по нейронкам • Пользуйся, внедряй и становись круче! • <a href="https://tdigroup.uz" target="_blank" rel="noopener noreferrer" className={`hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>tdigroup.uz</a></p>
      </footer>
    </div>
  );
}

export default App;