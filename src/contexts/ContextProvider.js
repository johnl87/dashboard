import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    Notification: false,
}

export const ContextProvider = ( { children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const handleClick = (clicked) => {setIsClicked({ ...initialState, [clicked]: true});}
    const [screenSize, setScreenSize] = useState(undefined)

    return (
        <StateContext.Provider
        value ={{ 
            activeMenu,
            setActiveMenu,
            isClicked, 
            setIsClicked,
            handleClick,
            screenSize, 
            setScreenSize,
         }}
        >
            {children}
            {/*always return children. it returns what context wraps around*/}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);

