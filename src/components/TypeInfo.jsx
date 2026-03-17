export default function TypeInfo({name}) 
{
    console.log("TypeInfo_name: ", name)

    return (
        <>
        <img src={`/type_img/${name}.png`} alt={name} />
        <p>{name}</p>
        </>
    )
}