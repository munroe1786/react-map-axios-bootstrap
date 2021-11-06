import React from 'react';
import { Button, Card } from 'react-bootstrap'; 

const Contact = ({ contact }) => {
    return (
        <>
        <Card className='my-3 p-3 rounded h-90'>
            <Card.Img style={{objectFit:"containt"}} variant='top' src={contact.picture.large} />


        </Card>
        </>
    )
}

export default Contact;
