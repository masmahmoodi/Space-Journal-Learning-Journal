import React from "react"
import logo from "../assets/images/logo.png"
export default function Header(props){
    return (
       <header>
            <div className="logo">
                <img src={logo} />
                <a href="journal.html">
                    <strong>My Journals </strong>
                </a>
            </div>
            <div className="social-icons"  data-aos="flip-up">
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="change-journal-btn">
                     <i className="fa-solid fa-repeat" onClick={props.handleClick}></i>
                     <strong>Change Journal</strong>
            </div>
       </header>
    )
}