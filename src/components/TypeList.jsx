import { Link } from "react-router-dom"
import "../styles/types.scss"
import Type from "../pages/Type"
import TypeCard from "./TypeCard"

export default function TypeList({types}){
    const typesToUse = types?.filter((type) => type.name !== "unknown" && type.name !== "stellar")  

    console.log("TypeList_typesToUse: ", typesToUse?.map((type) => type.name))
    return (
        <section className="flex">
            <h2>Types</h2>
            {typesToUse?.map((type) => (<TypeCard key={type?.name} typeName={type?.name} />))}
        </section>
    )
}