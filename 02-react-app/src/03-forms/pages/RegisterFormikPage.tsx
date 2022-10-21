import { Formik, Form, } from 'formik';
import { MyTextInput } from '../components';
import * as Yup from 'yup';
import '../styles/styles.css';
export default function RegisterFormikPage() {

    return (
        <div>
            <h1>Register page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}

                onSubmit={(values) => {
                    console.log(values);
                }}

                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, 'El nombre de ser mayor de 2 caracteres')
                            .max(15, 'El nombre de ser meno de 15 caracteres')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('Formato de correo invalido')
                            .required('Requerido'),
                        password1: Yup.string()
                            .min(6, 'El password debe ser mayo de 2 caracteres')
                            .required('Requerido'),
                        password2: Yup.string()
                            .min(6, 'El password debe ser mayo de 2 caracteres')
                            .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden')
                            .required('Requerido'),
                    })
                }
            >
                {
                    formik => (
                        <Form>
                            <MyTextInput
                                type='text'
                                name='name'
                                id='name'
                                label='Nombre'
                            />

                            <MyTextInput
                                type='email'
                                name='email'
                                id='email'
                                label='Email'
                            />

                            <MyTextInput
                                type='password'
                                name='password1'
                                id='password1'
                                label='Contraseña'
                            />

                            <MyTextInput
                                type='password'
                                name='password2'
                                id='password2'
                                label='Repetir contraseña'
                            />

                            <input type="reset" value="Reset" />
                            <input type="submit" value="Enviar" />
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
