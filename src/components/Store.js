import React,{useEffect,useState , Suspense} from 'react'
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

    const [showNum, setShowNum] = useState(14)

    const [sort, setSort] = useState("name")


    return (
        <div className="store">
            <div className="storeCon">
        <div className="wrp">

                <div className="filtering">
                        <h2>ACCESSORIES</h2>
                        <span><p> Apple Car  </p> <p id="quant">2</p></span>
                        <span style={{color:"#419FFF", fontWeight:"bold"}}><p> Air port & wireless  </p><p id="quant" style={{color:"#419FFF"}}>48</p> </span>
                        <span><p> Cables & Docks  </p> <p id="quant">14</p></span>
                        <span><p> Cases & Films  </p><p id="quant">15</p> </span>
                        <span><p> Charging Devices  </p> <p id="quant">23</p></span>
                        <span><p> Headphones  </p><p id="quant">1</p> </span>
                </div>

                <div className="filtering">
                        <h2>BRANDS</h2>
                        <span style={{color:"#419FFF", fontWeight:"bold"}}><p> Apple</p> <p id="quant" style={{color:"#419FFF"}}>8</p></span>
                        <span><p> Samsung  </p><p id="quant">32</p> </span>
                        <span><p> LG  </p> <p id="quant">13</p></span>
                        <span><p> Dell  </p><p id="quant">20</p> </span>
                        <span><p> ViewSonic  </p> <p id="quant">10</p></span>
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
                            <p>{items.length} items</p>
                            <div className="sortBy">
                                <p>Sort by:</p>
                                <select onChange={(e) => setSort(e.target.value)}>
                                    <option value="name">Name</option>
                                    <option value="price">Price</option>

                                </select>
                            </div>
                            <div className="showNum">
                                <p>Show:</p>
                                <select onChange={(e) => setShowNum(e.target.value)}>
                                    <option value="7">7</option>
                                    <option value="14" selected>14</option>
                                    <option value="21">21</option>
                                    <option value="28">28</option>
                                    <option value="35">35</option>
                                    <option value="42">42</option>
                                    <option value="49">49</option>

                                </select>
                            </div>
                     </div>
            <div className="fcon">

                     <div className="fetchedItms">
                           
                            {  items.length > 0 ? 
                            items.sort((a,b) => (sort === "price") ? (a.prc * 1 > b.prc * 1 ? 1 : - 1) : (a.name > b.name ? 1 : -1)).slice(0,showNum).map((itm,id) => {
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
                            })
                            : <p style={{fontWeight:"bold", letterSpacing:"1px",fontSize:"2.5em", marginTop:"1.5em", display:"inline-block"}}>Loading data...</p>
                        }
                     </div>
                </div>
             </div>
        </div>
                    </div>
                </div>
            
        
    )
}
