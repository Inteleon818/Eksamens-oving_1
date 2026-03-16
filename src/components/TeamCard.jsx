import { Link } from "react-router-dom";

export default function TeamCard({name}) 
{
    return (
        <article key={name} className="team-card">
            <Link to={`/teams/${name}`} className="team-link">
            <h3>Team {name}</h3>
            <img src={`/teams/Team_${name}.webp`} alt={name}></img>
            </Link>
        </article>
    )
}