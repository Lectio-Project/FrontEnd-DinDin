import Button from '@/app/components/Button/Button';
import Input from '@/app/components/Input/Input';
import Background from '../../../assets/background.svg';
import Link from 'next/link';
import Logo from '../../../assets/logo.svg';

export default function SignIn() {
    return (
        <main
            className="flex flex-col justify-center items-center h-screen w-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <img
                className="self-start w-44 ml-16 mb-2.5"
                src={Logo}
                alt="Logo with the outline of a hexagon with a white line inside and a dark blue line outside, accompanied by the word Dindin"
            />

            <section className='flex justify-between items-center gap-48 w-full h-4/5 px-20'>
                <article className='flex flex-col items-start gap-6 w-4/12'>
                    <h2 className='text-5xl font-bold leading-snug font-primary'>
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

                <article className='flex flex-col items-center justify-between w-4/12 h-fit border bg-white'>
                    <h3 className='text-28 text-primary-lilac font-semibold mt-12 mb-8'>
                        Login
                    </h3>

                    <form className='flex flex-col items-center w-10/12 gap-7 mb-12'>
                        <Input 
                            name='email'
                            type='text'
                            placeholder='E-mail'
                            required
                        />

                        <Input 
                            name='password'
                            type='password'
                            placeholder='Password'
                            required
                        />

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