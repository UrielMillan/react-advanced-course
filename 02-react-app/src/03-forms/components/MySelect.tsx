import {useField, ErrorMessage} from 'formik';

interface Props {
    id: string,
    label: string,
    name: string,
    [x: string]: any
}

export function MySelect({label, ...props}:Props) {
    const [field] = useField(props);
    return (
       <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...props} {...field}/>
            <ErrorMessage name={props.name} component="span"/>
       </>
    )
}
