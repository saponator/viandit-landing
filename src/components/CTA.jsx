function CTA() {
  return (
    <section className="py-16 px-6 bg-viandit-orange text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para empezar?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Comprá tu cuponera ahora y disfrutá de la flexibilidad que buscás
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-viandit-black text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors w-full sm:w-auto">
            Comprar cuponera
          </button>
          <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-white hover:text-viandit-orange transition-colors w-full sm:w-auto">
            Contactar para empresas
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA
