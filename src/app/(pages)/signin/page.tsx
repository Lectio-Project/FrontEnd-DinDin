'use client'

import Button from '@/app/components/Button/Button';
import Input from '@/app/components/Input/Input';
import Link from 'next/link';
import Background from '@/assets/background.svg';
import Logo from '../../../assets/logo.svg';

import { toast } from 'sonner';

import { ChangeEvent, FormEvent, useState } from 'react';
import SigninValidation from '@/formsValidation/SigninValidation';
import api from '@/api/api';
import { setItem } from '@/utils/storage';
import { redirect } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErros] = useState({
        email: '',
        password: ''
    });    

    const router = useRouter();

    const { email, password } = formValues

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const result = await signIn('credentials',{
            email,
            password,
            redirect: false
        })

        if(result?.error){
            console.error(result)
            return
        }



        const lowerCaseEmail: string = email.toLowerCase().trim();

        try {
            const validation = await SigninValidation(
                lowerCaseEmail,
                password
            );
            if (Object.keys(validation).length > 0) {
                setErros(validation);
                return;
            } else {
                setErros({
                    email: '',
                    password: ''
                });
            }
            
            const response = await api.post('/login', { email: lowerCaseEmail, password });
            
            
            if (response.status === 200) {
                const { access_token, id } = response.data;
                setItem('token', access_token);
                setItem('idUser', id);

                toast.success('Login efetuado!');
                return router.replace('/dashboard')
            }
            
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main
            className={`flex flex-col justify-center items-center h-screen w-screen bg-cover bg-center bg-no-repeat`}
            style={{ backgroundImage: `url(${Background})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-green-300 via-blue-300 to-purple-600 opacity-30" />

            <img
                className="self-start w-44 ml-16 mb-2.5 z-10"
                src={Logo}
                alt="Logo with the outline of a hexagon with a white line inside and a dark blue line outside, accompanied by the word Dindin"
            />

            <section className='flex justify-between items-center gap-48 w-full h-4/5 px-20'>
                <article className='flex flex-col items-start gap-6 w-6/12 sm:w-6/12 lg:w-5/12 z-10'>
                    <h2 className='lg:text-5xl font-bold lg:leading-snug font-primary'>
                        Controle suas <span className='text-primary-lilac'>finanças</span>, sem planilha chata.
                    </h2>

                    <p className='text-2xl font-normal font-primary'>
                        Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo num único lugar e em um clique de distância.
                    </p>

                    <Link href='/signup' className='w-2/5 py-3 mt-3 flex justify-center bg-primary-lilac rounded-md'>
                        <span className='text-sm font-bold font-primary'>
                            Cadastre-se
                        </span>
                    </Link>
                </article>

                <article className='flex flex-col items-center justify-between w-6/12 sm:w-6/12 lg:w-5/12 lg:h-fit border bg-white z-10'>
                    <h3 className='text-[28px] text-primary-lilac font-semibold mt-12 mb-8'>
                        Login
                    </h3>

                    <form 
                        className='flex flex-col items-center w-10/12 gap-7 mb-12'
                        onSubmit={handleSubmit}
                    >
                        <Input 
                            name='email'
                            type='text'
                            placeholder='E-mail'
                            value={email}
                            onChange={handleChangeInput}
                        />

                        {errors.email && (
                            <p className="flex self-start -mt-[1.7rem] -mb-[1.6rem] font-secondary text-[16px] font-normal text-red-500 leading-[1.2rem]">
                                {errors.email}
                            </p>
                        )}

                        <Input 
                            name='password'
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={handleChangeInput}
                        />

                        {errors.password && (
                            <p className="flex self-start -mt-[1.7rem] -mb-[1.6rem] font-secondary text-[16px] font-normal text-red-500 leading-[1.2rem]">
                                {errors.password}
                            </p>
                        )}

                        <Button 
                            className="w-full mt-12 mb-2"
                            type='submit'
                            title='Entrar'
                        />
                    </form>
                </article>
            </section>
        </main>
    )
}