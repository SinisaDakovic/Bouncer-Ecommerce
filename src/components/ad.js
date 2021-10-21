import React from 'react'
import {Link} from "react-router-dom"

export default function Ad() {
    return (
        <div className="adde">
            <div className="adcon">
                <div className="adText">
                    <h1>iPhone 6 Plus</h1>
                    <p>Performance and design.Taken right<br/>to the edge.</p>
                    <Link to="/home/fyu1-cfd3">
                             <a>
                                 SHOP NOW
                             </a>
                             </Link>
                </div>
                <div className="adimg">
                    <img src="./iphone6.png" alt="iPhone 6" className="adIc"/>
                </div>
            </div>
        </div>
    )
}
