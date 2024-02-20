'use client'
import { useState } from "react";
import ModalUpdate from "@/app/components/ModalUpdate/ModalUpdate";
import Logo from "../../../assets/logo.svg";
import UserLogo from "../../../assets/userLogo.svg";
import LogoutIcon from "../../../assets/logoutIcon.svg";
import ImageIlustrate from "../../../assets/imageIlustrate.svg";

export default function Dashboard(){
    const[showModal, setShowModal] = useState<boolean>(false);

    return(
        
    <main className="w-full h-[1024px] bg-white  box-border ">
        <header className="flex justify-between items-center px-16 w-full h-36  gradient-custom  px-24">
            <img 
            className="mb-14" 
            src={Logo} 
            alt= "Logo with the outline of a hexagon with a white line inside and a dark blue line outside, accompanied by the word Dindin"
            />
            
            <div className="flex justify-between gap-1 items-center mb-14">
                <img 
                src={UserLogo} 
                alt="Image of user logotype" 
                className="cursor-pointer"
                onClick={()=>{setShowModal(!showModal)}}
                />

                <p className="mr-2">name</p>

                <img 
                src={LogoutIcon} 
                alt="Icon logout" 
                className="cursor-pointer"
                />

            </div>

        </header>

        <section className="flex w-full justify-center  my-16 ">
            
            <img className="flex justify-center w-[986px] h-[336px] "
            src={ImageIlustrate} 
            alt="illustrative picture"
            />

        </section>

        {showModal && <ModalUpdate setShowModal={setShowModal}/>}

    </main>

    )

}