import React, { useState, createContext } from 'react';

export const RenderingContext = createContext();

function RenderingContextProvider (props) {
    const [username, setUsername] = useState({"username": "User"});
    const [email, setEmail] = useState({"email": ""});
    const [rp, setRp] = useState({"rp": 0});
    const [photo, setPhoto] = useState({"photo": process.env.PUBLIC_URL + "/profile.svg"});
    const [theme, setTheme] = useState({"theme": 0});
    const [preferences, setPreferences] = useState({"preferences": []});
    const [onColorChange, setOnColorChange] = useState(false);

    const settings = {
        "theme": theme, 
        "username": username, 
        "email": email, 
        "rp": rp, 
        "photo": photo, 
        "preferences": preferences,
    };
    
    const setSettings = {
        "username": setUsername, 
        "email": setEmail,  
        "theme": setTheme, 
        "rp": setRp, 
        "photo": setPhoto,
        "preferences": setPreferences,
    };
    
    function changeInfo (props) {
        fetch("http://localhost:8000/user/update", {
            method: "PATCH",
            headers: { "Content-Type": "application/json", "token": sessionStorage.getItem("token")},
            body: JSON.stringify(props),
        }).then(response => {
            if(!response.ok){
                response.json().then(data => alert(data.message))
            }
            else{
                response.json().then(data => {
                    alert("Your change is successfully made!");
                    // console.log(data);
                    setSettings.username({"username": data.username});
                    setSettings.email({"email": data.email});
                    setSettings.preferences({"preferences": data.preferences});
                    setSettings.rp({"rp": data.rp});
                })
            }
        })
    }

    return (
        <RenderingContext.Provider value={{settings, setSettings, changeInfo, onColorChange, setOnColorChange}}>
            { props.children }
        </RenderingContext.Provider>
    );
}

export default RenderingContextProvider;