"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/functions/cn"
import { satoshi } from "@/constants"

const Menu = () => {
    return (
        <nav className={cn("flex items-center space-x-2 md:space-x-4", satoshi.className)}>
            {/* Início */}
            <Link href="/" className="group relative px-3 py-2 rounded-[10px]">
                <span className="relative z-10 text-[15px] md:text-[16px] font-semibold text-foreground transition-colors duration-200 group-hover:text-white">
                    Início
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5" />
            </Link>

            {/* Assinatura */}
            <Link href="/pricing" className="group relative px-3 py-2 rounded-[10px]">
                <span className="relative z-10 text-[15px] md:text-[16px] font-semibold text-foreground transition-colors duration-200 group-hover:text-white">
                    Assinatura
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5" />
            </Link>

            {/* Discord */}
            <Link href="https://discord.com/invite/your-discord-invite" target="_blank" rel="noopener noreferrer" className="group relative px-3 py-2 rounded-[10px]">
                <span className="relative z-10 text-[15px] md:text-[16px] font-semibold text-foreground transition-colors duration-200 group-hover:text-white">
                    Discord
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5" />
            </Link>

            {/* FAQ */}
            <Link href="/faq" className="group relative px-3 py-2 rounded-[10px]">
                <span className="relative z-10 text-[15px] md:text-[16px] font-semibold text-foreground transition-colors duration-200 group-hover:text-white">
                    FAQ
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5" />
            </Link>
        </nav>
    )
};

export default Menu;