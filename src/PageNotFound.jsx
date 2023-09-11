import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
    return(
            <div>
                <h1> Oops, Page Not found, probably a wrong link</h1>
                <h6>Use the link below to get back to the main page</h6>
                <Link to="/" {...{style: {
                    color: "blue"
                }}}>Go to Home </Link>
            </div>
    )
    
}