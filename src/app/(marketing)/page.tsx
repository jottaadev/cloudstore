import { Container, CTA, Hero, Perks, Pricing, Reviews, Wrapper } from "@/components";
import { SpotlightNew } from "@/components/ui/spotlight-new";
import RetroGrid from "@/components/ui/retro-grid";

const HomePage = () => {
    return (
        <main className="relative min-h-screen bg-background">
            {/* Background: Retro grid + soft gradients (replaces particle background) */}
            <div className="absolute inset-0 -z-10">
                <RetroGrid className="opacity-[0.25]" angle={62} />
                <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/25 blur-[140px] opacity-50" />
                <div className="absolute bottom-[-200px] right-[-100px] w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[160px] opacity-50" />
            </div>
            
            
            <Wrapper className="py-20 relative z-20">
                <Container className="relative">
                    <Hero />
                </Container>
                
                <Perks />
                <Pricing />
                <Reviews />
                <CTA />
            </Wrapper>
        </main>
    )
};

export default HomePage
