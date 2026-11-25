import { useState } from 'react'
import Boton from './Boton'

export default function Cta() {
  const [enviado, setEnviado] = useState(false)

  function enviar(e) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section id="empezar">
      <h2>Tu próximo plan, con bibliografía</h2>
      {enviado ? (
        <p role="status">¡Hecho! Te escribiremos pronto.</p>
      ) : (
        <form onSubmit={enviar}>
          <label htmlFor="email">Correo electrónico</label> {/* añádele sr-only */}
          <input id="email" type="email" required placeholder="tu@correo.com" />
          <Boton type="submit">Avísame</Boton>
        </form>
      )}
    </section>
  )
}