import { Formik, Form } from 'formik'
import { MyTextInput, MySelect } from '../components';
import formJson from '../data/custom-forms.json';
import * as Yup from 'yup';

console.log(formJson);

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};


for (const input of formJson) {
    initialValues[input.name] = input.value;

    if(!input?.validations) continue;
    let schema = Yup.string();

    for (const rule of input.validations){
        if(rule.type === "required"){
            schema = schema.required('Este campo es requerido');
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});


export default function DynamicForms() {
    return (
        <div>
            <h1>Dymanic form</h1>

            <Formik
                initialValues={initialValues}

                onSubmit={(values) => {
                    console.log(values)
                }}

                validationSchema={validationSchema}
            >
                {
                    (formik) => (
                        <Form>
                            {formJson.map(({ type, name, placeholder, label, options }) => {

                                if (type === 'input' || type === 'email' || type === 'password') {
                                    return (
                                        <MyTextInput
                                            key={name}
                                            type={(type as any)}
                                            name={name}
                                            label={label}
                                            id={name}
                                            placeholder={placeholder}
                                        />
                                    )
                                }

                                else if (type === 'select') {
                                    return (
                                        <MySelect key={name} label={label} name={name} id={name}>
                                            <option>Select an option</option>
                                            {options?.map(({id, label}) => (
                                                <option key={id} value={id}>{label}</option>
                                            ))}
                                        </MySelect>
                                    )
                                }

                                else {
                                    <span>Tipo no soportado</span>
                                }

                            })}
                            <input type="submit" value="Enviar" />
                        </Form>

                    )
                }
            </Formik>
        </div>
    )
}
