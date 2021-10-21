import React, {useReducer, useContext} from 'react'

const cartContext = React.createContext();

export default function Context({children}) {


    function creducer(state, action){
        switch(action.type){
            case "addItem":
                return {...state, cart:[...state.cart,{...action.payload.itm, qty:action.payload.val}]};


            case "remove": 
                return {...state,cart:state.cart.filter((itm, ad) => ad !== action.payload.id)};

            
            case "plus":
                return {...state,cart:state.cart.map((itm,ad) => {
                    if(ad === action.payload){
                        return {...itm, qty:itm.qty + 1}
                    }
                    return itm;
                    })}
            
            case "minus":
                return {...state,cart:state.cart.map((itm,ad) => {
                    if(ad === action.payload){
                        if(itm.qty - 1 < 1){
                            return {...itm,qty:1}
                        }
                        return {...itm, qty:itm.qty - 1}
                    }
                    return itm;
                })}
                    
                   
            default: return state;    
        }
    }
    
    const [cart, patch] = useReducer(creducer,{
        cart:[]
    });
    
    return (
        <cartContext.Provider value={{cart,patch}}>
            {children}
        </cartContext.Provider>
    )
}

export const useCon = () => {
    return useContext(cartContext)
}
