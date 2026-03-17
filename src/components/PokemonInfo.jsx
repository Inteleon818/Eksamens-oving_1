export default function PokemonInfo({id, name, sprite}) 
{
    return (
        <>
        <h3>{name}</h3>
        <img src={sprite} alt={name} />
        <p>#{id}</p>
        </>
    )
}