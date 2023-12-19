import styled, { keyframes } from "styled-components";

export const floatingAnim = keyframes`
    0% {
        transform: translateY(0px);
    }
    100% {
        transform:translateY(20px);
    }
`

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img {
        width: 80%;
        height: auto;
        aspect-ratio: 1/1;
        border-radius: 50%;
        object-fit: cover;
        filter: drop-shadow(0px 0px 10px #e4105d);
        animation: ${floatingAnim} 1.5s ease-in-out infinite alternate-reverse;
        position: relative;
        z-index: -1;
    }
`



export const Title = styled.h2`
    font-family: 'Open-Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`
export const TitleLogin = styled.p`
    font-family: 'Open-Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`
export const SubTitleLogin = styled.p`
    font-family: 'Open-Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`
export const EsqueciText = styled.p`
    font-family: 'Open-Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #e5e044;
`
export const CriarText = styled.p`
    font-family: 'Open-Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #e230D7;
`

export const TextContent = styled.p`
    font-family: 'Open-Sans' , sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;

    color: #FFFFFF;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

