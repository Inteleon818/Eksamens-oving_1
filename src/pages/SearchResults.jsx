import { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import PokemonCard from "../components/PokemonCard"
export default function SearchResults(){
   
    const {searchQuery} = useOutletContext()
    const [searchResults, setSearchResults] = useState()

    const searchUrl = `https://pokeapi.co/api/v2/pokemon/${searchQuery}`

    const getSearchResults = async()=>{
        try{
            const res = await fetch(searchUrl)
            const data = await res.json()
            setSearchResults(data)
            console.log(data)
        
        }catch(err){
            console.log(err)
        }
    }

    console.log("SearchResults_searchQuery: ", searchQuery)
    console.log("SearchResults_searchResults: ", searchResults);

    useEffect(()=>{
        getSearchResults();
    },[searchQuery])

    const pokemonDef = {
        name: searchResults?.name,
        id: searchResults?.id,
        sprites: searchResults?.sprites
    }

    return (
        <main>
            <PokemonCard pokemonDef={pokemonDef}/>
        </main>
    )
}