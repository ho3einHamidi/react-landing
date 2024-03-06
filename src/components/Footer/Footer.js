import "./footer.css"
import { FooterLinks } from "../footerLinks/FooterLinks"
import { FooterHyperLinks } from "../FooterHyperLinks/FooterHyperLinks"
import arrowIcon from "../../icons/arrow-right.png"
export function Footer(){
    return(
        <div className="footer">
            <div className="footerLinks">
                {FooterLinks.map((item)=>{
                    return <FooterHyperLinks item ={item}/>
                })}

            </div>
            <img src={arrowIcon} alt="arrow"></img>
        </div>
        
    )
}