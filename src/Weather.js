import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
const Weather = () => {
    const [temp, setTemp] = useState(0);
    // const [count,setCount]=useState(0);


    useEffect(() => {
        for (let i = 0; i < 5; i++) {
            setTemp(temp + 1);
            console.log("Use Effect");
        }
    }, []);

    return (<div>
        <h1> Weather is {temp}</h1>
    </div>)


}
export const TempInCelsius = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => setUsers(response.data));
    }, []);
    return (
      <div>
        <h2>The JSON below is loaded from an external API!</h2>
        <code>{JSON.stringify(users)}</code>
      </div>
    );
  }
// export const TempinCelsius = () => {
//     return (<div>Temp
//         {/* <Container>
//             <Row>
//                 <Col>1 of 2</Col>
//                 <Col>2 of 2</Col>
//             </Row>
//             <Row>
//                 <Col>1 of 3</Col>
//                 <Col>2 of 3</Col>
//                 <Col>3 of 3</Col>
//             </Row>
//         </Container> */}
//         {/* <Container>
//             <Row>
//                 <Col>1 of 3</Col>
//                 <Col xs={6}>2 of 3 (wider)</Col>
//                 <Col>3 of 3</Col>
//             </Row>
//             <Row>
//                 <Col>1 of 3</Col>
//                 <Col xs={5}>2 of 3 (wider)</Col>
//                 <Col>3 of 3</Col>
//             </Row>
//         </Container> */}
//         <Container>
//             <Row className="justify-content-md-center">
//                 <Col xs lg="2">
//                     1 of 3
//                 </Col>
//                 <Col md="auto">Variable width content</Col>
//                 <Col xs lg="2">
//                     3 of 3
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>1 of 3</Col>
//                 <Col md="auto">Variable width content</Col>
//                 <Col xs lg="2">
//                     3 of 3
//                 </Col>
//             </Row>
//         </Container>
//         {/* <div><Button type="button" variant="outline-danger" >DoN't CliCK Me</Button>  </div> */}
//     </div>)
// }

export default Weather;