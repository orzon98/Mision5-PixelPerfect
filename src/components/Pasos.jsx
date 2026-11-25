const pasos = [
  ['1', 'Cuéntanos tu objetivo', 'Entrevista inicial.'],
  ['2', 'Kinisi consulta la biblioteca', 'Con los mejores artículos.'],
  ['3', 'Entrena y registra', 'El plan se ajusta con tu progreso.'],
]

export default function Pasos() {
  return (
    <section id="como" className="border-t border-b border-border bg-panel">
      <div className="mx-auto max-w-6xl px-4 py-seccion">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Cómo funciona</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {pasos.map(([n, titulo, texto]) => (
            <li key={n} className="flex gap-4 md:flex-col">
              <span className="font-display text-5xl font-bold text-accent-2 md:text-7xl">{n}</span>
              <div>
                <h3 className="font-display text-xl font-bold">{titulo}</h3>
                <p className="mt-1 text-muted">{texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
