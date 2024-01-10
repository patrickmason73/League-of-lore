import React, {useEffect, useState} from "react";
import ChampionCard from "./ChampionCard";


function Search({ champions, handleAddComment, searchText, setSearchText, handleDeleteComment, handleCommentUpdate }) {
  const [champion, setChampion] = useState()
  const [prevText, setPrevText] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    setPrevText(searchText)
    setChampion(champions.find((champ) => champ.name.toLowerCase() === searchText.toLowerCase()))
   }

  useEffect(() => {
    setChampion(champions.find((champ) => champ.name.toLowerCase() === prevText.toLowerCase()))
  }, [champions, prevText])

    return (
        <div style={{backgroundImage: "linear-gradient(to right, #fc5c7d, #6a82fb)", paddingTop: "20px", height: "100%", paddingBottom: "20%"}}>
            <form onSubmit={handleSubmit} style={{textAlign: "center"}}>
                <label style={{fontWeight: "600", fontSize: "125%"}}>
                    <u style={{fontWeight: "700"}}>Search By Champion Name: </u>
                    <input type="text" placeholder="Search..." id="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} style={{margin: "10px", fontSize: "125%"}}></input>
                </label>
               <button type="submit" style={{fontSize: "140%"}}>Search</button>
            </form>
            <article >
              {champion ? <ChampionCard champion={champion} handleAddComment={handleAddComment} handleDeleteComment={handleDeleteComment} handleCommentUpdate={handleCommentUpdate}/> : <p style={{textAlign: "center"}}><b>Ensure Champion Name Spelled Correctly!</b></p>}
            </article>
        </div>
    )
}

export default Search;