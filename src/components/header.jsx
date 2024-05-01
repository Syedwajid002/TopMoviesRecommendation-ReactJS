import React from 'react'
import { FaThList } from "react-icons/fa";


export function Header(){
    const mystyle={
        background:" rgb(67, 90, 91)",
        alignItems:"center",
        justifyContent:"space-around",
        padding:"10px 0px 10px 0px",
        display:"flex"
    }
    const spanstyle={
        background:"black",
        color:"white",
        borderRadius:"5px",
        padding:"2px"
    }
    return(
        <>
        <div style={mystyle}>
        <h2>Top <span style={spanstyle}>100</span> Movies Rated by IMDB</h2>
        <FaThList />
        </div>
        </>
    )
}