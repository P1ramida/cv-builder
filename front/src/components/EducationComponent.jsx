import React, { useEffect, useReducer, useState } from "react";
import MyInput from "./MyInput";
import MyTextArea from "./MyTextArea";
import ComponentOpenSide from "./ComponentOpenSide";
const EducationComponent = ({id,onRemove,onUpdate}) =>{

    const [blockHeight,setBlockHeight] = useState("450px");
    const [isExpanded, setIsExpanded] = useState(true); 
    const toggleHeight = () =>{
        setIsExpanded(!isExpanded);
        setBlockHeight(isExpanded ? "40px" : "450px");
    }

    const [educationName,setEducationName] = useState('');
    const [degree,setDegree] = useState('');
    const [city,setCity] = useState('');
    const [startDate,setStartDate] = useState('');
    const [endDate,setEndDate] = useState('');
    const [description,setDescription] = useState('');


    useEffect(()=>{
        const education_data = {
            educationName,
            degree,
            city,
            startDate,
            endDate,
            description
        };
        if(id != undefined && onUpdate){
            onUpdate(id,education_data);
        };
    },[educationName,degree,city,startDate,endDate,description]);

    

    return(
        <>
            <div className="component_item_menu" style={{"height":blockHeight}}>
                <ComponentOpenSide 
                sprecified_title={educationName} 
                onRemove={onRemove} 
                id={id} 
                isExpanded={isExpanded} 
                toggleHeight={toggleHeight} 
                />
                <div className="input_area">
                    <div className="input_with_label">
                        <label htmlFor="#SchoolTitle">School</label>
                        <MyInput
                        onChange={e => setEducationName(e.target.value)}
                        id="SchoolTitle" 
                        type="text" />
                    </div>
                    <div className="input_with_label">
                        <label htmlFor="#Degree">Degree</label>
                        <MyInput 
                        id="Degree" 
                        type="text"
                        value={degree}
                        onChange={e=> setDegree(e.target.value)}
                        />
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
                            value={startDate}
                            onChange={e=> setStartDate(e.target.value)}/>
                            <MyInput 
                            id="JobTitle" 
                            type="date"
                            value={endDate}
                            onChange={e=> setEndDate(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <span className="stage_description">
                    Description
                    <MyTextArea 
                    cols="2" 
                    rows="5" 
                    placeholder="e.g. Graduated with High Honors."
                    value={description}
                    onChange={e=> setDescription(e.target.value)}
                    maxlength={180}/>
                </span>
            </div>
        </>
    );
};

export default EducationComponent;