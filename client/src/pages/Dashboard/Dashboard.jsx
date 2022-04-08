import React from "react"
import styleCSS from "./Dashboard.module.css"
import SideNavbar from "../../components/sidebar/sidebar"
import TemplateContentPage from "../../components/template/template"



const Dashboard = () => {
    return(
        <div className={styleCSS.dashboardmaincontent}>
            <div className={styleCSS.dashboardsidenav}>
                <SideNavbar />
            </div>
            <div className={styleCSS.dashboardRightContent}>
                <TemplateContentPage />
            </div>
        </div>
    )
}

export default Dashboard