import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"

export const Card = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div style={{color: theme.color, background: theme.background}}>
            <h1>titulo do card</h1>
            <p>paragrafo card</p>
        </div>
    )
}