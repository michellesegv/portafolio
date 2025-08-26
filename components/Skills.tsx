import Image from "next/image";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "/icons/react.svg", level: "Experta 👩🏻‍💻" },
      { name: "Next.js", icon: "/icons/nextjs.svg", level: "Experta 👩🏻‍💻" },
      {
        name: "Tailwind CSS",
        icon: "/icons/tailwind.svg",
        level: "Experta 👩🏻‍💻",
      },
      {
        name: "JavaScript",
        icon: "/icons/javascript.svg",
        level: "Experta 👩🏻‍💻",
      },
      {
        name: "TypeScript",
        icon: "/icons/typescript.svg",
        level: "Experta 👩🏻‍💻",
      },
      { name: "Vue.js", icon: "/icons/vue.svg", level: "Capacitada 🫡" },
      { name: "HTML5", icon: "/icons/html5.svg", level: "Experta 👩🏻‍💻" },
      { name: "CSS3", icon: "/icons/css3.svg", level: "Experta 👩🏻‍💻" },
    ],
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git", icon: "/icons/git.svg", level: "Experta 👩🏻‍💻" },
      { name: "Jest", icon: "/icons/jest.svg", level: "Capacitada 🫡" },
      { name: "npm/yarn", icon: "/icons/npm.svg", level: "Capacitada 🫡" },
      { name: "Webpack", icon: "/icons/webpack.svg", level: "Experta 👩🏻‍💻" },
      { name: "Figma", icon: "/icons/figma.svg", level: "Experta 👩🏻‍💻" },
      {
        name: "Storybook",
        icon: "/icons/storybook.svg",
        level: "Experta 👩🏻‍💻",
      },
      { name: "VS Code", icon: "/icons/vscode.svg", level: "Experta 👩🏻‍💻" },
      { name: "ESLint", icon: "/icons/eslint.svg", level: "Experta 👩🏻‍💻" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "/icons/nodejs.svg", level: "Capacitada 🫡" },
      { name: "GraphQL", icon: "/icons/graphql.svg", level: "Experta 👩🏻‍💻" },
      { name: "API REST", icon: "/icons/api.svg", level: "Experta 👩🏻‍💻" },
      { name: "Express", icon: "/icons/expressjs.svg", level: "Capacitada 🫡" },
      { name: "Java", icon: "/icons/java.svg", level: "Capacitada 🫡" },
      { name: "Oracle", icon: "/icons/oracle.svg", level: "Capacitada 🫡" },
      { name: "SQL", icon: "/icons/sql.svg", level: "Capacitada 🫡" },
      {
        name: "Autenticación",
        icon: "/icons/json-web-token.svg",
        level: "Capacitada 🫡",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Conocimientos Técnicos
          </h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estas son algunas de las tecnologías y herramientas con las que
            trabajo para crear experiencias web modernas y eficientes.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {skills.map((skillGroup, groupIndex) => (
            <div key={groupIndex} className="mb-12 last:mb-0">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                {skillGroup.category}
              </h3>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {skillGroup.items.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          width={48}
                          height={48}
                          className="w-12 h-12 object-contain"
                        />
                      </div>

                      <h4 className="text-lg font-semibold text-gray-800 mb-3">
                        {skill.name}
                      </h4>

                      <div className="w-full">
                        <div className="text-center">
                          <span className="inline-block bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">¿Interesado en trabajar juntos?</p>
          <a
            href="#contactame"
            className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-colors duration-200 font-semibold"
          >
            ¡Hablemos!
          </a>
        </div>
      </div>
    </section>
  );
}
