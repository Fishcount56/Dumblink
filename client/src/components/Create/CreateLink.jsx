import react, { useState, useContext, useEffect } from 'react'
import styleCSS from './CreateLink.module.css'
import { API } from '../../config/api'
import { UserContext } from '../../context/userContext'
import Phone2 from '../../assets/Phone2.png'
import Chess from '../../assets/Chess.png'

const CreateLink = () => {
    return (
        <div className={styleCSS.createLinkContent}>
            <div className={styleCSS.createLinkHeader}>
                <p>Template</p>
            </div>
            <div className={styleCSS.createLinkForm}>
                    <div className={styleCSS.createLinkFormTop}>
                        <p>Create Link</p>
                        <button className={styleCSS.formTopButton}>Publish Link</button>
                    </div>
                    <div className={styleCSS.createLinkFormBottom}>
                        <div className={styleCSS.createLinkFormInput}>
                            <div className={styleCSS.createLinkFormInputChild}>
                                <div className={styleCSS.imagePreview}>
                                    <img src={Chess} alt='Preview' />
                                    <label for='image'>Upload</label>
                                    <input type='file' name='image' id='image' className={styleCSS.uploadButton}/>
                                </div>
                                <div className={styleCSS.mainInput}>
                                    <label for='titleform'>Title</label>
                                    <input type='text' name='titleform' />
                                    <label for='descriptionform'>Description</label>
                                    <input type='text' name='descriptionform' />
                                </div>
                                <div className={styleCSS.secondInput}>
                                    <div className={styleCSS.linksCard}>
                                        <div className={styleCSS.linkImage}>
                                            <img src={Chess} alt='link image' />
                                        </div>
                                        <div className={styleCSS.linkInput}>
                                            <label for='titlelinkform'>Title Link</label>
                                            <input type='text' name='titlelinkform' />
                                            <label for='titlelinkform'>Title Link</label>
                                            <input type='text' name='titlelinkform' />
                                        </div>
                                    </div>
                                </div>
                            <button className={styleCSS.addLinkButton}>Add new Link</button>
                            </div>
                        </div>
                        <div className={styleCSS.createLinkFormTemplatePreview}>
                            <img src={Phone2} alt='Template 2' />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default CreateLink