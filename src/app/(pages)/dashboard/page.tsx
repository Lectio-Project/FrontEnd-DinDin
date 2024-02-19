import Logo from "../../../assets/logo.svg";
import UserLogo from "../../../assets/userLogo.svg";
import LogoutIcon from "../../../assets/logoutIcon.svg";

export default function Dashboard(){

    return(
        
    <main className="w-screen h-screen bg-white">
        <header className="flex justify-between items-center px-16 w-screen h-36 -top-8 gradient-custom">
            <img src={Logo} alt= "Logo with the outline of a hexagon with a white line inside and a dark blue line outside, accompanied by the word Dindin"/>
            
            <div className="flex justify-between gap-1 items-center ">
                <img src={UserLogo} alt="Image of user logotype"/>
                <p className="mr-2">name</p>
                <img src={LogoutIcon} alt="Icon logout" className="cursor-pointer"/>
            </div>

        </header>

        <section>

        </section>

    </main>

    )

}