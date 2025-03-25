import React from "react";


const MyTextArea = (props) =>{
    return(
        <>
            <textarea name={props.name} rows={props.rows} cols={props.cols} placeholder={props.placeholder} {...props} className="mytextarea">

            </textarea>
        </>
    );
}

export default MyTextArea;