import React from "react";
import NewComment from "./NewComment";



function ChampionCard({ champion, handleAddComment, handleDeleteComment }) {



    return (
        <div>
            <h1 style={{fontSize: "200%", textAlign: "center", fontFamily: "fantasy"}}>{champion.name}</h1>
            <img className="champ-img" style={{display: "block", margin: "auto", transition: "background-color 300ms", backgroundColor: "ActiveBorder"}} src={champion.splash_art} alt={champion.name} ></img>
            <p style={{ textAlign: "center", fontWeight: '500', borderStyle: "groove", margin: "5px", padding: "5px" }}>{champion.lore}</p>
            <NewComment champion={champion} handleAddComment={handleAddComment} handleDeleteComment={handleDeleteComment}/>
        </div>
    )
}

export default ChampionCard;