import React, { useReducer } from "react";
import { initialState, reducer, Context } from "../store";

export default function StateProvider({ children }) {
    const [store, dispatch] = useReducer(reducer, initialState);
    return (
        <Context.Provider value={{ store, dispatch }}>
            {children}
        </Context.Provider>
    );
}
