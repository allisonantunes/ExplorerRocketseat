import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled(Link)`
    background: none;
    border: none;
    color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.TEXT};
    cursor: pointer;
`;