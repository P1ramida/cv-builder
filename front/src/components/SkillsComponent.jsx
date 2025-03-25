import React, { useEffect, useState } from "react";
import MyInput from "./MyInput";
import ComponentOpenSide from "./ComponentOpenSide";
const SkillsComponent = ({id,onRemove,onUpdate}) =>{
    
    const [activeLevel,setActiveLevel] = useState('');
    const [skillName,setSkillName] = useState('(Not specified)');
    const [blockHeight,setBlockHeight] = useState("150px");
    const [isExpanded, setIsExpanded] = useState(true);
    const levels = ['Novice', 'Beginner', 'Skillful', 'Experienced', 'Expert'];
    
    const handleLevel = (level) =>{
        setActiveLevel(level);
    }

    useEffect(()=>{
        const skill_data = {
            skillName,
            activeLevel
        };
        if(id != undefined && onUpdate){
            onUpdate(id,skill_data);
        }
    },[skillName,activeLevel]);

    useEffect(()=>{
        if (skillName === ''){
            setSkillName('(Not specified)');
        }
    },[skillName]);


    const toggleHeight = () =>{
        setIsExpanded(!isExpanded); // Toggle the expanded state
        setBlockHeight(isExpanded ? "40px" : "150px");
    }
    return(
        <>
            <div className="skill_component" style={{"height":blockHeight}}>
            <ComponentOpenSide 
                sprecified_title={skillName} 
                onRemove={onRemove} 
                id={id} 
                isExpanded={isExpanded} 
                toggleHeight={toggleHeight} 
            />
            <div className="input_area">
                <div className="input_with_label">
                    <label htmlFor="#skill">Skill</label>
                    <MyInput id={"skill"} onChange={e => setSkillName(e.target.value)} maxlength={20}/>
                </div>
                <div className="input_with_label">
                    <label htmlFor="#skill">Level - <span className="active_level_text" id="skill">{activeLevel}</span></label>
                    <div className="skill_levels">
                        {levels.map((level)=>(
                            <div className={activeLevel === level ? 'skill_level active' : 'skill_level'} onClick={() => handleLevel(level)}>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default SkillsComponent;