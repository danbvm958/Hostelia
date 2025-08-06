import { useState } from "react"
import "../styles/SearchBar.css"

export default function SearchBar(){
    const [searchTerm, setSearchTerm] = useState("");

    function HandleSearch(event){
        setSearchTerm(event.target.value) 
    }
    return(
        <div id="SearchBar">
            <input 
            type="text"
            name="Search"
            value={searchTerm}
            onChange={HandleSearch}
            />
            <input
            type="submit"
            value="🔎"
            />
        </div>
    );
}