import { Container } from "./style";

export function ButtonText({title, isActive = false, icon: Icon, ...rest}) {
    return(
        <Container 
            type="button"
            $isActive={isactive.toString()}
            {...rest}
        >
            {Icon && <Icon />}
            {title}
        </Container>
    )

}