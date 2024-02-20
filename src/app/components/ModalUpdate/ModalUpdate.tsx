import Input from "@/app/components/Input/Input";
import Button from '@/app/components/Button/Button';
import CloseIcon from "../../../assets/closeIcon.svg";
import { useState, ChangeEvent, FormEvent } from "react"; 
import UpdateValidation from "@/formsValidation/UpdateValidator";





export default function ModalUpdate({setShowModal}:ChildProps){



    const [dataUpdate, setDataUpdate] = useState<UpdateFormTypes>({
        name:'',
        email:'',
        password:'',
        passwordConfirmation: ''
    })
    
    const { name, email, password, passwordConfirmation } = dataUpdate;

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

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const formattedName = name.trim();
        const lowerCaseEmail = email.toLowerCase().trim();

        try {
            const validation = await UpdateValidation(
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
        } catch (error) {
            console.error(error);
        }
    };


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
            onSubmit={handleSubmit}
            >

            <Input
            onChange={handleChange}
            name="name"
            value={name}
            type="text"
            placeholder="Nome"
            />
            {errors.name && (
            <p className="flex self-start  font-secondary text-[16px] font-normal text-red-500 leading-[1.2rem]">
                {errors.name}
            </p>
            )}
            <Input
            onChange={handleChange}
            name="email"
            value={email}
            type="text"
            placeholder="E-mail"
            />
            {errors.email && (
            <p className="flex self-start  font-secondary text-[16px] font-normal text-red-500 leading-[1.2rem]">
                {errors.email}
            </p>
            )}
            <Input
            onChange={handleChange}
            name="password"
            value={password}
            type="password"
            placeholder="Senha"
            />
            {errors.password && (
            <p className="flex self-start font-secondary text-[16px] font-normal text-red-500 leading-[1.2rem]">
                {errors.password}
            </p>
            )}
            <Input
            onChange={handleChange}
            name="passwordConfirmation"
            value={passwordConfirmation}
            type="password"
            placeholder="Confirmação de senha"
            
            />
            {errors.passwordConfirmation && (
            <p className="flex self-start font-secondary text-[16px] font-normal text-red-500 leading-[1.2rem]">
                {errors.passwordConfirmation}
            </p>
            )}


            <div 
            className="w-full flex justify-center items-center pt-5"
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