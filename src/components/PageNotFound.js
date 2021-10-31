import React from 'react'



export default function PageNotFound() {
    return (
        <div className="error">
            <h2>Oops..! 404 Page Not Found</h2>
            <h3>Looks like you came to wrong page on our server</h3>
            <img src="./error.jpg" alt="Error" width="20%" className="errorImg"/>
        </div>
    )
}
