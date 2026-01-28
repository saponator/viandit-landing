import { useState, useEffect } from 'react'

function HeroBackground() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Determinar cuántos elementos mostrar según el tamaño de pantalla
  const getElementCount = () => {
    if (windowWidth < 640) {
      // Mobile: menos elementos
      return { naranjas: 6, zanahorias: 5, lechugas: 5 }
    } else if (windowWidth < 1024) {
      // Tablet: cantidad media
      return { naranjas: 10, zanahorias: 9, lechugas: 9 }
    } else {
      // Desktop: todos los elementos
      return { naranjas: 18, zanahorias: 17, lechugas: 17 }
    }
  }

  // Iconos SVG minimalistas - solo naranja, zanahoria y lechuga
  const crearHuevo = (size, opacity) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 120" width={size} height={size} fill="none" style={{ opacity }}>
      <path
        d="M70 14
          C58 10,46 14,38 24
          C30 34,20 36,16 48
          C12 60,18 72,30 76
          C38 78,40 90,52 96
          C64 102,74 108,86 102
          C96 98,100 88,110 84
          C124 78,130 66,124 54
          C120 44,110 42,106 34
          C100 22,86 16,70 14 Z"
        fill="none"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <ellipse
        cx="74"
        cy="62"
        rx="18"
        ry="14"
        fill="none"
        stroke="white"
        stroke-width="3"
      />
    </svg>
  )

  const crearZanahoria = (size, opacity) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 140" width={size} height={size} fill="none" style={{ opacity }}>
      <path
        d="M50 20
          C40 35,30 55,28 75
          C26 100,38 120,50 135
          C62 120,74 100,72 75
          C70 55,60 35,50 20 Z"
        fill="none"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <path
        d="M50 20
          C45 10,35 8,32 14
          C38 14,42 18,46 24"
        fill="none"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />

      <path
        d="M50 20
          C55 10,65 8,68 14
          C62 14,58 18,54 24"
        fill="none"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  )



  const crearLechuga = (size, opacity) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 140" width={size} height={size} fill="none" style={{ opacity }}>
      <path
        d="M50 132
          C72 132,78 102,74 72
          C70 36,56 18,50 18
          C44 18,30 36,26 72
          C22 102,28 132,50 132 Z"
        fill="none"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <ellipse
        cx="50"
        cy="78"
        rx="13"
        ry="17"
        fill="none"
        stroke="white"
        stroke-width="3"
      />
    </svg>
  )

  // Generar múltiples instancias con diferentes tamaños y posiciones
  const elementos = []
  const counts = getElementCount()

  // Naranjas - diferentes tamaños y opacidades (todos los disponibles)
  const todasNaranjas = [
    { size: 45, opacity: 0.18, top: '8%', left: '3%', rotate: '12deg' },
    { size: 60, opacity: 0.15, top: '15%', right: '5%', rotate: '-18deg' },
    { size: 50, opacity: 0.20, top: '25%', left: '8%', rotate: '25deg' },
    { size: 40, opacity: 0.16, top: '35%', right: '10%', rotate: '-15deg' },
    { size: 55, opacity: 0.18, top: '12%', left: '45%', rotate: '8deg' },
    { size: 48, opacity: 0.17, top: '45%', left: '2%', rotate: '-22deg' },
    { size: 52, opacity: 0.19, top: '55%', right: '4%', rotate: '20deg' },
    { size: 43, opacity: 0.15, top: '65%', left: '6%', rotate: '-10deg' },
    { size: 58, opacity: 0.18, top: '75%', right: '8%', rotate: '15deg' },
    { size: 46, opacity: 0.16, top: '30%', right: '28%', rotate: '-25deg' },
    { size: 50, opacity: 0.17, top: '50%', left: '22%', rotate: '18deg' },
    { size: 44, opacity: 0.19, top: '70%', left: '18%', rotate: '-12deg' },
    { size: 56, opacity: 0.16, top: '20%', left: '65%', rotate: '22deg' },
    { size: 49, opacity: 0.18, top: '40%', right: '35%', rotate: '-20deg' },
    { size: 47, opacity: 0.15, top: '60%', left: '55%', rotate: '14deg' },
    { size: 51, opacity: 0.17, top: '80%', right: '25%', rotate: '-16deg' },
    { size: 45, opacity: 0.19, top: '5%', left: '25%', rotate: '10deg' },
    { size: 53, opacity: 0.16, top: '85%', left: '35%', rotate: '-8deg' },
  ]

  // Zanahorias - diferentes tamaños y opacidades (todos los disponibles)
  const todasZanahorias = [
    { size: 50, opacity: 0.18, top: '10%', left: '12%', rotate: '-15deg' },
    { size: 65, opacity: 0.16, top: '22%', right: '7%', rotate: '20deg' },
    { size: 55, opacity: 0.19, top: '32%', left: '5%', rotate: '-25deg' },
    { size: 48, opacity: 0.17, top: '42%', right: '12%', rotate: '18deg' },
    { size: 60, opacity: 0.18, top: '18%', left: '52%', rotate: '-10deg' },
    { size: 52, opacity: 0.16, top: '48%', left: '4%', rotate: '22deg' },
    { size: 58, opacity: 0.17, top: '58%', right: '6%', rotate: '-18deg' },
    { size: 50, opacity: 0.19, top: '68%', left: '10%', rotate: '15deg' },
    { size: 62, opacity: 0.15, top: '78%', right: '10%', rotate: '-12deg' },
    { size: 54, opacity: 0.18, top: '28%', right: '32%', rotate: '25deg' },
    { size: 49, opacity: 0.17, top: '52%', left: '28%', rotate: '-20deg' },
    { size: 56, opacity: 0.16, top: '72%', left: '22%', rotate: '12deg' },
    { size: 59, opacity: 0.18, top: '38%', left: '70%', rotate: '-22deg' },
    { size: 51, opacity: 0.19, top: '62%', right: '38%', rotate: '16deg' },
    { size: 57, opacity: 0.15, top: '82%', right: '30%', rotate: '-14deg' },
    { size: 53, opacity: 0.17, top: '14%', left: '30%', rotate: '8deg' },
    { size: 55, opacity: 0.18, top: '88%', left: '42%', rotate: '-9deg' },
  ]

  // Lechugas - diferentes tamaños y opacidades (todos los disponibles)
  const todasLechugas = [
    { size: 60, opacity: 0.20, top: '6%', left: '18%', rotate: '15deg' },
    { size: 70, opacity: 0.18, top: '20%', right: '15%', rotate: '-20deg' },
    { size: 65, opacity: 0.19, top: '30%', left: '15%', rotate: '25deg' },
    { size: 58, opacity: 0.17, top: '38%', right: '18%', rotate: '-15deg' },
    { size: 68, opacity: 0.20, top: '16%', left: '58%', rotate: '10deg' },
    { size: 62, opacity: 0.18, top: '44%', left: '12%', rotate: '-22deg' },
    { size: 66, opacity: 0.19, top: '54%', right: '14%', rotate: '18deg' },
    { size: 64, opacity: 0.16, top: '64%', left: '14%', rotate: '-12deg' },
    { size: 72, opacity: 0.17, top: '74%', right: '16%', rotate: '22deg' },
    { size: 60, opacity: 0.19, top: '26%', right: '40%', rotate: '-18deg' },
    { size: 68, opacity: 0.18, top: '46%', left: '35%', rotate: '14deg' },
    { size: 65, opacity: 0.20, top: '66%', left: '28%', rotate: '-16deg' },
    { size: 70, opacity: 0.17, top: '34%', left: '75%', rotate: '20deg' },
    { size: 63, opacity: 0.19, top: '56%', right: '42%', rotate: '-14deg' },
    { size: 69, opacity: 0.18, top: '76%', right: '35%', rotate: '12deg' },
    { size: 61, opacity: 0.16, top: '4%', left: '38%', rotate: '-8deg' },
    { size: 67, opacity: 0.17, top: '86%', left: '48%', rotate: '9deg' },
  ]

  // Seleccionar solo los elementos necesarios según el tamaño de pantalla
  const naranjas = todasNaranjas.slice(0, counts.naranjas)
  const zanahorias = todasZanahorias.slice(0, counts.zanahorias)
  const lechugas = todasLechugas.slice(0, counts.lechugas)

  // Combinar todos los elementos
  naranjas.forEach((item, index) => {
    elementos.push({ tipo: 'naranja', ...item, key: `naranja-${index}` })
  })

  zanahorias.forEach((item, index) => {
    elementos.push({ tipo: 'zanahoria', ...item, key: `zanahoria-${index}` })
  })

  lechugas.forEach((item, index) => {
    elementos.push({ tipo: 'lechuga', ...item, key: `lechuga-${index}` })
  })

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elementos.map((elemento) => {
        let icono
        if (elemento.tipo === 'naranja') {
          icono = crearHuevo(elemento.size, elemento.opacity)
        } else if (elemento.tipo === 'zanahoria') {
          icono = crearZanahoria(elemento.size, elemento.opacity)
        } else if (elemento.tipo === 'lechuga') {
          icono = crearLechuga(elemento.size, elemento.opacity)
        }

        return (
          <div
            key={elemento.key}
            className="absolute"
            style={{
              top: elemento.top,
              left: elemento.left,
              right: elemento.right,
              transform: `rotate(${elemento.rotate})`,
            }}
          >
            {icono}
          </div>
        )
      })}
    </div>
  )
}

export default HeroBackground
