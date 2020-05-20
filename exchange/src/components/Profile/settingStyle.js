import styled from 'styled-components';

export const FieldWrapper = styled.div`
    width: 100vw;
    position: absolute;
    top: 12vw;
    right: 0vw;
`;

export const SettingModule = styled.form`
    width: 100vw;
    height: 10vw;
    position: relative;
    margin: auto;
`;

export const SettingTitle = styled.span`
    height: 3vw;
    width: 16vw;
    font-size: 2vw;
    position: absolute;
    top: 5vw;
    left: 42vw;
    font-family: "Lucida Console", Courier, monospace;
    font-weight: 700;
    border-width: 0.2vw;
    border-color: black;
    border-style: solid;
    border-radius: 0.5vw;
    text-align: center;
`;

export const PhotoSetting = styled.div`
    width: 20vw;
    height: 20vw;
    position: relative;
    background: green;
`;

export const PhotoWrapper = styled.div`
    width: 6vw;
    height: 6vw;
    position: absolute;
    left: 47vw;
    top: 3vw;
    background: grey;
    border-radius: 50%;
`;

export const SettingName = styled.span`
    width: 16vw;
    height: 2vw;
    color: black;
    font-size: 1.2vw;
    font-weight: 500;
    position: absolute;
    top: 1vw;
    right: 44vw;
    text-align: left;
`;

export const SettingField = styled.input`
    border-color: blue;
    border-radius: 0.6vw;
    border-width: 0.1vw;
    width: 20vw;
    height: 2.5vw;
    font-size: 1.3vw;
    border-style: solid;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 3.5vw;
    right: 40vw;
`;


export const ChangeButton = styled.button`
    width: 6vw;
    height: 1.8vw;
    background: white;
    border-radius: 0.4vw;
    border-color: blue;
    border-width: 0.1vw;
    position: absolute;
    top: 1vw;
    right: 40vw;
    font-size: 1.2vw;
    font-weight: 400;

    &:hover{
        border-width: 0.25vw;
    }
`;
