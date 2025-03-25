import React, { useEffect, useState } from "react";
import MyTextArea from "./MyTextArea";
const ProffesionalSummary = ({onUserSummaryChange}) =>{

    const [proffesional_summary,setProffesionalSummary] = useState('');
    useEffect(()=>{
        onUserSummaryChange(proffesional_summary);
    },[proffesional_summary,onUserSummaryChange])
    
    return(
        <>
            <div className="proffesional_summary">
                <span className="stage_name">Professional Summary</span>
                <span className="stage_description">
                Write 2-4 short, energetic sentences about how great you are. Mention the role and what you did. What were the big achievements? Describe your motivation and list your skills.
                </span>
                <div className="input_area">
                    <MyTextArea 
                    cols="2" 
                    rows="5"
                    value={proffesional_summary}
                    onChange={e => setProffesionalSummary(e.target.value)}
                    maxlength={200}/>
                </div>
            </div>
        </>
    );
};

export default ProffesionalSummary;