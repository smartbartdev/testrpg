import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {cn} from "@/lib/utils";
import Header from "@/components/layout/header";
import {ReactNode} from "react";

const font = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'TestRPG',
    metadataBase: new URL('https://test-rpg.vercel.app'),
    description: 'Create a character and level it up by controlling the ui',
}

export default function RootLayout({children}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body className={cn("w-full bg-background antialiased", font.className)}>
        <div className={"w-full relative flex flex-col pb-12"}>
            <Header/>
            <main className="flex flex-col items-center justify-between py-4 px-2 md:px-12 lg:px-24">
                <div className='relative isolate w-full'>
                    <div
                        aria-hidden='true'
                        className='pointer-events-none absolute inset-x-0 top-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-20 left-1/4'>
                        <div
                            style={{
                                clipPath:
                                    'polygon(17% 12%, 8% 11%, 0% 11%, 0% 20%, 0% 33%, 11% 35%, 17% 42%, 19% 50%, 12% 53%, 12% 62%, 10% 74%, 4% 78%, 4% 83%, 4% 99%, 18% 99%, 30% 95%, 31% 81%, 48% 73%, 63% 72%, 66% 80%, 67% 87%, 74% 93%, 83% 97%, 95% 96%, 99% 87%, 94% 74%, 86% 57%, 71% 42%, 78% 26%, 86% 15%, 95% 8%, 98% 4%, 94% 1%, 77% 0%, 67% 8%, 60% 22%, 49% 19%, 30% 18%)',
                            }}
                            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[10deg] bg-gradient-to-tr from-blue-800 to-blue-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                        />
                    </div>
                    <div className={"mt-10 sm:mt-20 md:mt-40 flex flex-col items-center"}>
                        {children}
                    </div>
                </div>
            </main>
        </div>
        </body>
        </html>
    )
}
