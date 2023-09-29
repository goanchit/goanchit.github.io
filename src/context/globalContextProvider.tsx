import React, { FC, ReactNode, createContext, useReducer } from "react";

interface InitialToastState {
    show: boolean;
    message: string;
}

interface InitialState {
    toast: InitialToastState
}

interface Props {
    children: ReactNode
}

const initialState: InitialState = {
    toast: {
        show: false,
        message: ""
    }
}

export const GlobalStateContext = createContext<InitialState | undefined>(undefined)
export const GlobalDispatchContext = createContext<any>(undefined)

const reducer = (state: InitialState, action: any) => {
    switch (action.type) {
        case 'SHOW_TOAST':
            return {
                ...state,
                toast: {
                    show: action.payload.toast.show,
                    message: action.payload.toast.message
                }
            }
        default:
            throw new Error('Bad Action Type')
    }
}

const GlobalContextProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <GlobalStateContext.Provider value={state}>
        <GlobalDispatchContext.Provider value={dispatch}>
            {children}
        </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
}

export default GlobalContextProvider;