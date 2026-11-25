import Boton from './Boton'
import ThemeToggle from './ThemeToggle'

const enlaces = [
  ['Funciones', '#funciones'],
  ['Planes', '#planes'],
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <a href="#" className="font-display text-2xl font-bold text-text">
          kinisi<span className="text-accent-2">.</span>
        </a>

        <ul className="hidden gap-8 md:flex">
          {enlaces.map(([texto, href]) => (
            <li key={href}>
              <a href={href} className="text-muted transition hover:text-text focus-visible:text-text">
                {texto}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Boton>Empezar</Boton>
        </div>
      </nav>
    </header>
  )
}
