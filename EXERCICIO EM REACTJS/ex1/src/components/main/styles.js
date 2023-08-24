import styled from 'styled-components';

export const Container = styled.main`
    grid-area: main;
    margin: auto 100px 100px 100px;
    padding-right: 90px;

    h1 {
        margin-bottom: 20px;
        font-weight: bold;
        color: #ffffff;
    }

    h2 {
        margin-bottom: 50px;
        font-weight: normal;
        color: #ffffff;
    }
    p {
        font-size: 15px;
        color: ${({ theme }) => theme.COLORS.TEXT};
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
`;