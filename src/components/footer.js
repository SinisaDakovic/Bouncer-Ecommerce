import React from 'react'
import {FaFacebookF as Fb} from "react-icons/fa"
import {ImTwitter as Tw} from "react-icons/im"

export default function Footer() {
    return (
        <div className="foot">

        
        <div className="fooCon">
            <div className="frsFo">
                <div className="company">
                    <h2>BOUNCER</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                         Aut molestias illo doloremque fuga, et fugit aspernatur
                          sit iste voluptas facere accusamus delectus asperiores praesentium 
                          esse optio temporibus? Iure nostrum vero totam, iusto eum at. Corrupti alias
                           dicta eaque repudiandae enim!</p>
                </div>

                <div className="socials">
                    <h2>Follow Us</h2>
                    <p>Since the 1500s, when an unknown printer took a gallery of type and scrambled.</p>
                    <div className="socIcon">
                        <span><a href="#"><Fb className="fb"/></a></span>
                        <span><a href="#"><Tw className="tw"/></a></span>
                    </div>
                </div>

                <div className="contact">
                    <h2>Contact Us</h2>
                    <p>Company Name, 4578 Marmora Road, Glasgow<br/>
                    DO4 89GR<br/>
                    Call us now: 0123-456-789<br/>
                    Email:support@address.com
                    </p>
                </div>
            </div>

            <div className="secFo">
                
                <div className="fCon">

                <div className="inf">
                    <h2>Information</h2>
                    <ul id="ul">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Information</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className="inf">
                    <h2>Service</h2>
                    <ul id="ul">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Information</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className="inf">
                    <h2>Extras</h2>
                    <ul id="ul">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Information</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className="inf">
                    <h2>My Account</h2>
                    <ul id="ul">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Information</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className="inf">
                    <h2>Useful Links</h2>
                    <ul id="ul">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Information</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className="inf">
                    <h2>Our Offers</h2>
                    <ul id="ul">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Information</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>

                </div>

            </div>

        </div>
            <div className="trdFoo">
                <p>© 2021 Ecommerce theme by <a href="#">Sinisa Dakovic</a></p>
                <div className="payMet">
                    <img src="./westunion.png" alt="Western Union" width="50px" height="45px"/>
                    <img src="./paypal.png" alt="Paypal" width="50px" height="45px"/>
                    <img src="./mcard.png" alt="Master Card" width="50px" height="45px"/>
                    <img src="./visa.png" alt="Visa Card" width="50px" height="45px"/>
                </div>
            </div>
        </div>
    )
}
