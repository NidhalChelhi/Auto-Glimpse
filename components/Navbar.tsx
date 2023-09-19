import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "./";

const Navbar = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between item-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                    <Image
                        src="/logo/logo.png"
                        alt="Car Hub Logo"
                        width={72}
                        height={72}
                        className="object-contain"
                    />
                </Link>
                {/* <CustomButton
                    title="Sign In"
                    containerStyles="text-white  bg-blue-500 font-semibold rounded-full bg-white min-w-[130px]"
                    btnType="button"
                /> */}
            </nav>
        </header>
    );
};

export default Navbar;
