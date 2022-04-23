import React, { useState, useEffect, useMemo} from "react"
import { API } from "../../config/api"
import styleCSS from './Viewlink.module.css'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"

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

    const navigate = useNavigate()

    return(
        <div className={styleCSS.viewLinkMainComponent}>
            <div className={styleCSS.viewLinkMainComponentParent}>
                <div className={styleCSS.viewLinkMainComponentChild}>
                    <img src={dataLinks.image} alt='short link image' />
                    <p className={styleCSS.viewLinkTitle}>{dataLinks.title}</p>
                    <p className={styleCSS.viewLinkDescription}>{dataLinks.description}</p>
                    {/* Check objectPropsData first before mapping */}
                    {(objectPropsData.links && objectPropsData.titlelinks) && Object.keys(objectPropsData.links, objectPropsData.titlelinks).map((item, index) => (
                        <div key={index}>
                            <button className={styleCSS.viewLinkTitleLinks} onClick={ () => navigate(window.open(objectPropsData.links[item]))}>{objectPropsData.titlelinks[item]}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ViewLinkPage