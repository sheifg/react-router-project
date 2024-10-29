import { Button, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export default function Header({ user, setUser }) {
  return (
    <Navbar expand="md" className="bg-body-tertiary px-2">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link className="nav-link " to="/">
            Home
          </Link>
          <Link className="nav-link " to="/paths">
            Paths
          </Link>
          <Link className="nav-link " to="/contact">
            Contact
          </Link>
          {/* People link will be just shown if there is a user, if someone logs in. For that reason it is being used conditional rendering here
          If there is user, it shows the people section. To make it is possible, it is also used PrivateRoute */}
          {user && (
            <Link className="nav-link " to="/people">
              People
            </Link>
          )}
          {/* Conditional rendering: if there is user, it shows logout; if not, login */}
          {user ? (
            // When someone logs out, the localStorage will be cleared. It is changed from <Link> to <Button>, because it is just logout and it is not necessary to sent to any page.
            <Button
              className="nav-link btn btn-warning btn-sm "
              onClick={() => {
                localStorage.clear(); // To don't keep the user data in the local storage after the logout
                setUser(null);
              }}
            >
              Logout
            </Button>
          ) : (
            <Link className="nav-link " to="/login">
              Login
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
