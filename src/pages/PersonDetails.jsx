import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NotFound from "./NotFound";
import spinner from "../img/Spinner-2.gif";
import { Button } from "react-bootstrap";

export default function PersonDetails() {
  // id, because it has to use the name that it is written in the AppRoutes
  // <Route path="/people/:id" element={<PersonDetails />} />

  const { id } = useParams();

  const [person, setPerson] = useState(null);
  const [error, setError] = useState(false);
  // To have a better user experience, it is used spinner. To tell the user, it somethign happens, it is necessary to wait and using spinner it is more clear to the user
  const [loading, setLoading] = useState(false);

  const getPerson = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://reqres.in/api/users/${id}`);
      setPerson(res.data.data); // fetch user data
    } catch {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    getPerson();
  }, []);

  // If there is an error, the user is coming back to the notfound page
  if (error) return <NotFound />;
  if (loading) {
    return (
      <div className="text-center mt-4">
        <img src={spinner} alt="spinner" />
      </div>
    );
  }

  return (
    <div className="text-center">
      {/* <h3> Placeholder for first_name and last_name </h3> */}
      <h3>
        {person?.first_name} {person?.last_name}
      </h3>

      <img className="rounded" src={person?.avatar} alt="person-image" />
      <div className="mt-4">
        <Button
          className="me-2"
          variant="success"
          onClick={() => navigate("/")}
        >
          Home
        </Button>
        <Button variant="warning" onClick={() => navigate("/people")}>
          Back
        </Button>
      </div>
    </div>
  );
}

