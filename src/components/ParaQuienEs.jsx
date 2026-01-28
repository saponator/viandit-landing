function ParaQuienEs() {
  const audiencias = [
    {
      titulo: "Usuarios finales (B2C)",
      descripcion: "Personas que buscan una alternativa práctica a cocinar",
      caracteristicas: [
        "Valoran variedad y previsibilidad",
        "Quieren planear su alimentación con antelación",
        "Buscan gastar menos sin resignar comodidad",
        "Desean comer más sano"
      ]
    },
    {
      titulo: "Empresas (B2B)",
      descripcion: "Empresas que quieren ofrecer un beneficio de alimentación flexible",
      caracteristicas: [
        "Buscan mejorar el bienestar de sus colaboradores",
        "Quieren una alternativa simple a tickets o reintegros",
        "Valoran la flexibilidad del beneficio"
      ]
    },
    {
      titulo: "Locales",
      descripcion: "Empresas gastronómicas que buscan más clientes",
      caracteristicas: [
        "Buscan más clientes sin invertir en marketing",
        "Carecen de una plataforma para vender online",
        "Desean acceder a un mayor público"
      ]
    }
  ]

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Para quién es el producto
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Diseñado para diferentes necesidades
        </p>

        <div className="space-y-8">
          {audiencias.map((audiencia, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-viandit-orange">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {audiencia.titulo}
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                {audiencia.descripcion}
              </p>
              <ul className="space-y-2">
                {audiencia.caracteristicas.map((caracteristica, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="text-viandit-orange mr-2">→</span>
                    <span>{caracteristica}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ParaQuienEs
