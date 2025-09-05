type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "alfa1",
        title: "Alfa I",
        desc: "1 hora de acesso",
        monthlyPrice: 4.97,
        yearlyPrice: 4.97,
        buttonText: "Comprar Agora",
        features: [
            "450 JOGOS STEAM",
            "SERVIDOR BR",
            "SESSÃO LIMITADA",
            "NÃO SALVA OS ARQUIVOS",
            "CONTÉM SPOT",
            "FILA DE MÁQUINAS",
            "4 NÚCLEOS"
        ],
        link: "#"
    },
    {
        id: "alfa2",
        title: "Alfa II",
        desc: "3 horas de acesso",
        monthlyPrice: 13.97,
        yearlyPrice: 13.97,
        buttonText: "Comprar Agora",
        features: [
            "450 JOGOS STEAM",
            "SERVIDOR BR",
            "SESSÃO LIMITADA",
            "NÃO SALVA OS ARQUIVOS",
            "CONTÉM SPOT",
            "FILA DE MÁQUINAS",
            "4 NÚCLEOS"
        ],
        link: "#"
    },
    {
        id: "alfa3",
        title: "Alfa III",
        desc: "5 horas de acesso",
        monthlyPrice: 19.97,
        yearlyPrice: 19.97,
        buttonText: "Comprar Agora",
        features: [
            "450 JOGOS STEAM",
            "SERVIDOR BR",
            "SESSÃO LIMITADA",
            "NÃO SALVA OS ARQUIVOS",
            "CONTÉM SPOT",
            "FILA DE MÁQUINAS",
            "4 NÚCLEOS"
        ],
        link: "#"
    },
    {
        id: "prime",
        title: "Prime",
        desc: "7 dias de acesso",
        monthlyPrice: 39.97,
        yearlyPrice: 39.97,
        badge: "COM SALVAMENTO (FILA)",
        buttonText: "Comprar Agora",
        features: [
            "450 JOGOS STEAM",
            "SERVIDOR BR",
            "SESSÃO LIMITADA",
            "SALVA OS ARQUIVOS",
            "CONTÉM SPOT",
            "FILA DE MÁQUINAS",
            "4 NÚCLEOS"
        ],
        link: "#"
    },
    {
        id: "plus",
        title: "Plus",
        desc: "15 dias de acesso",
        monthlyPrice: 49.97,
        yearlyPrice: 49.97,
        badge: "COM SALVAMENTO (FILA)",
        buttonText: "Comprar Agora",
        features: [
            "450 JOGOS STEAM",
            "SERVIDOR BR",
            "SESSÃO LIMITADA",
            "SALVA OS ARQUIVOS",
            "CONTÉM SPOT",
            "FILA DE MÁQUINAS",
            "4 NÚCLEOS"
        ],
        link: "#"
    },
    {
        id: "elite",
        title: "Elite",
        desc: "30 dias de acesso",
        monthlyPrice: 54.97,
        yearlyPrice: 54.97,
        badge: "COM SALVAMENTO (FILA)",
        buttonText: "Comprar Agora",
        features: [
            "450 JOGOS STEAM",
            "SERVIDOR BR",
            "SESSÃO LIMITADA",
            "SALVA OS ARQUIVOS",
            "CONTÉM SPOT",
            "FILA DE MÁQUINAS",
            "4 NÚCLEOS"
        ],
        link: "#"
    },
    {
        id: "independent1",
        title: "Independent I",
        desc: "30 dias de acesso",
        monthlyPrice: 129.97,
        yearlyPrice: 129.97,
        badge: "Máquina Própria",
        buttonText: "Comprar Agora",
        features: [
            "450 JOGOS STEAM",
            "SERVIDOR BR",
            "SESSÃO ILIMITADA",
            "SALVA OS ARQUIVOS",
            "CONTÉM SPOT",
            "SEM FILA",
            "4 NÚCLEOS"
        ],
        link: "#"
    },
    {
        id: "independent2",
        title: "Independent II",
        desc: "7 dias de acesso",
        monthlyPrice: 69.97,
        yearlyPrice: 69.97,
        badge: "Máquina Própria",
        buttonText: "Comprar Agora",
        features: [
            "450 JOGOS STEAM",
            "SERVIDOR BR",
            "SESSÃO ILIMITADA",
            "SALVA OS ARQUIVOS",
            "CONTÉM SPOT",
            "SEM FILA",
            "4 NÚCLEOS"
        ],
        link: "#"
    },
    {
        id: "independent3",
        title: "Independent III",
        desc: "15 dias de acesso",
        monthlyPrice: 99.97,
        yearlyPrice: 99.97,
        badge: "Máquina Própria",
        buttonText: "Comprar Agora",
        features: [
            "450 JOGOS STEAM",
            "SERVIDOR BR",
            "SESSÃO ILIMITADA",
            "SALVA OS ARQUIVOS",
            "CONTÉM SPOT",
            "SEM FILA",
            "4 NÚCLEOS"
        ],
        link: "#"
    }
];
