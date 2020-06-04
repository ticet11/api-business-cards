import React, { Component } from "react";
import axios from "axios";

import ContactCard from "./ContactCard";

export default class ContactCardContainer extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            contactImage: "",
        };
    }

    componentDidMount = () => {
        this.getContact();
    };

    getContact = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                this.setState({
                    data: response.data,
                });
            })
            .catch((error) => {
                console.error("getcontact error", error);
            });
    };

    contactCards = () => {
        return this.state.data.map((contact) => {
            return (
                <ContactCard
                    key={contact.id}
                    contact={contact}
                    streetNum={Math.floor(Math.random() * 2000) + 1}
                />
            );
        });
    };

    render() {
        return <div>{this.contactCards()}</div>;
    }
}
