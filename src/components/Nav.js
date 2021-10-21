import React, {useReducer} from 'react'
import {BsPerson as Person} from "react-icons/bs"
import {RiShoppingCartLine as Cart} from "react-icons/ri"
import {Link} from "react-router-dom"
import { useCon } from './Context'

const Nav = () =>{

    const {cart} = useCon();

    const ACTIONS = {
        HOME: "home",
        STORE: "store",
        MAC: "mac",
        IPHONE: "iphone",
        IPAD: "ipad",
        ACCESS: "accessories"
    }

    function reducer(state, action){
        switch(action.type){
            case "home":
                return {...initSt, home: state.home ? state.home : !state.home}
            case "store":
            return {...initSt, store: state.store ? state.store : !state.store}
            case "iphone":
            return {...initSt, iphone: state.iphone ? state.iphone : !state.iphone} 
            case "ipad":
            return {...initSt, ipad: state.ipad ? state.ipad : !state.ipad} 
            case "mac":
            return {...initSt, macbook: state.macbook ? state.macbook : !state.macbook} 
            case "accessories":
            return {...initSt, accessories: state.accessories ? state.accessories : !state.accessories} 
            default: return state;
        }
    }
    const initSt = {
        home:false,
        store:false,
        iphone:false,
        ipad:false,
        macbook:false,
        accessories:false
    }

    const [active, dispatch] = useReducer(reducer,{
        home:true,
        store:false,
        iphone:false,
        ipad:false,
        macbook:false,
        accessories:false
    })

    return (
        <div className= "navigation">
            <div className = "frst">
                <div className = 'col'>
                <p>EN</p>
                <p>USD</p>
                </div>
                <div className = 'col'>
                    <div className="prof">
                        <span><Person className="navIc"/></span>
                    <p>My profile</p>
                    </div>
                    <Link to="/cart" style={{textDecoration:"none",color:"inherit"}}>
        <div className="prof">

                        <span><Cart className="navIc"/></span>
                    <p>
                        {cart.cart.length} items</p>
        </div>
                    </Link>
                </div>
            </div>

            <div className = 'logo'>
                <h2>BOUNCER</h2>
            </div>

            <div>
           

                <ul className ="list">
                    <li><Link to="/" className={active.home ? "orgNav activ" : "orgNav"} onClick={() => dispatch({type:ACTIONS.HOME})}>HOME</Link></li>
                    <li><Link to="/store" className={active.store ? "orgNav activ" : "orgNav"} onClick={() => dispatch({type:ACTIONS.STORE})}>STORE</Link></li>
                    <li><Link to="/iphone" className={active.iphone ? "orgNav activ" : "orgNav"} onClick={() => dispatch({type:ACTIONS.IPHONE})}>IPHONE</Link></li>
                    <li><Link to="/ipad" className={active.ipad ? "orgNav activ" : "orgNav"} onClick={() => dispatch({type:ACTIONS.IPAD})}>IPAD</Link></li>
                    <li><Link to="/macbook" className={active.macbook ? "orgNav activ" : "orgNav"} onClick={() => dispatch({type:ACTIONS.MAC})}>MACKBOOK</Link></li>
                    <li><Link to="/accessories" className={active.accessories ? "orgNav activ" : "orgNav"} onClick={() => dispatch({type:ACTIONS.ACCESS})}>ACCESSORIES</Link></li>
                </ul>
           
            </div>

        </div>
    )
}

export default Nav