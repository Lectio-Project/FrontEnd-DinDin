import validator from 'validator';

export default async function UpdateValidation(
    name,
    email,
    password,
    passwordConfirmation
    ){
        let errors = {};

    if (!name) {
        errors.name = ' O campo nome é obrigatório';
    } else if (!validator.isLength(name, { min: 3 })) {
        errors.name =
            'O nome deve conter pelo menos 3 caracteres e não deve conter números ou caracteres especiais';
    } else if (!validator.isAlpha(name, 'pt-BR', { ignore: ' ' })) {
        errors.name =
            'O nome deve conter pelo menos 3 caracteres e não deve conter números ou caracteres especiais';
    }

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

    if (password !== passwordConfirmation) {
        errors.passwordConfirmation = 'As senhas não correspondem';
    }

    return errors;
    }