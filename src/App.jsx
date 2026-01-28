import Hero from './components/Hero'
import ComoFuncionaConsumidores from './components/ComoFuncionaConsumidores'
import LinksOtrasSecciones from './components/LinksOtrasSecciones'
import ComoFuncionaLocales from './components/ComoFuncionaLocales'
import ComoFuncionaEmpresas from './components/ComoFuncionaEmpresas'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ComoFuncionaConsumidores />
      <LinksOtrasSecciones />
      <ComoFuncionaLocales />
      <ComoFuncionaEmpresas />
      <Footer />
    </div>
  )
}

export default App
