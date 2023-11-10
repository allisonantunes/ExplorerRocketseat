export function Button({label}) {
    const alerta = () => {
        alert(`essa é a label: ${label}`)
    }
    return (
    <button onClick={alerta}>
        {label}
    </button>)
}
Button.defaultProps = {
    label: 'Clique aqui'
}