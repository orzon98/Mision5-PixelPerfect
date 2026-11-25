const pasos = [
  ['1', 'Cuéntanos tu objetivo', 'Fuerza, hipertrofia o salud.'],
  ['2', 'Kinisi consulta la biblioteca', 'Solo con los artículos cargados.'],
  ['3', 'Entrena y registra', 'El plan se ajusta con tu progreso.'],
]

export default function Pasos() {
  return (
    <section id="como">
      <h2>Cómo funciona</h2>
      <ol>
        {pasos.map(([n, titulo, texto]) => (
          <li key={n}>
            <span>{n}</span>
            <h3>{titulo}</h3>
            <p>{texto}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}