import React, { useState, useEffect } from 'react';


const TitleChange = () => {
    const  [num, setNum] = useState(0);
    
    useEffect(()=>{
     document.title=`You Clcik ${num}`   
    });
    

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

           


        </>
    )


}

export default TitleChange;

