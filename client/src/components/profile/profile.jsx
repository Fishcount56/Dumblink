import React, { useState } from "react"
import styleCSS from './profile.module.css'

const ProfileContentPage = () => {
    return (
        <div className={styleCSS.pageProfileContent}>
            <div className={styleCSS.headerProfile}>
                <p>Profile</p>
            </div>
            <div className={styleCSS.bodyProfile}>
                <p className={styleCSS.profileTitle}>My Information</p>
                <div className={styleCSS.profileCard}>
                        <label>Name</label>
                        <input type="text" name="username" autoComplete="off"></input>
                        <label>Email</label>
                        <input type="email" name="useremail" autoComplete="off"></input>
                </div>
                <div className={styleCSS.profileButton}>
                    <button className={styleCSS.tombolSimpan}>Save Account</button>
                    <button className={styleCSS.tombolHapus}>DeleteAccout</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileContentPage