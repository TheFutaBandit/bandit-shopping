import { Container } from "../home/Home.styled";
import { Navbar } from '../navbar/navbar';
import { Outlet } from 'react-router-dom';

export const App = () => {

    return (
        <Container>
            <Navbar />
            <Outlet />
        </Container>
    )
}