import Input from "@/app/components/Input/Input";
import Button from '@/app/components/Button/Button';
import CloseIcon from "../../../assets/closeIcon.svg";
import { useState, ChangeEvent } from "react"; 





export default function ModalUpdate({setShowModal}:ChildProps){



    const [dataUpdate, setDataUpdate] = useState<UpdateFormTypes>({
        name:'',
        email:'',
        password:'',
        passwordConfirmation: ''
    })

    const [errors, setErros] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    });

    function handleChange(event: ChangeEvent<HTMLInputElement>){
        const { name, value } = event.target;
        setDataUpdate({...dataUpdate,[name]:value})
    }


    return(
        <main  className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
            
            <div className="fixed inset-0 bg-black opacity-50 w-full h-full flex justify-center"></div>

        <section className="flex flex-col justify-around w-[611px] h-[770px] bg-white rounded-lg z-50 rounded-xl ">
            <div className="flex justify-between mx-16 mt-10 mb-0">
            <h1 className="text-black font-bold text-4xl leading-10 font-primary">
                Editar Perfil
            </h1>
            <img 
            src={CloseIcon} 
            alt="Close Icon" 
            className="cursor-pointer"
            onClick={()=>{setShowModal(false)}}
            />
            </div>

            <form 
            className=" flex  flex-col px-10 pt-0 gap-4 my-0 pb-0" 
            >

            <Input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Nome"

            />

            <Input
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="E-mail"
            
            />

            <Input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Senha"
            
            />
            <Input
            onChange={handleChange}
            name="passwordConfirmation"
            type="password"
            placeholder="Confirmação de senha"
            required
            />


            <div 
            className="w-full flex justify-center items-center "
            >
            <Button
            title="Confirmar"
            type="submit"
            className="w-[238px] h-[46px] "
            />
            </div>
            </form>


    </section>
            

        </main>
    )
}