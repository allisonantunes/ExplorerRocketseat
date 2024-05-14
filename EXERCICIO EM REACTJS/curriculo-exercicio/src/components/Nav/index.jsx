import { Container } from "./styles"
import { AiOutlineHome, AiOutlineUser, AiOutlineSwitcher, AiOutlineMessage, AiOutlineAlignLeft } from 'react-icons/ai'
import { ButtonLink } from "../ButtonLink";


export function Nav() {
    
    return(
        <Container>
            <ButtonLink to='/'
                style={({ isActive }) => {return {color: isActive ? "#FF5C00" : '#7D7373',}}}
            title={<AiOutlineHome />}
            />

            <ButtonLink to='/about'
                style={({ isActive }) => {return {color: isActive ? "#FF5C00" : '#7D7373',}}}
            title={<AiOutlineUser />} 
            />

            <ButtonLink to='/experience' 
                style={({ isActive }) => {
                    return {color: isActive ? "#FF5C00" : '#7D7373',}}}
            title={<AiOutlineSwitcher />} 
            />

            <ButtonLink to='/specializations' 
                style={({ isActive }) => {
                    return {color: isActive ? "#FF5C00" : '#7D7373',}}}
            title={<AiOutlineAlignLeft />} 
            
            />
            <ButtonLink to='/contato' 
                style={({ isActive }) => {
                    return {
                        color: isActive ? "#FF5C00" : '#7D7373',
                    }
                }}
            title={<AiOutlineMessage />} 
            />
        </Container>
    )
}