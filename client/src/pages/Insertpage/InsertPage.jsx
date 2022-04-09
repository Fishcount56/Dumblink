import React from "react"
import styleCSS from './InsertPage.module.css'
import SideNavbar from "../../components/sidebar/sidebar"
import CreateLink from "../../components/Create/CreateLink"

const InsertPage = () => {
    return(
        <div className={styleCSS.insertPageMainContent}>
            <div className={styleCSS.insertPageSideBar}>
                <SideNavbar />
            </div>
            <div className={styleCSS.insertPageRightSide}>
                <CreateLink />
            </div>
        </div>
    )
}

export default InsertPage