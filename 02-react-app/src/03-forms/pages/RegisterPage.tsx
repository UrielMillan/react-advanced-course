import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';
export default function RegisterPage() {

    const {name, email, password1, password2, onChange, reset, isValidEmail } = useForm({
        name: 'erick',
        email: '',
        password1: '',
        password2: '',
    });

    const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
    }



    return (
        <div>
            <h1>Register page</h1>
            <form onSubmit={onSubmit} noValidate>
                <input type="text" name="name" placeholder="Name" value={name} onChange={onChange} />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}
                <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} />
                {!isValidEmail(email) && <span>Este campo es necesario</span>}
                <input type="password" name="password1" placeholder="Password" value={password1} onChange={onChange} />
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                <input type="password" name="password2" placeholder="Repeat password" value={password2} onChange={onChange} />
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                <input type="submit" value='Crear' />
                <input type="button" value='Resetear' onClick={reset} />
            </form>
        </div>
    )
}
