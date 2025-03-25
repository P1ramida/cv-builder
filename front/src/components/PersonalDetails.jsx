import React, { useEffect, useState, useRef} from "react";
import MyInput from "./MyInput";
import MyTextArea from "./MyTextArea";
const PersonalDetails = ({onUserDataChange}) =>{

    const [name,setName] = useState('');
    const [city,SetCity] = useState('');
    const [country,setCountry] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [postCode,setPostCode] = useState('');

    const prevDetails = useRef({ name, city, country, phone, email, postCode });

    useEffect(()=>{
        const details = {name,city,country,phone,email,postCode};
        if(JSON.stringify(details) != JSON.stringify(prevDetails.current)){
            onUserDataChange(details);
            prevDetails.current = details;
        }
    },[name,city,country,phone,email,postCode,onUserDataChange])


    return(
        <>
            <div className="start_info">
                <span className="stage_name">Personal detail</span>
                <div className="input_area">
                    <div className="input_with_label">
                        <label htmlFor="#Name">Name <span className="required_inputs">*</span></label>
                        <MyInput 
                        type="text" 
                        placeholder="Jeff Bezos" 
                        id="Name"
                        value={name}
                        onChange={e=> setName(e.target.value)}
                        required
                        maxlength={17}/>
                    </div>
                    <div className="input_with_label">
                        <label htmlFor="#City">City <span className="required_inputs">*</span></label>
                        <MyInput 
                        type="text" 
                        placeholder="N.Y City" 
                        id="City"
                        value={city}
                        onChange={e => SetCity(e.target.value)}
                        required
                        maxlength={25}/>
                    </div>
                    <div className="input_with_label">
                        <label htmlFor="#Country">Country</label>
                        <MyInput 
                        type="text" 
                        placeholder="United State" 
                        id="Country"
                        value={country}
                        onChange={e=> setCountry(e.target.value)}
                        maxlength={25}/>
                    </div>
                    <div className="input_with_label">
                        <label htmlFor="#Phone">Phone</label>
                        <MyInput 
                        type="text" 
                        placeholder="212-555-6789" 
                        id="Phone"
                        value={phone}
                        onChange={e=> setPhone(e.target.value)}
                        maxlength={25}/>
                    </div>
                    <div className="input_with_label">
                        <label htmlFor="#Email">Email Address <span className="required_inputs">*</span></label>
                        <MyInput 
                        type="text" 
                        placeholder="exmaple@gmail.com" 
                        id="Email"
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                        maxlength={30}/>
                    </div>
                    <div className="input_with_label">
                        <label htmlFor="#PostCode">Post Code</label>
                        <MyInput 
                        type="text" 
                        placeholder="40202" 
                        id="PostCode"
                        value={postCode}
                        onChange={e=> setPostCode(e.target.value)}
                        maxlength={10}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PersonalDetails