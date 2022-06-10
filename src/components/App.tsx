import React from "react";
import { Helmet } from "react-helmet";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";

function App() {
    return (
        <>
            <Helmet>
                <title>TETA</title>
            </Helmet>
            <GlobalStyles />
            <Router />
        </>
    );
}

export default App;
