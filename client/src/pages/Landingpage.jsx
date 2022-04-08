import React, { useState, useContext} from "react"
import icon from "../assets/Icon.png"
import styleCSS from "./Landingpage.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import device from "../assets/Device.png"
import { Modal,Form, InputGroup, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const LandingPage = () => {
    const [showSignUp, setshowSignUp] = useState(false)
    const closeSignUp = () => {
        setshowSignUp(!showSignUp)
    }
    const [showSignIn, setshowSignIn] = useState(false)
    const closeSignIn = () => {
        setshowSignIn(!showSignIn)
    }
    const changeModal = () => {
        setshowSignUp(!showSignUp)
        setshowSignIn(!showSignIn)
    }

    const [message, setMessage] = useState(null);

    // Navigate
    const navigate = useNavigate()

    const GotoDashboard = () => {
        navigate('/dashboard')
    }


    // Start Register
    const [formRegister, setFormRegister] = useState({
        fullnameregister: "",
        emailregister: "",
        passwordregister: ""
    })

    const { fullnameregister, emailregister, passwordregister } = formRegister



    // Start Login
    const [formLogin, setFormLogin] = useState({
        emaillogin:"",
        passwordlogin:""
    })
    const { emaillogin, passwordlogin } = formLogin

    return (
        <div className={styleCSS.landingpagecontent}>
            <div className={styleCSS.landingpagenavbar}>
                <div className={styleCSS.leftSideNavbar}>
                    <img src={icon} alt="icon" />
                </div>
                <div className={styleCSS.rightSideNavbar}>
                    <button className={styleCSS.loginbutton} onClick={() => setshowSignIn(!showSignIn)}>Login</button>
                    <button className={styleCSS.registerbutton} onClick={() => setshowSignUp(!showSignUp)}>Register</button>
                </div>
            </div>
            <div className={styleCSS.landingpagebody}>
                <div className={styleCSS.bodyLeftSide}>
                    <p className={styleCSS.onlyLink}>The Only Link You'll Ever Need</p>
                    <p className={styleCSS.addLink}>Add a link for your Social Bio and optimize your social media traffic.</p>
                    <p className={styleCSS.safeText}>safe, fast and easy to use</p>
                    <button className={styleCSS.bodyButton} onClick={() => setshowSignUp(!showSignUp)}>Get Started For Free</button>
                </div>
                <div className={styleCSS.bodyRightSide}>
                    <img src={device} alt="device" />
                </div>
            </div>

            {/* Modal Register */}
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showSignUp}
                onHide={closeSignUp}
                >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter" >
                        <p className={styleCSS.signUpHeader}>Sign Up</p>
                    </Modal.Title>                    
                </Modal.Header>
                    {message && message}
                <Modal.Body>
                    <Form>
                    <InputGroup className="mb-3">
                        <Form.Control type="email" name="emailregister" value={emailregister} className="signupinput" placeholder="Email" autoComplete="off"/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control type="password" name="passwordregister" value={passwordregister} className="signupinput" placeholder="Password" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control type="text" name="fullnameregister" value={fullnameregister} className="signupinput" placeholder="Fullname" autoComplete="off"/>
                    </InputGroup>
                    <button className={styleCSS.signUpModalButton} type="submit" onClick={GotoDashboard}>Register</button>
                    </Form>                    
                </Modal.Body>
                <Modal.Footer>
                    <p className={styleCSS.footerText}>Already have an account ? Klik <button onClick={changeModal} className={styleCSS.hereButton}>Here</button></p>
                </Modal.Footer>
            </Modal>

            {/* Modal Login */}
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showSignIn}
                onHide={closeSignIn}
                >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                    <p className={styleCSS.signInHeader}>Sign In</p>
                    </Modal.Title>                    
                </Modal.Header>
                {/* {messega && messega} */}
                <Modal.Body>
                    <Form>
                    <InputGroup className="mb-3">
                        <Form.Control type="email" className="signupinput" placeholder="Email" name="emaillogin" value={emaillogin} autoComplete="off"/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control type="password" className="signupinput" placeholder="Password" name="passwordlogin" value={passwordlogin}/>
                    </InputGroup>
                    <button className={styleCSS.signInModalButton} type="submit" >Login</button>
                    </Form>                    
                </Modal.Body>
                <Modal.Footer>
                    <p className={styleCSS.footerText}>Already have an account ? Klik <button onClick={changeModal} className={styleCSS.hereButton}>Here</button></p>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default LandingPage