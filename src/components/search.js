import React, {useState} from 'react'
import {AiFillStar as Star, AiOutlineStar as OutlineStar} from "react-icons/ai"
import {Link} from "react-router-dom"




function Search() {

    const [state, setState] = useState([])

    async function search(inpt){
        const res = await fetch("https://my-prod-api.herokuapp.com/all");
        const data = await res.json();

        const datas = data.filter((itm) => itm.name.toLowerCase().search(inpt.toLowerCase()) !== -1)

        setState(datas);

        document.getElementById("form").reset();

        if(datas.length === 0){
            document.querySelector('.searchedItm').innerHTML = "<h1 id=searchErr>No products were found</h1>";
        }else document.getElementById('searchErr').remove();
   
    }

    return (
        <div className="srCon">
            <div className="searchQuery">
                <form id="form" onSubmit={(e) => {
                    e.preventDefault();
                    search(e.target[0].value)
                    }}>
                    <input type="text" placeholder="Search query..."/>
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="searchedItm">
                
                {state.map((item,id) => (
                        <Link to={"/home/"+ item.prodId} style={{textDecoration:"none", color:"inherit"}}>
                        <div className="itmresult" key={id}>
                                <div className="itmresultimg" style={{width:"200px", height:"200px"}}>
                                    <img src={item.prodImg}/>
                                </div>

                                <div className="itmresultabout">
                            <h2 style={{width:"15ch"}}>{item.name}</h2>
                            <p><span><Star className="star"/><Star className="star"/><Star className="star"/><Star className="star"/><OutlineStar className="starg"/></span></p>
                            <p id="pp">{item.price} <span id="op">{item.oldPrice}</span></p>
                        </div>

                        </div>
                        </Link>
                    
                ))}
            </div>
        </div>
    )
}

export default Search
