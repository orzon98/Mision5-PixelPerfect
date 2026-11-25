import Boton from './Boton'

const ejercicios = [
  ['Sentadilla trasera', '4 × 6'],
  ['Press banca', '4 × 8'],
  ['Remo con barra', '3 × 10'],
]

export default function Hero() {
  return (
    <section>
      <div>
        <h1>Entrena con ciencia, no con suposiciones.</h1>
        <p>Planes de entrenamiento con IA basados solo en tu biblioteca de artículos.</p>
        <div>
          <Boton as="a" href="#empezar">Crear mi plan</Boton>
          <Boton as="a" href="#como" variante="secundario">Ver cómo funciona</Boton>
        </div>
      </div>

      {/* Maqueta de la app */}
      <div>
        <h2>Día A · Tren inferior</h2>
        <ul>
          {ejercicios.map(([nombre, series]) => (
            <li key={nombre}>
              <span>{nombre}</span> <span>{series}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}