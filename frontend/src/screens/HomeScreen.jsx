import { useSelector } from "react-redux";
import Hero from "../components/Hero";
import { Badge, Card, Container } from "react-bootstrap";

const HomeScreen = () => {
    const { userInfo } = useSelector((state) => state.auth);
    return (
        <>
            {userInfo ? (
                <section className="py-5">
                    <Container className="d-flex justify-content-center">
                        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
                            <h1>Welcom to MERN Auth</h1>
                            <p>
                                Your are logged in as:{" "}
                                <Badge bg="primary" className="">
                                    {userInfo.name}
                                </Badge>
                            </p>
                        </Card>
                    </Container>
                </section>
            ) : (
                <Hero />
            )}
        </>
    );
};

export default HomeScreen;
