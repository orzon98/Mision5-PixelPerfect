import Boton from './Boton'
import ThemeToggle from './ThemeToggle'

const enlaces = [
  ['Funciones', '#funciones'],
  ['Cómo funciona', '#como'],
  ['Planes', '#planes'],
]

export default function Navbar() {
  return (
    <header>
      <nav aria-label="Principal">
        <a href="#">kinisi</a>

        <ul>
          {enlaces.map(([texto, href]) => (
            <li key={href}><a href={href}>{texto}</a></li>
          ))}
        </ul>

        <div>
          <ThemeToggle />
          <Boton as="a" href="#empezar">Empezar</Boton>
        </div>
      </nav>
    </header>
  )
}