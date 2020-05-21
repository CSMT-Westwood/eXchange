import styled from 'styled-components';

export const UserPhoto=styled.div`
    width: 12vw;
    height: 12vw;
    position: absolute;
    top: 2vw;
    left: 44vw;
    border-radius: 50%;
    background: lightgrey;
    &: before{
        content: "";
        position: absolute;
        top: -0.3vw; left: -0.3vw;
        width: 12.6vw; height: 12.6vw;
        z-index: -1;
        border-radius: 50%;
        background: linear-gradient(180deg, blue, aqua);
    }
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
    border-image: linear-gradient(180deg, blue, aqua) 1;
    border-radius: 0.6vw;
    border-width: 0.4vw;
    background-color: #fff;
    &:hover{
        background-color: rgba(0, 98, 255, 0.3);
    }
`;

export const Info=styled.div`
    text-align: center;
    font-size: 1.7vw;
    font-weight: 500;
`;