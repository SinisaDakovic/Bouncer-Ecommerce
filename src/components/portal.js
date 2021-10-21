import React from 'react'

function Portals() {
    return (
        <div className="pc">

        <div className="portalCon">
            
            <div className="frsPor">
                <h2>iPhone 6</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, libero!</p>
                <h1>$399</h1>
            </div>

            <div className="scnPor">
                <div className="scImg">

                <img src="/oculus.png" alt="Oculus Rift" height="auto"/>
                </div>
                
                <div className="scnT">
                <p>Oculus Rift</p>
                <h1>$349</h1>
                </div>
                    
            </div>

            <div className="trdPor">
                <div className="trT">

                <h2>GoPro Hero 6</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, excepturi.</p>
                <h1>$299</h1>
                </div>
                <div className="imgTr">

                <img src="/gopro.png" alt="GoPro Hero 6" width="500px" height="155px"/>
                </div>
            </div>
        
        </div>
    </div>
        
        
       
    )
}

export default Portals
