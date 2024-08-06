import {React, useState} from "react";
import styled, {keyframes} from "styled-components";
import {useNavigate} from "react-router-dom";
import TextButton from "../ui/TextButton.jsx";
import ImageButton from "../ui/ImageButton.jsx";
import HiddenContainer from "../container/HiddenContainer.jsx";
import ImageButtonNohover from "../ui/ImageButton_nohover.jsx";

const Wrapper = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index:0;
`;

const TopBar = styled.div `
    width: 100%;
    height: 120px;
    background-color: grey;
    display: flex;
    flex-direction: row;
    align-items:start;
    justify-content: flex-start; 
    position:relative;
    z-index:1;
    padding-left: 8%;
    padding-top:1%;
`;

const ButtonWrapper = styled.div `
    position: fixed;
    top:0;
    right:0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2.5%;
    padding-right: 2.5%;
    z-index:10;
`;

function MyPage(props) {
    const [showContainer, setShowContainer] = useState(2);
    const handleContainer = () => {
        if (showContainer === 2) {
            setShowContainer(1);
        } else if (showContainer === 1) {
            setShowContainer(0);
        } else {
            setShowContainer(1);
        }
    };

    const [img1] = useState('/images/circle.png');
    const [img2, setImg2] = useState('/images/dot.png');
    const [logo] = useState('/images/pasongsong-logo-transparent.png');
    const navigate = useNavigate();

    const handleImageChange = () => {
        if (img2 === '/images/dot.png') {
            setImg2('/images/x.png');
        } else {
            setImg2('/images/dot.png');
        }
    }

    const handleButtonClick = () => {
        handleContainer();
        handleImageChange();
    }

    return (
        <Wrapper>
            <TopBar>
                <ImageButtonNohover
                    image={logo}
                    width='150'
                    height='60'
                    onClick={() => {
                        navigate('/main-page');
                    }}
                    zindex='5'/>
            </TopBar>
            
            <ButtonWrapper>
                    <ImageButton
                        image={img1}
                        width='40'
                        height='40'
                        onClick={handleButtonClick}
                        zindex='15'/>
                    <ImageButton image={img2} width='30' height='30' zindex='10'/>
                </ButtonWrapper>
            <HiddenContainer show={showContainer}/>
        </Wrapper>
    )

}

export default MyPage;