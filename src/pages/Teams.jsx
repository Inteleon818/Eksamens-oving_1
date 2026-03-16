import { useState, useEffect } from "react"
import TeamCard from "../components/TeamCard";

export default function Teams(){
    const [teamArray, setTeamArray] = useState()

    useEffect(()=>{
        //localStorage.setItem('teams', JSON.stringify(teams))
        const teams = localStorage.getItem('teams');
        setTeamArray(JSON.parse(teams));
    },[])

    console.log(teamArray)

    return(
        <main className="team-cards">
            <h1>Teams</h1>
            {teamArray?.map((team) => <TeamCard name={team.name} />)}
        </main>
    )
}