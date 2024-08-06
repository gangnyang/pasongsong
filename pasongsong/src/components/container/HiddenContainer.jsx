import { React, useState} from "react";
import  styled, { keyframes } from "styled-components";

const slideIn = keyframes `
    0% {
        clip-path: inset(0% 0% 100% 100% 0 0 0 50%);
    }
    100% {
        clip-path: inset(0% 0% -30% -30%);
    }
`;

const slideOut = keyframes `
    0% {
        clip-path: inset(0% 0% -30% -30%);
    }
    100% {
        clip-path: inset(0% 0% 100% 100% 0 0 0 50%);
    }
`;

const StyledHiddenContainer = styled.div `
    width: 100%;
    height: 100%;
    top: 0;
    background-color: lightgreen;
    position: fixed;
    right: 0;
    z-index:1;
    clip-path: inset(0% 0% 100% 100% round 0 0 0 50%);
    animation: ${props => {
        if (props.show === 2) return 'none';
        return props.show === 1 ? slideIn : slideOut;
    }} 0.8s forwards;
`;

const HiddenContainer = ({show}) => {
    return <StyledHiddenContainer show = {show}/>;
};

export default HiddenContainer;