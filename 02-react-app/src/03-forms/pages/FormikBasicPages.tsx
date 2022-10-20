import { useFormik, FormikErrors } from 'formik';
import '../styles/styles.css';

interface FormValues {
  firstName: string,
  lastName: string,
  email: string,
}


export function FormikBasicPages() {


  const validate = ({firstName, lastName, email}: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if(!firstName) errors.firstName = 'Required';
    else if(firstName.length > 15) errors.firstName = 'Must be 15 characters or less';

    if(!lastName) errors.lastName = 'Required';
    else if(lastName.length > 10) errors.lastName = 'Must be 15 characters or less';

    if (!email) errors.email = 'Required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) errors.email = 'Invalid email address';

    return errors;
  }

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => console.log(values),
    validate
  });


  return (
    <div>
      <h1>Formik tutorial basico</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">Primer nombre</label>
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        { (touched.firstName && errors.firstName) && <span>{errors.firstName}</span>}

        <label htmlFor="lastName">Segundo nombre</label>
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
         { (touched.lastName && errors.lastName) && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
         { (touched.email && errors.email) && <span>{errors.email}</span>}

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}
