import React, { useState, useEffect} from "react";
import '../styles/TemplateMenu.css';
import '../styles/MyInputComponents.css'
import SkillsComponent from "./SkillsComponent";
import EmploymentComponent from "./EmploymentComponent";
import EducationComponent from "./EducationComponent";
import ComponentWithItems from "./ComponentWithItems";
import ProffesionalSummary from "./ProfessionalSummary";
import PersonalDetails from "./PersonalDetails";
import FirstTemplate from "./FirstTemplate";
import SecondTemplate from "./SecondTemplate";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

const TemplateMenu = () =>{
    let navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const [professionalSummary, setProfessionalSummary] = useState('');
    const [employmentInfo, setEmploymentInfo] = useState();
    const [skillsInfo, setSkillsInfo] = useState();
    const [educationInfo, setEducationInfo] = useState();

    const [choosenTemplate,setChoosenTempalte] = useState(()=>{
        return Cookies.get("choosenTemplate") || 1;
    });

    const handleonUserDataChange = (data) =>{
        setUserData(data)
    }

    const hangleonUserSummaryChange = (data) =>{
        setProfessionalSummary(data);
    }
    
    const handleonEmploymentChange = (data) =>{
        setEmploymentInfo(data);
    }

    const handleonSkillsInfoChange = (data) =>{
        setSkillsInfo(data);
    }

    const handleonEducationInfoChange = (data) =>{
        setEducationInfo(data); 
    }
    const logout = () =>{
        localStorage.removeItem('token');
        Cookies.remove('choosenTemplate');
        navigate('/');
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
          const newTemplate = Cookies.get("choosenTemplate");
          if (newTemplate && newTemplate !== choosenTemplate) {
            setChoosenTempalte(newTemplate);
          }
        }, 500); // Проверяем cookie каждые 500 мс
    
        return () => clearInterval(interval); // Очищаем интервал при размонтировании
      }, [choosenTemplate]);

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate('/login');
        }
    })
    return(
        <>
            <div className="constructor">
                <div className="template_menu">
                    <PersonalDetails onUserDataChange={handleonUserDataChange}/>
                    <ProffesionalSummary onUserSummaryChange={hangleonUserSummaryChange}/>
                    <ComponentWithItems 
                    Component={EmploymentComponent} 
                    component_name={"Employment History"}
                    component_discription={"Write down your last two jobs and what experience you gained there"}
                    button_text={"+ Add one more employment"}
                    updatedData={handleonEmploymentChange}/>

                    <ComponentWithItems 
                    Component={SkillsComponent} 
                    component_name={"Skills"}
                    component_discription={"Choose 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the job listing (especially when applying via an online system)."}
                    button_text={"+ Add one more skill"}
                    updatedData={handleonSkillsInfoChange}/>

                    <ComponentWithItems 
                    Component={EducationComponent} 
                    component_name={"Education"}
                    component_discription={"A varied education on your resume sums up the value that your learnings and background will bring to job."}
                    button_text={"+ Add one more education"}
                    updatedData={handleonEducationInfoChange}/>
                    
                </div>
                <div className="show_result_tempalate">
                    {choosenTemplate === "1" ? (
                        <>
                            <FirstTemplate 
                            userData={userData}
                            professionalSummary={professionalSummary}
                            employmentInfo={employmentInfo}
                            skillsInfo={skillsInfo}
                            educationInfo={educationInfo}/>
                        </>
                    ):(
                        <>
                              <SecondTemplate 
                                userData={userData}
                                professionalSummary={professionalSummary}
                                employmentInfo={employmentInfo}
                                skillsInfo={skillsInfo}
                                educationInfo={educationInfo}/>
                        </>
                    )}
                    <button className="logout_btn"
                    onClick={logout}>
                        Log out
                    </button>
                </div>
            </div>
        </>
    );
}
export default TemplateMenu;