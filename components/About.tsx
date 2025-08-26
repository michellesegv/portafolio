import Image from "next/image";

export default function About() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Sobre Mí
          </h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Soy una desarrolladora front-end con amplia experiencia
                  creando aplicaciones web modernas, responsivas y centradas en
                  el usuario. A lo largo de mi carrera, he trabajado con
                  tecnologías como
                  <strong> React, Next.js, Vue.js</strong> y herramientas de
                  diseño como <strong>Tailwind CSS</strong>, aplicando siempre
                  un enfoque en la calidad, el rendimiento y la escalabilidad
                  del producto.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Me motiva convertir ideas complejas en experiencias digitales
                  claras, intuitivas y funcionales. Me interesa especialmente el
                  diseño de interfaces limpias y accesibles, así como la
                  optimización de flujos de interacción y carga.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Cuando no estoy programando, disfruto aprendiendo nuevas
                  tecnologías y leyendo sobre las últimas tendencias en
                  desarrollo web.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600 mb-2">
                    6+
                  </div>
                  <div className="text-gray-600">Años de experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600 mb-2">
                    25+
                  </div>
                  <div className="text-gray-600">Proyectos completados</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="relative">
                <Image
                  src="/about-image.jpg"
                  alt="Workspace"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute inset-0 bg-rose-600 opacity-10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
