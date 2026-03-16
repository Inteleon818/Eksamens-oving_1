import { useState, useEffect } from "react"
import TeamCard from "../components/TeamCard";

export default function Teams(){
    const [teamArray, setTeamArray] = useState()

    useEffect(()=>{
        const teams = localStorage.getItem('teams');
        setTeamArray(JSON.parse(teams));
    },[])

    console.log("Teams_teamArray: ", teamArray)

    return(
        <main className="team-cards">
            <h1>Teams</h1>
            {teamArray?.map((team) => <TeamCard key={team.name} name={team.name} />)}
        </main>
    )
}