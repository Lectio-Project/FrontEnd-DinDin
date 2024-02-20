'use client';
import Button from '@/app/components/Button/Button';
import Input from '@/app/components/Input/Input';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import Background from '../../../assets/background.svg';
import Logo from '../../../assets/logo.svg';

export default function SignUp() {
    const [formValues, setFormValues] = useState({
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

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
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
                    <Input
                        name="email"
                        type="text"
                        placeholder="E-mail"
                        value={email}
                        onChange={handleChangeInput}
                        required
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={handleChangeInput}
                        required
                    />
                    <Input
                        name="passwordConfirmation"
                        type="password"
                        placeholder="Confirmação de senha"
                        value={passwordConfirmation}
                        onChange={handleChangeInput}
                        required
                    />
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
