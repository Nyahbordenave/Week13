import React from "react"; 

{/* // created required NavBar from Bootstrap*/}

export class Nav extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                <a className="nav-link" href="#">Help</a>
                    </li>
                    <li className="nav-item">
                    </li>
                </ul>
            </div>
        </nav>
        );  
    }
}