import React, {useState, createContext, useContext} from 'react';
import { RenderingContext } from '../../renderingContext';
import history from '../History';
 
export const RegisterContext = createContext();

function RegisterContextProvider (props) {
    const [info, setInfo] = useState([{"username": ""}, {"email": ""}, {"password": ""}, {"confirm password": ""}]);
    const [warning, setWarning] = useState("");
    const { settings, setSettings } = useContext(RenderingContext);

    function getUserInfo (props) {
        fetch("http://localhost:8000/user/self", {
            method: "GET",
            headers: { "Content-Type": "application/json", "token": props.token},
        }).then(response => {
            if(!response.ok){
                response.json().then(data => setWarning(data.message));
            }
            else{
                response.json().then(data => {
                    setSettings.preferences({"preferences": data.preferences});
                    setSettings.rp({"rp": data.rp});
                    setSettings.username({"username": data.username});
                    setSettings.email({"email": data.email});
                    setSettings.photo({"photo": data.avatar === null ? settings.photo.photo : data.avatar});
                    setSettings.postsC(data.posts.length);
                    setSettings.followC(data.followedPosts.length);
                    if(props.login)
                        history.push("/");
            })}
        })
    }


    const handleSumbit = (e) => {
        e.preventDefault();
        if(window.location.href.slice(-5) === 'login'){ // Log in scenario
            fetch("http://localhost:8000/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({...info[0], ...info[2]}),
            }).then(response => {
                if(!response.ok){
                    response.json().then(data => setWarning(data.message))
                }
                else{
                    setWarning("Logging in as " + info[0]["username"] + "...");
                    response.json().then(data => {
                        sessionStorage.setItem("token", data.token);
                        setWarning("");
                        getUserInfo({"token": data.token, "login": true});
                })}
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
                            history.push("/login");
                            setWarning("");
                        })
                    }
                })
            }
        }
    }

    return (
        <RegisterContext.Provider value={{info, setInfo, getUserInfo, handleSumbit, warning, setWarning}}>
            { props.children }
        </RegisterContext.Provider>
    );
}

export default RegisterContextProvider;
