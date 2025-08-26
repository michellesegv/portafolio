export default function Contact() {
  return (
    <section id="contactame" className="pt-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            ¡Hablemos!
          </h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Siempre estoy abierta a nuevas
            oportunidades y desafíos.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Información de Contacto
            </h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                  <a
                    href="https://wa.me/51960265216"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-600 hover:text-rose-700 transition-colors duration-200"
                  >
                    +51 960265216
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <a
                    href="mailto:seguilvilchezmichelle@gmail.com"
                    className="text-rose-600 hover:text-rose-700 transition-colors duration-200"
                  >
                    seguilvilchezmichelle@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">💻</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Github</h4>
                  <a
                    href="https://github.com/michellesegv"
                    className="text-rose-600 hover:text-rose-700 transition-colors duration-200"
                  >
                    michellesegv
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Ubicación</h4>
                  <p className="text-gray-600">Lima, Perú</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
