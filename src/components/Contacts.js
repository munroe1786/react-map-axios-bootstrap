import React, { Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

const Contacts = () => {

    const [contacts, setContacts] = useState([])
    const [loading, setLoading] = useState(false);

    const getContacts = async () => {
        try {
            const res = await axios.get("https://randomuser.me/api/?results=12")
            setContacts(res.data.results)
            setLoading(true)
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div>
            
        </div>
    )
}

export default Contacts
