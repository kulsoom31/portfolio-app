import {  Link } from "react-router-dom";

function Home() {
    return <>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <h2 className="mt-5">Hi, I'm John Doe. Welcome to my portfolio website</h2>
                <p>This portfolio website is created in react.js. <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magni accusamus commodi. 
                    Dolor sit amet consectetur adipisicing elit. Numquam magni accusamus commodi. </p>
                <Link to="/about" className="btn btn-primary">About Me</Link>
            </div>
            <div class="col-md-6">
                <img src="/boy.webp" width="50%" alt="" srcset=""/>
            </div>
        </div>
    </div>
    </>
}

export default Home;