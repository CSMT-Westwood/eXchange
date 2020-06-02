import styled from 'styled-components';

export const InputBar = styled.input`
    height: 2.5vw;
    width: 100%;
    margin:auto;
    border-color: rgb(6, 6, 165);
    border-width: 2px;
    border-radius: 6px;
    font-size: 1vw;
    position: relative;
    margin: 0.3vw;
    text-indent: 0.5vw;
`;

export const RegisterForm = styled.form`
    width: 100%;
    height: 83%;
    position: absolute;
    top: 5%;
`;

export const NavBar=styled.div`
    height: 5vw;
    width: 100%;
    font-size: 2vw;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    position: absolute;
    top: 1.3vw;
`;

export const WarningBar=styled.div`
    width: 100%;
    height: 1vw;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 0.9vw;
    position: absolute;
    top: 6.5vw;
`;

export const InputWrapper =styled.div`
    height: 20vw;
    width: 17vw;
    position: absolute;
    top: 6.5vw;
    left: 5vw;
`;

export const InputWarning=styled.div`
    position: absolute;
    width: 100%;
    bottom: 4vw;
    font-size: 1.1vw;
    text-align: center;
`;

export const SubmitBtn=styled.input`
    height: 3vw;
    width: 15vw;
    background: #fff;
    border-width: 0;
    border-radius: 6px;
    background: rgb(0, 100, 200);
    color: #fff;
    font-size: 1.5vw;
    font-weight: 400;
    position: absolute;
    bottom: 0.5vw;
    left: 6vw;
    &:hover{
        background: rgb(30, 130, 245);
        cursor: pointer;
    }
    &:focus{
        border: none;
        outline: none;
    }
`;

export const AlternateBtn=styled.button`
    width: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0);
    border-width: 0;
    left: 0;
    bottom: 2vw;
    font-size: 1vw;
    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`;
