import React from "react";
import ChampionCard from "./ChampionCard";


function Home({ champions, handleAddComment }) {

    const displayChamps = champions.map((champion) => {
        return (
        <article key={champion.id} style={{backgroundColor: "lightgray", paddingBottom: "15px", paddingTop: '10px', marginBottom: "15px", display: "block"}}>
        <ChampionCard champion={champion} handleAddComment={handleAddComment}/>
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