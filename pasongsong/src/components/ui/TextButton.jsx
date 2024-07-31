import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 10px;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
`;

function TextButton(props){
    const { content, onClick } = props;

    return(
        <StyledButton onClick={ onClick }>{content || "Button" }</StyledButton>
    )
}

export default TextButton;