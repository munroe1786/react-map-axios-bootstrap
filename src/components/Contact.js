import React from 'react';
import { Button, Card } from 'react-bootstrap'; 

const Contact = ({ contact }) => {
    return (
        <>
        <Card className='my-3 p-3 rounded h-90'>
            <Card.Img 
                style={{objectFit:"contain"}} 
                variant='top' 
                src={contact.picture.large} 
            />
        <Card.Body>
            <Card.Title>
                {`${contact.name.first + " " + contact.name.last}`}
            </Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>Address</Card.Subtitle>
            <Card.Text>
                <div>
                    <strong>Number:</strong> {contact.location.street.number}
                </div>
            </Card.Text>
        </Card.Body>
        

        </Card>
        </>
    )
}

export default Contact;
