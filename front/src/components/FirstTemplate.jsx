import React, { useEffect, useState, useRef} from "react";
import '../styles/FirstTemplate.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRightArrowLeft, faFileArrowDown,faUser} from '@fortawesome/free-solid-svg-icons';
import MyInput from "./MyInput";
import Cookies from "js-cookie";
import html2pdf from 'html2pdf.js';

const FirstTemplate = ({userData,professionalSummary,employmentInfo,skillsInfo,educationInfo}) =>{
    
    const [emlLen,setEmlLen] = useState(0);
    const [skillLen,setSkillLen] = useState(0);
    const [educLen,setEducLen] = useState(0);
    const [photo,setPhoto] = useState(null);
    const [stopAnim,setStopAnim] = useState(false);
    const fileInput = useRef(null);

    const skill_levels_convert = {
        "Novice":"1",
        "Beginner":"2",
        "Skillful":"3",
        "Experienced":"4",
        "Expert":"5"
    }

    const handlePhotoClick = () =>{
        fileInput.current.click();
    }


    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
            const fileExtension = file.name.split(".").pop().toLowerCase();

            if (allowedExtensions.includes(fileExtension)) {
                setPhoto(URL.createObjectURL(file));

            } else {
                alert("Выберите изображение формата JPG, JPEG, PNG или GIF");
            }
        }
    };

    const downloadTemplate = () =>{
        const our_template = document.querySelector("#templ");
        setStopAnim(true);
        html2pdf(our_template);
    }
    

    useEffect(()=>{
        if(typeof employmentInfo != 'undefined'){
            setEmlLen(employmentInfo.length);
        }
    },[employmentInfo]);
    
    useEffect(()=>{
        if(typeof employmentInfo != 'undefined'){
            setSkillLen(skillsInfo.length);
        }
    },[skillsInfo]);
    

    useEffect(()=>{
        if(typeof educationInfo != 'undefined'){
            setEducLen(educationInfo.length);
        }
    },[educationInfo]);
        const changeTemplate = (value) =>{
            Cookies.set("choosenTemplate", value, { expires: 1 });
        }

    return(
        <>
            <MyInput 
                type="file" 
                ref={fileInput}
                style={{"display":"none"}}
                onChange={handlePhotoChange}
                styles={{"diplay":"none"}}
            />
            <div className="first_template" id="templ">
                <div className="change_template"
                    onClick={()=> changeTemplate("2")}>
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} style={{color: "black", height:"40px"}} 
                    className="fa-flip"/>
                </div>

                <div className="download_template"
                     onClick={downloadTemplate}>
                    <FontAwesomeIcon icon={faFileArrowDown} style={{color: "black", height:"40px"}}
                    className="fa-bounce"/>
                </div>
                <div className="avatar_and_name">
                    {photo == null ? (
                        <>
                            <div className="avatar_wrapp">
                                <FontAwesomeIcon icon={faUser}
                                style={{height:"50px", cursor:"pointer",color:"white"}}
                                onClick={handlePhotoClick} className={stopAnim != true && 'fa-bounce'}/>
                            </div>
                        </>
                    ):(
                        <>
                            <img src={photo} alt="" 
                            onClick={handlePhotoClick}/>
                        </>
                    )}

                    <div className="user_name_text_wrapper">
                        <span className="user_name">{userData.name}</span>
                    </div>
                    <div className="details" style={{"position":"absolute","right":"25px","top":"20px","textAlign":"right"}}>
                        <span className="details_item">{userData.email}</span>
                        <span className="details_item">{userData.phone}</span>
                        <span className="details_item">{userData.postCode} {userData.city} {userData.country}</span>
                    </div>
                </div>
                {professionalSummary ? (
                    <>
                    <div className="summary_info">
                        <div className="summary">
                            <span className="data_name">Profile</span>
                                <div className="summary_text">
                                    {professionalSummary}
                                </div>
                        </div>
                    </div>
                    </>
                ) : null}
                {emlLen > 0 ? (
                    <>
                        <div className="employment_history_data">
                            <span className="data_name">Employment history</span>
                            {typeof employmentInfo != 'undefined' ? (
                                employmentInfo.map(item=>(
                                    <div className="employment_item">
                                        {item.jobTitle!= '' ? (
                                            <>
                                                <span className="employment_item_name">
                                                    {item.jobTitle}
                                                </span>
                                            </>
                                        ):null}
                                        <span className="employment_item_employer">{item.employer}</span>
                                        <span className="employment_item_times">
                                            {item.startDate != '' && item.endDate != '' ? (
                                                <>
                                                    {item.startDate} - {item.endDate} {item.city}
                                                </>
                                            ): item.city}
                                        </span>
                                        {item.description != ''? (
                                            <>
                                                <div className="employment_item_description">
                                                    {item.description}
                                                </div>
                                            </>
                                        ):null}
                                    </div>
                                ))
                            ):null}
                        </div>
                    </>
                ):null}

                    {skillLen > 0 ? (
                        <>
                            <div className="empl_skills" style={professionalSummary ? null : {"width":"300px"}}>
                                <span className="data_name">Skills</span>
                                <div className="empl_skills_items_wrapper">
                                    <dl className="empl_skills_items">
                                        {typeof skillsInfo != 'undefined' ? (
                                            skillsInfo.map(item=>(
                                                <div className="empl_skills_item">
                                                        <dt className="empl_skills_key">
                                                            {item.skillName}
                                                        </dt>
                                                        <dd className="empl_skills_value">
                                                            {skill_levels_convert[`${item.activeLevel}`]}/5
                                                        </dd>
                                                </div>
                                            ))
                                        ):null}
                                    </dl>
                                </div>
                            </div>
                        </>
                    ) : null}
                {educLen > 0 ? (
                    <>
                        <div className="empl_education" style={professionalSummary ? {"top":"300px"}:null}>
                            <span className="data_name">Education</span>
                            {educationInfo.map(item=>(
                                <div className="empl_education_item">
                                {item.educationName != '' ? (
                                    <>
                                        <span className="empl_education_name">
                                            {item.educationName}
                                        </span>  
                                    </>
                                ) : null}
                                <span className="empl_education_times">{item.degree}, {item.city}</span>
                                <span className="empl_education_times">
                                    {item.startDate && item.endDate ? (
                                        <>
                                           {item.startDate} - {item.endDate}
                                        </>
                                    ):null}
                                </span>
                                {item.description ? (
                                    <>
                                        <div className="empl_education_text" style={{"padding":"5px"}}>
                                            {item.description}
                                        </div>
                                    </>
                                ):null}
                            </div>
                            ))}
                        </div>
                    </>
                ) : null}
            </div>
        </>
    );
}
export default FirstTemplate;