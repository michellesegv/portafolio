import Image from "next/image";

export default function Me() {
  return (
    <section
      id="quien-soy"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-gray-100 pt-20 mt-18"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
              ¡Hola! <span className="emoji">👋🏼</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-600 mb-6">
              Soy{" "}
              <span className="text-rose-600 font-bold">Michelle Seguil</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
              <strong>Ingeniera de Sistemas</strong> con más de 6 años de
              experiencia en desarrollo web. Especializada como{" "}
              <strong>Front-end Developer</strong> en tecnologías modernas como
              React, Next.js y Tailwind CSS. Tengo una sólida base en desarrollo
              fullstack, lo que me permite comprender el ciclo completo del
              software y colaborar eficientemente en equipos
              multidisciplinarios. Me apasiona crear interfaces modernas,
              escalables y orientadas a la experiencia del usuario, aplicando
              buenas prácticas, principios SOLID y metodologías ágiles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contactame"
                className="bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-colors duration-200 font-semibold"
              >
                Contáctame
              </a>
              <a
                href="#proyectos"
                className="border-2 border-rose-600 text-rose-600 px-8 py-3 rounded-lg hover:bg-rose-600 hover:text-white transition-colors duration-200 font-semibold"
              >
                Ver Proyectos
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Michelle Seguil"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-200 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 mb-8">
          <div className="animate-bounce">
            <a
              href="#skills"
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
