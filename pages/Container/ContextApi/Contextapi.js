import { useState } from "react";
import { createContext } from "react"
import LogoImgLight from '../../assist/brand-logo-light.png';
import LogoImgDark from '../../assist/brand-logo-dark.png';


const ContextBtn = createContext();

const ContextBtnState = (props) => {
    let [logoImg, setLogoImg] = useState(LogoImgLight);
    let [darkBtn, setDarkBtn] = useState({ opacity: "0" });
    let [lightBtn, setLightBtn] = useState({ opacity: "1" });
    let [myStyle, setMyStyle] = useState({
        color: "#333333",
        backgroundColor: "#ffffff"
    })
    let [myLinkStyle, setMyLinkStyle] = useState({
        color: "#333333",
    })
    const ModeChange = () => {

        if (myStyle.color === "#333333") {
            setDarkBtn({ opacity: "1" });
            setLightBtn({ opacity: "0" });
            setMyLinkStyle({
                color: "#f1f1f1"
            })
            setMyStyle({
                color: "#f1f1f1",
                backgroundColor: "#333333"
            })
            setLogoImg(LogoImgDark)
        }
        else {
            setDarkBtn({ opacity: "0" });
            setLightBtn({ opacity: "1" });
            setMyLinkStyle({
                color: "#333333"
            })
            setMyStyle({
                color: "#333333",
                backgroundColor: "#ffffff"
            })
            setLogoImg(LogoImgLight)
        }
    }
    let menuOpen = true;
    let MenuOpen = () => {
        let menu = document.getElementById("menu-toggle")
        let menuItem = document.getElementById("menuItem")

        if (!menuOpen) {
            menu.classList.add("mobile-menu-line-open");
            menuItem.classList.add("menu-item-open");
            menuItem.classList.remove("menu-item");
            menuOpen = true;
        }
        else {
            menu.classList.remove("mobile-menu-line-open");
            menuItem.classList.add("menu-item");
            menuItem.classList.remove("menu-item-open");
            menuOpen = false;
        }
    }
    return (
        <ContextBtn.Provider value={{ darkBtn, lightBtn, myLinkStyle, myStyle, ModeChange, logoImg, MenuOpen }}>
            {props.children}
        </ContextBtn.Provider>
    )
}



export default ContextBtnState;
export { ContextBtn };