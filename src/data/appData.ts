// Main data structure for the application

export const sections = [
  {
    id: 'welcome',
    title: 'Главная',
    description: 'Гид по миру нейросетей от Сергея Шима и курса AIMasters.' // Изменено
  },
  {
    id: 'text-models',
    title: 'Текстовые Модели (LLM)',
    // Изменено
    description: 'Большие языковые модели (LLM) представляют собой универсальные инструменты для работы с текстом, способные выполнять функции копирайтера, редактора, помощника в юридических вопросах, партнера для мозгового штурма и других задач. Ключевым аспектом является понимание специфики и возможностей каждой модели.',
    items: [
      {
        id: 'gemini',
        title: 'Google Gemini (2.5 Pro)',
        // Изменено
        description: 'Одна из наиболее универсальных и мощных моделей на данный момент. Обладает способностью к рассуждению перед генерацией ответа (\'thinking\'), демонстрирует высокое качество генерируемого текста и понимание контекста.',
        category: 'llm',
        isPaid: false,
        url: 'https://aistudio.google.com/',
        content: [
          {
            title: 'Google AI Studio',
            text: 'Бесплатная платформа для экспериментов, создания ботов (через System Prompt) и работы с большим контекстом (до 1 млн токенов). Рекомендуется как основной инструмент для старта и решения продвинутых задач.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=ZfY9rRbWa8E&t=1930s',
            timestamp: 'Видео 1, 32:10'
          },
          {
            title: 'Gemini (Сайт/Приложение)',
            text: 'Более интуитивный интерфейс с функцией памяти и режимом поиска информации (research). Платная подписка расширяет возможности.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=ZfY9rRbWa8E&t=6542s',
            timestamp: 'Видео 1, 1:49:02'
          },
          {
            title: 'Лайфхак: Быстрый системный промпт', // Название оставлено для ясности
            text: 'Метод быстрого создания системного промпта с использованием семантического ядра из эпитетов.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=977s',
            timestamp: 'Видео 3, 16:17'
          }
        ]
      },
      {
        id: 'chatgpt',
        title: 'ChatGPT (OpenAI)',
         // Изменено
        description: 'Популярная и широко используемая модель. Платная версия (ChatGPT Plus) предоставляет расширенные возможности и функции, делая ее ценным инструментом для регулярного использования.',
        category: 'llm',
        isPaid: true,
        url: 'https://chat.openai.com/',
        content: [
          {
            title: 'Память и Кастомные инструкции',
            text: 'Функции, позволяющие модели запоминать информацию о пользователе и его предпочтениях для персонализации ответов и стиля.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=ZfY9rRbWa8E&t=6287s',
            timestamp: 'Видео 1, 1:44:47'
          },
          {
            title: 'GPTs',
            text: 'Платформа для создания и использования кастомизированных версий ChatGPT, настроенных под специфические задачи.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=ZfY9rRbWa8E&t=2670s',
            timestamp: 'Видео 1, 44:30'
          },
          {
            title: 'Генерация Картинок (DALL-E)',
            text: 'Интегрированная функция генерации изображений на основе текстовых описаний.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=ZfY9rRbWa8E&t=6425s',
            timestamp: 'Видео 1, 1:47:05'
          },
          {
            title: 'Думающие модели (O3, O4)',
            text: 'Продвинутые версии моделей, способные к сложным рассуждениям, анализу и генерации кода.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=1775s',
            timestamp: 'Видео 3, 29:35'
          },
          {
            title: 'Playground',
            text: 'Интерфейс для разработчиков, предоставляющий доступ к тонким настройкам моделей (температура, токены и т.д.).', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=ZfY9rRbWa8E&t=2160s',
            timestamp: 'Видео 1, 36:00'
          }
        ]
      },
      {
        id: 'claude',
        title: 'Claude (Anthropic)',
         // Изменено
        description: 'Отличается "человечным" и естественным стилем генерируемого текста. Особенно эффективен для написания статей, отчетов и других материалов, где важен качественный слог.',
        category: 'llm',
        isPaid: false, // Условно-бесплатный, есть платные тарифы
        url: 'https://claude.ai/',
        content: [
          {
            text: 'Предоставляет бесплатный доступ с лимитами и платные тарифы. Ценится за высокое качество генерируемых текстов.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=ZfY9rRbWa8E&t=6575s',
            timestamp: 'Видео 1, 1:49:35'
          },
          {
            title: 'Стиль Claude',
            text: 'Характерный "человечный" стиль письма делает его подходящим для создания контента, требующего естественности.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=2450s',
            timestamp: 'Видео 3, 40:50'
          }
        ]
      },
      {
        id: 'poe',
        title: 'Poe.com',
         // Изменено
        description: 'Платформа-агрегатор, предоставляющая доступ к различным LLM (GPT, Claude, Gemini и др.) и генеративным моделям для изображений/видео по единой подписке ($20/мес).',
        category: 'llm',
        isPaid: true,
        url: 'https://poe.com/',
        content: [
          {
            text: 'Позволяет удобно сравнивать возможности различных моделей в рамках одного интерфейса и подписки.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=ZfY9rRbWa8E&t=6838s',
            timestamp: 'Видео 1, 1:53:58'
          }
        ]
      },
      {
        id: 'perplexity',
        title: 'Perplexity.ai',
         // Изменено
        description: 'Поисковая система на базе AI. Оптимальна для проведения исследований, поиска и анализа актуальной информации в интернете с предоставлением ссылок на источники.',
        category: 'research',
        isPaid: true, // Есть бесплатный и платный тарифы
        url: 'https://www.perplexity.ai/',
        content: [
          {
            text: 'Задает уточняющие вопросы, ищет по сети, агрегирует информацию и предоставляет ответ со ссылками. Платная версия предлагает больше возможностей.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=ZfY9rRbWa8E&t=6901s',
            timestamp: 'Видео 1, 1:55:01'
          },
          {
            title: 'Лайфхак с подпиской',
            text: 'На сторонних площадках (например, Plati.Market) можно найти промокоды на годовую подписку по сниженной цене (~$5-7).', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=ZfY9rRbWa8E&t=7151s',
            timestamp: 'Видео 1, 1:59:11'
          }
        ]
      },
      {
        id: 'grok',
        title: 'Grok (xAI)',
         // Изменено
        description: 'Языковая модель от xAI. Демонстрирует хорошее качество генерации текста, интегрирована с поиском и социальной сетью X, поддерживает режим рассуждения (\'Think\').',
        category: 'llm',
        isPaid: true, // Обычно требует подписки X Premium
        url: 'https://grok.com/',
        content: [
          {
            text: 'Отличается меньшей степенью цензуры по сравнению с другими моделями, что может быть полезно для определенных задач (например, генерации изображений известных личностей).', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=ZfY9rRbWa8E&t=7243s',
            timestamp: 'Видео 1, 2:00:43'
          },
          {
            title: 'Генерация изображений',
            text: 'Интегрированный генератор изображений с более мягкими ограничениями по контенту.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=mQ3x6HMuWNQ&t=2396s',
            timestamp: 'Видео 2, 39:56'
          }
        ]
      },
      {
        id: 'deepseek',
        title: 'DeepSeek',
         // Изменено
        description: 'Бесплатная модель с функцией рассуждения (\'thinking\'). Представляет собой альтернативу платным моделям, однако может быть нестабильна из-за высокой нагрузки и склонна к генерации неточной информации (галлюцинациям).',
        category: 'llm',
        isPaid: false,
        url: 'https://chat.deepseek.com/',
        content: [
          {
            text: 'Может использоваться для экспериментов, но требует внимательной проверки генерируемых ответов.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=ZfY9rRbWa8E&t=7330s',
            timestamp: 'Видео 1, 2:02:10'
          }
        ]
      },
      {
        id: 'copilot',
        title: 'Microsoft Copilot',
         // Изменено
        description: 'Интегрирован в экосистему Microsoft, базируется на моделях OpenAI. Однако пользовательский интерфейс может ограничивать возможности взаимодействия и стабильность диалога.',
        category: 'llm',
        isPaid: false, // Базовый доступ обычно бесплатный
        url: 'https://copilot.microsoft.com/',
        content: [
          {
            text: 'Не рекомендуется в качестве основного инструмента из-за ограничений интерфейса.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=ZfY9rRbWa8E&t=6779s',
            timestamp: 'Видео 1, 1:52:59'
          }
        ]
      }
    ]
  },
  {
    id: 'visual-models',
    title: 'Визуальные Модели',
     // Изменено
    description: 'Инструменты для генерации визуального контента (изображений и видео), ставшие стандартными рабочими решениями.',
    items: [
      {
        id: 'midjourney',
        title: 'Midjourney',
         // Изменено
        description: 'Лидирующая платформа для стилизованной генерации изображений. Обладает обширной галереей работ для поиска референсов и вдохновения, предоставляет мощные инструменты для стилизации.',
        category: 'visual',
        isPaid: true,
        url: 'https://www.midjourney.com/',
        content: [
          {
            title: 'Применение', // Изменено
            text: 'Поиск референсов, копирование промптов, генерация в уникальных стилях, тренировка собственных стилей (Moodboards).', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=mQ3x6HMuWNQ&t=1538s',
            timestamp: 'Видео 2, 25:38'
          },
          {
            title: 'Стили',
            text: 'Предоставляет доступ к огромному разнообразию визуальных стилей и техник.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=mQ3x6HMuWNQ&t=4567s',
            timestamp: 'Видео 2, 1:16:07'
          }
        ]
      },
      {
        id: 'freepik',
        title: 'Freepik AI',
         // Изменено
        description: 'Многофункциональная платформа (\'комбайн\'), объединяющая генерацию изображений (с доступом к разным моделям), видео, инструменты апскейла, ретуши, удаления фона, функцию Reimagine и возможность тренировки моделей на своих данных (персонажи, объекты).',
        category: 'visual',
        isPaid: true,
        url: 'https://www.freepik.com/ai',
        content: [
          {
            title: 'Применение', // Изменено
            text: 'Оптимальное решение для маркетинга и SMM. Обеспечивает быстрый доступ к множеству инструментов в рамках одной подписки (€108/год). Рекомендуется для командной работы.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=mQ3x6HMuWNQ&t=2680s',
            timestamp: 'Видео 2, 44:40'
          },
          {
            title: 'Reimagine',
            text: 'Функция для создания стилистически цельного изображения на основе коллажа или референса.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=mQ3x6HMuWNQ&t=3384s',
            timestamp: 'Видео 2, 56:24'
          },
          {
            title: 'Тренировка персонажа',
            text: 'Позволяет обучить модель для генерации изображений конкретных персонажей или объектов.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=mQ3x6HMuWNQ&t=3892s',
            timestamp: 'Видео 2, 1:04:52'
          },
          {
            title: 'Видеогенерация',
            text: 'Инструменты для создания коротких видео или анимации на основе статичных изображений.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=mQ3x6HMuWNQ&t=4101s',
            timestamp: 'Видео 2, 1:08:21'
          }
        ]
      },
      {
        id: 'dall-e',
        title: 'ChatGPT (DALL-E)',
         // Изменено
        description: 'Генератор изображений, интегрированный в ChatGPT Plus. Понимает текстовые запросы, поддерживает редактирование областей (Inpainting).',
        category: 'visual',
        isPaid: true,
        url: 'https://chat.openai.com/',
        content: [
          {
            text: 'Склонен к генерации изображений в теплых тонах, если не указать иное в промпте.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=mQ3x6HMuWNQ&t=1027s',
            timestamp: 'Видео 2, 17:07'
          },
          {
            title: 'Inpainting',
            text: 'Функция для редактирования выделенных областей изображения.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=mQ3x6HMuWNQ&t=2353s',
            timestamp: 'Видео 2, 39:13'
          }
        ]
      },
      {
        id: 'google-image',
        title: 'Google AI Studio (Image Gen)',
         // Изменено
        description: 'Бесплатный инструмент для генерации изображений на базе Gemini Flash. Отличается высокой точностью следования инструкциям по редактированию деталей изображения.',
        category: 'visual',
        isPaid: false,
        url: 'https://aistudio.google.com/',
        content: [
          {
            text: 'Генерируемые изображения имеют невысокое разрешение и могут требовать последующего апскейла.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=mQ3x6HMuWNQ&t=1261s',
            timestamp: 'Видео 2, 21:01'
          },
          {
            title: 'Демо редактирования',
            text: 'Пример, демонстрирующий точность модели при выполнении инструкций по изменению элементов изображения.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=mQ3x6HMuWNQ&t=2046s',
            timestamp: 'Видео 2, 34:06'
          }
        ]
      },
      {
        id: 'ideogram',
        title: 'HF (Ideogram / Son)',
         // Изменено
        description: 'Модель для генерации изображений, известная хорошим качеством и возможностями стилизации. Предоставляет значительный объем бесплатных генераций.',
        category: 'visual',
        isPaid: false, // Условно-бесплатная
        url: 'https://ideogram.ai/',
        content: [
          {
            text: 'Подходит для создания стилизованных изображений и экспериментов без платной подписки.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=mQ3x6HMuWNQ&t=1398s',
            timestamp: 'Видео 2, 23:18'
          }
        ]
      },
      {
        id: 'grok-image',
        title: 'Grok (Image Gen)',
         // Изменено
        description: 'Инструмент для генерации изображений в рамках платформы Grok/X. Эффективен для создания фотореалистичных изображений и работы с образами известных личностей благодаря менее строгой цензуре.',
        category: 'visual',
        isPaid: true,
        url: 'https://grok.com/',
        content: [
          {
            text: 'Может быть полезен для задач, где требуется обход ограничений по контенту, присутствующих в других сервисах.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=mQ3x6HMuWNQ&t=2396s',
            timestamp: 'Видео 2, 39:56'
          }
        ]
      },
      {
        id: 'recraft',
        title: 'Recraft.ai',
         // Изменено
        description: 'Платформа для генерации изображений с акцентом на векторную графику. Включает эффективный инструмент для преобразования растровых изображений в векторный формат.',
        category: 'visual',
        isPaid: false, // Бесплатный с лимитами
        url: 'https://www.recraft.ai/',
        content: [
          {
            text: 'Подходит для создания иконок, логотипов и другой векторной графики. Доступен бесплатный тариф с ограничениями.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=266s',
            timestamp: 'Видео 3, 4:26'
          }
        ]
      },
      {
        id: 'topaz',
        title: 'Topaz Photo AI',
         // Изменено
        description: 'Профессиональное десктопное приложение ($400/год) для высококачественного увеличения разрешения (апскейла) и улучшения детализации изображений, особенно при подготовке к печати.',
        category: 'visual',
        isPaid: true,
        url: 'https://www.topazlabs.com/topaz-photo-ai',
        content: [
          {
            text: 'Решение для профессиональной постобработки и увеличения изображений без видимой потери качества.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=3107s', // Ссылка ведет на видео 2, а не 3. Исправляю.
            timestamp: 'Видео 2, 51:47' // Исправлено на Видео 2
          }
        ]
      },
      {
        id: 'clipdrop',
        title: 'ClipDrop',
         // Изменено
        description: 'Сервис, предоставляющий набор инструментов для обработки изображений, включая эффективное удаление фона.',
        category: 'visual',
        isPaid: false, // Есть бесплатные и платные функции
        url: 'https://clipdrop.co/',
        content: [
          {
            text: 'Набор утилит для быстрой обработки фотографий и подготовки их для дальнейшего использования.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=mQ3x6HMuWNQ&t=3187s',
            timestamp: 'Видео 2, 53:07'
          }
        ]
      },
      {
        id: 'video',
        title: 'Видеогенераторы',
         // Изменено
        description: 'Современные модели для генерации видео из текста или на основе изображений. Ключевые представители: Google Veo 2 (акцент на фотореализм), Kling (большая гибкость и креативность), Sora (может генерировать длинные сцены, но нестабильна).',
        category: 'visual',
        isPaid: true, // Обычно доступ через платные платформы
        url: 'https://www.freepik.com/ai', // Пример платформы с доступом
        content: [
          {
            text: 'Доступны через различные платформы, такие как Freepik, RunwayML, Leonardo.ai и другие.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=mQ3x6HMuWNQ&t=4101s',
            timestamp: 'Видео 2, 1:08:21'
          }
        ]
      }
    ]
  },
  {
    id: 'utilities',
    title: 'Утилиты и Платформы',
     // Изменено
    description: 'Вспомогательные сервисы и платформы для решения специализированных задач в работе с AI.',
    items: [
      {
        id: 'salute',
        title: 'Salute SpeechBot (Telegram)',
         // Изменено
        description: 'Бесплатный Telegram-бот от Сбера для транскрибации аудио. Поддерживает русский, английский, казахский языки и распознает смешанную речь.',
        category: 'transcription',
        isPaid: false,
        url: 'https://t.me/SaluteSpeechBot',
        content: [
          {
            text: 'Удобен для быстрой расшифровки голосовых сообщений и коротких аудиозаметок.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=3585s',
            timestamp: 'Видео 3, 59:45'
          }
        ]
      },
      {
        id: 'riverside',
        title: 'Riverside.fm Transcription',
         // Изменено
        description: 'Бесплатный онлайн-сервис для транскрибации аудиофайлов. Эффективен для обработки продолжительных записей.',
        category: 'transcription',
        isPaid: false,
        url: 'https://riverside.fm/transcription',
        content: [
          {
            text: 'Подходит для расшифровки интервью, лекций, подкастов и других длинных аудиоматериалов.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=3499s',
            timestamp: 'Видео 3, 58:19'
          }
        ]
      },
      {
        id: 'turboscribe',
        title: 'TurboScribe',
         // Изменено
        description: 'Платный сервис ($100/год) для высококачественной транскрибации. Сохраняет историю записей, поддерживает транскрибацию видео с YouTube.',
        category: 'transcription',
        isPaid: true,
        url: 'https://turboscribe.ai/',
        content: [
          {
            text: 'Рекомендуется для профессионального использования и бизнес-задач.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=3735s',
            timestamp: 'Видео 3, 1:02:15'
          }
        ]
      },
      {
        id: 'huggingface',
        title: 'Hugging Face Spaces',
         // Изменено
        description: 'Открытая платформа, где сообщество разработчиков публикует различные AI-модели и приложения, включая инструменты для транскрибации (требуется самостоятельный поиск и оценка).',
        category: 'transcription', // Также содержит модели для других задач
        isPaid: false,
        url: 'https://huggingface.co/spaces',
        content: [
          {
            text: 'Место для поиска и экспериментов с различными AI-моделями, включая специфические решения для транскрибации.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=3432s',
            timestamp: 'Видео 3, 57:12'
          }
        ]
      },
      {
        id: 'notebooklm',
        title: 'Google NotebookLM',
         // Изменено
        description: 'Бесплатный сервис Google для интерактивной работы с большими текстовыми документами (PDF, Google Docs, веб-страницы) с использованием технологии RAG.',
        category: 'document',
        isPaid: false,
        url: 'https://notebooklm.google.com/',
        content: [
          {
            text: 'Обеспечивает точные ответы на основе загруженных документов со ссылками на источники. Подходит для юристов, аналитиков, исследователей.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=1600s',
            timestamp: 'Видео 3, 26:40'
          }
        ]
      },
      {
        id: 'gpts',
        title: 'ChatGPT GPTs',
         // Изменено
        description: 'Функциональность ChatGPT Plus, позволяющая создавать кастомные версии GPT, в том числе с загрузкой собственной базы знаний (документы PDF, TXT) для работы по принципу RAG.',
        category: 'document', // Также создание ботов
        isPaid: true,
        url: 'https://chat.openai.com/gpts/discovery',
        content: [
          {
            text: 'Позволяет создавать персонализированные AI-инструменты для работы с корпоративными документами и данными.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=3275s',
            timestamp: 'Видео 3, 54:35'
          }
        ]
      },
      {
        id: 'elevenlabs', // Исправлено имя
        title: 'ElevenLabs', // Исправлено имя
         // Изменено
        description: 'Лидирующий сервис для синтеза речи (Text-to-Speech). Позволяет генерировать высококачественную озвучку, клонировать голоса, выполнять автоматический перевод и дубляж видео.',
        category: 'audio',
        isPaid: true, // Есть бесплатный тариф с ограничениями
        url: 'https://elevenlabs.io/',
        content: [
          {
            text: 'Платный доступ ($60/год базовый) открывает полные возможности.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=mQ3x6HMuWNQ&t=4732s',
            timestamp: 'Видео 2, 1:18:52'
          }
        ]
      },
      {
        id: 'suno',
        title: 'Suno.ai',
         // Изменено
        description: 'Сервис для генерации музыки на основе текстовых описаний (промптов), задающих стиль, настроение, инструменты. Доступен бесплатный тариф.',
        category: 'audio',
        isPaid: false, // Условно-бесплатный
        url: 'https://suno.ai/',
        content: [
          {
            text: 'Позволяет создавать уникальные музыкальные композиции, описывая желаемый результат словами.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=mQ3x6HMuWNQ&t=4806s',
            timestamp: 'Видео 2, 1:20:06'
          }
        ]
      },
      {
        id: 'udio',
        title: 'Udio.com',
        description: 'Альтернативная платформа для создания музыки с помощью AI по текстовым запросам.', // Изменено
        category: 'audio',
        isPaid: false, // Условно-бесплатный
        url: 'https://udio.com/',
        content: [
          {
            text: 'Еще один инструмент для генерации оригинальной музыки на основе текстовых описаний.' // Изменено
          }
        ]
      },
      {
        id: 'cloudflare',
        title: 'Cloudflare Pages',
         // Изменено
        description: 'Сервис, предоставляющий бесплатный хостинг для статических веб-сайтов и приложений (HTML, CSS, JS). Подходит для публикации простых веб-инструментов, созданных с помощью AI.',
        category: 'publishing',
        isPaid: false,
        url: 'https://pages.cloudflare.com/',
        content: [
          {
            text: 'Предоставляет простой способ развертывания и публикации веб-приложений в интернете.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=5237s',
            timestamp: 'Видео 3, 1:27:17'
          }
        ]
      }
    ]
  },
  {
    id: 'concepts',
    title: 'Ключевые Концепты',
     // Изменено
    description: 'Ключевые концепции и технологии, лежащие в основе работы современных нейросетей.',
    items: [
      {
        id: 'thinking-models',
        title: 'Думающие Модели',
         // Изменено
        description: 'Категория LLM (например, Gemini 2.5 Pro, ChatGPT O-серии), которые выполняют внутренний процесс рассуждения (\'chain-of-thought\' или аналогичный) перед генерацией финального ответа.',
        content: [
          {
            text: 'Эффективны для решения сложных задач, требующих логики и анализа.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=487s',
            timestamp: 'Видео 3, 8:07'
          }
        ]
      },
      {
        id: 'system-prompt',
        title: 'Системный Промпт',
         // Изменено
        description: 'Предварительная инструкция, задающая контекст, роль, правила поведения и стиль ответа для языковой модели. Является основой для создания специализированных ботов и AI-агентов.',
        content: [
          {
            title: 'Структура',
            text: 'Рекомендации по созданию эффективных системных промптов с четкой структурой.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=723s',
            timestamp: 'Видео 3, 12:03'
          },
          {
            title: 'Лайфхак с эпитетами',
            text: 'Техника для быстрого создания насыщенных системных промптов с использованием большого числа релевантных эпитетов.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=977s',
            timestamp: 'Видео 3, 16:17'
          }
        ]
      },
      {
        id: 'prompt-injection',
        title: 'Prompt Injection',
         // Изменено
        description: 'Метод взаимодействия с LLM, направленный на обход ограничений и извлечение внутренней системной инструкции (системного промпта) модели или бота.',
        content: [
          {
            text: 'Может использоваться для анализа и понимания принципов работы кастомных GPTs.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=ZfY9rRbWa8E&t=2670s',
            timestamp: 'Видео 1, 44:30'
          }
        ]
      },
      {
        id: 'temperature',
        title: 'Температура',
         // Изменено
        description: 'Параметр настройки LLM, контролирующий степень случайности при выборе следующего токена. Низкие значения (<1) повышают предсказуемость и точность, высокие (>1) — креативность и вариативность (с риском генерации бессвязного текста).',
        content: [
          {
            text: 'Ключевой параметр для управления балансом между точностью и креативностью генерируемого текста.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=ZfY9rRbWa8E&t=2040s',
            timestamp: 'Видео 1, 34:00'
          },
          {
            title: 'Практика',
            text: 'Демонстрация влияния различных значений температуры на результат генерации.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=ZfY9rRbWa8E&t=2353s',
            timestamp: 'Видео 1, 39:13'
          }
        ]
      },
      {
        id: 'context-window',
        title: 'Окно Контекста',
         // Изменено
        description: 'Максимальный объем текстовой информации (измеряемый в токенах), который модель может одновременно удерживать в своей \'оперативной памяти\' для обработки текущего запроса и диалога.',
        content: [
          {
            text: 'Важно учитывать при работе с длинными текстами, так как информация за пределами окна может быть утеряна или проигнорирована моделью.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=1338s',
            timestamp: 'Видео 3, 22:18'
          }
        ]
      },
      {
        id: 'rag',
        title: 'RAG (Retrieval-Augmented Generation)',
         // Изменено
        description: 'Подход (Retrieval-Augmented Generation), при котором LLM перед генерацией ответа осуществляет поиск релевантной информации во внешней базе знаний (например, в загруженных документах), что повышает точность и позволяет ссылаться на источники.',
        content: [
          {
            text: 'Применяется в инструментах вроде NotebookLM и кастомных GPTs с загруженными файлами.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=3231s',
            timestamp: 'Видео 3, 53:51'
          }
        ]
      },
      {
        id: 'json-style',
        title: 'JSON для Стиля',
         // Изменено
        description: 'Применение структурированного формата JSON для формализации и передачи LLM детальных требований к стилю генерируемого текста (Tone of Voice, лексика, структура предложений и т.д.).',
        content: [
          {
            text: 'Позволяет добиться более точного и стабильного следования заданному стилю.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=2157s',
            timestamp: 'Видео 3, 35:57'
          }
        ]
      },
      {
        id: 'vba-script',
        title: 'VBA / Google Apps Script',
         // Изменено
        description: 'Языки сценариев (VBA для Microsoft Office, Google Apps Script для Google Workspace), позволяющие автоматизировать рутинные задачи в офисных приложениях. LLM могут генерировать код на этих языках.',
        content: [
          {
            title: 'VBA',
            text: 'Генерация VBA-кода для автоматизации задач в PowerPoint, Excel, Word.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=4390s',
            timestamp: 'Видео 3, 1:13:10'
          },
          {
            title: 'Apps Script',
            text: 'Генерация Google Apps Script для автоматизации Google Slides, Sheets, Docs, Forms.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=A9XfowBuN-M&t=4941s',
            timestamp: 'Видео 3, 1:22:21'
          }
        ]
      },
      {
        id: 'reimagine',
        title: 'Reimagine',
         // Изменено
        description: 'Функция в некоторых генераторах изображений (например, Freepik Reimagine), позволяющая \'переосмыслить\' входное изображение или коллаж, создав на его основе новое, стилистически cohérentное изображение, часто с сохранением основной композиции.',
        content: [
          {
            text: 'Эффективный инструмент для быстрого создания сложных и стилистически единых визуальных композиций.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=mQ3x6HMuWNQ&t=3384s',
            timestamp: 'Видео 2, 56:24'
          }
        ]
      },
      {
        id: 'character-training',
        title: 'Character/Style Training',
         // Изменено
        description: 'Процесс тонкой настройки (fine-tuning) или адаптации визуальной модели (например, с помощью LoRA или аналогичных техник) для стабильной генерации изображений конкретного персонажа, объекта или в заданном визуальном стиле на основе предоставленных примеров.',
        content: [
          {
            text: 'Позволяет добиться консистентности при генерации изображений с определенными персонажами, объектами или стилями.', // Изменено
            videoUrl: 'https://www.youtube.com/watch?v=mQ3x6HMuWNQ&t=3892s',
            timestamp: 'Видео 2, 1:04:52'
          }
        ]
      }
    ]
  }
];