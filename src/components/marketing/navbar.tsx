"use client";

import { cn } from "@/functions";
import { XIcon, Menu as MenuIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from 'react';
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import Image from "next/image";
import Icons from "../global/icons";
import Menu from "./menu";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative w-full h-full">
            <div className="z-[99] fixed pointer-events-none inset-x-0 h-[128px] bg-[rgba(10,10,10,0.85)] backdrop-blur-md [mask:linear-gradient(to_bottom,#000_25%,transparent_calc(100%-25%))]"></div>

            <header
                className={cn(
                    "fixed top-6 inset-x-0 mx-auto max-w-6xl px-4 md:px-12 z-[100] transition-all duration-300 ease-in-out",
                    isOpen ? "h-[calc(100%-24px)]" : "h-20",
                    isScrolled ? "top-4" : "top-6"
                )}
            >
                <Wrapper className={cn(
                    "backdrop-blur-2xl rounded-lg lg:rounded-xl border px-6 md:px-8 py-2 flex items-center justify-between transition-all duration-300 ease-in-out",
                    "border-[rgba(124,124,124,0.2)] hover:border-[rgba(124,124,124,0.4)]",
                    isScrolled ? "shadow-xl shadow-black/30" : "shadow-lg shadow-black/20"
                )}>
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link 
                            href="/" 
                            className="transition-transform duration-200 hover:scale-105"
                        >
                            <Image
                                src="/images/DARK_CLOUD.png"
                                alt="DARKCLOUD STORE"
                                width={160}
                                height={48}
                                className="h-10 w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Menu Centralizado */}
                    <div className="hidden lg:flex items-center justify-center flex-1">
                        <Menu />
                    </div>

                    {/* Botão de Entrar e Menu Mobile */}
                    <div className="flex items-center gap-3">
                        <Link href="#" className='hidden lg:flex'>
                            <Button className={cn(
                                'bg-blue-600 text-white hover:bg-blue-700',
                                'flex items-center gap-2 transition-all duration-200 ease-in-out',
                                'hover:scale-[1.02] shadow-sm',
                                'px-6 py-2 rounded-xl font-medium'
                            )}>
                                <Icons.discord className="w-4 h-4" />
                                Entrar
                            </Button>
                        </Link>
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => setIsOpen((prev) => !prev)}
                            className={cn(
                                "lg:hidden p-2 w-8 h-8 transition-all duration-200 ease-in-out",
                                "hover:bg-accent/50",
                                isOpen && "bg-accent/50"
                            )}
                        >
                            {isOpen ? (
                                <XIcon className="w-4 h-4 transition-transform duration-200" />
                            ) : (
                                <MenuIcon className="w-4 h-4 transition-transform duration-200" />
                            )}
                        </Button>
                    </div>

                    <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
                </Wrapper>
            </header>
        </div>
    )
};

export default Navbar
