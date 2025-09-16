"use client";

import { PLANS } from "@/constants";
import { cn } from "@/functions";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import NumberTicker from "../ui/number-ticker";
import { SectionBadge } from "../ui/section-bade";
import { CardSpotlight } from "../ui/card-spotlight";


const PlanCard = ({
    id,
    title,
    desc,
    monthlyPrice,
    yearlyPrice,
    buttonText,
    features,
    index,
    badge,
}: {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    buttonText: string;
    features: string[];
    index: number;
    badge?: string;
}) => {

    const displayedPrice = monthlyPrice === 0 ? 0 : monthlyPrice;

    return (
        <CardSpotlight className="w-full h-full min-h-[500px]">
            <div
                className={cn(
                    "flex flex-col size-full relative p-6 justify-between min-h-[500px]",
                    id === "pro" ? "border-primary/80" : "border-border/60",
                )}
            >
                    {badge && (
                        <div className="max-w-fit min-w-min inline-flex items-center whitespace-nowrap px-1 h-7 rounded-full bg-gradient-to-r from-primary to-violet-500 absolute -top-3 left-1/2 -translate-x-1/2 select-none">
                            <span className="flex-1 text-sm px-2 font-medium bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent bg-[length:250%_100%] animate-background-shine">
                                {badge}
                            </span>
                        </div>
                    )}
                    <div className="flex flex-col w-full">
                        <h2 className="text-xl font-medium">
                            {title}
                        </h2>
                        <p className="text-sm mt-2 text-muted-foreground break-words">
                            {desc}
                        </p>
                    </div>
                    <hr className="shrink-0 border-none w-full h-px bg-border my-4" role="separator" />
                    <div className="relative flex flex-col flex-1 w-full break-words text-left gap-4">
                        <div className="flex items-end gap-2 mb-4">
                            <div className="flex items-end gap-1">
                                <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
                                    R${displayedPrice === 0 ? 0 : <NumberTicker value={displayedPrice} />}
                                </span>
                                <span className="text-sm sm:text-lg text-muted-foreground font-medium">
                                    / hora
                                </span>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-2">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <CheckIcon aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
                                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                                        {feature}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-6 w-full">
                        <Button
                            asChild
                            variant="default"
                            className="w-full hover:scale-100 hover:translate-y-0 shadow-none bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                        >
                            <Link href={""}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9M17 19a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                                {buttonText}
                            </Link>
                        </Button>
                    </div>
            </div>
        </CardSpotlight>
    )
};


const Pricing = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative px-4 sm:px-6 lg:px-8">
            <Container>
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <SectionBadge title="Escolha o seu plano" />
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 px-4">
                        Preços simples e transparentes
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-center text-accent-foreground/80 mt-6 max-w-2xl">
                        Escolha o plano que atenda às suas necessidades. Sem taxas ocultas, sem surpresas.
                    </p>
                </div>
            </Container>
            <div className="mt-8 w-full relative flex flex-col items-center justify-center">
                <div className="absolute hidden lg:block top-1/2 right-2/3 translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-primary/15 blur-[10rem] -z-10"></div>
                <div className="absolute hidden lg:block top-1/2 left-2/3 -translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-violet-500/15 blur-[10rem] -z-10"></div>
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mt-10 sm:mt-14 px-4 sm:px-0">
                        {PLANS.slice(0,3).map((plan, index) => (
                            <PlanCard
                                key={index}
                                index={index}
                                {...plan}
                            />
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default Pricing
