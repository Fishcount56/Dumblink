import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import styleCSS from './UserLinks.module.css'
import exampleImage from '../../assets/example.png'
import View from '../../assets/View.png'
import Edit from '../../assets/Edit.png'
import Delete from '../../assets/Delete.png'
import { API } from '../../config/api'
import { UserContext } from '../../context/userContext'
import DeleteData from '../modal/Deletemodal'


const UserLinksContentPage = () => {
    const navigate = useNavigate()
    const [state, dispatch] = useContext(UserContext);
    const [userLinks, setUserLinks] = useState([])
    let id = state.user.id

    // Get all user links
    const getLinks = async(id) => {
        try {
            const response = await API.get('/userLinks')
            setUserLinks(response.data.shortUser)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getLinks(id)
    }, [])
    
    let total = userLinks.length

    // Navigate according with item.uniqueLink to open the shortlink tab
    const openLink = (uniqueLink) => {
        navigate(window.open('/' + uniqueLink))
    }


    // Delete Data
    const [uniqueLinkDelete, setUniqueLinkDelete] = useState(null)
    const [confirmDelete, setConfirmDelete] = useState(null)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleDelete = (uniqueLink) => {
        setUniqueLinkDelete(uniqueLink)
        handleShow()
    }
    const deleteByUniqueLink = async(uniqueLink) => {
        try {
            await API.delete(`/deleteLink/${uniqueLink}`)
            getLinks()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleClose()
        deleteByUniqueLink(uniqueLinkDelete)
        setConfirmDelete(null)
    }, [confirmDelete])

    return (
        <div className={styleCSS.userLinksContent}>
            <div className={styleCSS.userLinksHeader}>
                <p>My Links</p>
            </div>
            <div className={styleCSS.formSearchLinks}>
                <p className={styleCSS.allLinksText}>All Links</p>
                <p className={styleCSS.totalLinksText}>{total}</p>
                <input type="text" name="findlink" className={styleCSS.findInput} placeholder="Find Your Link" />
                <button className={styleCSS.buttonSearch}>Search</button>
            </div>
            <div>
                {userLinks?.map((item, index) => (
                    <div className={styleCSS.userLinksList} key={index}>
                        <img src={item.image} alt="link image" className={styleCSS.linksImage}/>
                        <div className={styleCSS.linksName}>
                            <p className={styleCSS.linkstitle}>{item.title}</p>
                            <p className={styleCSS.linksurl}>localhost:3000/{item.uniqueLink}</p>
                        </div>
                        <div className={styleCSS.linksVisit}>
                            <p className={styleCSS.titleVisitCount}>{item.visitTime}</p>
                            <p className={styleCSS.titleVisit}>Visit</p>
                        </div>
                        <div className={styleCSS.operationButton}>
                            <img src={View} alt="View" onClick={ () => openLink(item.uniqueLink)} />
                            <img src={Edit} alt="Edit" />
                            <img src={Delete} alt="Delete" onClick={() => handleDelete(item.uniqueLink)}/>
                        </div>
                    </div>
                ))}
            </div>
            <DeleteData setConfirmDelete={setConfirmDelete} show={show} handleClose={handleClose} />
        </div>
    )
}

export default UserLinksContentPage