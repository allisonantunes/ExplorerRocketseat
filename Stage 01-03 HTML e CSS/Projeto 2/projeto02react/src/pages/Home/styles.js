import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    padding-top: 65px;

    width: 1000px;

    font-family: 'Open Sans', sans-serif;

    min-height: 80vh;

    h1 {
        font-family: 'Mulish', sans-serif;
        font-size: 49px;
        line-height: 56px;
        color: #1f1534;
        
        font-weight: normal;

        width: 490px;
    }
    h1 span {
        color: #89c5cc;
        font-weight: bold;
    }
    section p {
        font-size: 14px;
        line-height: 28px;
        color: #7d7987;

        margin: 40px 0;
    }
    `

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        color: white;
        text-transform: uppercase;
        font-family: 'Open Sans', sans-serif;

        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        
        padding: 14px 32px 15px;
        border-radius: 4px;
        border: none;
        background: #69b99d;

        cursor: pointer;

    }
        button:hover {
            background: #4ea788;
        }
` 