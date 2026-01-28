function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-viandit-orange text-white min-h-screen flex flex-col justify-center items-center px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Viandit
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
          Comé cuando quieras, elegí entre distintos locales, pagá menos.
        </p>
        <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto">
          Cuponeras digitales de viandas. Simple, flexible y accesible.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('como-funciona')}
            className="bg-viandit-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors w-full sm:w-auto"
          >
            Cómo funciona
          </button>
          <button
            onClick={() => scrollToSection('como-funciona')}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-viandit-orange transition-colors w-full sm:w-auto"
          >
            Comprar cuponera
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
