import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className={"sticky top-0 z-50 w-full"}>
            <div className={"flex items-center justify-between w-full h-14 px-2 md:px-12 bg-blue-500"}>
                <Link href={"/"}><span className={"text-white font-extrabold"}>TestRPG</span></Link>
                <Link href={"https://www.testcoders.nl/"} target={"_blank"}><Image src={"/testcoders.svg"} width={80} height={80} alt={"TestCoders logo"}/></Link>
            </div>
        </header>
    )
}