import {React, useState} from "react";
import styled, {keyframes} from "styled-components";
import TextButton from "../ui/TextButton.jsx";
import ImageButton from "../ui/ImageButton.jsx";

const Wrapper = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TopBar = styled.div `
    width: 100%;
    height: 80px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; 
`;

const slideIn = keyframes `
    from{
        transform: translateX(100%);
    }
    to{
        transform: translateX(0%);
    }
`;

const slideOut = keyframes`
    from{
        transform: translateX(0%);
    }
    to{
        transform: translateX(100%);
    }
`;

const HiddenContainer = styled.div `
    width: 100%;
    height: 100%;
    top: 0;
    background-color: lightgreen;
    position: fixed;
    right: 0;
    transform: translateX(100%);
    animation: ${props => (
    (props.show===2&&'none')||(props.show===1&&slideIn)||(props.show===0&&slideOut)
)} 0.8s forwards;
`;

function MyPage(props) {
    const [showContainer, setShowContainer] = useState(2);
    const handleContainer = () => {
        if(showContainer ===2){
            setShowContainer(1);
        }else if (showContainer === 1){
            setShowContainer(0);
        }else{
            setShowContainer(1);
        }
    };

    const [img, setImg] = useState('/images/list_icon.png');

    const handleImageChange = () => {
        if(img==='/images/list_icon.png'){
            setImg('/images/x_icon.png');
        }else{
            setImg('/images/list_icon.png');
        }
    }

    const handleButtonClick = () => {
        handleContainer();
        handleImageChange();
    }

    return (
        <Wrapper>
            <TopBar>
                <ImageButton
                    image={img}
                    width='60'
                    height='60'
                    onClick={handleButtonClick}/>
            </TopBar>
            <HiddenContainer show={showContainer}/>
        </Wrapper>
    )

}

export default MyPage;