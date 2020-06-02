import styled from 'styled-components';

export const BasicInfo=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35vw;
`

export const UserPhoto=styled.img`
    width: 10vw;
    height: 10vw;
    border-radius: 50%;
`;

export const UserName=styled.span`
    width: 24vw;
    height: 4vw;
    font-size: 2.5vw;
    font-weight: 600;
    text-align: center;
`;

export const UserEmail=styled.span`
    width: 24vw;
    height: 2vw;
    font-size: 1.5vw;
    font-weight: 600;
    text-align: center;
`;

// export const UserInfo=styled.div`
//     width: 5vw;
//     height: 0vw;
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     justify-content: ${(props) => (props.left ? '' : 'flex-end')};
// `;

export const InfoField=styled.div`
    width: 10vw;
    height: 10vw;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    &:hover{
        background-color: rgba(255, 255, 255, 0.8);
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
