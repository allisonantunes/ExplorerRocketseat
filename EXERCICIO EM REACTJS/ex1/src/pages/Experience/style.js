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
h3 {
    font-weight: normal;
    font-size: 20px;
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
ul {
    margin: 50px 30px 0 0;
    display: inline-block;
    list-style: none;
    p {
        margin-top: 5px;
    }
    li {
        color: ${({ theme }) => theme.COLORS.ORANGE};

    }
}
@media (max-width: 990px) {
    margin: auto 0;
    padding: 15px;
    h2 {
        font-size: 30px;
        margin-bottom: 0;
    }
    h3 {
        font-size: 15px;
    }
    span {
        font-size: 30px;
    }
}
`