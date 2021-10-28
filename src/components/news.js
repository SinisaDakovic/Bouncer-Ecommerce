import React from 'react'

export default function News() {
    return (
        <div className="newsSec">
            <div className="titleNews">
                <h2>LATEST NEWS</h2>
            </div>

            <div className="newsCon">

                <div className="new">
                    <div className="newImg">

                        <img src="/newphon.jpg" alt="Phone on the table" width="230px" height="250px"/>

                    </div>

                    <div className="newText">
                        <p className="newDate">01 Jan,2015</p>
                        <h3>Typesetting Industry</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, impedit.</p>
                    </div>
                </div>

                <div className="new">

                <div className="newImg">

                    <img src="/laptopnew.jpg" alt="Laptop" width="230px" height="250px"/>

                </div>

                <div className="newText">
                <p className="newDate">01 Jan,2015</p>
                        <h3>Typesetting Industry</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, impedit.</p>
    
                </div>

                </div>

                <div className="new">

                <div className="newImg">
                        <img src="/newiph.jpg" alt="iPhone" width="230px" height="250px"/>
                </div>

                <div className="newText">
                <p className="newDate">01 Jan,2015</p>
                        <h3>Typesetting Industry</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, impedit.</p>
    
                </div>

                </div>

            </div>
        </div>
    )
}
