import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {cn} from "@/lib/utils";
import Header from "@/components/layout/header";
import {ReactNode} from "react";

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TestRPG',
  description: 'Create a character and level it up by controlling the ui',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("w-full bg-background antialiased", font.className)}>
        <div className={"w-full relative flex flex-col"}>
          <Header />
          <main className="flex flex-col items-center justify-between py-4 px-2 md:px-12 lg:px-24">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
