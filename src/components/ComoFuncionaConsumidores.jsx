function ComoFuncionaConsumidores() {
  const pasos = [
    {
      titulo: "Comprá tu cuponera",
      descripcion: "Elegí la cantidad de viandas que necesitás y pagá por adelantado. Podés comprar para una semana, dos semanas o un mes."
    },
    {
      titulo: "Canjeá cuando quieras",
      descripcion: "Usá tus cupones cuando quieras. Podés planificar tu alimentación para toda la semana, o canjear los cupones día a día según tus necesidades."
    },
    {
      titulo: "Elegí dónde comer",
      descripcion: "Tenés acceso a una red de locales adheridos. Cada cupón puede ser canjeado en un lugar diferente según tu preferencia."
    },
    {
      titulo: "Ahorrá y disfrutá",
      descripcion: "Pagás menos que comprando viandas sueltas y tenés la flexibilidad de elegir entre distintos locales."
    }
  ]

  const beneficios = [
    "Sin compromiso con un solo local",
    "Variedad en cada comida",
    "Ahorrá tiempo y dinero",
    "Planificación simple de tus comidas",
    "Comidas más saludables"
  ]

  return (
    <section id="como-funciona" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Querés comprar una cuponera?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una forma simple y flexible de resolver tus comidas diarias sin cocinar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pasos.map((paso, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
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
        </div>
      </div>
    </section>
  )
}

export default ComoFuncionaConsumidores
