import React from "react";
import ChampionCard from "./ChampionCard";


function Home({ champions }) {

    const displayChamps = champions.map((champion) => {
        return (
        <article key={champion.id} style={{}}>
        <ChampionCard champion={champion} />
        </article> 
        )
    })

    return (
        <div>
            {displayChamps}
        </div>
    )
}

export default Home;