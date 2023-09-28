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
export const Main = styled.main`
grid-area: main;
margin: auto 100px;
padding-right: 90px;

h2 {
    margin-bottom: 50px;
    font-weight: normal;
    color: #ffffff;
}

p {
    font-size: 15px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    margin-bottom: 15px;
}

span {
    color: ${({ theme }) => theme.COLORS.ORANGE};
}
`