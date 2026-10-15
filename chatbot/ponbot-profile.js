const profile = {
  name: 'Martín Ponce',
  title: 'Senior Full Stack Software Developer',
  experience: 'Aproximadamente 10 años de experiencia en desarrollo de software',

  summary: `
    Desarrollador de software con experiencia en desarrollo backend,
    frontend e integración de APIs y microservicios.
    Ha trabajado con aplicaciones empresariales, bases de datos
    relacionales y NoSQL, y tecnologías web modernas.
  `,

  technologies: {
    backend: ['.NET', 'C#', 'Node.js', 'NestJS', 'JavaScript', 'TypeScript'],
    frontend: ['Vue.js', 'React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
    databases: ['SQL Server', 'Oracle', 'MongoDB'],
    tools: ['Git', 'Azure', 'Grafana']
  },

  experience: [
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
    }
  ],

  contact: {
    email: 'martin@martinponce.com.ar',
    portfolio: 'https://portfolio.martinponce.com.ar',
    projects: 'https://portfolio.martinponce.com.ar/#/projects',
    contactPage: 'https://portfolio.martinponce.com.ar/#/contact',
    linkedin: 'https://www.linkedin.com/in/mplp88/',
    github: 'https://github.com/mplp88'
  }
}

module.exports = profile
