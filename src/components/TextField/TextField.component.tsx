import React, { FC } from 'react';
import styled from "styled-components";
import { useField } from 'formik';
import { TextFieldProps } from './TextField.type';
import { Container, ErrorMessage, RequiredTag } from '@/styles/GeneralStyles';

const StyledInput = styled.input<{ width: number, height: number, disabled: boolean }>`
	width: ${props => props.width}px;
	height: ${props => props.height}px;
	padding: 0.25em;
	font-size: 1.025rem;
	border: ${props => `1px solid ${props.theme.colors.dark}`};
	border-radius: 15px;
	transition: border-color 0.25s ease;
	outline: none;
	text-indent: 8px;
	background-color: ${props => props.disabled ? `${props.theme.colors.lightGrey}77` : 'white'};
	cursor: ${props => props.disabled ? 'not-allowed' : 'auto'};
	::placeholder {
		visibility: ${props => props.disabled ? 'hidden' : 'visible'};
		color: ${props => props.theme.colors.lightGrey};
	}
	&:focus {
		border-color: ${props => props.theme.colors.secondary};
	}
	`;

const TextField: FC<TextFieldProps> = ({ name, label, type = "text", placeholder = '', error = '', required = false, disabled = false, width = 270, height = 24, ...props }) => {
	const [field, meta] = useField({
		name,
		placeholder,
		...props,
	});

	return <Container direction='row' alignItems='center' justifyContent='space-between' width="360">
		<label htmlFor={name}>{label}{required ? <RequiredTag>*</RequiredTag> : undefined}</label>
		<StyledInput aria-required={required} required={required} placeholder={placeholder} width={width} disabled={disabled} height={height} type={type} {...field} {...props} />
		<ErrorMessage error={error}>{meta.error || '-'}</ErrorMessage>
	</Container >
};


export default TextField;
