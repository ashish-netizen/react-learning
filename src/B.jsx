import React, {useContext} from 'react';
// import C from "./C";
import {FirstName, LastName} from './App1';
const B= ()=>{
 const fname= useContext(FirstName)
 const lname= useContext(LastName)

    return <h1>My Name is {fname} {lname} </h1>
}

export default B;