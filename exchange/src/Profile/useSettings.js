import React, {useState} from 'react';

function useSettings () {
    const [username, setUsername] = useState({"username": ""});
    const [email, setEmail] = useState({"email": ""});
    const [photo, setPhoto] = useState({"photo": null});
    const [password, setPassword] = useState({"password": ""});
    const [reputation, setReputation] = useState({"reputataion": 0});
    const [theme, setTheme] = useState({"theme": 0});
    const settings = [username, email, photo, password, theme];
    const userInfo = [username, email, photo, reputation]
    const setSettings = (mutator, value) => mutator(value);
    return [settings, userInfo, setSettings];    
}
 
export default useSettings;