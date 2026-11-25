const funciones = [
  { titulo: 'Planes con fuente', texto: 'Cada pauta apunta al artículo que la respalda.' },
  { titulo: 'Solo tu biblioteca', texto: 'La IA no busca en internet.' },
  { titulo: 'Progresión automática', texto: 'El plan se ajusta cada semana.' },
  { titulo: 'Registro rápido', texto: 'Peso y repeticiones en dos toques.' },
]

export default function Features() {
  return (
    <section id="funciones">
      <h2>Todo lo que necesitas</h2>
      <div>
        {funciones.map(({ titulo, texto }) => (
          <article key={titulo}>
            <h3>{titulo}</h3>
            <p>{texto}</p>
          </article>
        ))}
      </div>
    </section>
  )
}