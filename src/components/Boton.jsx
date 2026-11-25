export default function Boton({ children, variante = 'primario', className = '' }) {
  const base =
    'cursor-pointer rounded-lg px-5 py-2 font-semibold transition active:scale-95 ' +
    'focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:outline-hidden'

  const variantes = {
    primario: 'bg-accent text-white hover:brightness-110',
    secundario: 'bg-panel text-text border border-border hover:border-accent',
  }

  return <button className={`${base} ${variantes[variante]} ${className}`}>{children}</button>
}
