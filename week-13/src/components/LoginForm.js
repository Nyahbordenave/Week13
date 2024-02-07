import React from "react";

//! Here is the code for my login form borrowed from Bootstrap 
export class Login extends React.Component {
    render() {
        return (
                // created the form, referencing the classname container which is in my App.css file 
            <div className="container">  
                <br> 
                </br>
                {/* // created required H3 header with Log In at the top of the form, wrapped in container -- border  */}
                <h3 className="header">Log In</h3>
                <br>
                </br> 
                {/* // borrowed bootstrap code for forms  */}
                <form className="d-flex flex-column align-items-center">
                <div className="form-group col-sm-6">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-check col-sm-6">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" className="btn btn-success">Sign In</button>
            </form>
            </div>
        );
    }
}