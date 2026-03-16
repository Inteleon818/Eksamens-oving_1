import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PokemonInfo from "./PokemonInfo"
export default function PokemonCard({pokemonUrl, pokemonDef, classN}){
    const [pokemon, setPokemon] = useState()

    const getPokemon = async() =>
    {
        const response = await fetch(pokemonUrl)
        const data = await response.json()
        setPokemon(data)
    }

    console.log("PokemonCard_pokemon: ", pokemon)

    useEffect(()=>{
        pokemonDef ? setPokemon(pokemonDef) : getPokemon()
    },[pokemonDef])
    
    return (
        <article className={`pokemon-card type-${classN}`}>
            <Link to={`/pokemons/${pokemon?.id}`} className="pokemon-link">
            <PokemonInfo id={pokemon?.id}  name={pokemon?.name} sprite={pokemon?.sprites?.front_default} /> 
            </Link>
        </article>

    )
}