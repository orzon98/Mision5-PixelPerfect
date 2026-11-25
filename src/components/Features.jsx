const funciones = [
  { titulo: 'Planes con fuente', texto: 'Cada pauta apunta al artículo que la respalda.' },
  { titulo: 'Solo tu biblioteca', texto: 'La IA no busca en internet.' },
  { titulo: 'Progresión automática', texto: 'El plan se ajusta cada mes.' },
  { titulo: 'Registro rápido', texto: 'Peso y repeticiones en dos toques.' },
]

export default function Features() {
  return (
    <section id="funciones" className="mx-auto max-w-6xl px-4 py-seccion">
      <h2 className="font-display text-3xl font-bold md:text-4xl">Todo lo que necesitas</h2>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {funciones.map(({ titulo, texto }) => (
          <article
            key={titulo}
            className="group rounded-card border border-border bg-panel p-6 transition hover:-translate-y-1 hover:border-accent"
          >
            <h3 className="font-display text-xl font-bold transition group-hover:text-accent-2">{titulo}</h3>
            <p className="mt-2 text-muted">{texto}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
