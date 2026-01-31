# Viandit Landing

Landing page para Viandit - Sistema de cuponeras digitales de viandas.

## 🚀 Inicio rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build para producción

```bash
npm run build
```

### Preview del build

```bash
npm run preview
```

## 🎨 Diseño

- **Color principal**: Naranja (#FF6B35)
- **Texto**: Blanco (en fondos naranjas)
- **Botones**: Negro (#1A1A1A)
- **Enfoque**: Mobile-first, diseño responsive

## 📱 Estructura

- `src/components/` - Componentes React de la landing
  - `Hero.jsx` - Sección principal
  - `Problema.jsx` - Problema que resuelve
  - `PropuestaValor.jsx` - Propuesta de valor
  - `ParaQuienEs.jsx` - Audiencias objetivo
  - `CTA.jsx` - Call to action
  - `Footer.jsx` - Pie de página

## 🛠️ Tecnologías

- React 18
- Vite
- Tailwind CSS

## 📦 Despliegue en GitHub Pages

### Configuración automática (recomendado)

El proyecto está configurado para desplegarse automáticamente en GitHub Pages cuando hagas push a la rama `main` o `master`.

1. **Habilita GitHub Pages en tu repositorio:**
   - Ve a Settings → Pages
   - En "Source", selecciona "GitHub Actions"

2. **Haz push de tu código:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **El workflow se ejecutará automáticamente** y tu sitio estará disponible en:
   `https://[tu-usuario].github.io/viandit-landing/`

### Configuración manual

Si prefieres desplegar manualmente:

```bash
# Build del proyecto
npm run build

# El contenido estará en la carpeta dist/
# Puedes subirlo manualmente a la rama gh-pages
```

### Nota importante

**Configuración del base path:**

- Si tu repositorio se llama `viandit-landing`, ya está configurado correctamente.
- Si tu repositorio tiene otro nombre, tienes dos opciones:

  1. **Opción 1 (recomendada):** Crea un archivo `.env.production` en la raíz del proyecto:
     ```
     VITE_BASE_PATH=/tu-nombre-repo/
     ```

  2. **Opción 2:** Edita `vite.config.js` y cambia el valor por defecto en `getBasePath()`.

- Si tu repositorio está en la raíz de tu usuario (ej: `usuario.github.io`), el base path debe ser `/` (sin subdirectorio).
