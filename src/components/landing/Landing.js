import "./landing.css"
import { Header } from "../Header/Header"
import { Text } from "../text/Text"
import { Trialbutton } from "../trialButton/Trialbutton"
import { LandingImg } from "../LandingImage/LandingImg"
export function Landing(){
    return(
        <div className="landing">
            <div className="leftSide">
                <Header/>
                <Text/>
                <Trialbutton/>
            </div>
            <div className="rightSide">
                <LandingImg/>
            </div>
        </div>

    )
}