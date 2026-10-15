const profile = {
  name: 'Martín Ponce',
  title: 'Senior Full Stack Software Developer',
  age: 37,

  professionalSummary: {
    yearsOfExperience: 10,
    description: 'Aproximadamente 10 años de experiencia en desarrollo de software.',
    summary: `
    Desarrollador de software con experiencia en desarrollo backend,
    frontend e integración de APIs y microservicios.
    Ha trabajado con aplicaciones empresariales, bases de datos
    relacionales y NoSQL, y tecnologías web modernas.
  `
  },

  technologies: {
    backend: ['.NET', 'C#', 'Node.js', 'NestJS', 'JavaScript', 'TypeScript'],
    frontend: ['Vue.js', 'React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
    databases: ['SQL Server', 'Oracle', 'MongoDB'],
    tools: ['Git', 'Azure', 'Grafana']
  },

  workExperience: [
    {
      company: 'SHIFTA',
      role: 'Software Developer',
      description: `Lideré el diseño y desarrollo de arquitecturas Backend-For-Frontend (BFF) y microservicios utilizando
        NestJS y .NET 8 para el sector asegurador. Implementé patrones de Clean Architecture para modernizar y migrar APIs legadas hacia
        ecosistemas de alta disponibilidad. Diseñé e integré APIs REST críticas para consumo de aplicaciones internas y proveedores externos
        de negocio.
        `
    },
    {
      company: 'Sofre Digital',
      role: 'Software Developer',
      description: `Migré aplicaciones empresariales desde .NET Framework hacia arquitecturas de microservicios en
        .NET 5 y Oracle. Diseñé servicios backend para módulos críticos de facturación, servicios/promociones y consulta
        masiva de clientes. Construí un proceso automatizado de procesamiento batch para la importación mensual de más de
        10.000 registros Excel. Mantuve y evolucioné sistemas internos de RRHH construidos sobre .NET Core 2.1 y SQL Server
        `
    },
    {
      company: 'Tecnosoftware',
      role: 'Software Developer',
      description: `Modernicé sistemas empresariales del sector energético (EE. UU.), migrando aplicaciones legacy de
        Visual Basic y C++ a .NET 6 y Blazor. Desarrollé e integré componentes garantizando el 100% de continuidad operativa durante la
        migración tecnológica.
        `
    },
    {
      company: 'DXC Technology',
      role: '.NET Developer / Support Analyst',
      description: `Desarrollé e implementé aplicaciones internas utilizando servicios de la nube de Azure.
        Brindé soporte de nivel avanzado a sistemas de misión crítica para clientes corporativos
        internacionales.
        `
    }
  ],

  projects: [
    {
      name: 'Portfolio profesional',
      description: 'Portfolio personal y proyectos de desarrollo.',
      url: 'https://portfolio.martinponce.com.ar/#/projects'
    },
    {
      name: 'Maternidad y Emociones',
      description:
        'Aplicación web full-stack desarrollada con Vue 3 y Node.js para un emprendimiento real, con gestión de contenidos, autenticación, carga de imágenes y MongoDB.',
      technologies: 'Vue 3, Node.js, MongoDB, Pinia, JWT',
      url: 'https://portfolio.martinponce.com.ar/#/projects/maternidad-y-emociones'
    },
    {
      name: 'Secure Notes',
      description:
        'Proof of Concept enfocada en seguridad, arquitectura limpia y dockerización completa. Permite almacenar notas encriptadas y gestionar usuarios autenticados.',
      technologies: '.NET, Next.js, TypeScript, SQL Server, Docker',
      url: 'https://portfolio.martinponce.com.ar/#/projects/secure-notes'
    },
    {
      name: 'Clean Users API',
      description:
        'API REST de usuarios desarrollada con .NET 8 y Clean Architecture, utilizando Entity Framework Core, SQL Server, DTOs, AutoMapper y Swagger.',
      technologies: '.NET 8, C#, EF Core, SQL Server, Clean Architecture',
      url: 'https://portfolio.martinponce.com.ar/#/projects/clean-users-api'
    },
    {
      name: 'Professional Vue Landing Page',
      description:
        'Template de landing page moderno y responsive desarrollado con Vue 3, Vite y TailwindCSS, diseñado para portfolios, freelancers y sitios web empresariales.',
      technologies: 'Vue 3, Vite, TailwindCSS, Pinia, Vue Router',
      url: 'https://portfolio.martinponce.com.ar/#/projects/landing-page-template'
    },
    {
      name: 'Free Games Notifier',
      description:
        'Sistema de monitoreo y notificaciones automáticas para juegos gratuitos en Epic Games Store y Steam. Disponible para Telegram y Discord.',
      technologies: 'Node.js, SQLite, Discord, Telegram, Puppeteer',
      url: 'https://portfolio.martinponce.com.ar/#/projects/free-games-notifier'
    }
  ],

  ai: {
    description: `Estoy actualmente aprendiendo la implementación de Inteligencia Artificial por cuenta propia. Eso incluye el Chatbot
    del Portfolio, PonBot, así como también otros proyectos que estoy desarrollando para uso personal local.`
  },

  contact: {
    email: 'martin@martinponce.com.ar',
    projects: 'https://portfolio.martinponce.com.ar/#/projects',
    contactPage: 'https://portfolio.martinponce.com.ar/#/contact',
    linkedin: 'https://www.linkedin.com/in/mplp88/',
    github: 'https://github.com/mplp88'
  },

  education: {
    title: 'Técnico Superior en Desarrollo de Software',
    institution: 'Instituto Superior Tecnológico Empresarial Argentino (ISTEA)',
    years: 3,
    technologies: '.NET, Javascript, Android, SQL Server',
    GPA: 7.15
  },

  hobbies: {
    computerGames: {
      categories: 'RPG, Retro, Pixel Art, Sega Genesis, Nintendo, Roguelites',
      favorites: 'League of Legends, Diablo 2, Pokémon, Sonic'
    },
    developing: 'Aprender cosas nuevas, experimentar, desarrollo de juegos',
    sports: 'Taekwondo'
  }
}

module.exports = profile
