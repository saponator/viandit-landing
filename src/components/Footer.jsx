function Footer() {
  return (
    <footer className="bg-viandit-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Viandit</h3>
            <p className="text-gray-400">
              Cuponeras digitales de viandas. Simple, flexible y accesible.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Locales adheridos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Para empresas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:contacto@viandit.com" className="hover:text-white transition-colors">
                  contacto@viandit.com
                </a>
              </li>
              <li className="text-gray-400">
                Montevideo, Uruguay
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2026 Viandit. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
