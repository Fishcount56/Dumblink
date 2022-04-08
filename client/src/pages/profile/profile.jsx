import React from "react"
import SideNavbar from "../../components/sidebar/sidebar"
import ProfileContentPage from "../../components/profile/profile"

const Profile = () => {
    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <div style={{width : "20%"}}>
                <SideNavbar />
            </div>
            <div style={{width : "80%"}}>
            <ProfileContentPage />
            </div>
        </div>
    )
}

export default Profile