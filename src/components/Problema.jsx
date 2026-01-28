function Problema() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          El problema que resolvemos
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-viandit-orange">
              Para usuarios
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-viandit-orange mr-2">•</span>
                <span>Deben comprometerse con un solo local de viandas</span>
              </li>
              <li className="flex items-start">
                <span className="text-viandit-orange mr-2">•</span>
                <span>Se aburren de comer siempre lo mismo</span>
              </li>
              <li className="flex items-start">
                <span className="text-viandit-orange mr-2">•</span>
                <span>Pagan más comprando viandas sueltas o usando apps de pedidos</span>
              </li>
              <li className="flex items-start">
                <span className="text-viandit-orange mr-2">•</span>
                <span>Tienen que coordinar pedidos, pagos y horarios constantemente</span>
              </li>
              <li className="flex items-start">
                <span className="text-viandit-orange mr-2">•</span>
                <span>No logran planificar sin fricción su semana de comidas</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-viandit-orange">
              Para locales
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-viandit-orange mr-2">•</span>
                <span>Tienen un buen producto, pero ventas irregulares</span>
              </li>
              <li className="flex items-start">
                <span className="text-viandit-orange mr-2">•</span>
                <span>Dependen del boca a boca o redes sociales</span>
              </li>
              <li className="flex items-start">
                <span className="text-viandit-orange mr-2">•</span>
                <span>No logran fidelizar clientes</span>
              </li>
              <li className="flex items-start">
                <span className="text-viandit-orange mr-2">•</span>
                <span>Carecen de previsibilidad en la demanda</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problema
