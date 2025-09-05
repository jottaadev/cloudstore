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
                    className="absolute top-12 inset-x-0 size-full p-4 z-20 bg-inherit flex flex-1"
                >
                    <div className="size-full flex flex-col justify-start">
                        {/* Main Menu Items */}
                        <motion.ul variants={containerVariants} className="flex flex-col items-start flex-1 w-full space-y-2">
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
                                        className="flex items-center w-full px-4 py-3 text-lg hover:text-muted-foreground font-normal transition-all duration-200 rounded-lg cursor-pointer text-foreground hover:bg-muted/20 active:scale-95"
                                    >
                                        {item.icon}
                                        <span className="ml-3">{item.title}</span>
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
