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
    transition: transform 0.3s; /* Add transition */
    &:hover {
        transform: scale(1.2); /* Add scale effect on hover */
        z-index: 20; /* Bring to front on hover */
    }
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`;

function ImageButton(props){
    const { content, onClick, image, width, height, zindex } = props;

    return(
        <StyledButton zindex = {zindex} width = {width} height = {height} img={image} onClick={ onClick }>{content || "" }</StyledButton>
    )
}

export default ImageButton;