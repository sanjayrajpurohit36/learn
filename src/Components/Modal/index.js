import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import {image_path} from "utils/assetsHelper";


const Overlay = styled.div`
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${ props => {props.zIndex}};
`;

const Dialog = styled.div`
    width: 100%;
    height: 100;
`;

const DialogWrapper = styled.div`
    width: ${props => (props.width)};
    height: ${props => (props.height)};
    margin: auto;
    background: ${props => (props.background)};
    position: absolute;
    border-radius: ${props => {props.borderRadius}};
`;

const DialogHeader = styled.div`
    width: 100%;
    height: 100%;
`
const image = styled.div`
    height: ${props => props.imageHeight};
	width: ${props => props.imageWidth};
	position: absolute;
	top: ${props => props.imageTop};
	right: ${props => props.imageRight};
	object-fit: contain;
	cursor: pointer ${imageStyles};
`

const Modal = props => {
    const { children, style, overlayClass = '', className = '', ...restProps } = props;
    <Overlay className={overlayClass}>
        <DialogWrapper className={className}>
        {
            props.isClosable && <img src={image_path('./black-cross.jpg')}/> 
        }
        {props.header && <DialogHeader {...restProps}>{props.header} </DialogHeader> }
        <Dialog> {children}</Dialog>
        </DialogWrapper>    
        
    </Overlay>
}

EmDialog.propTypes = {
	header: PropTypes.string,
	children: PropTypes.node.isRequired,
	closeIcon: PropTypes.string,
	closeOnOverlayClick: PropTypes.bool,
	isCloseable: PropTypes.bool,
	imageRight: PropTypes.string,
	imageTop: PropTypes.string,
	imageWidth: PropTypes.string,
	imageHeight: PropTypes.string,
	padding: PropTypes.string,
	background: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	maxWidth: PropTypes.string,
	onClose: PropTypes.func,
	closeImgStyle: PropTypes.object,
	style: PropTypes.object
};

EmDialog.defaultProps = {
	closeIcon: 'black-cross.svg',
	closeOnOverlayClick: false,
	isCloseable: false,
	imageRight: '1rem',
	imageTop: '1rem',
	imageWidth: '1.5rem',
	imageHeight: '1.5rem',
	padding: '2rem',
	background: 'white',
	width: 'auto',
	zIndex: 99,
	height: 'auto',
	maxWidth: '90%',
	header: null,
	insideWrapper: false,
	borderRadius: '10px',
	closeImgStyle: {}, //close image styles can be in object
	style: {},
	onClose: () => {}
};

export default Modal



