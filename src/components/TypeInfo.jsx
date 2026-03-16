export default function TypeInfo({name}) 
{
    return (
        <>
        <img src={`type_img/${name}.png`} alt={name} />
        <p>{name}</p>
        </>
    )
}