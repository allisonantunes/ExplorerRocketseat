import { useState, useEffect } from "react";

export const Form = (props) => {
    const [inputs, setInputs] = useState({
        image: '',
        value: '',
        suit: ''
    })

    const handleInputChange = (event) => {
        const { target } = event
        const { name } = target
        const { value } = target
        // como se fosse: event.target.value = value

        setInputs({
            ...inputs,
            [name]: value
        })
    }

/*     const handleInputChange = (event) => {
        setInputs({
            image: event.target.value
        })
    } */

    const handleSubmit = (event) => {
        // para nao atualizar a pagina
        event.preventDefault()
        props.addCard(inputs)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="image">Endereço da imagem da carta</label>
                <input type="text" id="image" name="image" onChange={handleInputChange} value={inputs.image}/>
            </div>
            <div>
                <label htmlFor="value">nome da carta</label>
                <input type="text" id="name" name="value" onChange={handleInputChange} value={inputs.value}/>
            </div>
            <div>
                <label htmlFor="suit">naipe da carta</label>
                <input type="text" id="suit" name="suit" onChange={handleInputChange} value={inputs.suit}/>
            </div>
            <input type="submit" />
        </form>
        </>
        
    )
}