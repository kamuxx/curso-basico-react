# Curso Básico React + Tailwind

Proyecto de práctica para aprender conceptos básicos de React con Tailwind CSS usando Vite.

## 📚 ¿Qué aprenderás?
- Nociones básicas de React: componentes funcionales, JSX.
- Creación de componentes reutilizables (Button, TaskCard, TaskForm).
- Uso de estado local con `useState` y efectos con `useEffect`.
- Manejo de contexto global con `Context API` y hooks personalizados (`useTaskContext`).
- Maquetación y estilos con Tailwind CSS (clases utilitarias, safelist para clases dinámicas).

## 🧰 Tecnologías
- React 19
- Vite (Dev server)
- Tailwind CSS
- ESLint (análisis estático)

## 🗂 Estructura principal
- `src/` - Código fuente
- `src/compontents/` - Componentes del proyecto
- `src/context/TaskContext.jsx` - Contexto para tareas (Provider y hook)
- `src/pages/TaskList.jsx` - Página principal con listado y formulario
- `src/tasks.js` - Datos de ejemplo

## 🚀 Ejecutar el proyecto
1. Instalar dependencias:
```bash
npm install
```
2. Levantar servidor de desarrollo:
```bash
npm run dev
```
3. Construir para producción:
```bash
npm run build
```
4. Previsualizar producción:
```bash
npm run preview
```

## ⛑️ Notas y buenas prácticas
- Usa clases estáticas para Tailwind cuando necesites colores dinámicos (mapear colores a clases predefinidas) para evitar purgado en producción.
- Usa el hook `useTaskContext()` para consumir el contexto; aportará mensajes de error claros si se usa fuera del Provider.
- Mantén una única fuente de verdad para `tasks` dentro del Provider (no dupliques estados localmente en componentes que consumen el contexto).

## 🔍 Glosario
- **Context API**: API de React para compartir datos entre componentes sin pasar props manualmente.
- **useState/useEffect**: Hooks de React para estado y efectos secundarios.
- **Tailwind CSS**: Framework de utilidades CSS para diseño rápido.

---
Si quieres, puedo:
- Añadir PropTypes o migrar a TypeScript.
- Añadir tests básicos para `TaskForm` y `TaskList`.
- Estandarizar la API del `TaskContext` (por ejemplo, usar solo `tasks` y funciones CRUD desde el Provider).

