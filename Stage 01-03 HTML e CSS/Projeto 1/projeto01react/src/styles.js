import styled from 'styled-components'

export const Container = styled.div`
    padding: 0;
    margin: 0;

    text-align: center;

    font-family: sans-serif;
    span, a {
        color: #ff9900;
    }
    h1 {
        margin-top: 72px;
        margin-bottom: 32px;

        font-size: 49px;
        line-height: 56px;
    }
    h1 span {
        font-weight: bold;
    }
    p {
        font-size: 14px;
        line-height: 28px;
        color: #7d7987;
    }
`
export const Hero = styled.div`
    width: 592px;
    margin: 0 auto 72px
`
export const Footer = styled.footer`
    text-decoration: none;
    a + a {
        margin-left: 28px;
    }
`