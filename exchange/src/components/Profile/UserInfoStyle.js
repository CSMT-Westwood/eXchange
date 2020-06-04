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
    width: 23vw;
    height: 5.5vw;
    position: relative;
    border-style: solid;
    border-image: linear-gradient( 30deg,
        rgba(${(props) => (255 * Math.cos(props.color / 15))},
        ${(props) => (Math.pow(props.color - 127, 2) * 255 / (127*127)) },
        ${(props) => (255 * Math.sin(props.color / 30))}, 
        0.8),
        rgba(${(props) => (255 * Math.cos(props.color / 15))},
        ${(props) => (Math.pow(props.color - 127, 2) * 255 / (127*127)) },
        ${(props) => (255 * Math.sin(props.color / 30))}, 
        1)) 1;
    border-radius: 1vw;
    border-width: 0.2vw;
    display: flex;
    margin: 0.4vw 0;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    &:hover{
        background-color: rgba(255, 255, 255, 0.8);
    }
`;

export const Info=styled.div`
    text-align: center;
    font-size: 1.5vw;
    font-weight: 500;
    height: 3.5vw;
    position: relative;
    z-index: 3;
`;
