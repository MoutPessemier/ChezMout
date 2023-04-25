import { useFormik } from "formik";
import { FC } from "react";
import * as Yup from 'yup';
import TextField from "@/components/TextField/TextField.component";
import Button from "@/components/Button/Button.component";

interface LoginValues {
	email: string;
	password: string;
}

const LoginSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email!').required('Required!'),
	password: Yup.string().required('Required!')
})

const RegisterForm: FC = ({ ...props }) => {

	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: LoginSchema,
		onSubmit: values => { onSubmitHandler(values) }
	});

	const onSubmitHandler = (values: LoginValues) => {
		console.log(values);
	}

	return <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
		<TextField label="Email" id="email" type="email" {...formik.getFieldProps('email')} />
		<TextField label="Password" id="password" type="password" {...formik.getFieldProps('password')} />
		<Button text="Submit" />
	</form>
};

