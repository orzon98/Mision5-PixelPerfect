import Boton from './Boton'

const ejercicios = [
  ['Sentadilla', '4 × 6'],
  ['Extensión de cuadriceps', '3 × 8'],
  ['Femoral tumbado', '3 × 10'],
]

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-28">
      <div>
        <h1 className="font-display text-4xl leading-tight font-bold motion-safe:animate-aparecer sm:text-5xl lg:text-6xl">
          Entrena con <span className="text-accent-2">ciencia</span>, no con suposiciones.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted motion-safe:animate-aparecer">
          Planes de entrenamiento con IA basados en los mejores artículos.
        </p>
        <div className="mt-8 flex flex-col gap-3 motion-safe:animate-aparecer sm:flex-row">
          <Boton>Crear mi plan</Boton>
          <Boton variante="secundario">Ver cómo funciona</Boton>
        </div>
      </div>

      {/* Maqueta de la app */}
      <div className="rounded-card border border-border bg-panel p-6 shadow-xl motion-safe:animate-aparecer">
        <h2 className="font-display text-2xl font-bold">Día A · Tren inferior</h2>
        <ul className="mt-4">
          {ejercicios.map(([nombre, series]) => (
            <li key={nombre} className="flex justify-between border-b border-border py-3">
              <span>{nombre}</span>
              <span className="font-display font-bold text-accent-2">{series}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
