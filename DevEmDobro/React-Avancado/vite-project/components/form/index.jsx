import { useState, useEffect } from "react";

export function Form(props) {
    const [inputs, setInputs] = useState({
        image: '',
        name: '',
        suit: ''
    })

    const handleInputChange = (event) => {
        const { target } = event
        const { name } = target
        const { value } = target

        setInputs({
            image: event.target.value
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
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="image">Endereço da imagem da carta</label>
                <input type="text" id="image" name="image" onChange={handleInputChange} value={inputs.image}/>
            </div>
            <div>
                <label htmlFor="name">nome da carta</label>
                <input type="text" id="name" name="name" onChange={handleInputChange} value={inputs.image}/>
            </div>
            <div>
                <label htmlFor="suit">naipe da carta</label>
                <input type="text" id="suit" name="suit" onChange={handleInputChange} value={inputs.image}/>
            </div>
            <input type="submit" />
        </form>
    )
}