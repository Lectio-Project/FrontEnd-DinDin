import Logo from "../../../assets/logo.svg";
import UserLogo from "../../../assets/userLogo.svg";
import LogoutIcon from "../../../assets/logoutIcon.svg";
import ImageIlustrate from "../../../assets/imageIlustrate.svg";

export default function Dashboard(){

    return(
        
    <main className="w-screen h-screen bg-white">
        <header className="flex justify-between items-center px-16 w-screen h-36  gradient-custom">
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
                />

                <p className="mr-2">name</p>

                <img 
                src={LogoutIcon} 
                alt="Icon logout" 
                className="cursor-pointer"
                />

            </div>

        </header>

        <section className="flex w-full justify-center  my-16">
            
            <img 
            src={ImageIlustrate} 
            alt="illustrative picture"
            />

        </section>

    </main>

    )

}