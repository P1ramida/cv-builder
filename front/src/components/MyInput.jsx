import React from "react";

const MyInput = (props) =>{
    return(
        <>
            <input type={props.type} placeholder={props.placeholder} className={"myinput"} {...props}/>
        </>
    );
}

export default MyInput;