import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Determinar el base path para GitHub Pages
// Si tienes un repositorio en la raíz (ej: username.github.io), usa '/'
// Si tienes un repositorio con nombre (ej: username.github.io/repo-name), usa '/repo-name/'
const getBasePath = () => {
  // Puedes cambiar esto por el nombre de tu repositorio
  // O usar una variable de entorno: process.env.VITE_BASE_PATH || '/viandit-landing/'
  return process.env.VITE_BASE_PATH || '/viandit-landing/'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? getBasePath() : '/',
})
