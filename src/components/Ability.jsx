import { useEffect, useState } from "react"

export default function Ability({url}) 
{
    const[ability, setAbility] = useState()

    const getAbility = async()=>{
        const response = await fetch(url)
        const data = await response.json()
        setAbility(data)
    }

    console.log("Ability_ability: ", ability)

    useEffect(()=>{
        getAbility()
    },[])

    return (
        <article>
            <p>{ability?.name}</p>
            {/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at*/}
            <p>{ability?.effect_entries.at(-1)?.effect}</p>
        </article>
    )
}