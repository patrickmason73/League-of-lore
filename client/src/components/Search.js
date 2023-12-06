import React, {useState} from "react";



function Search() {
  const [text, setText] = useState("")

  function handleSubmit() {

  }

    return (
        <div style={{backgroundColor: "lightgray"}}>
            <form onSubmit={handleSubmit}>
                <label>
                    Search By Champion Name: 
                    <input type="text" placeholder="Search..." style={{margin: "5px"}}></input>
                </label>
               <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search;