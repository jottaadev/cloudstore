import React from 'react';
import { Navbar, Footer } from "@/components";
import { SpotlightNew } from "@/components/ui/spotlight-new";

interface Props {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <SpotlightNew className="absolute inset-0" translateY={-300} width={720} height={1600} smallWidth={320} duration={10} xOffset={140} />
                <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-blue-500/15 blur-[160px]" />
                <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-cyan-500/10 blur-[140px]" />
                <div className="absolute -bottom-48 -left-28 w-[520px] h-[520px] rounded-full bg-blue-600/10 blur-[140px]" />
                <div className="absolute -bottom-56 -right-24 w-[680px] h-[680px] rounded-full bg-indigo-500/10 blur-[160px]" />
            </div>
            <main className="mx-auto w-full z-40 relative">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default MarketingLayout
