import styled from 'styled-components';

export const Container = styled.div`
    
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto 40px;
/*     grid-template-rows: 105px 128px auto 64px;
 */    grid-template-areas: 
    'header main menu'
    ;

    padding-right: 20px;

`;
export const Menu = styled.nav`
    grid-area: menu;
    border-radius: 30px;
    border: solid 1px #7D7373;
    margin-bottom: auto;
    margin-top: auto;
    
    svg {
        margin: 5px;    
        width: 25px;
    }
    a {
        text-decoration: none;
        color: #7D7373;
    }
`;