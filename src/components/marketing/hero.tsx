import { ArrowRightIcon, HelpCircleIcon } from "lucide-react";
import Link from "next/link";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../global/container";

const Hero = () => {
    return (
        <div className="relative w-full min-h-[100svh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
            {/* Spotlight lateral esquerdo */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[600px] sm:h-[800px] bg-gradient-radial from-blue-600/15 via-blue-600/8 to-transparent rounded-full blur-3xl opacity-60 -z-10" />
            
            {/* Spotlight lateral direito */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[600px] sm:h-[800px] bg-gradient-radial from-purple-600/15 via-purple-600/8 to-transparent rounded-full blur-3xl opacity-60 -z-10" />
            
            <div className="flex flex-col items-center text-center w-full max-w-5xl my-8 sm:my-12 mx-auto z-40 relative">
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
                        ZyexCloud
                    </span>
                </div>
            </Container>
            <BlurText
                word="O futuro da sua experiência na nuvem começa agora."
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium tracking-[-0.0125em] mt-6 font-heading"
            />
            <Container delay={0.1}>
                <p className="text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 text-accent-foreground/60 max-w-2xl mx-auto px-4">
                    Da performance extrema à segurança avançada, cada detalhe da nossa infraestrutura foi projetado para capacitar você a transformar qualquer desafio em uma oportunidade de criar algo extraordinário.
                </p>
            </Container>
            <Container delay={0.2}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 w-full max-w-lg mx-auto px-4">
                    <Button asChild size="lg" className="w-full sm:w-auto flex bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 border-0 transition-all duration-200 hover:scale-[1.02] hover:shadow-blue-600/40 min-h-[48px]">
                        <Link href="/app">
                            <span>Começar agora</span>
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="w-full sm:w-auto flex bg-transparent hover:bg-white/5 text-white border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] min-h-[48px]">
                        <Link href="#">
                            <span>Saiba mais</span>
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
