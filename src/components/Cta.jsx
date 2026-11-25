import { useState } from 'react'
import Boton from './Boton'

export default function Cta() {
  const [enviado, setEnviado] = useState(false)

  function enviar(e) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section id="empezar" className="mx-auto max-w-6xl px-4 pb-seccion">
      <div className="rounded-card bg-accent p-8 text-white md:p-14">
        <h2 className="font-display text-3xl font-bold md:text-5xl">Tu próximo plan, con bibliografía</h2>
        {enviado ? (
          <p role="status" className="mt-6 text-lg">¡Hecho! Te escribiremos pronto.</p>
        ) : (
          <form onSubmit={enviar} className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <label htmlFor="email" className="sr-only">Correo electrónico</label>
            <input
              id="email"
              type="email"
              required
              placeholder="tu@correo.com"
              className="flex-1 rounded-lg bg-white px-4 py-2 text-gray-900 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
            />
            <Boton variante="secundario">Avísame</Boton>
          </form>
        )}
      </div>
    </section>
  )
}
