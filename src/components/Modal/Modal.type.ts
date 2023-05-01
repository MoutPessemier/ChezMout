import { HTMLAttributes, ReactNode } from 'react';

export default interface ModalProps extends HTMLAttributes<HTMLDivElement> {
	width: string;
	height?: string;
	closeHandler: any;
	modalHeader?: ReactNode;
	modalBody?: ReactNode;
	modalFooter?: ReactNode;
}
