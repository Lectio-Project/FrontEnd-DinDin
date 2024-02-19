import Input from "@/app/components/Input/Input";
import Button from '@/app/components/Button/Button';
import CloseIcon from "../../../assets/closeIcon.svg";

export default function ModalUpdate(){
    return(
        <main  className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
            
            <div className="absolute inset-0 bg-black opacity-50 w-full h-full flex justify-center"></div>

        <section className="flex flex-col justify-around w-[500px] h-[650px] bg-blue-400 bg-white rounded-lg z-50 rounded-xl">
            <div>
            <h1>Editar Perfil</h1>
            <img src={CloseIcon} alt="Close Icon"/>
            </div>

            <form className="p-10">

            <Input
            name="name"
            type="text"
            placeholder="Nome"
            
            />

            <Input
            name="email"
            type="text"
            placeholder="E-mail"
            
            />

            <Input
            name="password"
            type="password"
            placeholder="Senha"
            
            />
            <Input
            name="passwordConfirmation"
            type="password"
            placeholder="Confirmação de senha"
            required
            />


            </form>

            <div 
            className="w-full flex justify-center"
            >
            <Button
            title="Atualizar"
            type="submit"
            className="w-1/2 mt-3 mb-2"
            />
            </div>

    </section>
            

        </main>
    )
}