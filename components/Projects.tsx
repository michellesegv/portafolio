import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Portafolio Website",
    description: "Sitio web de portafolio personal",
    image: "/projects/portfolio.jpg",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    demoUrl: "",
    codeUrl: "https://github.com/michellesegv/portafolio",
    featured: true,
  },
  {
    id: 2,
    title: "Login SPSA",
    description:
      "Login de cliente para el análisis de promedio y desviación estándar de edad",
    image: "/projects/login-spsa.jpg",
    technologies: ["React", "Firebase", "JSX", "SCSS"],
    demoUrl: "https://reto-spsa-5b459.web.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Trello",
    description:
      "Dashboard para gestión de proyectos con listas de tareas y subtareas que se pueden arrastrar y soltar entre ellas",
    image: "/projects/trello.jpg",
    technologies: ["HTML", "jQuery", "CSS"],
    demoUrl: "https://michellesegv.github.io/trello/",
    codeUrl: "https://github.com/michellesegv/trello",
    featured: true,
  },
  {
    id: 4,
    title: "To Do App",
    description:
      "Aplicación de listado de tareas con funcionalidad de checklist para llevar seguimiento de tareas, además de poder eliminar tareas ya completadas",
    image: "/projects/todo-app.jpg",
    technologies: ["HTML", "Javascript", "CSS"],
    demoUrl: "https://michellesegv.github.io/todoapp/",
    codeUrl: "https://github.com/michellesegv/todoapp",
    featured: false,
  },
  {
    id: 5,
    title: "Labcar",
    description:
      "Plataforma de comercio electrónico para suscripción de conductores de vehículos y cotizaciones de viajes",
    image: "/projects/labcar.jpg",
    technologies: ["Javascript", "API Google Maps", "HTML", "CSS"],
    demoUrl: "https://michellesegv.github.io/lab-car/",
    codeUrl: "https://github.com/michellesegv/lab-car",
    featured: false,
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Mis Proyectos
          </h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cada proyecto representa un desafío único y una oportunidad de
            crecimiento.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Proyectos Destacados
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 lg:h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-rose-100 text-rose-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-rose-600 text-white text-center py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors duration-200"
                    >
                      Ver Demo
                    </a>

                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border-2 border-rose-600 text-rose-600 text-center py-2 px-4 rounded-lg hover:bg-rose-600 hover:text-white transition-colors duration-200"
                      >
                        Ver Código
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Otros Proyectos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 lg:h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-rose-600 text-white text-center py-2 px-3 rounded text-sm hover:bg-rose-700 transition-colors duration-200"
                    >
                      Demo
                    </a>
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-rose-600 text-rose-600 text-center py-2 px-3 rounded text-sm hover:bg-rose-600 hover:text-white transition-colors duration-200"
                      >
                        Código
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            ¿Te gustó lo que viste? ¡Trabajemos juntos en tu próximo proyecto!
          </p>
          <a
            href="#contactame"
            className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-colors duration-200 font-semibold"
          >
            Comenzar Proyecto
          </a>
        </div>
      </div>
    </section>
  );
}
