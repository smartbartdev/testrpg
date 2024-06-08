import Image from "next/image";
import Link from "next/link";
import {LoginButton} from "@/components/login/login-button";

export default function Header() {
    return (
        <header className={"sticky top-0 z-50 w-full"}>
            <div className={"flex items-center justify-between w-full h-14 px-2 md:px-12 bg-blue-500"}>
                <Link href={"/"}><span className={"text-white font-extrabold"}>TestRPG</span></Link>
                <div className={"flex items-center space-x-4"}>
                  <LoginButton />
                </div>
            </div>
        </header>
    )
}