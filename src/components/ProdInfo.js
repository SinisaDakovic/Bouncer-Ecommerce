import React, {useEffect, useState, useReducer} from 'react'
import {AiFillStar as Star, AiOutlineStar as OutlineStar} from "react-icons/ai"
import Goproad from './goproad';
import Slick from 'react-slick'
import ScrollToTopOnMount from './ScrollToTop';
import {RiShoppingCartLine as Cart} from "react-icons/ri"
import {AiOutlineHeart as Heart,AiFillHeart as FHeart} from "react-icons/ai"
import { useCon } from './Context';
import {Link} from "react-router-dom"
import {FaFacebookF as Fb,FaTwitter as Twt} from "react-icons/fa"
import {ImCross as Cross} from "react-icons/im"


function ProdInfo({match}) {
    

    const [heart, setHeart] = useState(false)

    const [count, setCount] = useState(1)

    function incr(){
        setCount((prevCon) => {
            return prevCon + 1;
        })
    }
    
    function decr(){
        setCount((prevCon) =>{
            if(prevCon - 1 < 1){
                return 1
            }
            
            return prevCon - 1
        })
    }
    const [fetched, setFetched] = useState(false)
    const [item, setItem] = useState([])


    
    async function fetchData(){
        const res = await fetch(`https://my-prod-api.herokuapp.com/${match.params.id}`);
        const data = await res.json();
        setItem(data);
        setFetched(true);
        
    }

    async function fetchRel(){
      

            if(item[0].category === "MacBook"){
            const res = await fetch(`https://my-prod-api.herokuapp.com/mac`);
            const data = await res.json()
            
            setItems(data);
        }
        else if(item[0].category === "iPhone"){
            const res = await fetch(`https://my-prod-api.herokuapp.com/iPhone`);
            const data = await res.json()
            
            setItems(data);
        }
        else if(item[0].category === "iPad"){
            const res = await fetch(`https://my-prod-api.herokuapp.com/iPad`);
            const data = await res.json()
            
            setItems(data);
        }
        else if(item[0].category === "Accessories"){
            const res = await fetch(`https://my-prod-api.herokuapp.com/accessories`);
            const data = await res.json()
            
            setItems(data);
        }
        
    }
    
    useEffect(() => {
        fetchData();
    }, [])

    if(fetched){
        fetchRel();
        setFetched(false);
    }

    
    const [items, setItems] = useState([])
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000,
        appendDots: dots => <ul id="slDt">{dots}</ul>,
        customPaging: i => (
          <div className="ft-slick__dots--custom">
            <div className="orgDt" />
          </div>
        )
    }
    
    function reducer(state, action){
        switch(action.type){
            case "prod":
                return {...action.payload, info: state.info ? state.info : !state.info} 
            case "rev":
                return {...action.payload, rev: state.rev ? state.rev : !state.rev}
            default: return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {info:true,rev:false})
   let inVal={
       info:false,
       rev:false
   }

   const {patch} = useCon();


   const [modal, setModal] = useState(false)

   const closeModal = () => {
       document.body.classList.remove('hid')
       setModal(prev => !prev)
   }

   const openModal = () =>{
    document.body.classList.add('hid')
    setModal(prev => !prev)
   }

    return (
        <>
        <div className="prodInfo">
            <ScrollToTopOnMount/>
            <div className="prodSecti">
            <div className="mainPro">

                {item.map((item,id) => {
                    return (
                        <div className="prdCon" key={id}>

                            <div className={modal ? "modalCon zoom" : "modalCon"}>
                                <div className="crossMod" onClick={() => closeModal()}>
                                    <Cross/>
                                </div>
                                <img src={item.prodImg}/>
                            </div>

                        <div className="prodImgCon"  height="500px" onClick={() => openModal()}>
                            <img src={item.prodImg} className="itemProdImg"/>
                        </div>

                        <div className="prodAbtCon">
                            <div className="prodsName">

                            <h2 className="prNm">{item.name}</h2>
                            <p id="rew"> <span><Star className="star"/><Star className="star"/><Star className="star"/><Star className="star"/><OutlineStar className="starg"/></span> 0 reviews</p>
                            </div>
                            <p id="pp">{item.price} <span id="op">{item.oldPrice}</span></p>
                            
                            <div className="lsa">


                            <div className="avb">
                                <h3>Availability:</h3>
                                <h3 id="avab">{item.availability}</h3>
                            </div>

                            <div className="avb">
                                <h3>Category:</h3>
                                <h3 id="avab">{item.category}</h3>
                            </div>

                            <div className="avb">
                                <h3>Shipping:</h3>
                                <h3 id="avab">Free Shipping</h3>
                            </div>
                        </div>

                        <div className="ls">

                            <div className="avb">
                                <h3>Select Color:</h3>
                                <ul id="ulie">
                                <li><input type="radio" name="color" id="b"/></li>
                                <li><input type="radio" name="color" id="r"/></li>
                                <li><input type="radio" name="color" id="bl"/></li>
                                <li><input type="radio" name="color" id="y"/></li>
                                </ul>
                            </div>

                            <div className="avb">
                                <h3>Size:</h3>
                                <select id="optValu">
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XM">XM</option>
                                    <option value="XS">XS</option>
                                </select>
                            </div>
                        </div>

                        <div className="customerOpt">
                            <div className="itemCount">
                                <button onClick={decr}>-</button>
                                <p>{count}</p>
                                <button onClick={incr}>+</button>
                            </div>

                            <div className="cart">
                                <div className="shopCart" onClick={() => patch({type:"addItem", payload:{itm:item, val:count}})}>
                                    <Cart className="shpCrt"/>
                                    <h2>Add To Cart</h2>
                                </div>
                                <div className="heart" onClick={() => {
                                    setHeart((prevStat) => !prevStat)
                                }}>
                                    <Heart className={heart ? "hr" : "hr hract"}/>
                                    <FHeart className={heart ? "hr hract" : "hr"}/>

                                </div>
                            </div>
                        </div>

                        <div className="shareOptions">
                            <div className="fbShare">
                                <Fb id="socIcs"/>
                                <h3>Share on Facebook</h3>
                            </div>
                            <div className="twtShare">
                                <Twt id="socIcs"/>
                                <h3>Share on Twitter</h3>
                            </div>
                        </div>
                        </div>


                        </div>
                    )
                })}

                </div>

                <div className="abtPro">

                    <div className="abTabs">
                        <h2 className={state.info ? "tbPri active" : "tbPri"} onClick={()=> dispatch({type:"prod", payload:{inVal}})}>Product Information</h2>
                        <h2 className={state.rev ? "tbRev active" : "tbRev"} onClick={()=> dispatch({type:"rev", payload:{inVal}})}>Reviews <span>0</span></h2>
                    </div>

                    <div className="tabContCon">

                    <div className={state.info ? "tabContent active" : "tabContent"}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio fugiat quod qui voluptatum eaque beatae neque officia explicabo magnam repellat saepe quam fugit porro numquam praesentium, temporibus quasi commodi suscipit voluptatem. Doloribus soluta dicta eius quos error esse, dolores itaque aperiam ad repellendus est earum molestias distinctio, excepturi, ut aspernatur necessitatibus animi? Ut, earum officiis sapiente porro repellat corporis facilis nam, voluptatum quae nihil odio incidunt ex consequatur dolore minima maiores blanditiis amet praesentium, nisi expedita eaque nesciunt quo. Quas excepturi doloribus dignissimos esse aliquid. Unde suscipit architecto cupiditate quia! Architecto minima animi dolores officiis quasi ea deleniti aspernatur, tempora incidunt illum eum illo accusantium tenetur sequi perspiciatis quas est hic autem deserunt id. Consequuntur harum, vitae iusto vero ex, odit veniam et odio officiis cumque sit. Ullam sed, modi consequatur, accusamus voluptatum ut officiis illum accusantium voluptas tempora unde dolore repellat voluptates repellendus minus molestiae non placeat soluta blanditiis?</p>
                    </div>

                    <div className={state.rev ? "revCon active" : "revCon"}>
                        <h3>No reviews found</h3>
                    </div>

                    </div>

                </div>


            </div>

            <div className="adsSect">



                <h2 id="selHed">BEST SELLER</h2>

                <div className="slidCone">

                <Slick {...settings} style={{width:"100%"}}>

                  
                    <Link to="/home/948c-af43" style={{textDecoration:"none", color:"inherit"}}>
                    <div className="adSlide">
                        <div className="adImg">
                            <img src="/mac.png" alt=""/>
                        </div>
                        <div className="adabt">
                            <h2>Apple Macbook Pro</h2>
                            <p><span><Star className="star"/><Star className="star"/><Star className="star"/><Star className="star"/><OutlineStar className="starg"/></span></p>
                            <p id="pp">$499 <span id="op">$599</span></p>
                        </div>
                    </div>
                    </Link>
              
                <Link to="/home/owre-028x" style={{textDecoration:"none", color:"inherit"}}>
                    <div className="adSlide">
                        <div className="adImg">
                            <img src="/airpodspro.png" alt=""/>
                        </div>
                        <div className="adabt">
                            <h2>AirPods Pro</h2>
                            <p><span><Star className="star"/><Star className="star"/><Star className="star"/><Star className="star"/><OutlineStar className="starg"/></span></p>
                            <p id="pp">$499 <span id="op">$599</span></p>
                        </div>
                    </div>
                </Link>

                <Link to="/home/ored-of89" style={{textDecoration:"none", color:"inherit"}}>
                    <div className="adSlide">
                        <div className="adImg">
                            <img src="/tvray.png" alt=""/>
                        </div>
                        <div className="adabt">
                            <h2>H-Squared tvTray</h2>
                            <p><span><Star className="star"/><Star className="star"/><Star className="star"/><Star className="star"/><OutlineStar className="starg"/></span></p>
                            <p id="pp">$499 <span id="op">$599</span></p>
                        </div>
                    </div>
                </Link>


            
                </Slick>
                </div>


                <Goproad/>
            </div>

        </div>

            <div className="relatedProds">

                <div className="relHeading">
                    <h2>RELATED PRODUCTS</h2>
                </div>

                <div className="carContainer">
                    <div className="carCon">

                    
                    {items.length > 0 ?
                    items.slice(0,5).map((itm,id) => {
                        return (
                            <Link to={itm.prodId} style={{cursor:"pointer", textDecoration:"none", color:"inherit"}} key={id}>

                            <div className="relCardCon" key={id}>
                                <div className="relImgCon">
                                    <img src={itm.prodImg} alt=""/>
                                </div>
                                <div className="relAboutProd">
                                    <h3>{itm.name}</h3>
                                    <p><span><Star className="star"/><Star className="star"/><Star className="star"/><Star className="star"/><OutlineStar className="starg"/></span></p>
                                    <p id="pp">{itm.price} <span id="op">{itm.oldPrice}</span></p>
                                </div>
                            </div>
                            </Link>
                        )
                    })
                : <p>Loading data...</p>
                }
                </div>
                </div>
            </div>
                </>
    )
}

export default ProdInfo
