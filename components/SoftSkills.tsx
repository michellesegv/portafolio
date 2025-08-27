const softSkills = [
  {
    title: "Proactividad",
    description:
      "Capacidad de anticiparme y tomar iniciativa ante las posibles situaciones",
    icon: "🚀",
  },
  {
    title: "Comunicación Efectiva",
    description:
      "Capacidad para transmitir ideas complejas de manera clara y comprensible con equipo técnico y no técnico",
    icon: "💬",
  },
  {
    title: "Trabajo en Equipo",
    description:
      "Colaboración eficiente con equipos multidisciplinarios y remotos",
    icon: "🤝",
  },
  {
    title: "Resolución de Problemas",
    description:
      "Enfoque analítico para identificar y resolver desafíos técnicos",
    icon: "🧩",
  },

  {
    title: "Gestión del Tiempo",
    description: "Organización eficiente de tareas y cumplimiento de deadlines",
    icon: "⏰",
  },
  {
    title: "Aprendizaje Continuo",
    description: "Pasión por mantenerme actualizada con las últimas tendencias",
    icon: "📚",
  },
  {
    title: "Creatividad",
    description:
      "Pensamiento innovador para crear soluciones únicas y atractivas",
    icon: "🎨",
  },
  {
    title: "Liderazgo",
    description:
      "Capacidad para guiar proyectos y mentorizar a otros desarrolladores",
    icon: "👑",
  },
];

export default function SoftSkills() {
  return (
    <section id="sobre-mi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Habilidades
          </h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estas son algunas de las habilidades que me permiten colaborar
            efectivamente y entregar resultados excepcionales.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-3 lg:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{skill.icon}</div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {skill.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <blockquote className="text-xl text-gray-700 italic mb-4">
              &ldquo;Siempre hay algo nuevo por aprender y la posibilidad de
              mejora continua. Me motiva ser un referente para otras personas
              que desean ingresar en el mundo de la tecnología. Crean siempre en
              ustedes mismxs.&rdquo;
            </blockquote>
            <cite className="text-rose-600 font-semibold">
              — Michelle Seguil
            </cite>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-rose-600 mb-2">Alta</div>
              <div className="text-gray-600">Satisfacción del cliente</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-rose-600 mb-2">100%</div>
              <div className="text-gray-600">Proyectos entregados a tiempo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-rose-600 mb-2">20+</div>
              <div className="text-gray-600">Equipos colaborados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
