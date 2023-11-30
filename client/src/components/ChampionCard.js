import React from "react";


function ChampionCard({ champion }) {

    const displayChampComments = champion.champion_comments.map((comment) => {
        return (
            <div key={comment.id}>
                {comment.content}
            </div>
        )
    })

    return (
        <div >
            <h1 style={{fontSize: "200%", textAlign: "center"}}>{champion.name}</h1>
            <img style={{display: "block", margin: "auto", transition: "background-color 300ms"}} src={champion.splash_art} alt={champion.name} ></img>
           <> {displayChampComments} </>
        </div>
    )
}

export default ChampionCard;