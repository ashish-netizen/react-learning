// We studie herer contex api use using compnent a,b,c


import React, { createContext } from 'react';
import A from './A'

const FirstName= createContext();
const LastName= createContext();

const App1 =()=>{

return (
<>

<FirstName.Provider value={"Ashish"} >
<LastName.Provider value={"Netizen"}>
    <A/>
    
    </LastName.Provider >
    </FirstName.Provider >

</>
)
}
export default App1;
export {FirstName};
export {LastName};