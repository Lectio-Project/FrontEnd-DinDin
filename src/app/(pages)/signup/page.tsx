import Input from '@/app/components/Input/Input';
import Button from '@/app/components/Button/Button';

export default function SignUp() {
    return (
        <main className="flex justify-center items-center justify-center h-screen w-screen">
            <section className="flex flex-col items-center justify-between w-5/12 border">
                <h3 className="text-3xl text-indigo-500 font-semibold mt-10 mb-10">
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
                        className="w-full mt-3 mb-3 "
                    />
                </form>
                <h4 className="text-sm text-indigo-500 font-medium mb-10">
                    Já tem cadastro? Clique aqui!
                </h4>
            </section>
        </main>
    );
}
