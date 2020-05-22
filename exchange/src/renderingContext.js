import React, { useState, createContext } from 'react';

export const RenderingContext = createContext();

function RenderingContextProvider (props) {
    const [page, setPage] = useState("feeds");
    const [username, setUsername] = useState({"username": "You are not logged in"});
    const [email, setEmail] = useState({"email": ""});
    const [rp, setRp] = useState({"rp": 0});
    const [photo, setPhoto] = useState({"photo": process.env.PUBLIC_URL + "/profile.svg"});
    const [theme, setTheme] = useState({"theme": 0});
    const [preferences, setPreferences] = useState({"preferences": []});
    const [posts, setPosts] = useState({"posts": []});
    const [activities, setActivities] = useState({"activities": []});
    const [followed, setFollowed] = useState({"followed" : []});

    const settings = {
        "theme": theme, 
        "username": username, 
        "email": email, 
        "rp": rp, 
        "photo": photo, 
        "preferences": preferences,
        "posts": posts,
        "activities": activities,
        "followed": followed
    };
    
    const setSettings = {
        "username": setUsername, 
        "email": setEmail,  
        "theme": setTheme, 
        "rp": setRp, 
        "photo": setPhoto,
        "preferences": setPreferences,
        "posts": setPosts,
        "activities": setActivities,
        "followed": setFollowed
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