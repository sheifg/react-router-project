import React from "react";
import { Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export default function Fullstack() {
  return (
    <div className="text-center">
      <h1>Full Stack Path</h1>
      <p>
        Become a software and application developer, well-equipped with both
        front-end and back-end.
      </p>
      <img
        src="https://clarusway.com/wp-content/uploads/elementor/thumbs/v1-Fullstack-developer-pqnf31gbxlt9gholzgwtsxya1abhwiwulezoqna3wo.jpg"
        alt=""
      />
      <div>
        <Button variant="success" className="mt-2">
          Learn More
        </Button>
      </div>
      <div className="mt-4">
        <Link className="btn btn-success me-2" to="">
          React.JS
        </Link>
        <Link className="btn btn-warning " to="next">
          Next.JS
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

// It is commonly used/included an index in one of the nested routes, that it will be represented by Outlet and will be rendered
// Anyway Outlet can be used with everything, nested routes or just routes
