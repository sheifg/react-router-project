import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function Contact() {
  const defaultFormValues = {
    username: "",
    email: "",
    message: "",
  };

  //? common state to make inputs controlled
  const [formValues, setFormValues] = useState(defaultFormValues);

  //? common handler to update related field in state for the inputs
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormValues(defaultFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formValues.username} , your message has been sent !`);
    resetForm();
  };

  return (
    <div>
      <h1 className="text-center">CONTACT FORM</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            name="username"
            id="username"
            placeholder="john doe"
            value={formValues.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            name="email"
            id="email"
            placeholder="john@email.com"
            value={formValues.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="message">Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            id="message"
            placeholder="Enter your message here"
            value={formValues.message}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" type="submit">
            SUBMIT
          </Button>
        </div>
      </Form>
    </div>
  );
}
