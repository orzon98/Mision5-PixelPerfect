import Boton from './Boton'

const planes = [
  { nombre: 'Gratis', precio: '0 €', items: ['1 plan activo', 'Registro básico'] },
  { nombre: 'Pro', precio: '9 €', items: ['Planes ilimitados', 'Tu biblioteca'], destacado: true },
  { nombre: 'Equipo', precio: '19 €', items: ['Todo lo de Pro', 'Hasta 20 atletas'] },
]

export default function Planes() {
  return (
    <section id="planes">
      <h2>Planes</h2>
      <div>
        {planes.map(({ nombre, precio, items, destacado }) => (
          <article key={nombre}>   {/* usa `destacado` para cambiar estilos */}
            <h3>{nombre}</h3>
            <p>{precio} /mes</p>
            <ul>
              {items.map((i) => <li key={i}>{i}</li>)}
            </ul>
            <Boton as="a" href="#empezar" variante={destacado ? 'primario' : 'secundario'}>
              Elegir {nombre}
            </Boton>
          </article>
        ))}
      </div>
    </section>
  )
}