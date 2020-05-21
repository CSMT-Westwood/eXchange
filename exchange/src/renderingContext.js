import React, { useState, createContext } from 'react';

export const RenderingContext = createContext();

function RenderingContextProvider (props) {
    const [page, setPage] = useState("login");
    const [username, setUsername] = useState({"username": "You are not logged in"});
    const [email, setEmail] = useState({"email": "joebruin@ucla.edu"});
    const [rp, setRp] = useState({"rp": 0});
    const [photo, setPhoto] = useState({"photo": "../../imgs/profile.jpg"});
    const [preferences, setPreferences] = useState({"preferences": []})
    const [theme, setTheme] = useState({"theme": 0});
    const [posts, setPosts] = useState({"posts": []});

    const settings = {
        "theme": theme, 
        "username": username, 
        "email": email, 
        "rp": rp, 
        "photo": photo, 
        "preferences": preferences,
        "posts": posts
    };
    
    const setSettings = {
        "username": setUsername, 
        "email": setEmail,  
        "theme": setTheme, 
        "rp": setRp, 
        "photo": setPhoto,
        "preferences": setPreferences,
        "posts": setPosts
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
                    setSettings.email({"email": data.email})
                    setSettings.preferences({"preferences": data.preferences})
                    setSettings.rp({"rp": data.rp})
                    console.log(settings)
                })
            }
            })
    }

    return (
        <RenderingContext.Provider value={{page, setPage, settings, setSettings, changeInfo}}>
            { props.children }
        </RenderingContext.Provider>
    );
}

export default RenderingContextProvider;