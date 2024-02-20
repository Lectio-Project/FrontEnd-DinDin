import Input from "@/app/components/Input/Input";
import Button from '@/app/components/Button/Button';
import CloseIcon from "../../../assets/closeIcon.svg";



export default function ModalUpdate({setShowModal}:ChildProps){
    return(
        <main  className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
            
            <div className="fixed inset-0 bg-black opacity-50 w-full h-full flex justify-center"></div>

        <section className="flex flex-col justify-around w-[611px] h-[770px] bg-white rounded-lg z-50 rounded-xl ">
            <div className="flex justify-between mx-16 mt-10 mb-0">
            <h1 className="text-black font-bold text-4xl leading-10 font-primary">Editar Perfil</h1>
            <img 
            src={CloseIcon} 
            alt="Close Icon" 
            className="cursor-pointer"
            onClick={()=>{setShowModal(false)}}
            />
            </div>

            <form className=" flex  flex-col px-10 pt-0 gap-4 my-0 pb-0">

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
            className="w-full flex justify-center items-center "
            >
            <Button
            title="Confirmar"
            type="submit"
            className="w-[238px] h-[46px] "
            />
            </div>

    </section>
            

        </main>
    )
}