import { Container } from "./styles";
import { NavLink } from "react-router-dom";

export function Nav() {
    return(
        <Container>
             <a id="logo" href="#">
                <img src="../../public/imagens/logo.png" alt="treine.me" />
            </a>
            <ul>
                <li>< NavLink to='/' style={({ isActive }) => {
                return {
                fontWeight: isActive ? "bold" : "",
                }}}>
                Home</NavLink></li>

                <li>< NavLink to='/about' style={({ isActive }) => {
                return {
                fontWeight: isActive ? "bold" : "",
                }}}>
                About</NavLink></li>

                <li>< NavLink to='/train' style={({ isActive }) => {
                return {
                fontWeight: isActive ? "bold" : "",
                }}}>
                To Train</NavLink></li>

               </ul>
        </Container>
    )
}