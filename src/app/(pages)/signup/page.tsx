'use client';
import api from '@/api/api';
import Button from '@/app/components/Button/Button';
import Input from '@/app/components/Input/Input';
import SignupValidation from '@/formsValidation/SignupValidation';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'sonner';
import Background from '../../../assets/background.svg';
import Logo from '../../../assets/logo.svg';

export default function SignUp() {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    });
    const [errors, setErros] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    });

    const { name, email, password, passwordConfirmation } = formValues;

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const formattedName = name.trim();
        const lowerCaseEmail = email.toLowerCase().trim();

        try {
            const validation = await SignupValidation(
                formattedName,
                lowerCaseEmail,
                password,
                passwordConfirmation
            );
            if (Object.keys(validation).length > 0) {
                setErros(validation);
                return;
            } else {
                setErros({
                    name: '',
                    email: '',
                    password: '',
                    passwordConfirmation: ''
                });
            }

            await api.post('/sign-up', { formattedName, email: lowerCaseEmail, password });

            toast.success('Cadastro efetuado com sucesso!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main
            className="flex flex-col justify-center items-center h-screen w-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <img
                className="absolute w-[10.5rem] left-[6.25rem] top-[2.8rem] sm:hidden md:block md:left-[2.8rem] lg:left-[6.25rem]"
                src={Logo}
                alt="Logo with the outline of a hexagon with a white line inside and a dark blue line outside, accompanied by the word Dindin"
            />
            <section className="flex flex-col items-center justify-center w-[32rem] h-[48.8rem] border bg-white sm:h-screen md:h-[48.8rem] sm:w-full lg:w-[32rem]">
                <h3 className="text-[28px] text-primary-lilac font-semibold mb-[2rem] sm:mb-[2rem] md:mb-[2rem]">
                    Cadastre-se
                </h3>
                <form
                    className="flex flex-col items-center w-[28rem] gap-[1.7rem] sm:w-10/12 lg:w-[28rem]"
                    onSubmit={handleSubmit}
                >
                    <Input
                        name="name"
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={handleChangeInput}
                        required
                    />
                    {errors.name && (
                        <p className="flex self-start -mt-[1.7rem] -mb-[1.6rem] font-secondary text-[16px] font-normal text-red-500 leading-[1.2rem]">
                            {errors.name}
                        </p>
                    )}

                    <Input
                        name="email"
                        type="text"
                        placeholder="E-mail"
                        value={email}
                        onChange={handleChangeInput}
                        required
                    />
                    {errors.email && (
                        <p className="flex self-start -mt-[1.7rem] -mb-[1.6rem] font-secondary text-[16px] font-normal text-red-500 leading-[1.2rem]">
                            {errors.email}
                        </p>
                    )}
                    <Input
                        name="password"
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={handleChangeInput}
                        required
                    />
                    {errors.password && (
                        <p className="flex self-start -mt-[1.7rem] -mb-[1.6rem] font-secondary text-[16px] font-normal text-red-500 leading-[1.2rem]">
                            {errors.password}
                        </p>
                    )}
                    <Input
                        name="passwordConfirmation"
                        type="password"
                        placeholder="Confirmação de senha"
                        value={passwordConfirmation}
                        onChange={handleChangeInput}
                        required
                    />
                    {errors.passwordConfirmation && (
                        <p className="flex self-start -mt-[1.7rem] -mb-[1.6rem] font-secondary text-[16px] font-normal text-red-500 leading-[1.2rem]">
                            {errors.passwordConfirmation}
                        </p>
                    )}
                    <Button
                        title="Cadastrar"
                        type="submit"
                        className="w-full mt-[0.7rem]"
                    />
                    <Link href="/" className="-mt-[1rem]">
                        <span className="text-sm text-primary-lilac font-bold font-secondary">
                            Já tem cadastro? Clique aqui!
                        </span>
                    </Link>
                </form>
            </section>
        </main>
    );
}
