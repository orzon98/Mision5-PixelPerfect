export default function Boton({ children, variante = 'primario' }) {
    const base = 'px-4 py-2 rounded-lg transition'
    const variantes = {
        primario: 'bg-blue-500 text-white hover:bg-blue-700',    // tus clases
        secundario: 'bg-gray-200',
    }

    return <button className={`${base} ${variantes[variante]}`}>{children}</button>
}