import React from "react";
import ChampionCard from "./ChampionCard";


function Home({ champions }) {

    const displayChamps = champions.map((champion) => {
        return (
        <article key={champion.id} style={{backgroundColor: "lightgray", paddingBottom: "15px"}}>
        <ChampionCard champion={champion} />
        </article> 
        )
    })

    return (
        <div style={{margin: "5px"}}>
            {displayChamps}
        </div>
    )
}

export default Home;