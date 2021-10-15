import React, { ReactNode } from "react";

export const AppContext = React.createContext({})

type Props ={
    children : ReactNode
}
type Usuario = {
    nome :string
}
export const AppContextProvider = (props : Props) =>{
    
    const { children} = props

    return(
        <AppContext.Provider value={{children}}>

            {props.children}
        </AppContext.Provider>
    );
};