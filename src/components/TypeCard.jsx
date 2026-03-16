import { Link } from "react-router-dom";
import TypeInfo from "./TypeInfo";

export default function TypeCard({typeName}) 
{
    return (
        <article className={`type-${typeName} type-card`}>
            <Link to={`/types/${typeName}`} className="type-link">
            <TypeInfo name={typeName} />
            </Link>
        </article>
    )
}