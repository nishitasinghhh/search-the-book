import React, { useState } from "react";
import img1 from '/Users/nishitasingh/booksearch/src/img/bg2.png'
import Cards from "./Cards";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
      if(evt.key==="Enter")
      {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyB9ItuPeDr8F0a0eYJ46oR2qQg6kbgieSw'+'&maxResults=40')
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
      }
    }
    return(
        <>
        <div className="header">
            <div className="row1">
              <h1>A room without book is like <br/> a body without soul.</h1>
            </div>
            <div className="row2">
              <h2>Find your Book</h2>
              <div className="search">
                <input type="text" placeholder="Enter Your Book Name"
                value={search} onChange={e=>setSearch(e.target.value)}
                onKeyPress={searchBook} />
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
              </div>
              <img src={img1} alt="" />
            </div>
        </div>
        <div className="container">
            {
               <Cards book={bookData}/>
            }
        
        
        </div>
        </>
    )
}
export default Main