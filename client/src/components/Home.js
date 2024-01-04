import React, { useState } from "react";
import ChampionCard from "./ChampionCard";


function Home({ champions, handleAddComment, handleDeleteComment, handleCommentUpdate, navigate }) {
    const [category, setCategory] = useState("None")

    const displayChamps = champions.map((champion) => {
        if (category === "None") {
        return (
        <article key={champion.id} style={{backgroundImage: "linear-gradient(to right, #fc5c7d, #6a82fb)", paddingBottom: "15px", paddingTop: '10px', marginBottom: "30px", display: "block"}}>
        <ChampionCard champion={champion} handleAddComment={handleAddComment} handleDeleteComment={handleDeleteComment} handleCommentUpdate={handleCommentUpdate} navigate={navigate}/>
        </article> 
        )
        } else {
            return (
                <>
                {champion.champion_region.name === category ?
                <article key={champion.id} style={{backgroundImage: "linear-gradient(to right, #fc5c7d, #6a82fb)", paddingBottom: "15px", paddingTop: '10px', marginBottom: "30px", display: "block"}}>
                <ChampionCard champion={champion} handleAddComment={handleAddComment} handleDeleteComment={handleDeleteComment} handleCommentUpdate={handleCommentUpdate} navigate={navigate}/>
                </article>
                :null} </>
           )
        }
    })

    function onlyUnique(value, index, array) {
        return array.indexOf(value) === index;
      }
      

    const regions = champions.map((champ) => {
        return champ.champion_region.name
    })

    const unique_regions = regions.filter(onlyUnique)


    const region_sort = unique_regions.map((region) => {
        return (
            <button className="button-glow" key={region} onClick={() => setCategory(region)}>{region}</button>
        )
    })

    return (
     <div>
        <div style={{position: "fixed", backgroundColor: "black", width: "100%", textAlign: "center", borderLeft: "groove", borderRight: "groove", borderBottom: "groove", borderColor: "black", paddingBottom: "5px", borderBottomWidth: "5px", zIndex: "+1" }}>{region_sort}<button className="button-glow" onClick={() => setCategory("None")}>All Regions</button></div>
        <div style={{paddingTop: "10px"}}> 
            {displayChamps}
        </div>
     </div>
    )
}

export default Home;