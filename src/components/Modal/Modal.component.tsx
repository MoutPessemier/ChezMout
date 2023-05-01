import React, { FC, Fragment } from "react";
import ModalProps from "./Modal.type";
import { ColorTypes } from "@/styles/theme";
import { ModalContainer, ModalHeader, ModalTitle, CloseBtn, ModalBody, ModalFooter } from "./Modal.style";

const Modal: FC<ModalProps> = ({ width, height, modalHeader, closeHandler, modalBody, modalFooter, ...props }) => {
	return (
		<ModalContainer direction="column" width={width} height={height} borderColor={ColorTypes.PrimaryLight} backgroundColor={ColorTypes.White}>
			<ModalHeader>
				<ModalTitle>{modalHeader}</ModalTitle>
				<CloseBtn onClick={() => closeHandler(false)}>&times;</CloseBtn>
			</ModalHeader>
			<ModalBody>{modalBody}</ModalBody>
			<ModalFooter>{modalFooter}</ModalFooter>
		</ModalContainer>
	);
}

export default Modal;
