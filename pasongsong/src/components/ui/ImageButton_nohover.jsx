import { React, useState } from "react";
import styled from "styled-components";


const StyledButton = styled.button`
    position:absolute;
    padding: 10px;
    background-image: url(${props => props.img });
    background-color: transparent;
    background-size: cover;
    background-position: center;
    color: black;
    border: none;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
    z-index: ${props => props.zindex};
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`;

function ImageButton_nohover(props){
    const { content, onClick, image, width, height, zindex } = props;

    return(
        <StyledButton zindex = {zindex} width = {width} height = {height} img={image} onClick={ onClick }>{content || "" }</StyledButton>
    )
}

export default ImageButton_nohover;