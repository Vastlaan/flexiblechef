import React from "react";

export const initialState = {
    lang: "nl",
    cookies: {
        display: true,
        types: [
            {
                type: "necessary",
                allow: true, // always true
                components: [],
            },
            {
                type: "analitycs",
                allow: true, // always true
                components: [],
            },
            {
                type: "preferences",
                allow: true, // always true
                components: [],
            },
            {
                type: "marketing",
                allow: true, // always true
                components: [],
            },
        ],
    },
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "changeLang":
            return { ...state, lang: action.payload };
        case "setCookies":
            return { ...state, cookies: action.payload };
        default:
            return { ...state };
    }
};

export const Context = React.createContext();
