import React from "react";
import Header from "./components/Header";
import GlobalStyle from "./styles/global";
import Resume from "./components/Resume";
import Form from "./components/Form";

export default function App() {
    return (
        <>
            <Header/>
            <Resume/>
            <GlobalStyle />
            <Form />
        </>
    )
}
