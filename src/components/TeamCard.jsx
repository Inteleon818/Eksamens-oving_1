export default function TeamCard({name}) 
{
    return (
        <>
        <article key={name} className="team-card">
            <h3>{name}</h3>
            <img src={`/teams/Team_${name}.webp`} alt={name}></img>
        </article>
        </>
    )
}