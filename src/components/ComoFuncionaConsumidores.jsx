function ComoFuncionaConsumidores() {
  const pasos = [
    {
      numero: "1",
      titulo: "Comprá tu cuponera",
      descripcion: "Elegí la cantidad de viandas que necesitás y pagá por adelantado. Podés comprar para una semana, dos semanas o un mes."
    },
    {
      numero: "2",
      titulo: "Elegí dónde comer",
      descripcion: "Tenés acceso a una red de locales adheridos. Cada día podés elegir un lugar diferente según tu preferencia."
    },
    {
      numero: "3",
      titulo: "Canjeá cuando quieras",
      descripcion: "Usá tus cupones cuando quieras, sin horarios fijos. Perfecto para almuerzo o cena, según tu necesidad."
    },
    {
      numero: "4",
      titulo: "Ahorrá y disfrutá",
      descripcion: "Pagás menos que comprando viandas sueltas y tenés la flexibilidad de elegir entre distintos locales."
    }
  ]

  const beneficios = [
    "Sin compromiso con un solo local",
    "Variedad en cada comida",
    "Ahorro vs compras individuales",
    "Planificación simple de tus comidas",
    "Comidas más saludables"
  ]

  return (
    <section id="como-funciona" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Cómo funciona para vos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una forma simple y flexible de resolver tus comidas diarias sin cocinar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pasos.map((paso, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-viandit-orange mb-4">
                {paso.numero}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {paso.titulo}
              </h3>
              <p className="text-gray-600">
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-viandit-orange text-white p-8 md:p-12 rounded-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            ¿Por qué elegir Viandit?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span className="text-lg">{beneficio}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="bg-viandit-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors">
              Comprar mi cuponera ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComoFuncionaConsumidores
