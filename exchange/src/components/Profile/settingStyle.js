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
    font-size: 3vw;
    position: absolute;
    top: 4vw;
    left: 42vw;
    font-family: "Lucida Console", Courier, monospace;
    font-weight: 700;
    text-align: center;
`;

export const PhotoSetting = styled.div`
    width: 20vw;
    height: 20vw;
    position: relative;
    background: green;
`;


export const PhotoWrapper = styled.img`
    width: 6vw;
    height: 6vw;
    position: absolute;
    left: 47vw;
    top: 4vw;
    background-size: contain;
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
    border-image: linear-gradient( 90deg,
        rgb(${(props) => (255 * Math.sin(props.color / 40))},
            ${(props) => (Math.pow(props.color - 127, 2) * -180 / (127*127) + 254) }, 
            ${(props) => (Math.pow(props.color - 127, 2) * 254 / (127*127)) }),
        rgb(${(props) => (255 * Math.cos(props.color / 40))},
            ${(props) => (Math.pow(props.color - 100, 2) * 50 / (100*100)) }, 
            ${(props) => (Math.pow(props.color - 100, 2) * -100 / (100*100) + 200) })
    ) 1;

    border-width: 0.25vw;
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


export const ChangeBtn = styled.input`
    width: 6vw;
    height: 1.9vw;
    border-style: solid;
    border-image: linear-gradient( 30deg,
        rgb(${(props) => (255 * Math.cos(props.color / 40))},
            ${(props) => (Math.pow(props.color - 100, 2) * 50 / (100*100)) }, 
            ${(props) => (Math.pow(props.color - 100, 2) * -100 / (100*100) + 200) }), 
        rgb(${(props) => (255 * Math.sin(props.color / 40))},
            ${(props) => (Math.pow(props.color - 127, 2) * -254 / (127*127) + 254) }, 
            ${(props) => (Math.pow(props.color - 127, 2) * 254 / (127*127)) })
    ) 1;

    border-radius: 0.4vw;
    border-width: 0.2vw;
    position: absolute;
    top: 1vw;
    right: 40vw;
    font-size: 1.2vw;
    font-weight: 500;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0);

    &:hover{
        border-width: 0.25vw;
        background-color: rgba(255,255,255,0.4);
    }
`;

export const ChangePhoto = styled(ChangeBtn)`
    right: 46.5vw;
    cursor: pointer;
`;
