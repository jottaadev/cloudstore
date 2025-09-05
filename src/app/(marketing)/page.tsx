import { Container, CTA, Hero, Perks, Pricing, Reviews, Wrapper } from "@/components";
import { SpotlightNew } from "@/components/ui/spotlight-new";
import { SpaceParticles } from "@/components/ui/space-particles";

const HomePage = () => {
    return (
        <main className="relative min-h-screen bg-background">
            {/* Space Particles Background */}
            <SpaceParticles 
                className="absolute inset-0"
                particleCount={400}
                speed={0.2}
                color="#ffffff"
            />
            
            <SpotlightNew 
                className="absolute inset-0 -top-40 z-10"
                gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .12) 0, hsla(210, 100%, 55%, .04) 50%, hsla(210, 100%, 45%, 0) 80%)"
                gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .03) 80%, transparent 100%)"
                gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)"
                translateY={-200}
                width={600}
                height={1200}
                smallWidth={280}
                duration={8}
                xOffset={120}
            />
            
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
