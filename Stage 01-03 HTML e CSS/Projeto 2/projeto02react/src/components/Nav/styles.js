import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    margin-bottom: 55px;

    ul {
        font-family: 'Mulish', sans-serif;
        list-style: none;
        display: flex;
        gap: 48px;

        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
        color: #1f1534;
    }
    a:hover {
        font-weight: bold;
    }
`