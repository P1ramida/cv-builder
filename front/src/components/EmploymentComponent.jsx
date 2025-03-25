import React, { useEffect, useReducer, useState } from "react";
import MyInput from "./MyInput";
import MyTextArea from "./MyTextArea";
import ComponentOpenSide from "./ComponentOpenSide";
const EmploymentComponent = ({id, onRemove,onUpdate}) =>{
    const [blockHeight,setBlockHeight] = useState("450px");
    const [isExpanded, setIsExpanded] = useState(true);
    
    const [jobTitle,setJobTitile] = useState('');
    const [employer,setEmployer] = useState('');
    const [city,setCity] = useState('');
    const [startDate,setStartDate] = useState('');
    const [endDate,setEndDate] = useState('');
    const [description,setDescription] = useState('');


    useEffect(()=>{
        const eml_data = {
            jobTitle,
            employer,
            city,
            startDate,
            endDate,
            description
        };
        if(id != undefined && onUpdate){
            onUpdate(id, eml_data);
        }
    },[jobTitle,employer,city,startDate,endDate,description])

    const toggleHeight = () =>{
        setIsExpanded(!isExpanded); // Toggle the expanded state
        setBlockHeight(isExpanded ? "40px" : "450px");
    }
    
    return(
        <>
            <div className="component_item_menu" style={{"height":blockHeight}}>
                <ComponentOpenSide 
                sprecified_title={jobTitle} 
                onRemove={onRemove} 
                id={id} 
                isExpanded={isExpanded} 
                toggleHeight={toggleHeight} 
                />
                <div className="input_area">
                    <div className="input_with_label">
                        <label htmlFor="#JobTitle">Job Title</label>
                        <MyInput
                        id="JobTitle" 
                        type="text" 
                        placeholder="ProTech Group"
                        value={jobTitle}
                        onChange={e => setJobTitile(e.target.value)}/>
                    </div>
                    <div className="input_with_label">
                        <label htmlFor="#Emloyer">Employer</label>
                        <MyInput 
                        id="Emloyer" 
                        type="text" 
                        placeholder="Software engineer"
                        value={employer}
                        onChange={e=> setEmployer(e.target.value)}/>
                    </div>
                    <div className="input_with_label">
                        <label htmlFor="#City">City</label>
                        <MyInput 
                        id="City" 
                        type="text" 
                        placeholder="N.Y City"
                        value={city}
                        onChange={e=> setCity(e.target.value)}/>
                    </div>
                    <div className="input_with_label">
                        <label htmlFor="">Start & End date</label>
                        <div className="start_end_date">
                            <MyInput 
                            id="JobTitle" 
                            type="date"
                            onChange={e=> setStartDate(e.target.value)}/>
                            <MyInput 
                            id="JobTitle" 
                            type="date"
                            onChange={e=> setEndDate(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <span className="stage_description">
                    Description
                    <MyTextArea 
                    cols="2" 
                    rows="6" 
                    placeholder="Curious science teacher with 8+ years of experience and a track record of..."
                    onChange={e=> setDescription(e.target.value)}
                    maxlength={350}/>
                </span>
            </div>
        </>
    );
};

export default EmploymentComponent;