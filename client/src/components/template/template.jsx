import React, { usesState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import styleCSS from "./template.module.css"
import phone1 from "../../assets/Phone1.png"
import phone2 from "../../assets/Phone2.png"
import phone3 from "../../assets/Phone3.png"
import phone4 from "../../assets/Phone4.png"

const TemplateContentPage = () => {
    return (
        <div className={styleCSS.templateContent}>
            <div className={styleCSS.templateHeader}>
                <p>Template</p>
            </div>
            <div className={styleCSS.templateBody}>
                <div className={styleCSS.bodyContent}>
                    <img src={phone1} alt="template 1" />
                </div>
                <div className={styleCSS.bodyContent}>
                    <img src={phone2} alt="template 2" />
                </div>
                <div className={styleCSS.bodyContent}>
                    <img src={phone3} alt="template 3" />
                </div>
                <div className={styleCSS.bodyContent}>
                    <img src={phone4} alt="template 4" />
                </div>
            </div>
        </div>
    )
}

export default TemplateContentPage