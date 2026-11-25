export default function ThemeToggle() {
  function alternar() {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <button onClick={alternar} aria-label="Cambiar tema">
      🌙
    </button>
  )
}