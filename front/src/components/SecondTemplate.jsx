import React, { useEffect, useState, useRef } from "react";
import classes from '../styles/SecondTemplate.module.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRightArrowLeft,faFileArrowDown,faUser} from '@fortawesome/free-solid-svg-icons';
import MyInput from "./MyInput";
import Cookies from "js-cookie";
import html2pdf from 'html2pdf.js';
const SecondTemplate = ({userData,professionalSummary,employmentInfo,skillsInfo,educationInfo}) =>{

    const [emplLen,setEmplLen] = useState(0);
    const [skillsLen,setSkillsLen] = useState(0);
    const [educLen,setEducLen] = useState(0);
    const [photo,setPhoto] = useState(null);
    const [stopAnim,setStopAnim] = useState(false);
    const fileInput = useRef(null);


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

    const templ = useRef(null);
    useEffect(()=>{
        if(employmentInfo != null){
            setEmplLen(employmentInfo.length);
        };
    },[employmentInfo]);

    useEffect(()=>{
        if(skillsInfo != null){
            setSkillsLen(skillsInfo.length);
        };
    },[skillsInfo]);

    useEffect(()=>{
        if(educationInfo != null){
            setEducLen(educationInfo.length);
            console.log(educationInfo);
        }
    },[educationInfo]);
    
    const changeTemplate = (value) =>{

        Cookies.set("choosenTemplate", value, { expires: 1 });
    }
    const downloadTemplate = () =>{
        setStopAnim(true);
        const our_template = document.querySelector("#templ");
        html2pdf(our_template);
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
            <div className={classes.second_template_wrapper} id="templ">
                <div className={classes.change_template}
                onClick={()=> changeTemplate("1")}>
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} style={{color: "#ffffff", height:"40px"}} 
                    className="fa-flip"/>
                </div>
                <div className={classes.download_template}
                onClick={downloadTemplate}>
                    <FontAwesomeIcon icon={faFileArrowDown} style={{color: "#ffffff", height:"40px"}}
                    className="fa-bounce"/>
                </div>
                <div className={classes.second_template}>
                    <div className={classes.avatar_name_and_details}>
                        <div className={classes.avatar_name}
                        onClick={handlePhotoClick}>
                            {photo == null ? (
                                <>
                                    <div className="avatar_wrapp">
                                        <FontAwesomeIcon icon={faUser}
                                        style={{height:"50px", cursor:"pointer",color:"white"}}
                                        className={stopAnim != true && 'fa-bounce'}/>
                                    </div>
                                </>
                            ):(
                                <>
                                    <img src={photo} alt="" />
                                </>
                            )}
                            
                            <div className={classes.name_wrapper}>
                                <span className={classes.name}>{userData.name}</span>
                            </div>
                        </div>
                        <div className={classes.second_template_details}>
                            <span className={classes.second_template_detail}>{userData.email}</span>
                            <span className={classes.second_template_detail}>{userData.phone}</span>
                            <span className={classes.second_template_detail}>
                                {userData.country} {userData.city} {userData.postCode}
                            </span>
                        </div>
                    </div>
                    {professionalSummary ? (
                        <>
                            <div className={classes.profile_side}>
                                <div className={classes.side_name}>
                                    Profile
                                </div>
                                <div className={classes.profile_text}>
                                    {professionalSummary}
                                </div>
                            </div>
                        </>
                    ):null}
                    {emplLen > 0 ? (
                        <>
                            <div className={classes.employment_side}>
                                <div className={classes.side_name}>
                                    Employment History
                                </div>
                                {employmentInfo.map(item=>(
                                    <div className={classes.employment_item}>
                                            <span className={classes.employment_item_name}>
                                                {item.jobTitle}
                                            </span>
                                            <span className={classes.employment_item_place}>
                                                {item.startDate!= '' && item.endDate!='' ? (
                                                    <>
                                                        {item.startDate} - {item.endDate} {item.city}
                                                    </>
                                                ):item.city}
                                            </span>
                                            <span className={classes.employment_item_employer}>
                                                {item.employer}
                                            </span>
                                            <div className={classes.employment_item_text}>
                                                {item.description}
                                            </div>
                                </div>
                                ))}
                            </div>
                        </>
                    ):null}
                    {educLen > 0 ? (
                        <>
                            <div className={classes.education_side}>
                                <div className={classes.side_name}>
                                    Education
                                </div>
                                <div className={classes.education_items}>
                                    {educationInfo.map(item=>(
                                        <div className={classes.education_item}>
                                        <span className={classes.education_item_name}>
                                            {item.educationName}
                                        </span>
                                        {item.startDate != '' && item.endDate != '' ? (
                                           <>
                                                <span className={classes.education_item_place}>
                                                    {item.city} {item.startDate} - {item.endDate}
                                                </span>
                                            </>
                                        ): item.city}
                                       
                                        <div className={classes.education_item_text}>
                                            {item.description}
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ):null}
                    {skillsLen > 0 ? (
                        <>
                            <div className={classes.skills_side}>
                                <div className={classes.side_name}>
                                    Skills
                                </div>
                                <div className={classes.skills_items}>
                                    {skillsInfo.map(item=>(
                                        <span className={classes.skills_item}>
                                            {item.skillName}
                                            <span className={classes.skill_level}></span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </>
                    ):null}
                </div>
            </div>
        </>
    );

};

export default SecondTemplate;