import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Pokeman=()=>{
const [num , setNum]= useState();
const [name , setName]= useState("");
const [move , setMove]= useState();
useEffect(()=>{
    async function getData(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        setName(res.data.name)
        setMove(res.data.moves.length)
        
    };
    getData()
});


    return (
<>
<h1>{num} character name is <span style={{color:"red"}}>{name} </span> and has <span style={{color:"red"}}> {move}</span> moves</h1>
<select value={num} onChange={(e)=>{ setNum(e.target.value)}}>
    <option value='1'>1</option>
    <option value='2'>2</option>
    <option value='4'>4</option>
    <option value='5'>5</option>
    <option value='6'>6</option>
    <option value='25'>25</option>
</select>


</>



    )
}

export default Pokeman;
