import React from "react";

import "./styles/App.css";
import "./styles/Contacts.css";
import ContactCardContainer from "./components/ContactCardContainer";

function App() {
    return (
        <div className="App">
            <h1>Business Boys</h1>
            <ContactCardContainer />
        </div>
    );
}

export default App;
