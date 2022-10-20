import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

interface FormValues {
  firstName: string,
  lastName: string,
  email: string,
}


export  function FormikYupPages() {


 
  const { 
    handleSubmit, 
    errors, 
    touched, 
    getFieldProps, 
  } = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => console.log(values),
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
      lastName: Yup.string().max(10, 'Debe tener 10 caracteres o menos').required('Requerido'),
      email: Yup.string().email('El correo no tiene un formato valido').required('Requerido'),
    })
  });


  return (
    <div>
      <h1>Formik yup</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">Primer nombre</label>
        <input type="text" {...getFieldProps('firstName')}/>
        { (touched.firstName && errors.firstName) && <span>{errors.firstName}</span>}

        <label htmlFor="lastName">Segundo nombre</label>
        <input type="text" {...getFieldProps('lastName')}/>
         { (touched.lastName && errors.lastName) && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input type="email" {...getFieldProps('email')}/>
         { (touched.email && errors.email) && <span>{errors.email}</span>}

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}