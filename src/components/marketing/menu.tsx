"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/functions/cn"

const Menu = () => {
    return (
        <nav className="flex items-center space-x-8">
            {/* Início */}
            <Link href="/" className="group relative">
                <span className="text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary">
                    Início
                </span>
            </Link>

            {/* Assinatura */}
            <Link href="/pricing" className="group relative">
                <span className="text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary">
                    Assinatura
                </span>
            </Link>

            {/* Discord */}
            <Link href="https://discord.com/invite/your-discord-invite" target="_blank" rel="noopener noreferrer" className="group relative">
                <span className="text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary">
                    Discord
                </span>
            </Link>

            {/* FAQ */}
            <Link href="/faq" className="group relative">
                <span className="text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary">
                    FAQ
                </span>
            </Link>
        </nav>
    )
};

export default Menu;