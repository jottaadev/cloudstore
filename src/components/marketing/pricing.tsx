"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PLANS, RENEWALS } from "@/constants";
import { cn } from "@/functions";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import NumberTicker from "../ui/number-ticker";
import { SectionBadge } from "../ui/section-bade";
import { CardSpotlight } from "../ui/card-spotlight";

type Plan = "plans" | "renewals";

const PlanCard = ({
    id,
    title,
    desc,
    monthlyPrice,
    yearlyPrice,
    buttonText,
    features,
    index,
    plan,
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
    plan: Plan;
    badge?: string;
}) => {

    const getDisplayedPrice = (plan: string, monthlyPrice: number, yearlyPrice: number) => {
        if (plan === "plans") {
            return monthlyPrice === 0 ? 0 : monthlyPrice;
        } else if (plan === "renewals") {
            const discountedPrice = Math.round((yearlyPrice * 0.8) / 12);
            return yearlyPrice === 0 ? 0 : discountedPrice;
        }
        return 0;
    };

    const displayedPrice = getDisplayedPrice(plan, monthlyPrice, yearlyPrice);

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
                                <span className="text-3xl md:text-4xl font-bold">
                                    R${displayedPrice === 0 ? 0 : <NumberTicker value={displayedPrice} />}
                                </span>
                                <span className="text-lg text-muted-foreground font-medium">
                                    / hora
                                </span>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-2">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <CheckIcon aria-hidden="true" className="w-5 h-5 text-primary" />
                                    <p className="text-sm md:text-base text-muted-foreground">
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
                            className="w-full hover:scale-100 hover:translate-y-0 shadow-none"
                        >
                            <Link href={""}>
                                {buttonText}
                            </Link>
                        </Button>
                    </div>
            </div>
        </CardSpotlight>
    )
};

const RenewalCard = ({
    id,
    title,
    desc,
    price,
    duration,
    buttonText,
    features,
    index,
    badge,
}: {
    id: string;
    title: string;
    desc: string;
    price: number;
    duration: string;
    buttonText: string;
    features: string[];
    index: number;
    badge?: string;
}) => {
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
                                <span className="text-3xl md:text-4xl font-bold">
                                    R${price === 0 ? 0 : <NumberTicker value={price} />}
                                </span>
                                <span className="text-lg text-muted-foreground font-medium">
                                    / {duration}
                                </span>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-2">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <CheckIcon aria-hidden="true" className="w-5 h-5 text-primary" />
                                    <p className="text-sm md:text-base text-muted-foreground">
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
                            className="w-full hover:scale-100 hover:translate-y-0 shadow-none"
                        >
                            <Link href={""}>
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
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24  w-full relative">
            <Container>
                <div className="flex flex-col items-center text-center max-w-xl mx-auto">
                    <SectionBadge title="Escolha o seu plano" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Preços simples e transparentes
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Escolha o plano que atenda às suas necessidades. Sem taxas ocultas, sem surpresas.
                    </p>
                </div>
            </Container>
            <div className="mt-8 w-full relative flex flex-col items-center justify-center">
                <div className="absolute hidden lg:block top-1/2 right-2/3 translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-primary/15 blur-[10rem] -z-10"></div>
                <div className="absolute hidden lg:block top-1/2 left-2/3 -translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-violet-500/15 blur-[10rem] -z-10"></div>
                <Container>
                    <Tabs defaultValue="plans" className="w-full flex flex-col items-center justify-center">
                        <TabsList className="grid w-full max-w-md grid-cols-2 bg-muted/50 p-1 rounded-lg">
                            <TabsTrigger 
                                value="plans"
                                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm transition-all duration-200"
                            >
                                Planos
                            </TabsTrigger>
                            <TabsTrigger 
                                value="renewals"
                                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm transition-all duration-200"
                            >
                                Renovações
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="plans">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-14">
                                {PLANS.map((plan, index) => (
                                    <PlanCard
                                        key={index}
                                        index={index}
                                        {...plan}
                                        plan="plans"
                                    />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="renewals">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-14">
                                {RENEWALS.map((renewal, index) => (
                                    <RenewalCard
                                        key={index}
                                        index={index}
                                        {...renewal}
                                    />
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </Container>
            </div>
        </div>
    )
};

export default Pricing
