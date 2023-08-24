import { Container } from "./styles"
import { AiOutlineHome, AiOutlineUser, AiOutlineSwitcher, AiOutlineMessage, AiOutlineAlignLeft } from 'react-icons/ai'
import { ButtonLink } from "../ButtonLink";


export function Nav() {
    return(
        <Container>
            <ButtonLink to='/' title={<AiOutlineHome />} isActive />
            <ButtonLink title={<AiOutlineUser />}  />
            <ButtonLink title={<AiOutlineSwitcher />}  />
            <ButtonLink title={<AiOutlineAlignLeft />}  />
            <ButtonLink to='/contato' title={<AiOutlineMessage />}  />
        </Container>
    )
}