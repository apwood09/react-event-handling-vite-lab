// Code PasswordInput Component Here
import React, { useState } from 'react'; 

function PasswordInput (){
    const [password, setPassword] = useState(''); 

    const handleChange = (event) => {
        console.log("Entering password...");
        setPassword(event.target.value); 
    }; 

    return(
        <input 
            type='password'
            value={password}
            onChange={handleChange}
            placeholder='Enter Your Passowrd'
        />
    ); 
}

export default PasswordInput;