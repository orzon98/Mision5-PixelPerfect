import Boton from './Boton'

const planes = [
  { nombre: 'Gratis', precio: '0 €', items: ['1 plan activo', 'Registro básico'] },
  { nombre: 'Pro', precio: '9 €', items: ['Planes ilimitados', 'Tu biblioteca'], destacado: true },
  { nombre: 'Equipo', precio: '19 €', items: ['Todo lo de Pro', 'Hasta 20 atletas'] },
]

export default function Planes() {
  return (
    <section id="planes" className="mx-auto max-w-6xl px-4 py-seccion">
      <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Planes</h2>
      <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3 md:items-center">
        {planes.map(({ nombre, precio, items, destacado }) => (
          <article
            key={nombre}
            className={`rounded-card border bg-panel p-6 ${
              destacado ? 'border-accent shadow-xl md:py-12' : 'border-border'
            }`}
          >
            <h3 className="font-display text-xl font-bold">{nombre}</h3>
            <p className="mt-4 font-display text-4xl font-bold">
              {precio} <span className="text-base font-normal text-muted">/mes</span>
            </p>
            <ul className="mt-4 mb-6 flex flex-col gap-2 text-muted">
              {items.map((i) => (
                <li key={i}>✓ {i}</li>
              ))}
            </ul>
            <Boton variante={destacado ? 'primario' : 'secundario'} className="w-full">
              Elegir {nombre}
            </Boton>
          </article>
        ))}
      </div>
    </section>
  )
}
