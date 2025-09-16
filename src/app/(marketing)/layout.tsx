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
            <div className="absolute inset-0 -z-10">
                <SpotlightNew className="absolute inset-0" translateY={-280} width={680} height={1400} smallWidth={280} duration={9} xOffset={130} />
            </div>
            <main className="mx-auto w-full z-40 relative">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default MarketingLayout
