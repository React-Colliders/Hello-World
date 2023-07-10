import React from "react"; // v-17.2 
import Button from "./Components/Button"; // v-17.2


const App = ()=>{

    let arr = ["Apple", "white", "black"];
    
    return (
       <div className="hello">
              <h1> Hello World </h1>

                <Button 
                   details  = {["Apple", "white", "black"]}
                />
                
                <Button 
                     details  = {["Banana", "yellow", "red"]}
                />

                <Button 
                        details  = {["Mango", "green", "blue"]}
                />
       </div>
 
     )
}

export default  App; 