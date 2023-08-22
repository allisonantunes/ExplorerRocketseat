import styled from 'styled-components';

export const Container = styled.header`
        text-align: center;
        border-radius: 20px;
        width: 395px;
        border: solid 1px #7D7373;

        margin: 76px 100px auto 100px;

    h1 {
        text-align: left;
        margin-left: 35px;
        font-size: 36px;
        margin-top: 20px;
        margin-bottom: 12px;
        span {
            color: ${({ theme }) => theme.COLORS.ORANGE};
        }
    }
    h2 {
        font-size: 24px;
        margin-bottom: 9px;
    }
    p {
        margin-bottom: 22px;
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.TEXT};
    }
    img {
        width: 319px;
        height: 308px;
        border-radius: 20px;
        margin-bottom: 22px;
    }
    button {
        width: 312px;
        height: 58px;
        cursor: pointer;
        margin-top: 58px;
        margin-bottom: 30px;

        border: none;
        border-radius: 19px;

        font-size: 29px;

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