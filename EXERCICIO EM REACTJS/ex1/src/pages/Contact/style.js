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

    .line {
        border: 1px solid #685D5D;
        margin-bottom: 10px;
        width: 400px;
    }

`;
export const Main = styled.main`
grid-area: main;
margin: auto 100px;
padding-right: 90px;

h2 {
    
    font-weight: normal;
    color: #ffffff;
}
h3 {
    font-weight: normal;
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
}

p {
    font-size: 15px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    margin-bottom: 50px;
}

span {
    color: ${({ theme }) => theme.COLORS.ORANGE};
}
.title {
    display: flex;
    gap: 5px;
    align-items: center;
    
    svg {
        height: 25px;
    }
}
`