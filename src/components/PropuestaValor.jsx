function PropuestaValor() {
  const beneficios = [
    {
      titulo: "Para usuarios",
      items: [
        "Comprás una cuponera de viandas",
        "La usás cuando querés",
        "Elegís entre distintos locales",
        "Pagás menos que comprando viandas individuales",
        "Podés usarla tanto para almuerzo como para cena",
        "Organizás mejor tus comidas sin pensar todos los días qué comer",
        "Comes más sano"
      ]
    },
    {
      titulo: "Para empresas",
      items: [
        "Beneficio laboral simple y flexible",
        "Control de gasto previsible",
        "Mejora del bienestar sin logística propia",
        "Compatible tanto con trabajo presencial como remoto"
      ]
    },
    {
      titulo: "Para locales",
      items: [
        "Clientes nuevos sin costo de adhesión",
        "Demanda más estable",
        "Cobro centralizado y simple",
        "Mantienen su identidad y propuesta"
      ]
    }
  ]

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Nuestra propuesta de valor
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Una solución simple que beneficia a todos
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="bg-viandit-orange text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-6">{beneficio.titulo}</h3>
              <ul className="space-y-3">
                {beneficio.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-sm md:text-base">
                    <span className="mr-2">✓</span>
                    <span>{item}</span>
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

export default PropuestaValor
