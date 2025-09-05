import { ArrowRightIcon, HelpCircleIcon } from "lucide-react";
import Link from "next/link";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../global/container";

const Hero = () => {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center text-center w-full max-w-5xl my-12 mx-auto z-40 relative">
                <Container delay={0.0}>
                <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
                    <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping"></div>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        </div>
                    </div>
                    <span className="inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#93c5fd] bg-[200%_auto] bg-clip-text text-sm text-transparent px-3 py-1">
                        Dark Cloud Store
                    </span>
                </div>
            </Container>
            <BlurText
                word="O futuro da sua experiência na nuvem começa agora."
                className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium racking-[-0.0125em] mt-6 font-heading"
            />
            <Container delay={0.1}>
                <p className="text-sm sm:text-base lg:text-lg mt-4 text-accent-foreground/60 max-w-2xl mx-auto">Da performance extrema à segurança avançada, cada detalhe da nossa infraestrutura foi projetado para capacitar você a transformar qualquer desafio em uma oportunidade de criar algo extraordinário.

                </p>
            </Container>
            <Container delay={0.2}>
                <div className="flex items-center justify-center md:gap-x-6 mt-8">
                    <Button asChild size="lg" variant="outline" className="flex">
                        <Link href="/app">
                            <span>Começar agora</span>
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="hidden md:flex">
                        <Link href="#">
                            <span>Como funciona</span>
                            <HelpCircleIcon className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </Container>
            </div>
        </div>
    )
};

export default Hero
