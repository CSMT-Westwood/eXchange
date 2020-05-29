import styled from 'styled-components';
import Container from '../Container';

export const FeedTitle = styled.div`
    height: 5vw;
    width: 20vw;
    position: absolute;
    top: 5vw;
    left: 40vw;
    text-align: center;
    font-weight: 500;
    font-size: 2.7vw;
    font-family: Arial, Helvetica, sans-serif;
`;

export const NewContainer = styled(Container)`
    opacity: 0;
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    z-index: 3;
`;


export const FeedWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    border-width: 1vw;
    border-color: blue;
    border-style: solid;
    bacground: rgba(0,0,0,0);
    display: flex;
`;

export const FieldTitle = styled.title`
    width: 100vw;
    height: 10vw;
    position: absolute;
    top: 0vw;
    text-align: center;
    font-size: 3vw;
    font-weight: 600;
`;
