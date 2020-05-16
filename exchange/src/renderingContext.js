import React, { useState, createContext } from 'react';

export const RenderingContext = createContext();

function RenderingContextProvider (props) {
    const [page, setPage] = useState("login");

    return (
        <RenderingContext.Provider value={{page, setPage}}>
            { props.children }
        </RenderingContext.Provider>
    );
}

export default RenderingContextProvider;