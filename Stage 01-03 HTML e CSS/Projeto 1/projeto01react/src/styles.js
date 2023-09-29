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
    #balls {
        position: fixed;
        bottom: 0px;
        right: 0px;
    }
`
export const Hero = styled.div`
    width: 592px;
    margin: 0 auto 72px
`
export const Footer = styled.footer`
    font-size: 14px;
    line-height: 28px;
    color: #7d7987;
    text-decoration: none;

    a + a {
        margin-left: 28px;
    }
`
export const Line = styled.div`
    width: 568px;
    height: 0px;

    margin: 0 auto 8px;

    border: 1px solid #eceff2;
`
