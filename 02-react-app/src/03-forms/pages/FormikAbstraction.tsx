import { Formik, Form,} from 'formik';
import {MyCheckbox, MyTextInput, MySelect} from '../components'
import * as Yup from 'yup';
import '../styles/styles.css';


export  function FormikAbstraction() {

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
              <MyTextInput
                type='text'
                name='firstName'
                id='firstName'
                label='Primer nombre'
              />

              <MyTextInput
                type='text'
                name='lastName'
                id='lastName'
                label='Segundo nombre'
              />

              <MyTextInput
                type='email'
                name='email'
                id='email'
                label='Email'
              />

              <MySelect id="jobType" name="jobType" label="Tipo de trabajo">
                <option value="enginner">Ingeniero</option>
                <option value="medic">Medico</option>
                <option value="it-jr">IT Junior</option>
              </MySelect>

              <MyCheckbox
                id='terms'
                name='terms'
                label='Terminos y condiciones' 
              />

              <input type="submit" value="Enviar" />
            </Form>
          )
        }

      </Formik>
    </div>
  )
}
