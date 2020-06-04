import React from "react";
import axios from 'axios';

export default class ContactCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            contactImage: ''
        })
    }

    componentDidMount = () => {
        this.getContactImage();
    }

    getContactImage = () => {
        axios
            .get("https://randomuser.me/api/")
            .then((response) => {
                this.setState({
                    contactImage:
                        response.data.results[0].picture.medium,
                });
            })
            .catch((error) => {
                console.error("getcontact error", error);
            });
    };
    render() {
        const {
            address,
            company,
            email,
            name,
            phone,
        } = this.props.contact;
        const streetNum = this.props.streetNum;
        return (
            <div className="contact-wrapper">
                <div className="profPic"><img src={this.state.contactImage} alt=""/></div>
                <div className="name">{name}</div>
                <div className="phoneNum">{phone.replace('x', 'ext. ')}</div>
                <div className="email">{email}</div>
                <div className="company">{company.name}</div>
                <div className="address">
                    <div className="street">
                        {streetNum} {address.street}
                    </div>
                    {address.suite}
                    {address.zipcode}
                </div>
            </div>
        );
    }
}
