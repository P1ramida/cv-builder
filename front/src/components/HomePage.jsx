import React, { useEffect, useState } from "react";
import '../styles/App.css';
import '../styles/Slider.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faTelegram, faGithub} from '@fortawesome/free-brands-svg-icons'
import SimpleSlider from "./SimpleSlider";
import Cookies from "js-cookie";
import axios from "axios";
const HomePage = () =>
{
    const [isTemplate,setIsTemplate] = useState(false);
    useEffect(()=>{
        const isTemplate = Cookies.get("choosenTemplate");
        if(isTemplate){
            setIsTemplate(true);
        }
    })

    return(
        <>
            <div class="start_area">
            <div class="left_side">
                <div class="left_menu_main_text">
                    WELCOME TO <span>CV CREATOR</span>
                </div>
                <div class="discription_text">
                In this editor, you will find a resume design to suit your personal taste. It will allow you to quickly and easily create a beautiful resume for a job. But it's more than just aesthetics. This editor empowers you to craft a compelling narrative that highlights your unique skills, experience, and career aspirations
                </div>
                <div class="start">
                    <button className="start_btn" href={"#templates"}>
                        <a href="#templates">Create</a>
                    </button>
                </div>
            </div>
            <div class="right_menu">
                <div class="right_menu_header">
                </div>
                <div class="cv">
                    <div class="cv_avatar">
                        <img src="/images/user.svg" alt=""/>
                    </div>
                    <div class="first_strings">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="first_widget">
                        <div class="first_widget_img">
                            <img src="/images/work.svg" alt=""/>
                        </div>
                        <div class="first_widget_strings">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="second_strings">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="second_widget">
                        <div class="second_widget_strings">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div class="second_widget_img">
                            <img src="/images/achive.svg" alt=""/>
                        </div>
                    </div>
                    <div class="cv_footer">
                        <div class="approve_circle">
                            <img src="/images/approve.svg" alt=""/>
                        </div>
                        <div class="footer_strings">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="templates_examples">
            <h2 id="templates">Pick one of many world-class templates and build your resume in minutes</h2>
            <div className='slider_template'>
                <SimpleSlider>
                </SimpleSlider>
            </div>
        </div>
        <div className='footer'>
            <div className='footer_content'>
                <div className='footer_contacts'>
                    <span class="side_contacts" id="contacts">Contacts</span>
                    <div className='footer_contacts_icons'>
                        <a href="tg://resolve?domain=Guildofthieves">
                            <FontAwesomeIcon icon={faTelegram}  className={'contacts_icon'}/>
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faInstagram}  className={'contacts_icon'}/>
                        </a>
                        <a>
                        <FontAwesomeIcon icon={faGithub} className={'contacts_icon'} />
                        </a>
                    </div>
                    <div className='text_contact'>
                        <span>PHONE : +375 (29) 6702644</span>
                        <span>EMAIL  : snak3dev@gmail.com</span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default HomePage;