import { useFormik } from "formik";
import { FC } from "react";
import * as Yup from 'yup';
import TextField from "@/components/TextField/TextField.component";
import Button from "@/components/Button/Button.component";

interface RegisterValues {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const RegisterSchema = Yup.object().shape({
	firstName: Yup.string().min(2).max(20).required('Required!'),
	lastName: Yup.string().min(2).max(20).required('Required!'),
	email: Yup.string().email('Invalid email!').required('Required!'),
	password: Yup.string().required('Required!'),
	confirmPassword: Yup.string().required('Required!')
})

const RegisterForm: FC = ({ ...props }) => {

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: ''
		},
		validationSchema: RegisterSchema,
		onSubmit: values => { onSubmitHandler(values) }
	});

	const onSubmitHandler = (values: RegisterValues) => {
		console.log(values);
	}

	return <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
		<TextField label="First Name" id="firstName" {...formik.getFieldProps('firstName')} />
		<TextField label="Last Name" id="lastName" {...formik.getFieldProps('lastName')} />
		<TextField label="Email" id="email" type="email" {...formik.getFieldProps('email')} />
		<TextField label="Password" id="password" type="password" {...formik.getFieldProps('password')} />
		<TextField label="Confirm Password" id="confirmPassword" type="password" {...formik.getFieldProps('confirmPassword')} />
		<Button text="Submit" />
	</form>
};

