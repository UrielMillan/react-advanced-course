import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';


export function FormikComponets() {

  return (
    <div>
      <h1>Formik yup</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}

        onSubmit={(values) => {
          console.log(values);
        }}

        validationSchema={
          Yup.object({
            firstName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
            lastName: Yup.string().max(10, 'Debe tener 10 caracteres o menos').required('Requerido'),
            email: Yup.string().email('El correo no tiene un formato valido').required('Requerido'),
            terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
            jobType: Yup.string().notOneOf(['it-jr'], 'it-jr no es una opcion valida').required('Debe de especificar un tipo de trabajo')
          })
        }
      >
        {
          formik => (
            <Form>
              <label htmlFor="firstName">Primer nombre</label>
              <Field type="text" name="firstName"/>
              <ErrorMessage name="firstName" component="span"/>
             
              <label htmlFor="lastName">Segundo nombre</label>
              <Field type="text" name="lastName"/>
              <ErrorMessage name="lastName" component="span"/>

              <label htmlFor="email">Email</label>
              <Field type="email" name="email"/>
              <ErrorMessage name="email" component="span"/>

              <label htmlFor="jobType">Tipo de trabajo</label>
              <Field id="jobType" as="select" name="jobType">
                <option value="enginner">Ingeniero</option>
                <option value="medic">Medico</option>
                <option value="it-jr">IT Junior</option>
              </Field>
              <ErrorMessage name="jobType" component="span"/>

              <label htmlFor="terms">
                <Field id="terms" type="checkbox" name="terms"/>
                Terminos y condiciones
              </label>
              <ErrorMessage name="terms" component="span"/>

              <input type="submit" value="Enviar" />
            </Form>
          )
        }

      </Formik>
    </div>
  )
}
