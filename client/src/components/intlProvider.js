import React, { useContext } from "react";
import { IntlProvider } from "react-intl";
import EnglishTranslations from "../translations/en.json";
import DutchTranslations from "../translations/nl.json";
import { Context } from "../store";

export default function IntlProviderr({ children }) {
    const { store, dispatch } = useContext(Context);
    return (
        <IntlProvider
            locale={store.lang}
            messages={
                store.lang === "nl" ? DutchTranslations : EnglishTranslations
            }
        >
            {children}
        </IntlProvider>
    );
}
