import react, { useState, useContext, useEffect } from 'react'
import styleCSS from './CreateLink.module.css'
import { API } from '../../config/api'
import { UserContext } from '../../context/userContext'
import Phone2 from '../../assets/Phone2.png'
import Chess from '../../assets/Chess.png'
import { useNavigate } from "react-router-dom"

const CreateLink = () => {
    const navigate = useNavigate()
    // Add card in form
    const [cardForm, setCardForm] = useState([
        {titlelinks: "", links: ""},
        {titlelinks: "", links: ""},
    ])
    
    // Function for add a card when add button clicked
    const addForm = () => {
        setCardForm([...cardForm, { titlelinks: "", links: "" }]);
    };

    // Function for delete a card when delete button clicked
    const removeForm = (index) => {
        const values = [...cardForm]
        values.splice(index, 1)
        setCardForm(values)
    }

    // Function to change the value of links components
    const formOnChange = (index, e) => {
        const values = [...cardForm]
        values[index][e.target.name] = e.target.value
        setCardForm(values)
    }

    const arr1 = cardForm.map(({ titlelinks }) => titlelinks)
    const arr2 = cardForm.map(({ links }) => links)

    // For title, description and image
    const [imagePreview, setImagePreview] = useState(null)
    const [linkData, setLinkData] = useState({
        titleform: "",
        descriptionform: "",
        imageform: ""
    })

    const mainOnChange = (e) => {
        setLinkData({
            ...linkData,
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.type === 'file' ? e.target.files : e.target.value
        })

        if (e.target.type === 'file') {
            let url = URL.createObjectURL(e.target.files[0])
            setImagePreview(url)
        }
    }

    // POST API
    const handleOnSubmit = async(e) => {
        try {
            e.preventDefault()
            const config = {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            }

            const formData = new FormData()
            formData.set('title', linkData.titleform)
            formData.set('description', linkData.descriptionform)
            formData.set('image', linkData.imageform[0], linkData.imageform[0].name)
            formData.set('titlelink', arr1)
            formData.set('link', arr2)

            const response = await API.post('/publishlink', formData, config)
            console.log(response)
            navigate('/myLinks')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styleCSS.createLinkContent}>
            <div className={styleCSS.createLinkHeader}>
                <p>Template</p>
            </div>
            <div className={styleCSS.createLinkForm}>
                <form onSubmit={handleOnSubmit}>
                    <div className={styleCSS.createLinkFormTop}>
                        <p>Create Link</p>
                        <button className={styleCSS.formTopButton} type='submit'>Publish Link</button>
                    </div>
                    <div className={styleCSS.createLinkFormBottom}>
                        <div className={styleCSS.createLinkFormInput}>
                            <div className={styleCSS.createLinkFormInputChild}>
                                <div className={styleCSS.imagePreview}>
                                    {imagePreview && (
                                        <img src={imagePreview} alt='Preview' />
                                    )}
                                    <label for='image'>Upload</label>
                                    <input type='file' name='imageform' id='image' className={styleCSS.uploadButton} onChange={mainOnChange}/>
                                </div>
                                <div className={styleCSS.mainInput}>
                                    <label for='titleform'>Title</label>
                                    <input type='text' name='titleform' onChange={mainOnChange} autoComplete="off" required/>
                                    <label for='descriptionform'>Description</label>
                                    <input type='text' name='descriptionform' onChange={mainOnChange} autoComplete="off" required/>
                                </div>
                                {cardForm.map((item, index) => (
                                    <div className={styleCSS.secondInput}>
                                        <div className={styleCSS.linksCard} key={index}>
                                            <div className={styleCSS.linkImage}>
                                                <img src={Chess} alt='link image' />
                                                <button onClick={() => removeForm(index)} disabled={cardForm.length === 2}>Delete</button>
                                            </div>
                                            <div className={styleCSS.linkInput}>
                                                <label for='titlelinkform'>Title Link</label>
                                                <input type='text' name='titlelinks' onChange={(e) => formOnChange(index, e)} autoComplete="off" required/>
                                                <label for='titlelinkform'>Link</label>
                                                <input type='text' name='links' onChange={(e) => formOnChange(index, e)} autoComplete="off" required/>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            <button className={styleCSS.addLinkButton} onClick={addForm}>Add new Link</button>
                            </div>
                        </div>
                        <div className={styleCSS.createLinkFormTemplatePreview}>
                            <img src={Phone2} alt='Template 2' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateLink