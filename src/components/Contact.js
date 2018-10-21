import React from 'react';
import '../App.css';

class Contact extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h4>{this.props.contact.displayName}</h4>
            </div>
        )
    }
}

export default Contact;