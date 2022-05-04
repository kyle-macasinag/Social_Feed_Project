import {useState} from "react"
//import "./CustomButton.css"

const CustomButton = (props) => {

    function handleClick(){
        //Need: Toggle between active & inactive css class
    }
        return (
            <div>
                <button className = "inactive" onClick = {handleClick}>props.message</button>
            </div>  
    )
}
export default CustomButton