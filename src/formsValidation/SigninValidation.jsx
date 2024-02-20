import validator from 'validator';

export default async function SigninValidation(
    email,
    password
) {
    let errors = {};

    if (!email.trim()) {
        errors.email = 'O campo e-mail é obrigatório';
    } else if (!validator.isEmail(email)) {
        errors.email = 'E-mail inválido';
    }

    if (!password) {
        errors.password = 'O campo senha é obrigatório';
    } else if (!validator.isLength(password, { min: 5 })) {
        errors.password = 'A senha deve conter pelo menos 5 caracteres';
    }

    return errors;
}