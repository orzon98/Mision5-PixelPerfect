export default function ThemeToggle() {
  function alternar() {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <button
      onClick={alternar}
      aria-label="Cambiar tema"
      className="size-11 cursor-pointer rounded-full border border-border transition hover:bg-panel focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:outline-hidden"
    >
      <span className="dark:hidden">🌙</span>
      <span className="hidden dark:inline">☀️</span>
    </button>
  )
}
