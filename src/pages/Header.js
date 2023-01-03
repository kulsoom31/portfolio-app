import {  Link } from "react-router-dom";
import { useState } from "react";
import BookCall from "../components/BookCall";

function Header() {
    const [modal, setModal] = useState(0);
    
    const openPopup = (event) => {
        setModal(1);
      }
      const closePopup = (event) => {
        setModal(0);
      }
      
    // if(modal===1){
    //     popup = ;
    // }
    return <>
        {modal===1  &&
            <BookCall closePopup={closePopup}/>
        }
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand me-5" href="home">Portfolio APP</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item mx-3">
                    <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li class="nav-item mx-3">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li class="nav-item mx-3">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>
            <span class="navbar-text">
                <button class="btn btn-success btn-sm" onClick={openPopup}>Book a Call</button>
            </span>
            </div>
        </div>
        </nav>
    </>
    
}

export default Header;