"use client";

import { cn } from "@/functions";
import { useClickOutside } from "@/hooks";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Home, CreditCard, MessageCircle, HelpCircle } from "lucide-react";
import Link from "next/link";
import React from 'react';

interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: Props) => {
    const ref = useClickOutside(() => setIsOpen(false));

    const containerVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        },
        exit: { 
            opacity: 0, 
            y: -20,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };

    const menuItems = [
        {
            title: "Início",
            href: "/",
            icon: <Home className="w-4 h-4" />
        },
        {
            title: "Assinatura",
            href: "/pricing",
            icon: <CreditCard className="w-4 h-4" />
        },
        {
            title: "Discord",
            href: "https://discord.com/invite/your-discord-invite",
            icon: <MessageCircle className="w-4 h-4" />
        },
        {
            title: "FAQ",
            href: "/faq",
            icon: <HelpCircle className="w-4 h-4" />
        }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={containerVariants}
                    className="w-full mt-6 flex flex-col flex-1 lg:hidden"
                >
                    <div className="w-full flex flex-col justify-start">
                        {/* Main Menu Items */}
                        <motion.ul variants={containerVariants} className="flex flex-col items-start w-full space-y-1">
                            {menuItems.map((item, index) => (
                                <motion.li
                                    key={item.title}
                                    variants={itemVariants}
                                    onClick={() => setIsOpen(false)}
                                    className="w-full"
                                >
                                    <Link 
                                        href={item.href} 
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="flex items-center w-full px-4 py-4 text-base font-medium transition-all duration-200 rounded-xl cursor-pointer text-white/80 hover:text-white hover:bg-white/10 active:scale-[0.98] border border-transparent hover:border-white/20"
                                    >
                                        <span className="text-blue-400 mr-3">{item.icon}</span>
                                        <span>{item.title}</span>
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                        
                        {/* Mobile Login Button */}
                        <motion.div 
                            variants={itemVariants}
                            className="mt-6 w-full"
                        >
                            <Link 
                                href="#" 
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center w-full px-4 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-blue-600/25"
                            >
                                Entrar no Discord
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
