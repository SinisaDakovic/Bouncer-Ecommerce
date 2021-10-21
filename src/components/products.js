import React from 'react'
import {AiFillStar as Star, AiOutlineStar as OutlineStar} from "react-icons/ai"
import Slider from 'react-slick'
import {Link} from "react-router-dom"

export default function Products() {

    const settings={
        autoplay:true,
        infinite: true,
        speed: 450,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed:8000
    }

    return (
        <div className="prodSec">
            <div className="productTitle">
                <h2>FEATURED PRODUCTS</h2>
            </div>

        <div>

        <Slider {...settings} className="prodSlid">

        <div className="prodList">

        <div className="prodLista">

        <Link to="/home/bts0-fsrk" style={{color:"inherit",textDecoration:"none",}}>
            <div className="product">

                    <div className="prodImg">
                        <img src="/beats.png" alt="Beats Headphones" width="200px" height="200px"/>
                    </div>

                    <div className="prodText">
                        <h3>Beats Solo 2 On Ear<br/> Headphones - Black</h3>
                        <span id="span"><Star className="star"/><Star className="star"/><Star className="star"/><Star className="star"/><OutlineStar className="starg"/></span>
                        <p id="price">$499 <span>$599</span></p>
                    </div>
            </div>
        </Link>

        <Link to="/home/ored-of89" style={{color:"inherit",textDecoration:"none",}}>
            <div className="product">

                    <div className="prodImg">
                        <img src="/tvray.png" alt="H-Squared tvTray" width="200px" height="200px"/>
                    </div>

                    <div className="prodText">
                        <h3>H-Squared tvTray</h3>
                        <span id="span"><Star className="star"/><Star className="star"/><Star className="star"/><Star className="star"/><OutlineStar className="starg"/></span>
                        <p id="price">$499 <span>$599</span></p>
                    </div>
            </div>
        </Link>

        <Link to="/home/ole2-or0g" style={{color:"inherit",textDecoration:"none",}}>
            <div className="product">

                    <div className="prodImg">
                        <img src="/raingauge.png" alt="Netatmo Rain Gauge" width="200px" height="200px"/>
                    </div>

                    <div className="prodText">
                        <h3>Netatmo Rain Gauge</h3>
                        <span id="span"><Star className="star"/><Star className="star"/><Star className="star"/><Star className="star"/><OutlineStar className="starg"/></span>
                        <p id="price">$499 <span>$599</span></p>
                    </div>

            </div>

        </Link>
            </div>
            </div>
            <div className="prodList">

            <div className="prodLista">
        <Link to="/home/948c-af43" style={{color:"inherit",textDecoration:"none",}}>
            <div className="product">

                    <div className="prodImg">
                        <img src="/mac.png" alt="MacBook Pro" width="200px" height="200px"/>
                    </div>

                    <div className="prodText">
                        <h3>MacBook Pro</h3>
                        <span id="span"><Star className="star"/><Star className="star"/><Star className="star"/><Star className="star"/><OutlineStar className="starg"/></span>
                        <p id="price">$499 <span>$599</span></p>
                    </div>
            </div>
        </Link>

        <Link to="/home/092s-kfo9" style={{color:"inherit",textDecoration:"none",}}>
            <div className="product">

                    <div className="prodImg">
                        <img src="/iphone7.png" alt="iPhone" width="200px" height="200px"/>
                    </div>

                    <div className="prodText">
                        <h3>iPhone 7</h3>
                        <span id="span"><Star className="star"/><Star className="star"/><Star className="star"/><Star className="star"/><OutlineStar className="starg"/></span>
                        <p id="price">$499 <span>$599</span></p>
                    </div>
            </div>
        </Link>
        <Link to="/home/ofk1-72cd" style={{color:"inherit",textDecoration:"none",}}>
            <div className="product">

                    <div className="prodImg">
                        <img src="/ipadpro.png" alt="iPad Pro" width="200px" height="200px"/>
                    </div>

                    <div className="prodText">
                        <h3>iPad Pro</h3>
                        <span id="span"><Star className="star"/><Star className="star"/><Star className="star"/><Star className="star"/><OutlineStar className="starg"/></span>
                        <p id="price">$499 <span>$599</span></p>
                    </div>
            </div>
        </Link>
            </div>
            </div>

            

        </Slider>
        </div>
        </div>
    )
}
