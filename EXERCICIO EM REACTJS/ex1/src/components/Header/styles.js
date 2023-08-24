import styled from 'styled-components';

export const Container = styled.header`
        grid-area: header;
        text-align: center;
        border-radius: 20px;
        width: 250px;
        border: solid 1px #7D7373;

        margin: auto 50px;

    h1 {
        text-align: left;
        margin-left: 22px;
        font-size: 36px;
        margin-top: 20px;
        margin-bottom: 10px;
        span {
            color: ${({ theme }) => theme.COLORS.ORANGE};
        }
    }
    h2 {
        font-size: 20px;
        margin-bottom: 9px;
    }
    p {
        margin-bottom: 22px;
        font-size: 15px;
        color: ${({ theme }) => theme.COLORS.TEXT};
    }
    img {
        width: 200px;
        height: 200px;
        border-radius: 20px;
        margin-bottom: 20px;
    }
    button {
        width: 200px;
        height: 40px;
        cursor: pointer;
        margin-top: 20px;
        margin-bottom: 20px;

        border: none;
        border-radius: 19px;

        font-size: 20px;

        color: #1D1C1D;
        background-color: ${({ theme }) => theme.COLORS.ORANGE};
    }
    a {
        margin-left: 28px;
        
    }
    a img {
        width: 40px;
        height: 40px;
    }

`;