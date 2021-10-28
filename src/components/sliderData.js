import React from 'react'
import {Link} from "react-router-dom"


export default function sliderOne() {
    return (
        <div className="slideCont">

        <div className="slideOne">
            <div className="slideText">
                <h2>iPhone X</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus numquam quaerat soluta cumque consequatur est odio hic nobis commodi iusto.
                </p>
        <Link to="/home/fzh9-aj9l">
                <a>
                    MORE
                </a>
        </Link>
            </div>
            <div className="iphImgC">
                <img src="/iphonex.png" alt="iPhone X" width="700px" height="600px" className="slideImgIph"/>
            </div>
        </div>
    </div>
    )
}

export function SliderTwo(){
    return (
        <div className="slideContTw">

            <div className="slideOne">
            <div className="slideText">
                <h2>MacBook Pro</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus numquam quaerat soluta cumque consequatur est odio hic nobis commodi iusto.
                </p>
                <Link to="/home/948c-af43">
                <a>
                    MORE
                </a>
                </Link>
            </div>
            <div className="slideImgMac">
                <img src="/mac.png" alt="MacBook Pro" width="700px" height="600px"/>
            </div>
            </div>
        </div>
    )
}

export function SliderThree(){
    return (
        <div className="slideContThr">

            <div className="slideOne">
            <div className="slideText">
                <h2>iPad Pro</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus numquam quaerat soluta cumque consequatur est odio hic nobis commodi iusto.
                </p>
                <Link to="/home/ofk1-72cd">
                <a>
                    MORE
                </a>
                </Link>
            </div>
            <div className="slidimg">
                <img src="/ipadpro.png" alt="iPad Pro" width="400px" height="450px"/>
            </div>
            </div>
        </div>
    )
}