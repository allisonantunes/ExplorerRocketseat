import { Container } from './styles';
import { NavLink } from 'react-router-dom';

export function ButtonLink({title, ...rest}) {
    return (
        <NavLink
        type='button'
        {...rest}
        >
        {title}
        </NavLink>
    )
}