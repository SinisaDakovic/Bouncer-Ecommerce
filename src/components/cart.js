import React from 'react'
import { useCon } from './Context'

export default function Cart() {

    const {cart, patch} = useCon();
    console.log(cart);


    return (
        <div className="cartCont">
            
          <div className="itemLists">
        
                <table className="itmCon">
                <tr>
                    <td>PRODUCT</td>
                    <td>PRICE</td>
                    <td>QTY</td>
                    <td>UNIT PRICE</td>
                </tr>

                {cart.cart.length === 0 && <>
                <tr>
                    <td style={{padding:"2.5em 0",fontWeight:"bold", fontSize:"1.5em"}}>No items added.</td>
                </tr>
                </>}

              {    
               cart.cart.map((item, id) => {
                   return (
                   <tr  key={id} className="itTr">
                       <td>
                           <div className="itmImgC">
                        <button onClick={() => patch({type:"remove", payload:{id:id}})} id="remBt">X</button>
                               <img src={item.prodImg} width="150px" height="150px"/>
                           
                               <h3>{item.name}</h3>
                           </div>
                       </td>

                       <td>

                           <div className="itmPrc">
                               <p key={id}>${item.prc * item.qty}</p>
                           </div>

                       </td>

                       <td>

                           <div className="itemCount">
                                <button onClick={() => patch({type:"minus", payload:id})}>-</button>
                                <p key={id}>{item.qty}</p>
                                <button onClick={() => patch({type:"plus", payload:id})}>+</button>
                            </div>


                       </td>

                       <td>


                           <div className="unitPrc">
                               <p>{item.price}</p>
                           </div>

                       </td>

                   </tr>
                       )
                    })
                }
                </table>

            </div>

            <div className="mobileCart">
            {cart.cart.length === 0 && <><h2>No items added.</h2></>}
                {
                    cart.cart.map((item,id) => {
                        return (
                            <div className="mobCart">
                                <button onClick={() => patch({type:"remove", payload:{id:id}})} id="mobRemBt">X</button>
                                
                                <div className="mobimg">

                                    <div className="mobItmImg">
                                        <img src={item.prodImg} id="mobitmimg"/>
                                    </div>

                                </div>

                            <div className="itmInfo">
                                <div className="mobProdName">
                                    <h3>{item.name}</h3>
                                </div>

                                <div className="itemCount">
                                <button onClick={() => patch({type:"minus", payload:id})}>-</button>
                                <p key={id}>{item.qty}</p>
                                <button onClick={() => patch({type:"plus", payload:id})}>+</button>
                            </div>

                            <div className="itmPrc">
                               <p key={id}>${item.prc * item.qty}</p>
                           </div>

                                </div>    

                               

                            </div>
                        )
                    })
                }
            </div>
               
            <div className="paymentInfo">
                
                <div className="voucher">
                    <input type="text" placeholder="Voucher code"/>
                    <button>Redeem</button>
                </div>

                <div className="total">
                    <div id="wpr">

                    <div className="ttl">
                        <span>

                        <h2>Subtotal</h2>
                        </span>
                        <span>

                        <p>${cart.cart.length === 0 && <span>0.00</span>}
                            {cart.cart.reduce((prevVal,curVal) =>  prevVal + curVal.prc * curVal.qty,0 )}</p>
                        </span>
                    </div>
                    <div className="ttl">
                        <span>

                        <h2>Shipping fee</h2>
                        </span>
                        <span>

                        <p>$0.00</p>
                        </span>
                    </div>
                    <div className="ttl">
                        <span>

                        <h2>Coupon</h2>
                        </span>
                        <span>

                        <p>None</p>
                        </span>
                    </div>
                    </div>
                    <div className="ttl">
                        <h2>TOTAL</h2>
                        <p>${cart.cart.length === 0 && <span>0.00</span>}
                        {cart.cart.reduce((prevVal,curVal) => {
                            let res = prevVal + curVal.prc * curVal.qty;
                            return res;
                        },0 )}</p>
                    </div>
                    <button id="chkBt">Check out</button>
                </div>
            </div>
            

        </div>
    )
}
