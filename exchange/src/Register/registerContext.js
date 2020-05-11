import React, {useState, createContext} from 'react';
import './register.css'

export const RegisterContext = createContext();

const RegisterContextProvider = (props) => {
    const [status, setStatus] = useState(props.status)
    const [info, setInfo] = useState([{'Username': ''}, {'Email': ''}, {'Password': ''}, {'Confirm Password': ''}])
    
    const handleSumbit = (e) => {
        e.preventDefault();
        if(info[3]['Confirm Password'] === ''){ // Log in scenario
            // TODO: BACKEND
        }
        else{ // Sign up scenario
            if (info[1]['Email'].length > 9 && info[1]['Email'].slice(-8) !== 'ucla.edu')
                alert("You must use a valid ucla email to register! \nPlease try again.")
            else if(info[2]['Passward'] !== info[3]['Confirm Password'])
                alert("Passwords do not match! \nPlease try again.");
            else{ // Valid information
                // TODO: BACKEND
            }   
        }
    }

    return (
        <RegisterContext.Provider value={{info, setInfo, status, setStatus, handleSumbit}}>
            { props.children }
        </RegisterContext.Provider>
    );
}
 
export default RegisterContextProvider;