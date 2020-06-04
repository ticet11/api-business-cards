import React from "react";

const ContactCard = (props) => {
    const { address, company, email, name, phone } = props.contact;
    const streetNum = props.streetNum;
    return (
        <div className='contact-wrapper'>
            <div className="name">{name}</div>
            <div className="phoneNum">{phone}</div>
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
};

export default ContactCard;
