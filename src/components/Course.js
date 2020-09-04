import React from 'react';
import { Card } from 'react-bootstrap';

const Course = (props) => {
    return (<Card style={{ width: '18px' }, {margin: '10px'}}>
        <Card.Body><Card.Title>{props.name}</Card.Title></Card.Body>
        
    </Card>);
}
 
export default Course;