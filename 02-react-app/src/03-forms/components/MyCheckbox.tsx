import {useField, ErrorMessage} from 'formik';

interface Props {
    id: string,
    label: string,
    name: string,
    [x: string]: any
}

export function MyCheckbox({label, ...props}:Props) {

    const [field] = useField({...props, type:'checkbox'});
    return (
       <>
            <label htmlFor={props.id || props.name}>
                <input type="checkbox" {...props} {...field}/>
                {label}
            </label>
            <ErrorMessage name={props.name} component="span"/>
       </>
    )
}
