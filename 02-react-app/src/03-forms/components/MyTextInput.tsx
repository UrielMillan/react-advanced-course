import {useField, ErrorMessage} from 'formik';

interface Props {
    id: string,
    label: string,
    name: string,
    type?: string,
    placeholder?:string,
    [x: string]: any
}

export function MyTextInput({label, ...props}:Props) {

    const [field] = useField(props);
    return (
       <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...props} {...field}/>
            <ErrorMessage name={props.name} component="span"/>
       </>
    )
}
