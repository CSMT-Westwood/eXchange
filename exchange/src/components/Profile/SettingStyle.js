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
    border-image: linear-gradient( 30deg,
    rgba(${(props) => (255 * Math.cos(props.color / 15))},
        ${(props) => (Math.pow(props.color - 127, 2) * 255 / (127*127)) },
        ${(props) => (255 * Math.sin(props.color / 30))}, 
        0.4),
    rgba(${(props) => (255 * Math.cos(props.color / 15))},
        ${(props) => (Math.pow(props.color - 127, 2) * 255 / (127*127)) },
        ${(props) => (255 * Math.sin(props.color / 30))}, 
    1)) 1;

    border-width: 0.17vw;
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
    rgba(${(props) => (255 * Math.cos(props.color / 15))},
        ${(props) => (Math.pow(props.color - 127, 2) * 255 / (127*127)) },
        ${(props) => (255 * Math.sin(props.color / 30))}, 
        0.4),
    rgba(${(props) => (255 * Math.cos(props.color / 15))},
        ${(props) => (Math.pow(props.color - 127, 2) * 255 / (127*127)) },
        ${(props) => (255 * Math.sin(props.color / 30))}, 
    1)) 1;

    border-width: 0.17vw;
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
        background-color: rgba(255,255,255,0.5);
    }
`;

export const ChangePhoto = styled(ChangeBtn)`
    right: 46.5vw;
    cursor: pointer;
`;

export const PreferenceSetting = styled(SettingModule)`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 4vw;
`;

export const PreferenceField = styled.div`
    width: 20vw;
    height: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2vw;
    font-weight: 500;
    border-width: 0vw;
    border-style: solid;
    background:rgba(255,255,255,0.3);
    position: relative;
    top: 1vw;
`;

export const DeleteBtn = styled.button`
    width: 2vw;
    height: 2vw;
    font-weight: 500;
    font-size: 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-width: 0;
    background:rgba(255,255,255,0);  
    position: relative;
    right: -18vw;
    top: -1.5vw;
    &:hover{
        background:rgba(255,255,255, 0.8);
        cursor: pointer;
    }
`;

export const AddBtn = styled(ChangeBtn)`
    position: relative;
    top: 2vw;
    bottom: 2vw;
    right: -7vw;
    width: 6vw;
    height: 1.9vw;
    border-style: solid;
    border-radius: 0.5vw;
    border-width: 0.17vw;
    border-color: black;
    font-size: 1.2vw;
    font-weight: 500;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0);

    &:hover{
        background-color: rgba(255,255,255,0.5);
    }
`;

export const AddField = styled(SettingField)`
    position: relative;
    top: 1vw;
    right 0vw;
    background: rgba(255,255,255,0.5)
`;

export const PlaceHolder = styled(AddField)`
    border-width: 0;
    opacity: 0;
`;