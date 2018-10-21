import React from 'react';
import Contact from './Contact'
import '../App.css';

class ContactList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log("Contacts componentWillMount");
    }

    componentDidMount() {
        console.log("Contacts componentDidUnmount");
        // fetch the names and profile pictures
    }

    componentDidCatch(e) {
        console.log("Contacts componentDidCatch");
        console.log(e);
    }

    componentWillUnmount() {
        console.log("Contacts componentWillUnmount");
    }

    render() {
        const contacts = this.props.contacts;
        const contactList = contacts.map((contact) => 
            <ul key={contact.id}>
                <Contact contact={contact}/>
            </ul>
        )

        return(
            <div>
                {contactList}
            </div>
        );
    }
}

export default ContactList;

