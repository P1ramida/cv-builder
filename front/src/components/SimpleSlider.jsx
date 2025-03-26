import React from "react";
import Slider from 'react-slick';
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
const SimpleSlider = () =>{
    let navigate = useNavigate();
    let settings = {
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
      };
    
    const setChoosenTemplate = (value) =>{
        if(localStorage.getItem('token')){
            Cookies.set("choosenTemplate",value,{expires:1});
            navigate("/template");
        }else{
            navigate('/login');
        }
        
    }

    return(
        <>
            <Slider {...settings} className="our_slider">
                <div className="example_template"
                onClick={()=> setChoosenTemplate(1)}
                >
                    <span className="example_template_text">Use this template</span>
                    <img src="/images/example1.png" alt=""/>
                </div>
                <div className="example_template"
                onClick={()=> setChoosenTemplate(2)}
                >
                    <span className="example_template_text">Use this template</span>
                    <img src="/images/example4.png" alt=""/>
                </div>
            </Slider>
        </>
    )
}

export default SimpleSlider