import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"
import '../styles/types.scss'
import TypeCard from "../components/TypeCard"
import Ability from "../components/Ability"
export default function Pokemon(){

    const {pokemon} = useParams()
    const [pokemonInfo, setPokemonInfo] = useState()
    const getPokemon = async()=>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = await response.json()
        setPokemonInfo(data)
    }
    useEffect(()=>{
        getPokemon()
    },[pokemon])

    console.log("Pokemon_pokemonInfo", pokemonInfo)
    console.log("Pokemon_pokemonInfo.types", pokemonInfo?.types)

    return (
        <main className="pokemon-main">
            <h1 className="pokemon-name-and-id">{pokemonInfo?.name} #{pokemonInfo?.id}</h1>
            <p className="pokemon-type-title">type(s)</p>
            <figure className={`type-${pokemonInfo?.types[0]?.type?.name} pokemon-image`}>
                <img src={pokemonInfo?.sprites?.other?.["official-artwork"]?.front_default} alt={pokemonInfo?.name} />
            </figure>
            <section className="pokemon-types">
                {pokemonInfo?.types?.map((type) => (<TypeCard key={type?.type?.name} typeName={type?.type?.name} />))}
            </section>
            <section className="pokemon-stats">
                <h3>Stats</h3>
                <ul>
                    {pokemonInfo?.stats?.map((stat) => <li key={stat?.stat?.name + stat?.base_stat}>{stat?.stat?.name + ": " + stat?.base_stat}</li>)}
                </ul>
            </section>
            <section className="pokemon-abilities">
                <h3>Abilities</h3>
                {pokemonInfo?.abilities?.map((ability) => <Ability key={ability?.ability?.name} url={ability?.ability?.url}/>)}
            </section>
        </main>
    )
}