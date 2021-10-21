import React, {useEffect, useState, useReducer} from 'react'
import {AiFillStar as Star, AiOutlineStar as OutlineStar} from "react-icons/ai"
import {Link} from 'react-router-dom'






export default function SellingSec() {
    
    async function fetching(itm){
    const res = await fetch(`https://my-prod-api.herokuapp.com/${itm}`);
    const data = await res.json();
    setState(data)
    console.log(data)
    return data;
    }

    const [status, setStatus] = useState({spc: 8, value:"Load more", vis:true})

    function loadMore(){
    
        setStatus(() => {
            console.log(status)
            return {...status,spc: status.spc < state.length ? status.spc + 8 : 8, vis: status.spc + 8 >= state.length ? false : true}
        })
        
    }

    const [state, setState] = useState([])
    console.log(state.length)
   


    function reducer(state, action){

        switch(action.type){
            case "all":
            return {...action.payload, all: state.all ? state.all : !state.all}
            case "mac":
            return {...action.payload, mac: state.mac ? state.mac : !state.mac}
            case "iphone":
            return {...action.payload, iphone: state.iphone ? state.iphone : !state.iphone} 
            case "ipad":
            return {...action.payload, ipad: state.ipad ? state.ipad : !state.ipad}  
            case "accessories":
            return {...action.payload, accessories: state.accessories ? state.accessories : !state.accessories}     
            default: return state;
        }
    }

    const [active, dispatch] = useReducer(reducer,{
        all:true,
        mac:false,
        iphone:false,
        ipad:false,
        accessories:false
    } )

    const ACTIONS = {
        ALL: "all",
        MAC: "mac",
        IPHONE: "iphone",
        IPAD: "ipad",
        ACCESS: "accessories"
    }
    const initial ={
        all:false,
        mac:false,
        iphone:false,
        ipad:false,
        accessories:false
    }

    useEffect( async () => {
        const datas = await fetching("all");
        setState(datas)    
    }, [])

    return (
        <div>
            <div className="sellTitle">
                <h2>BEST SELLER</h2>
            </div>

            <div className="sellingList">
                <div className="sellNa">
                    <ul id="selUl">
                        <li onClick={(e) => {e.preventDefault(); dispatch({type:ACTIONS.ALL, payload:initial}); fetching("all")}}><a href="all" className={active.all ? "activeSel" : ""}>All</a></li>
                        <li onClick={(e) => {e.preventDefault();dispatch({type:ACTIONS.MAC, payload:initial}); fetching("mac")}}><a href="mac" className={active.mac ? "activeSel" : ""}>Mac</a></li>
                        <li onClick={(e) => {e.preventDefault();dispatch({type:ACTIONS.IPHONE, payload:initial}); fetching("iphone")}}><a href="iphone" className={active.iphone ? "activeSel" : ""}>iPhone</a></li>
                        <li onClick={(e) => {e.preventDefault();dispatch({type:ACTIONS.IPAD, payload:initial}); fetching("ipad")}}><a href="ipad" className={active.ipad ? "activeSel" : ""}>iPad</a></li>
                        <li onClick={(e) => {e.preventDefault();dispatch({type:ACTIONS.ACCESS, payload:initial}); fetching("accessories")}}><a href="accessories" className={active.accessories ? "activeSel" : ""}>Accessories</a></li>
                    </ul>
                </div>

                <div className="sellProducts">
                   <div className="selCen">
                    {
                        state.slice(0,status.spc).map((item, id) =>{
                            return(
                                <Link to={`/home/`+item.prodId} style={{textDecoration:"none", color:"initial"}} key={id}>
                                <div className="sellCont">

                                <div className="sellProdItem">
                                    <div className="prodImeg" style={{width:"200px", height:"200px"}}>
                                        <img src={item.prodImg} alt=""/>
                                    </div>
                                    <div className="prodSecIt">
                                        <h3 style={{width:"15ch"}}>{item.name}</h3>
                                        <span id="span"><Star className="star"/><Star className="star"/><Star className="star"/><Star className="star"/><OutlineStar className="starg"/></span>
                                        <p id="price">{item.price}<span id="prSp">{item.oldPrice}</span></p>
                                    </div>
                                </div>
                            
                            </div>
                            </Link>
                            )
                        })
                    }
                    </div> 
                </div>

                <button className={status.vis ? "load" : "load vis"} onClick={() => loadMore()}>{status.value}</button>
            </div>
        </div>
    )
}
