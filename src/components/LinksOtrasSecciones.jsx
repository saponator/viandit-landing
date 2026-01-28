function LinksOtrasSecciones() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <button
            onClick={() => scrollToSection('para-locales')}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left border-2 border-transparent hover:border-viandit-orange group"
          >
            <div className="text-viandit-orange text-4xl mb-4">🍽️</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-viandit-orange transition-colors">
              ¿Vendés viandas?
            </h3>
            <p className="text-gray-600">
              Descubrí cómo Viandit puede ayudarte a conseguir más clientes y estabilizar tus ventas
            </p>
            <div className="mt-4 text-viandit-orange font-semibold">
              Ver más →
            </div>
          </button>

          <button
            onClick={() => scrollToSection('para-empresas')}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left border-2 border-transparent hover:border-viandit-orange group"
          >
            <div className="text-viandit-orange text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-viandit-orange transition-colors">
              ¿Sos empresa?
            </h3>
            <p className="text-gray-600">
              Ofrecé Viandit como beneficio flexible para tus empleados, sin logística compleja
            </p>
            <div className="mt-4 text-viandit-orange font-semibold">
              Ver más →
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default LinksOtrasSecciones
