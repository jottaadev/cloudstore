import Container from "../global/container";
import { SectionBadge } from "../ui/section-bade";
import { CardSpotlight } from "../ui/card-spotlight";
import { SmartphoneIcon, CpuIcon, WifiIcon, HardDriveIcon, LifeBuoyIcon } from "lucide-react";

const Perks = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <SectionBadge title="Recursos" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Sua experiência de jogo perfeita
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Descubra os recursos que tornam nossa plataforma a escolha ideal para gamers que buscam performance e qualidade
                    </p>
                </div>
            </Container>
            <Container>
                <div className="mt-16 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {/* Card 1 - Jogue em qualquer dispositivo */}
                        <CardSpotlight className="h-80 w-full">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-blue-500/20 ring-1 ring-blue-500/30">
                                        <SmartphoneIcon className="w-7 h-7 text-blue-400" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white leading-tight">Jogue em qualquer dispositivo</h4>
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="text-neutral-200 relative z-20">
                                        <p className="text-xs uppercase font-semibold text-blue-400 mb-3 tracking-wider">
                                            Multiplataforma
                                        </p>
                                        <p className="text-neutral-300 leading-relaxed text-sm">
                                            Acesse sua máquina virtual de qualquer lugar, em qualquer dispositivo com conexão à internet.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardSpotlight>

                        {/* Card 2 - Hardware de alto desempenho */}
                        <CardSpotlight className="h-80 w-full">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-emerald-500/20 ring-1 ring-emerald-500/30">
                                        <CpuIcon className="w-7 h-7 text-emerald-400" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white leading-tight">Hardware de alto desempenho</h4>
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="text-neutral-200 relative z-20">
                                        <p className="text-xs uppercase font-semibold text-emerald-400 mb-3 tracking-wider">
                                            Performance
                                        </p>
                                        <p className="text-neutral-300 leading-relaxed text-sm">
                                            Equipamentos de última geração para rodar seus jogos com gráficos impressionantes e alta taxa de quadros.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardSpotlight>

                        {/* Card 3 - Baixa latência */}
                        <CardSpotlight className="h-80 w-full">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-orange-500/20 ring-1 ring-orange-500/30">
                                        <WifiIcon className="w-7 h-7 text-orange-400" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white leading-tight">Baixa latência</h4>
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="text-neutral-200 relative z-20">
                                        <p className="text-xs uppercase font-semibold text-orange-400 mb-3 tracking-wider">
                                            Conectividade
                                        </p>
                                        <p className="text-neutral-300 leading-relaxed text-sm">
                                            Servidores estrategicamente posicionados para garantir a menor latência possível durante suas sessões de jogo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardSpotlight>

                        {/* Card 4 - Armazenamento dedicado */}
                        <CardSpotlight className="h-80 w-full">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-violet-500/20 ring-1 ring-violet-500/30">
                                        <HardDriveIcon className="w-7 h-7 text-violet-400" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white leading-tight">Armazenamento dedicado</h4>
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="text-neutral-200 relative z-20">
                                        <p className="text-xs uppercase font-semibold text-violet-400 mb-3 tracking-wider">
                                            Armazenamento
                                        </p>
                                        <p className="text-neutral-300 leading-relaxed text-sm">
                                            Espaço de armazenamento exclusivo para instalar seus jogos favoritos e salvar seu progresso.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardSpotlight>

                        {/* Card 5 - Suporte 24/7 */}
                        <CardSpotlight className="h-80 w-full">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-teal-500/20 ring-1 ring-teal-500/30">
                                        <LifeBuoyIcon className="w-7 h-7 text-teal-400" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white leading-tight">Suporte 24/7</h4>
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="text-neutral-200 relative z-20">
                                        <p className="text-xs uppercase font-semibold text-teal-400 mb-3 tracking-wider">
                                            Suporte
                                        </p>
                                        <p className="text-neutral-300 leading-relaxed text-sm">
                                            Nossa equipe está disponível 24 horas por dia para ajudar com quaisquer problemas ou dúvidas relacionadas à sua experiência de jogo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardSpotlight>

                        {/* Card 6 - Experiência Premium */}
                        <CardSpotlight className="h-80 w-full">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-rose-500/20 ring-1 ring-rose-500/30">
                                        <LifeBuoyIcon className="w-7 h-7 text-rose-400" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white leading-tight">Experiência Premium</h4>
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="text-neutral-200 relative z-20">
                                        <p className="text-xs uppercase font-semibold text-rose-400 mb-3 tracking-wider">
                                            Qualidade
                                        </p>
                                        <p className="text-neutral-300 leading-relaxed text-sm">
                                            Aproveite uma experiência de jogo premium com recursos exclusivos e qualidade superior.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardSpotlight>
                    </div>
                </div>
            </Container>
        </div>
    )
};


export default Perks
