import React from 'react';
import { 
  FileText,
  Image as ImageIcon,
  Wrench,
  Lightbulb,
  PlayCircle
} from 'lucide-react';

interface WelcomeScreenProps {
  darkMode: boolean;
  setActiveSection: (sectionId: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ darkMode, setActiveSection }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`
        w-full max-w-3xl p-8 rounded-xl mb-8
        ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}
      `}
      >
        <h1 className="text-3xl font-bold mb-6">
          <span>Блокнот Знаний</span>
          <span className="text-blue-500"> AIMasters</span>
        </h1>

        <p className="text-lg mb-6">
          Это ваш гид по миру нейросетей курса AIMasters.
        </p>

        <div
          className={`p-4 rounded-lg ${
            darkMode ? 'bg-gray-700' : 'bg-blue-50'
          } mb-6`}
        >
          <p className="text-md">
            Выбирайте раздел, чтобы посмотреть конкретные темы,
            или используйте поиск, чтобы найти нужную информацию быстрее.
            Нажимайте на тему, чтобы увидеть подробности и ссылку на видео.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            onClick={() => setActiveSection('text-models')}
            className={`
            p-5 rounded-lg transition-transform transition-colors duration-200 hover:scale-105 cursor-pointer
            ${darkMode ? 'bg-blue-900 bg-opacity-30 hover:bg-opacity-40' : 'bg-blue-50 hover:bg-blue-100'}
          `}
          >
            <div className="mb-2">
              <FileText size={24} className="text-blue-500" /> 
            </div>
            <h3 className="text-lg font-bold mb-2">
              Текстовые Модели
            </h3>
            <p className="text-sm">
              Ключевые LLM, особенности, платформы для доступа, и как выбрать
              лучшую для своих задач.
            </p>
          </div>

          <div
            onClick={() => setActiveSection('visual-models')}
            className={`
            p-5 rounded-lg transition-transform transition-colors duration-200 hover:scale-105 cursor-pointer
            ${darkMode ? 'bg-purple-900 bg-opacity-30 hover:bg-opacity-40' : 'bg-purple-50 hover:bg-purple-100'}
          `}
          >
            <div className="mb-2">
              <ImageIcon size={24} className="text-purple-500" />
            </div>
            <h3 className="text-lg font-bold mb-2">
              Визуальные Модели
            </h3>
            <p className="text-sm">
              Генераторы изображений, видео, и инструменты для визуального
              творчества.
            </p>
          </div>

          <div
            onClick={() => setActiveSection('utilities')}
            className={`
            p-5 rounded-lg transition-transform transition-colors duration-200 hover:scale-105 cursor-pointer
            ${darkMode ? 'bg-green-900 bg-opacity-30 hover:bg-opacity-40' : 'bg-green-50 hover:bg-green-100'}
          `}
          >
            <div className="mb-2">
              <Wrench size={24} className="text-green-500" />
            </div>
            <h3 className="text-lg font-bold mb-2">
              Утилиты и Платформы
            </h3>
            <p className="text-sm">
              Вспомогательные инструменты для работы с AI - транскрибация,
              озвучка, веб-публикация.
            </p>
          </div>

          <div
            onClick={() => setActiveSection('concepts')}
            className={`
            p-5 rounded-lg transition-transform transition-colors duration-200 hover:scale-105 cursor-pointer
            ${darkMode ? 'bg-amber-900 bg-opacity-30 hover:bg-opacity-40' : 'bg-amber-50 hover:bg-amber-100'}
          `}
          >
            <div className="mb-2">
              <Lightbulb size={24} className="text-amber-500" />
            </div>
            <h3 className="text-lg font-bold mb-2">
              Концепты и Техники
            </h3>
            <p className="text-sm">
              Базовые понятия и техники для эффективной работы с AI - системные
              промпты, RAG и другие.
            </p>
          </div>
        </div>
      </div>

      <div
        className={`
        w-full max-w-3xl p-6 rounded-xl mt-12
        ${
          darkMode
            ? 'bg-gray-800 border border-gray-700'
            : 'bg-white border border-gray-200'
        }
      `}
      >
        <h2 className="text-xl font-bold mb-4">Видео к курсу</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="https://www.youtube.com/watch?v=ZfY9rRbWa8E"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              p-4 rounded-lg transition-transform duration-200 hover:scale-105
              ${
                darkMode
                  ? 'bg-gray-750 hover:bg-gray-700'
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
              }
            `}
          >
            <h3 className="font-bold flex items-center gap-2">
              <PlayCircle size={18} />
              Урок 1
            </h3>
            <p className="text-sm ml-7">Текстовые модели и промпты</p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=mQ3x6HMuWNQ"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              p-4 rounded-lg transition-transform duration-200 hover:scale-105
              ${
                darkMode
                  ? 'bg-gray-750 hover:bg-gray-700'
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
              }
            `}
          >
            <h3 className="font-bold flex items-center gap-2">
              <PlayCircle size={18} />
              Урок 2
            </h3>
            <p className="text-sm ml-7">Визуальные модели и генерация</p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=A9XfowBuN-M"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              p-4 rounded-lg transition-transform duration-200 hover:scale-105
              ${
                darkMode
                  ? 'bg-gray-750 hover:bg-gray-700'
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
              }
            `}
          >
            <h3 className="font-bold flex items-center gap-2">
              <PlayCircle size={18} />
              Урок 3
            </h3>
            <p className="text-sm ml-7">Продвинутые техники и автоматизация</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
