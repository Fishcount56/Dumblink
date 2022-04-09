import React, { useState, useEffect, useContext, useRef } from "react"
import styleCSS from './profile.module.css'
import { UserContext } from "../../context/userContext"
import { API } from "../../config/api"

const ProfileContentPage = () => {
    const [profile, setProfile] = useState({})
    const [state, dispatch] = useContext(UserContext);
    let id = state.user.id
    
    // get user profile
    const getProfile = async(id) => {
        try {
            const response = await API.get('/user')
            setProfile(response.data.data.getUserById)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProfile(id)
    }, [])

    return (
        <div className={styleCSS.pageProfileContent}>
            <div className={styleCSS.headerProfile}>
                <p>Profile</p>
            </div>
            <div className={styleCSS.bodyProfile}>
                <p className={styleCSS.profileTitle}>My Information</p>
                <div className={styleCSS.profileCard}>
                        <label>Name</label>
                        <input type="text" name="username" autoComplete="off" placeholder={profile.email}></input>
                        <label>Email</label>
                        <input type="email" name="useremail" autoComplete="off" placeholder={profile.fullname}></input>
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