import React, { useEffect } from "react"
import { api } from "../../services/api"

export function Home() {
    useEffect(() => {

        async function getAllPokemons() {
            const response = await api.get('/pokemon')
            /* console.log(response.data); */
            const { results } = response.data

            const payLoadPokemons = await Promise.all(
                results.map(async pokemon => {
                    const { id, types } = await getMoreInfo(pokemon.url)

                    return (
                        id, 
                        types
                    )
                })
            )
            console.log(payLoadPokemons);
        }
        getAllPokemons()
    }, [])

    async function getMoreInfo(url) {
        const response = await api.get(url)
        const {id, types} = response.data
        // img sprites: front_default, nome, move, abilities e descrição, type
        //  name, abilities, moves, sprites
        return (
            id, 
            types
        )
    }

    return (
        <> 
        teste
        </>
    )
}