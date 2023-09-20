import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <section className={"text-center max-w-lg space-y-3"}>
                <h1 className={"text-3xl md:text-5xl tracking-tight font-extrabold bg-gradient-to-tr from-blue-400 to-blue-800 bg-clip-text text-transparent"}>TestRPG</h1>

                <p className={"text-muted-foreground text-lg max-w-[540px]"}>TestRPG is a simple &apos;game&apos; meant to be automated through a Test Automation framework </p>
                <Link href={"/play"} legacyBehavior passHref>
                    <Button>Click here to play</Button>
                </Link>
            </section>
        </main>
    )
}