import styled from 'styled-components';
import Container from '../Container';

export const FeedTitle = styled.div`
    height: 5vw;
    width: 20vw;
    position: absolute;
    top: 8vw;
    left: 40vw;
    text-align: center;
    font-weight: 600;
    font-size: 2.7vw;
    font-family: Arial, Helvetica, sans-serif;
    z-index: 2;
`;

export const FeedSubTitle = styled.div`
    position: absolute;
    height: 10vw;
    width: 100vw;
    top: 13vw;
    left: 0;
    font-size: 1.5vw;
    font-weight: 400;
    text-align: center;
`;

export const NewContainer = styled(Container)`
    opacity: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    z-index: 3;
    position: absolute;
    top: 0.5vw;
    left: 10vw;
    width: 80vw;
`;


export const FeedWrapper = styled.div`
    width: 100vw;
    height: 500px;
    align-items: center;
    jusity-content: center;
    z-index: 0;
    position: relative;
    top: 2vw;
    overflow-y: auto;
`;

export const FieldTitle = styled.div`
    width: 20vw;
    height: 3vw;
    position: relative;
    top: 1vw;
    left: 40vw;
    text-align: center;
    font-size: 2vw;
    font-weight: 550;
    background: linear-gradient( 60deg,
        rgba(${(props) => (255 * Math.sin(props.color / 40))},
            ${(props) => (Math.pow(props.color - 127, 2) * -180 / (127*127) + 254) }, 
            ${(props) => (Math.pow(props.color - 127, 2) * 254 / (127*127)) },
            0.3),
        rgb(${(props) => (255 * Math.cos(props.color / 40))},
            ${(props) => (Math.pow(props.color - 100, 2) * 50 / (100*100)) }, 
            ${(props) => (Math.pow(props.color - 100, 2) * -100 / (100*100) + 200) },
            0.3)
    ); 
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Temp = styled.div`
   width: 100vw;
   height: 0;
   background: rgba(0,0,0,0);
`;

export const SecondaryWrapper = styled(Temp)`
    height: 600px;
    position: relative;
    left: 0;
    top: 20vw;
    border-style: solid;
    border-width: 0.2vw 0 0 0;
    border-image: linear-gradient( 90deg,
        rgb(${(props) => (255 * Math.sin(props.color / 40))},
            ${(props) => (Math.pow(props.color - 127, 2) * -180 / (127*127) + 254) }, 
            ${(props) => (Math.pow(props.color - 127, 2) * 254 / (127*127)) }),
        rgb(${(props) => (255 * Math.cos(props.color / 40))},
            ${(props) => (Math.pow(props.color - 100, 2) * 50 / (100*100)) }, 
            ${(props) => (Math.pow(props.color - 100, 2) * -100 / (100*100) + 200) })
    ) 1; 
`;
