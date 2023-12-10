import React from "react";
import ChampionCard from "./ChampionCard";


function Home({ champions, handleAddComment, handleDeleteComment, handleCommentUpdate, errors }) {

    const displayChamps = champions.map((champion) => {
        return (
        <article key={champion.id} style={{backgroundColor: "lightgray", paddingBottom: "15px", paddingTop: '10px', marginBottom: "15px", display: "block"}}>
        <ChampionCard champion={champion} handleAddComment={handleAddComment} handleDeleteComment={handleDeleteComment} handleCommentUpdate={handleCommentUpdate} errors={errors}/>
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