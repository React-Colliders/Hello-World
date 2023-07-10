
import React from "react";


const Button = ({details})=>{
    // props => Properties => read only object
    // console.log(props); // {text: "Apple", color: "red"}
    

    return(
             <div>
                <button style={{backgroundColor: details[2], color: details[1]}}>{details[0]}</button> 
             </div>
    )
}

export default Button;