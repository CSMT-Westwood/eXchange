import styled from 'styled-components';

export const UserPhoto=styled.img`
    width: 12vw;
    height: 12vw;
    position: absolute;
    top: 2vw;
    left: 44vw;
    border-radius: 50%;
`;

export const UserName=styled.span`
    width: 24vw;
    height: 4vw;
    position: absolute;
    top: 14vw;
    left: 38vw;
    font-size: 2.5vw;
    font-weight: 600;
    text-align: center;
`;

export const UserEmail=styled.span`
    width: 24vw;
    height: 2vw;
    position: absolute;
    top: 18vw;
    left: 38vw;
    font-size: 1.5vw;
    font-weight: 600;
    text-align: center;
`;

export const UserInfo=styled.div`
    width: 30vw;
    height: 20vw;
    position: absolute;
    top: 25vw;
    left: ${(props) => (props.left ? '20vw' : '50vw')};
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props) => (props.left ? '' : 'flex-end')};
`;

export const InfoField=styled.div`
    width: 25vw;
    height: 8vw;
    position: relative;
    border-style: solid;
    border-image: linear-gradient( 270deg,
        rgb(${(props) => (255 * Math.cos(props.color / 40))},
            ${(props) => (Math.pow(props.color - 100, 2) * 50 / (100*100)) }, 
            ${(props) => (Math.pow(props.color - 100, 2) * -100 / (100*100) + 200) }), 
        rgb(${(props) => (255 * Math.sin(props.color / 40))},
            ${(props) => (Math.pow(props.color - 127, 2) * -254 / (127*127) + 254) }, 
            ${(props) => (Math.pow(props.color - 127, 2) * 254 / (127*127)) })
    ) 1;
    border-radius: 0.6vw;
    border-width: 0.4vw;
    z-index: 2;
    &:hover{
        background-color: rgba(255, 255, 255, 0.8);
    }
`;

export const InfoFieldWrapper=styled(InfoField)`
    background-size: 25vw 8vw;
    background-image: url(${ (props) => {
        switch (props.name){
            case "Reputation": 
            return (require (`../../imgs/reputation.jpg`)); break;
            case "Activity": 
            return (require (`../../imgs/activities.jpg`)); break;
            case "Following": 
            return (require (`../../imgs/following.jpg`)); break;
            case "Posts": 
            return (require (`../../imgs/posts.jpg`)); break;
            default: return(""); break;
    }}});
    opacity: 0.2;
    padding: 0;
    border: none;
    width: 24.25vw;
    height: 7.25vw;
    border-radius: 0;
    z-index: 1;
    top: -7vw; left: 0;
    &:hover{
        opacity: 0.3;
    }
`;

export const Info=styled.div`
    text-align: center;
    font-size: 1.7vw;
    font-weight: 500;
    height: 3.5vw;
    position: relative;
    z-index: 3;
`;