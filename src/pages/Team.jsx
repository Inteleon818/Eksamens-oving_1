import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PokemonCard from "../components/PokemonCard";

export default function Team() 
{
    const [teamArray, setTeamArray] = useState()

    const {team} = useParams()

    useEffect(()=>{
        const teams = localStorage.getItem('teams');
        setTeamArray(JSON.parse(teams));
    },[])

    return (
        <main>
            <h1>Team {team}</h1>
            <h2>Pokemon</h2>
            <section className="flex">
                {teamArray?.map((listTeam) => listTeam.name === team ? (listTeam.pokemons.map((pokemon) => <PokemonCard pokemonUrl={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`} />)): null)}
            </section>
        </main>
    )
}