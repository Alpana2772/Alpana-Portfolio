// import React from "react";
// import './Navbar.css'

// const Navbar=()=>{
//     return(
//         <>
//         <nav className="nav-wrapper">
//             <div className="nav-content">
//                 <img className="logo" src="" alt=""/>

//                 <ul>
//                     <li>
//                     <a className="menu-item">Home</a>
//                     </li>
                    
//                     <li>
//                     <a className="menu-item">Skills</a>
//                     </li>

//                     <li>
//                     <a className="menu-item">Work Experience</a>
//                     </li>

//                     <li>
//                     <a className="menu-item">Contact Me</a>
//                     </li>
//                     <button className="contact-btn" onClick={()=>{}}>
//                         Hire Me

//                     </button>
                    
                    
//                 </ul>
              

//             </div>

//         </nav>
//         </>
//     )
// }
// export default Navbar;



import React from "react";
import './Navbar.css'; // Importing custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        
                    </ul>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
