import styled from 'styled-components';
import Container from '../Container';

export const FeedTitle = styled.div`
    height: 5vw;
    width: 20vw;
    position: absolute;
    top: 5vw;
    left: 40vw;
    text-align: center;
    font-weight: 600;
    font-size: 2.7vw;
    font-family: Arial, Helvetica, sans-serif;
    z-index: 2;
`;

export const NewContainer = styled(Container)`
    opacity: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    background: blue;
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
`;


export const FeedWrapper = styled.div`
    width: 100vw;
    height: 50vw;
    border-width: 0.3vw;
    border-style: solid;
    align-items: center;
    jusity-content: center;
    z-index: 0;
    position: relative;
    top: 20vw;
`;

export const FieldTitle = styled.div`
    width: 100vw;
    height: 6vw;
    position: relative;
    top: 0vw;
    text-align: center;
    font-size: 2.5vw;
    font-weight: 550;
    background: rgba(123,43,222,0.4);
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