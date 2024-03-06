import { Logo } from "../logo/Logo"
import { NavItems } from "../navItems/NavItems"
import { NavItem } from "../navitem/NavItem"
import "./navbar.css"
import { Search } from "../search/Search"
import { Login } from "../login/Login"
export function Navbar(){
    return(
        <div className="navbar">
            <Logo/>
            <div className="links">
                {NavItems.map((item) =>{
                    return <NavItem item={item}/>
                })}
            </div>
            <div className="searchWrapper" >
                <Search/>
                <Login/>  
            </div>
        </div>
    )
}