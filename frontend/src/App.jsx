import { Outlet, ScrollRestoration } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <Container className="my-2">
                <Outlet />
                <ScrollRestoration />
            </Container>
        </>
    );
}

export default App;
