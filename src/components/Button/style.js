import { css } from "styled-components";
import styled from "styled-components";

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;
    border: 0px;

    color: #FFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    transition: all 0.2s ease-in-out;

    &:hover{
        opacity: 0.6;
        cursor: pointer;
    }

    ${({ variant }) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;

        background: #e4105D;

        &:hover{
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`