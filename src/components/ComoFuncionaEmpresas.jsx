function ComoFuncionaEmpresas() {
  const beneficios = [
    {
      titulo: "Beneficio flexible",
      descripcion: "Tus empleados eligen cuándo y dónde usar sus viandas, sin restricciones de horario o lugar."
    },
    {
      titulo: "Control de gasto",
      descripcion: "Gastos previsibles y controlados. Definís el presupuesto y lo distribuís como quieras."
    },
    {
      titulo: "Sin logística propia",
      descripcion: "No necesitás cocinas, proveedores ni coordinación de entregas. Todo lo manejamos nosotros."
    },
    {
      titulo: "Presencial y remoto",
      descripcion: "Funciona tanto para empleados en oficina como para trabajadores remotos."
    },
    {
      titulo: "Mejor bienestar",
      descripcion: "Ayudá a tus colaboradores a comer mejor sin la fricción de cocinar todos los días."
    },
    {
      titulo: "Implementación simple",
      descripcion: "Proceso rápido y sin complicaciones. En poco tiempo tus empleados ya están usando el beneficio."
    }
  ]

  const proceso = [
    {
      paso: "1",
      texto: "Contactanos y contanos sobre tu empresa"
    },
    {
      paso: "2",
      texto: "Definimos el plan que mejor se adapte a tus necesidades"
    },
    {
      paso: "3",
      texto: "Distribuís las cuponeras entre tus empleados"
    },
    {
      paso: "4",
      texto: "Ellos empiezan a usar el beneficio cuando quieran"
    }
  ]

  return (
    <section id="para-empresas" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Para empresas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecé Viandit como beneficio laboral flexible para tus empleados
          </p>
        </div>

        <div className="bg-viandit-orange text-white p-8 md:p-12 rounded-lg mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Cómo funciona para tu empresa
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
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-viandit-orange">
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
            Quiero que Viandit sea un beneficio en mi empresa
          </button>
        </div>
      </div>
    </section>
  )
}

export default ComoFuncionaEmpresas
