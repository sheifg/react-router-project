import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { Container } from "react-bootstrap";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  // To know if there is a user or not. It is in the top level, because it will be used for some components/pages
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  return (
    <div
      className="d-flex flex-container flex-column"
      style={{ height: "100vh" }}
    >
      <Header user={user} setUser={setUser} />
      <main className="flex-grow-1 mt-4">
        <Container>
          {/* It is asummed that there is a user and it is wanted to store(update) the user in the user state. It is needed to share the user with the AppRoutes */}
          <AppRoutes user={user} setUser={setUser} />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
