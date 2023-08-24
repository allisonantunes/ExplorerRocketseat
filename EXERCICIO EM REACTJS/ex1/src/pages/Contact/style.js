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