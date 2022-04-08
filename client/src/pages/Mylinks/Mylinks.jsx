import React from "react"
import styleCSS from "./Mylinks.module.css"
import SideNavbar from "../../components/sidebar/sidebar"
import UserLinksContentPage from "../../components/mylink/UserLinks"

const MyLinks = () => {
    return(
        <div className={styleCSS.myLinksMainContent}>
            <div className={styleCSS.myLinksSideNav}>
                <SideNavbar />
            </div>
            <div className={styleCSS.myLinksRightContent}>
                <UserLinksContentPage />
            </div>
        </div>
    )
}

export default MyLinks