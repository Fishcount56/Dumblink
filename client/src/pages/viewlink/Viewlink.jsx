import React, { useState, useEffect, useMemo} from "react"
import { API } from "../../config/api"
import { UserContext } from "../../context/userContext"
import styleCSS from './Viewlink.module.css'
import userDefault from '../../assets/userdefault.png'
import { useParams } from 'react-router-dom'

const ViewLinkPage = () => {
    const uniqueLink = useParams()
    const [dataLinks, setDataLinks] = useState({})
    const [objectPropsData, setObjectPropsData] = useState({})

    // get link data according to params using API
    const getLink = async(uniqueLink) => {
        try {
            const response = await API.get("/getSingleLink/" + uniqueLink)
            setDataLinks(response.data.data.shortLink)
            setObjectPropsData(response.data.data.objectPropsData)
        } catch (error) {
            console.log(error)
        }
    }

    const uniqueLinksString = uniqueLink.uniqueLink

    useEffect(() => {
        getLink(uniqueLinksString)
    }, [])


    return(
        <div className={styleCSS.viewLinkMainComponent}>
            <div className={styleCSS.viewLinkMainComponentParent}>
                <div className={styleCSS.viewLinkMainComponentChild}>
                    <img src={dataLinks.image} alt='short link image' />
                    <p className={styleCSS.viewLinkTitle}>{dataLinks.title}</p>
                    <p className={styleCSS.viewLinkDescription}>{dataLinks.description}</p>
                    <button className={styleCSS.viewLinkTitleLinks}>Vlog</button>
                </div>
            </div>
        </div>
    )
}

export default ViewLinkPage