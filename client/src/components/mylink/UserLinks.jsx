import React, { useState} from 'react'
import { useNavigate } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import styleCSS from './UserLinks.module.css'
import exampleImage from '../../assets/example.png'
import View from '../../assets/View.png'
import Edit from '../../assets/Edit.png'
import Delete from '../../assets/Delete.png'


const UserLinksContentPage = () => {
    return (
        <div className={styleCSS.userLinksContent}>
            <div className={styleCSS.userLinksHeader}>
                <p>My Links</p>
            </div>
            <div className={styleCSS.formSearchLinks}>
                <p className={styleCSS.allLinksText}>All Links</p>
                <p className={styleCSS.totalLinksText}>1</p>
                <input type="text" name="findlink" className={styleCSS.findInput} placeholder="Find Your Link" />
                <button className={styleCSS.buttonSearch}>Search</button>
            </div>
            <div className={styleCSS.userLinksList}>
                <img src={exampleImage} alt="link image" className={styleCSS.linksImage}/>
                <div className={styleCSS.linksName}>
                    <p className={styleCSS.linkstitle}>WaysFood</p>
                    <p className={styleCSS.linksurl}>localhost:3000/waysfood</p>
                </div>
                <div className={styleCSS.linksVisit}>
                    <p className={styleCSS.titleVisitCount}>10</p>
                    <p className={styleCSS.titleVisit}>Visit</p>
                </div>
                <div className={styleCSS.operationButton}>
                    <img src={View} alt="View" />
                    <img src={Edit} alt="Edit" />
                    <img src={Delete} alt="Delete" />
                </div>
            </div>
        </div>
    )
}

export default UserLinksContentPage