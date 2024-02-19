import Button from '@/app/components/Button/Button';
import Input from '@/app/components/Input/Input';
import Link from 'next/link';
import Background from '../../../assets/background.svg';
import Logo from '../../../assets/logo.svg';

export default function SignUp() {
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
            <section className="flex flex-col items-center justify-between w-4/12 h-fit border bg-white">
                <h3 className="text-28 text-primary-lilac font-semibold mt-10 mb-8">
                    Cadastre-se
                </h3>
                <form className="flex flex-col items-center w-10/12 gap-7">
                    <Input
                        name="name"
                        type="text"
                        placeholder="Nome"
                        required
                    />
                    <Input
                        name="email"
                        type="text"
                        placeholder="E-mail"
                        required
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Senha"
                        required
                    />
                    <Input
                        name="passwordConfirmation"
                        type="password"
                        placeholder="Confirmação de senha"
                        required
                    />
                    <Button
                        title="Cadastrar"
                        type="submit"
                        className="w-full mt-3 mb-2"
                    />
                </form>
                <Link href="/" className="mb-10">
                    <span className="text-sm text-primary-lilac font-bold font-secondary">
                        Já tem cadastro? Clique aqui!
                    </span>
                </Link>
            </section>
        </main>
    );
}
