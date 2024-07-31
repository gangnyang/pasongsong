import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 10px 20px;
    background-color: ${(props)=>props.bgcolor||"more grey"};
    color: ${(props)=>props.color || "darkblue"};
    border: 1px solid grey;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
`;

function Button(props){
    const { content, bgcolor, color, onClick } = props;

    return(
        <StyledButton bgcolor={bgcolor} color={color} onClick={onClick}>{content || "Button"}</StyledButton>
    );
}

export default Button;