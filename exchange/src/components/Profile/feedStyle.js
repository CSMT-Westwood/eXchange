import styled from 'styled-components';
import Container from '../Container';

export const FeedWrapper = styled.div`
    width: 100vw;
    height: 100vw;
    position: absolute;
    top: 3.5vw;
    left: 0;
`;

export const FeedTitle = styled.div`
    height: 5vw;
    width: 20vw;
    position: absolute;
    top: 4vw;
    left: 40vw;
    text-align: center;
    font-weight: 500;
    font-size: 2.7vw;
    font-family: Arial, Helvetica, sans-serif;
`;

export const NewContainer = styled(Container)`
    background: black;
    width: 100vw;
    height: 100vh;
`;