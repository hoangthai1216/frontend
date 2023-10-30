import React, { useState } from "react";
import './Contact.css';


const Contact: React.FC = () => {
    const contacts = [
        {
            name: "Ronaldo",
            age: 18,
            designation: "Software Engineer",
        },
        {
            name: "Messi",
            age: 28,
            designation: "Programmer",
        },
        {
            name: "Kane",
            age: 22,
            designation: "HR",
        },
        {
            name: "Ronaldinho",
            age: 30,
            designation: "Security",
        },
        {
            name: "Rooney",
            age: 23,
            designation: "Cleaner",
        },
        {
            name: "Salah",
            age: 25,
            designation: "Project Manager",
        },
    ];
    const [contactList, setContactList] = React.useState<{name: string, age: number, designation: string}[] | undefined >(contacts);
    const [text, setText] = React.useState<string>('');
    const [isShow, setShow] = React.useState(false);
    const handleOnViewDetailClick = () => {
        setShow(!isShow)
    }

    const handleOnClick = () => {
        const findContacts = 
        contactList && contactList?.length > 0 
        ? contactList?.filter((c) => c?.name === text) 
        : undefined;
        setContactList(findContacts);
    }

    return(
        <div>

            <div className="title">
                <h1>Contact Search</h1>
            </div>

            <div className="input__wrapper">
                <input 
                type="text" 
                placeholder="Search Contact" 
                value={text} 
                onChange={(e) => {setText(e.target.value); setContactList(contacts)}}/>
                <button disabled={!text} onClick={handleOnClick}>Search</button>
            </div>

            <div className="body">
                {contactList && contactList?.length === 0 && (
                    <div className="notFound"> No Contact Found</div>
                )}
                {contactList && contactList?.length > 0 && contactList?.map(contact => {
                    return(
                        <div className="body__item">
                            <h3>Name: {contact?.name}</h3>
                            <p>Age: {contact?.age}</p>
                            <p>Designation: {contact?.designation}</p>
                            <button onClick={handleOnViewDetailClick}>View</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Contact;