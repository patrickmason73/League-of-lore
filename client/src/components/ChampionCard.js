import React from "react";
import NewComment from "./NewComment";



function ChampionCard({ champion, handleAddComment, handleDeleteComment, handleCommentUpdate, navigate }) {



    return (
        <div>
   
            <p style={{fontWeight: "800", fontSize: "130%", marginLeft: "15px", marginTop: "20px", textShadow: "0 0 1px #FF0000, 0 0 2px #0000FF", marginBottom: "0px"}}>Region:  {champion.champion_region.name}</p>
            <h1 style={{fontSize: "250%", textAlign: "center", fontFamily: "Beufort for LOL, serif", fontWeight: "800", textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF", fontStyle: "italic", letterSpacing: "0.2em", color: "CaptionText", textTransform: "uppercase", marginBottom: "15px", marginTop: "10px"}}>━{champion.name}━</h1> 
           
            <img className="champ-img" style={{display: "block", margin: "auto", transition: "background-color 300ms", backgroundColor: "ActiveBorder"}} src={champion.splash_art} alt={champion.name} ></img>
            <p style={{ textAlign: "center", fontWeight: '500', borderStyle: "groove", borderColor: "black", margin: "20px", padding: "5px", fontSize: "120%" }}>{champion.lore}</p>
            <NewComment champion={champion} handleAddComment={handleAddComment} handleDeleteComment={handleDeleteComment} handleCommentUpdate={handleCommentUpdate} navigate={navigate}/>
        </div>
    )
}

export default ChampionCard;