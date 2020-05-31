import styled from 'styled-components';

export const UserPhoto=styled.img`
    width: 10vw;
    height: 10vw;
    position: relative;
    top: 7vw;
	left: 13vw;
    border-radius: 50%;
`;

export const UserName=styled.span`
    width: 24vw;
    height: 4vw;
    position: relative;
    top: 16vw;
    left: 4vw;
    font-size: 2.5vw;
    font-weight: 600;
    text-align: center;
`;

export const UserEmail=styled.span`
    width: 24vw;
    height: 2vw;
    position: relative;
    top: 18vw;
    left: 2vw;
    font-size: 1.5vw;
    font-weight: 600;
    text-align: center;
`;

export const UserInfo=styled.div`
    width: 5vw;
    height: 0vw;
    position: relative;
    top: 14vw;
    left: ${(props) => (props.left ? '5vw' : '25vw')};
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props) => (props.left ? '' : 'flex-end')};
`;

export const InfoField=styled.div`
    width: 21w;
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
    background-size: 10vw 10vw;
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
    width: 10vw;
    height: 100%;
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
