import searchIcon from "../../icons/search-icon.svg"
import "./search.css"
export function Search(){
    return(
        <>
        <img src={searchIcon} className="search-icon" alt="search-icon"></img>
        <input id="search"></input>
        </>
    )
}