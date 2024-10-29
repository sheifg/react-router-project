import React from "react";
import errorImg from "../img/404.png";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <img src={errorImg} className="w-50" alt="error-image" />
      <div>
        <Button
          className="me-2"
          variant="success"
          onClick={() => navigate("/")}
        >
          Home
        </Button>
        <Button variant="warning" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    </div>
  );
}
