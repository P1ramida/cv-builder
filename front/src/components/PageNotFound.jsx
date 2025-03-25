import React from "react";
import { useNavigate } from "react-router";
const PageNotFound = () =>{
    let navigate = useNavigate();
    return(
        <>
            <div className="not_found_wrap">
                <span className="page_not_found">
                    Page not found
                </span>
            </div>
        </>
    );
};
export default PageNotFound;