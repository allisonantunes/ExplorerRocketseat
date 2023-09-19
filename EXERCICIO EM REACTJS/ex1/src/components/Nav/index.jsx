import { Container } from "./styles"
import { AiOutlineHome, AiOutlineUser, AiOutlineSwitcher, AiOutlineMessage, AiOutlineAlignLeft } from 'react-icons/ai'
import { ButtonLink } from "../ButtonLink";


export function Nav() {
    

    function handleTagSelected(tagName){
        setTagsSelected([tagName])
    }
    return(
        <Container>
            <ButtonLink to='/' title={<AiOutlineHome />}
            isActive 
            onClick={() => handleTagSelected('all')}
            />
            <ButtonLink title={<AiOutlineUser />} 
            onClick={() => handleTagSelected(tag.name)} 
            isActive={tagsSelected.includes(tag.name)}
            />
            <ButtonLink title={<AiOutlineSwitcher />} 
            onClick={() => handleTagSelected(tag.name)} 
            isActive={tagsSelected.includes(tag.name)}
            />
            <ButtonLink title={<AiOutlineAlignLeft />} 
            onClick={() => handleTagSelected(tag.name)} 
            isActive={tagsSelected.includes(tag.name)}
            />
            <ButtonLink to='/contato' title={<AiOutlineMessage />} 
            onClick={() => handleTagSelected(tag.name)} 
            isActive={tagsSelected.includes(tag.name)}
            />
        </Container>
    )
}