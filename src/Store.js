import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const initialState = {
    posts: []
};

const Store = ({ children }) => {
    console.log('🏠 STORE RUN')
    const useReducerReturnValue = useReducer(Reducer, initialState)
    console.log('🟢 useReducer return:', useReducerReturnValue)
    const [state, dispatch] = useReducerReturnValue
    // const [state, dispatch] = useReducer(Reducer, initialState)
    // useReducer takes in reducer func and initial state
    // and returns array of 2 elements, state and dispatch func
    // console.log('children test', children)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export const Context = createContext(initialState)
export default Store;