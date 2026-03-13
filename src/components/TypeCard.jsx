import { Link } from "react-router-dom";

export default function TypeCard({typeName}) 
{
    return (
        <article className={`type-${typeName} type-card`}>
            <Link to={`/types/${typeName}`} className="type-link">
            {/*Gjør om til en kompnent*/} 
            <p>{typeName}</p>
            <img src={`type_img/${typeName}.png`} alt={typeName} />
            </Link>
        </article>
    )
}