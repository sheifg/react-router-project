import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function People() {
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    const res = await axios.get("https://reqres.in/api/users");

    // First .data is from Axios and the second .data is from the API
    setPeople(res.data.data);
  };

  // Render at the begining
  useEffect(() => {
    getPeople();
  }, []);

  console.log(people);

  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1>People LIST</h1>
      <Row>
        {/* Placeholder for people data */}

        {people.map((item) => (
          <Col
            key={item.id}
            sm={12}
            md={6}
            lg={4}
            type="button"
            className="mb-2"
            // It is wanted to change to that page when it is clicked: programmatically
            onClick={() => {
              navigate(`/people/${item.id}`);
            }}
          >
            <img src={item.avatar} alt="person" />
            <h6>
              {item.first_name} {item.last_name}
            </h6>
            {/* Whenever any user clicks, the user will be navigated to the details page */}
          </Col>
        ))}
      </Row>
    </div>
  );
}


