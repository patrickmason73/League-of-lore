import React, {useEffect, useState} from "react";
import ChampionCard from "./ChampionCard";


function Search({ champions, handleAddComment, searchText, setSearchText, handleDeleteComment }) {
  // const [text, setText] = useState("")
  const [champion, setChampion] = useState()

  function handleSubmit(e) {
    e.preventDefault();
    setChampion(champions.find((champ) => champ.name.toLowerCase() === searchText.toLowerCase()))
   }

  useEffect(() => {
    setChampion(champions.find((champ) => champ.name.toLowerCase() === searchText.toLowerCase()))
  }, [champions])

    return (
        <div style={{backgroundColor: "lightgray", paddingTop: "20px", paddingBottom: "100px"}}>
            <form onSubmit={handleSubmit} style={{textAlign: "center"}}>
                <label style={{fontWeight: "500", fontSize: "125%"}}>
                    <u>Search By Champion Name: </u>
                    <input type="text" placeholder="Search..." id="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} style={{margin: "10px", fontSize: "125%"}}></input>
                </label>
               <button type="submit" style={{fontSize: "140%"}}>Search</button>
            </form>
            <div >
              {champion ? <ChampionCard champion={champion} handleAddComment={handleAddComment} handleDeleteComment={handleDeleteComment}/> : <p style={{textAlign: "center"}}><b>Ensure Name Spelled Correctly!</b></p>}
            </div>
        </div>
    )
}

export default Search;