export default function ThemeToggle() {
  function alternar() {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <button
      onClick={alternar}
      aria-label="Cambiar tema"
      className="size-11 rounded-full border border-border hover:bg-panel"
    >
      <span className="dark:hidden">🌙</span>
      <span className="hidden dark:inline">☀️</span>
    </button>
  )
}