
import { FC } from "react";
import * as Yup from 'yup';
import TextField from "@/components/TextField/TextField.component";
import Button from "@/components/Button/Button.component";
import { Form, Formik, FormikProps } from "formik";

interface LoginValues {
	email: string;
	password: string;
}

const LoginSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email!').required('Required!'),
	password: Yup.string().required('Required!')
})

const Loginform: FC = () => {
	return (
		<div>
			<Formik initialValues={{
				email: '',
				password: ''
			}} onSubmit={(values, actions) => { console.log(values, actions); }} validationSchema={LoginSchema}>
				{(props: FormikProps<LoginValues>) => (
					<Form>
						<TextField autoFocus label="Email" id="email" type="email" name="email" />
						<TextField label="Password" id="password" type="password" name="password" />
						<Button text="Submit" style={{ float: 'right' }} />
					</Form>
				)}
			</Formik>
		</div>
	)
};

export default Loginform;
