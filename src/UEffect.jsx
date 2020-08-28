import React, { useState, useEffect } from 'react';


const UEffect = () => {
    const  [num, setNum] = useState(0);
    const  [nums, setNums] = useState(0);
    useEffect(()=>{
        alert("Cick on Ok") 
    }, [nums]);
    

    return (
        <>
            <button onClick={() => 
            {setNum(num + 1)}
            // ,
            // ()=>{
            //     alert("Cick on Ok")
            // }
            
            }> 
            Number {num} </button>

            <br/>
            <button onClick={() => 
            {setNums(nums + 1)}
            // ,
            // ()=>{
            //     alert("Cick on Ok")
            // }
            
            }> 
            Numbers {nums}  </button>



        </>
    )


}

export default UEffect;

