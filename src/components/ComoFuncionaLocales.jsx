function ComoFuncionaLocales() {
  const beneficios = [
    {
      titulo: "Sin costo de adhesión",
      descripcion: "Unite a la red sin pagar costos iniciales. Solo pagás cuando vendés."
    },
    {
      titulo: "Más clientes",
      descripcion: "Accedé a una base de usuarios que buscan viandas de calidad en distintos locales."
    },
    {
      titulo: "Demanda estable",
      descripcion: "Planificá mejor tu producción con una demanda más previsible y constante."
    },
    {
      titulo: "Cobro simple",
      descripcion: "Cobro centralizado y automático. Menos administración, más tiempo para cocinar."
    },
    {
      titulo: "Mantené tu identidad",
      descripcion: "Seguís siendo vos. Los clientes eligen tu local por tu propuesta única."
    },
    {
      titulo: "Sin logística propia",
      descripcion: "No necesitás desarrollar tu propia plataforma online ni manejar pagos digitales."
    }
  ]

  const proceso = [
    {
      paso: "1",
      texto: "Contactanos y contanos sobre tu local"
    },
    {
      paso: "2",
      texto: "Te evaluamos y, si calificás, te sumamos a la red"
    },
    {
      paso: "3",
      texto: "Los usuarios empiezan a canjear cupones en tu local"
    },
    {
      paso: "4",
      texto: "Cobrás de forma centralizada y simple"
    }
  ]

  return (
    <section id="para-locales" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Para locales de viandas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sumate a la red y conseguí más clientes sin invertir en marketing
          </p>
        </div>

        <div className="bg-viandit-orange text-white p-8 md:p-12 rounded-lg mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Cómo funciona para tu local
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {proceso.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-3">{item.paso}</div>
                <p className="text-lg">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-viandit-orange">
              <h4 className="text-xl font-bold mb-2 text-gray-900">
                {beneficio.titulo}
              </h4>
              <p className="text-gray-600">
                {beneficio.descripcion}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-viandit-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors">
            Quiero vender mis viandas en Viandit
          </button>
        </div>
      </div>
    </section>
  )
}

export default ComoFuncionaLocales
