import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const location = useLocation();

  // http://localhost:3004/login
  // console.log(location) -> it returns an object, where you can find pathname: "/login" (endpoint)
  // if it is written after login a query/parameter, it is necessary to write "?" : /login?next=people"
  // ? appears just once after the endpoint and if it is needed more querys/parameteres, it has to be used "&"
  // http://localhost:3004/login?next=people&city=Berlin
  // pathname: "/login"
  // search: "?next=people&city=Berlin"

  //console.log(location);   // --> {pathname: '/login', search: '?next=/people/5', hash: '', state: null, key: '6q8cb611'}

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ email, password });
    localStorage.setItem("user", JSON.stringify({ email, password }));

    // It is being used location.searh, becaue in that part appear the info that it is needed, in that case: ?next=/people/5, people page, for this specific example the person 5

    // if (location.search) {
    //! Option 1 - using search parameter(?) is a way to send information
    //! Using search parameter
    // 1 way to find the path that it is wanted
    // const pos = location.search.indexOf('=');
    // console.log(location.search.slice(pos + 1));
    // navigate(location.search.slice(pos + 1));

    // 2 way to do it
    // navigate(location.search.slice(6));
    //It is needed the part after the equal (?next=/people)
    // 0 1 2 3 4 5 6      from 6 it would be the part that it is wanted: /people
    // console.log(location.search.slice(6));

    //! Option 2 - using state to send information
    //! Using state information, it is a better way
    if (location.state?.from) {
      navigate(location.state.from);
    } else navigate("/");
  };

  return (
    <Row className="justify-content-center">
      <Col sm={12} md={10} lg={6}>
        <Card className="mt-4">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <h1 className="text-center">Login</h1>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="john@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <div className="text-center">
                <Button type="submit" variant="primary">
                  Login
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
