import React, { useState, useContext, useEffect } from "react"
import icon from "../assets/Icon.png"
import styleCSS from "./Landingpage.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import device from "../assets/Device.png"
import { Modal,Form, InputGroup, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { API } from '../config/api'
import { UserContext } from "../context/userContext"

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

    const navigate = useNavigate()

    const [state, dispatch] = useContext(UserContext)
    const [message, setMessage] = useState(null);
    const [messega, setMessega] = useState(null)

    const checkAuth = () => {
        if (state.isLogin === true) {
            navigate("/dashboard");
        }
    }

    checkAuth()
    

    // Start Register
    const [formRegister, setFormRegister] = useState({
        fullnameregister: "",
        emailregister: "",
        passwordregister: ""
    })

    const { fullnameregister, emailregister, passwordregister } = formRegister

    const handleChangeRegister = (e) => {
        setFormRegister({
          ...formRegister,
          [e.target.name]: e.target.value,
    })
    }


    const handleSubmitRegister = async(e) => {
        try {
            e.preventDefault()
            const configregister = {
                headers: {
                    "Content-Type" : "application/json"
                }
            }
            
            const bodyregister = JSON.stringify(formRegister)
            
            const response = await API.post('/register', bodyregister, configregister)
            console.log(response)
            
            if (response.data.status == "success") {
                const alert = (
                  <Alert variant="success" className="py-1">
                    Success
                  </Alert>
                );
                setMessage(alert);
              } else {
                const alert = (
                  <Alert variant="danger" className="py-1">
                    Failed
                  </Alert>
                );
                setMessage(alert);
              }
              setFormRegister({
                fullname: "",
                email: "",
                password: ""
              })
        } catch (error) {
            console.log(error)
            const alert = (
                <Alert variant="danger" className="py-1">
                  Email or password already registered
                </Alert>
              );
              setMessage(alert);
        }
    }



    // Start Login
    const [formLogin, setFormLogin] = useState({
        emaillogin:"",
        passwordlogin:""
    })

    const { emaillogin, passwordlogin } = formLogin

    const handleLoginChange = (e) => {
        setFormLogin({
            ...formLogin,
            [e.target.name] : e.target.value
        })
    }

    const handleLoginSubmit = async(e) => {
        try {
            e.preventDefault()
            const configlogin = {
                headers : {
                    "Content-Type" : "application/json"
                }
            }

            const bodylogin = JSON.stringify(formLogin)
            const response = await API.post('/login', bodylogin, configlogin)
            console.log(response)
            if (response?.status == 200) {
                // Send data to useContext
                dispatch({
                  type: "LOGIN_SUCCESS",
                  payload: response.data.data,
                });
            }
        } catch (error) {
            console.log(error)
        }
    }

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
                    <Form onSubmit={handleSubmitRegister}>
                    <InputGroup className="mb-3">
                        <Form.Control type="email" name="emailregister" value={emailregister} onChange={handleChangeRegister} className="signupinput" placeholder="Email" autoComplete="off"/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control type="password" name="passwordregister" value={passwordregister} onChange={handleChangeRegister} className="signupinput" placeholder="Password" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control type="text" name="fullnameregister" value={fullnameregister} onChange={handleChangeRegister} className="signupinput" placeholder="Fullname" autoComplete="off"/>
                    </InputGroup>
                    <button className={styleCSS.signUpModalButton} type="submit">Register</button>
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
                    <Form onSubmit={handleLoginSubmit}>
                    <InputGroup className="mb-3">
                        <Form.Control type="email" onChange={handleLoginChange} className="signupinput" placeholder="Email" name="emaillogin" value={emaillogin} autoComplete="off"/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control type="password" onChange={handleLoginChange} className="signupinput" placeholder="Password" name="passwordlogin" value={passwordlogin}/>
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