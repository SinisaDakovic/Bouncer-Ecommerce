import React,{useEffect,useState} from 'react'
import {AiFillStar as Star, AiOutlineStar as OutlineStar} from "react-icons/ai"
import {Link} from "react-router-dom"

export default function Store(props) {

    async function fetching(){
        const res = await fetch(`https://my-prod-api.herokuapp.com/${props.fetchitm}`);
        const data = await res.json();
        setItems(data);
    }
    const [items, setItems] = useState([])
    useEffect(() => {
        fetching()
    }, [])

    return (
        <div className="store">
            <div className="storeCon">
        <div className="wrp">

                <div className="filtering">
                        <h2>ACCESSORIES</h2>
                        <span><p> Apple Car  </p> <p id="quant">2</p></span>
                        <span><p> Air port & wireless  </p><p id="quant">48</p> </span>
                        <span><p> Cables & Docks  </p> <p id="quant">14</p></span>
                        <span><p> Cases & Films  </p><p id="quant">15</p> </span>
                        <span><p> Charging Devices  </p> <p id="quant">23</p></span>
                        <span><p> Headphones  </p><p id="quant">1</p> </span>
                </div>
        </div>

        <div className="wprr">

                <div className="storeProducts">

                    <div className="storeAd">
                            <div className="storeAdText">
                                <h1>iPhone 6 Plus</h1>
                                <p>Performance and design.Taken right<br/>to the edge.</p>
                             <Link to="/home/fyu1-cfd3">
                             <a>
                                 SHOP NOW
                             </a>
                             </Link>
                         </div>
                            <div className="storeAdimg">
                                <img src="./iphone6.png" alt="iPhone 6" className="storeAdIc"/>
                            </div>
                     </div>

                     <div className="filterFetch">
                            <p>Something</p>
                     </div>
            <div className="fcon">

                     <div className="fetchedItms">
                            {items.map((itm,id) => {
                                return (
                                    <Link to={`/home/`+itm.prodId} style={{color:"inherit", cursor:"pointer", textDecoration:"none"}}>
                                    <div className="fetchItm" key={id}>
                                        <div className="prdimg">
                                            <img src={itm.prodImg}/>
                                        </div>
                                        <div className="prodAbt">
                                            <h3>{itm.name}</h3>
                                            <p id="rew"> <span><Star className="star"/><Star className="star"/><Star className="star"/><Star className="star"/><OutlineStar className="starg"/></span></p>
                                            <p id="pp">{itm.price} <span id="op">{itm.oldPrice}</span></p>
                                        </div>
                                    </div>
                                    </Link>
                                )
                            })}
                     </div>
                </div>
             </div>
        </div>
                    </div>
                </div>
            
        
    )
}
