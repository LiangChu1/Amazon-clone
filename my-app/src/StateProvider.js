import React, {createContext, useContext, useReducer} from "react";

//Prepares the dataLayer
export const StateContext = createContext();

//Wrap our app and provide the Data layer
export const StateProvider = ({reducer, initialState, children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);    
    return ( 
    <StateContext.Provider value={{state, dispatch}}> 
        {children}
    </StateContext.Provider>
    );
}
//Pull info from the data layer
export const useStateValue = () => {
    const context = useContext(StateContext);
    return context
}
