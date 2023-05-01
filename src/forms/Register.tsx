
import { FC } from "react";
import * as Yup from 'yup';
import TextField from "@/components/TextField/TextField.component";
import Button from "@/components/Button/Button.component";
import { Form, Formik, FormikProps } from "formik";

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

const RegisterForm: FC = () => {
	return (
		<div>
			<Formik initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				confirmPassword: ''
			}} onSubmit={(values, actions) => { console.log(values, actions); }} validationSchema={RegisterSchema}>
				{(props: FormikProps<RegisterValues>) => (
					<Form>
						<TextField autoFocus label="First Name" id="firstName" name="firstName" />
						<TextField label="Last Name" id="lastName" name="lastName" />
						<TextField label="Email" id="email" type="email" name="email" />
						<TextField label="Password" id="password" type="password" name="password" />
						<TextField label="Confirm Password" id="confirmPassword" type="password" name="confirmPassword" />
						<Button text="Submit" style={{ float: 'right' }} />
					</Form>
				)}
			</Formik>
		</div>
	)
};

export default RegisterForm;
