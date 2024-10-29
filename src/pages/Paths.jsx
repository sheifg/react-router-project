import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Paths() {
  return (
    <div>
      <h1>
        Online IT Courses to Become a Qualified IT Professional with Clarusway{" "}
      </h1>
      <p className="fs-5">
        Join outstanding companies with rewarding salaries. We offer the
        highest-demand IT skills YOU need for success! CHOOSE THE BEST COURSE
        FOR YOU Upgrade your career with the best online training led by top IT
        experts!
      </p>
      <div>
        <Link to="fullstack" className="btn btn-success me-2">
          FullStack
        </Link>
        <Link to="aws" className="btn btn-warning">
          AWS
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
