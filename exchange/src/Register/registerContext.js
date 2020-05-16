import React, {useState, createContext, useContext} from 'react';
import useSettings from '../Profile/useSettings';
import { RenderingContext } from '../renderingContext';

export const RegisterContext = createContext();

function RegisterContextProvider (props) {
    const [status, setStatus] = useState(props.status);
    const [info, setInfo] = useState([{"username": ""}, {"email": ""}, {"password": ""}, {"confirm password": ""}]);
    const [warning, setWarning] = useState("");
    const s = useSettings();
    const { setPage } = useContext(RenderingContext);

    const handleSumbit = (e) => {
        e.preventDefault();
        if(status === 'login'){ // Log in scenario
            fetch("http://localhost:8000/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({...info[0], ...info[2]}),
            }).then(response => {
                if(!response.ok){
                    response.json().then(data => setWarning(data.message))
                }
                else{
                    response.json().then(data => {
                        setWarning("Logging in as " + info[0]["username"] + "...");
                        sessionStorage.setItem("token", data.token);
                        s[1].preferences(data.preferences)
                        s[1].rp(data.rp)
                        s[1].username(data.username)
                        s[1].email(data.email)
                        console.log(data.username)
                        setPage("userinfo");
                        console.log(s[0].username.username)
                })
                }
            })
        }

        else{ // Sign up scenario
            if(info[2]["password"] !== info[3]["confirm password"]){
                setWarning("Passwords do not match!");
            }
            else{ // Valid information
                fetch("http://localhost:8000/user/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({...info[0], ...info[2], ...info[1]}),
                }).then(response => {
                    if(!response.ok){
                        response.json().then(data => setWarning(data.message))
                    }
                    else{
                        response.json().then(data => {
                            setWarning("Signing up as " + data.username + "...");
                            setPage("login");
                        })
                    }
                })
            }   
        }
    }

    return (
        <RegisterContext.Provider value={{info, setInfo, status, setStatus, handleSumbit, warning, setWarning}}>
            { props.children }
        </RegisterContext.Provider>
    );
}
 
export default RegisterContextProvider;