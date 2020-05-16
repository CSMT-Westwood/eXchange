import { useState } from 'react';

function useSettings () {
    const [username, setUsername] = useState({"username": "Test_Username"});
    const [email, setEmail] = useState({"email": "joebruin@ucla.edu"});
    const [rp, setRp] = useState({"rp": 0});
    const [photo, setPhoto] = useState({"photo": null});
    const [preferences, setPreferences] = useState({"preferences": []})
    const [theme, setTheme] = useState({"theme": 0});

    const info = {
        "username": username, 
        "email": email, 
        "theme": theme, 
        "rp": rp, 
        "photo": photo, 
        "preferences": preferences
    };

    const setInfo = {
        "username": setUsername, 
        "email": setEmail,  
        "theme": setTheme, 
        "rp": setRp, 
        "photo": setPhoto,
        "preferences": setPreferences
    };

    function changeInfo (props) {
        fetch("http://localhost:8000/user/update", {
            method: "PATCH",
            headers: { "Content-Type": "application/json", "token": sessionStorage.getItem("token")},
            body: props,
        }).then(response => {
            if(!response.ok){
                response.json().then(data => alert(data.message))
            }
            else{
                response.json().then(data => {
                    alert("Your change is successfully made!");
                    setInfo[Object.keys(props)[0]](Object.values(props)[0]);
                })
            }
         })
    }

    return [info, setInfo, changeInfo];    
}

export default useSettings;