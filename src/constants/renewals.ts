type RENEWAL = {
    id: string;
    title: string;
    desc: string;
    price: number;
    duration: string;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const RENEWALS: RENEWAL[] = [
    {
        id: "alfa1",
        title: "Renovação Alfa I",
        desc: "1 hora de acesso",
        price: 4.97,
        duration: "1 hora",
        buttonText: "Renovar Plano",
        features: [
            "450 JOGOS STEAM",
            "SERVIDOR BR",
            "SESSÃO LIMITADA",
            "SEM SALVAMENTO DE ARQUIVOS",
            "SPOT ALEATORIO",
            "SUJEITO A FILA",
            "4/16 NÚCLEOS"
        ],
        link: "#"
    },
    {
        id: "alfa2",
        title: "Renovação Alfa II",
        desc: "3 horas de acesso",
        price: 13.97,
        duration: "3 horas",
        buttonText: "Renovar Plano",
        features: [
            "450 JOGOS STEAM",
            "SERVIDOR BR",
            "SESSÃO LIMITADA",
            "SEM SALVAMENTO DE ARQUIVOS",
            "SPOT ALEATORIO",
            "SUJEITO A FILA",
            "4/16 NÚCLEOS"
        ],
        link: "#"
    },
    {
        id: "alfa3",
        title: "Renovação Alfa III",
        desc: "5 horas de acesso",
        price: 19.97,
        duration: "5 horas",
        buttonText: "Renovar Plano",
        features: [
            "450 JOGOS STEAM",
            "SERVIDOR BR",
            "SESSÃO LIMITADA",
            "SEM SALVAMENTO DE ARQUIVOS",
            "SPOT ALEATORIO",
            "SUJEITO A FILA",
            "4/16 NÚCLEOS"
        ],
        link: "#"
    },
    {
        id: "prime",
        title: "Renovação Prime",
        desc: "7 dias de acesso",
        price: 39.97,
        duration: "7 dias",
        badge: "COM SALVAMENTO (FILA)",
        buttonText: "Renovar Plano",
        features: [
            "450 JOGOS STEAM",
            "SERVIDOR BR",
            "SESSÃO LIMITADA",
            "COM SALVAMENTO DE ARQUIVOS",
            "SPOT ALEATORIO",
            "SUJEITO A FILA",
            "4/16 NÚCLEOS"
        ],
        link: "#"
    },
    {
        id: "plus",
        title: "Renovação Plus",
        desc: "15 dias de acesso",
        price: 49.97,
        duration: "15 dias",
        badge: "COM SALVAMENTO (FILA)",
        buttonText: "Renovar Plano",
        features: [
            "450 JOGOS STEAM",
            "SERVIDOR BR",
            "SESSÃO LIMITADA",
            "COM SALVAMENTO DE ARQUIVOS",
            "SPOT ALEATORIO",
            "SUJEITO A FILA",
            "4/16 NÚCLEOS"
        ],
        link: "#"
    },
    {
        id: "elite",
        title: "Renovação Elite",
        desc: "30 dias de acesso",
        price: 54.97,
        duration: "30 dias",
        badge: "COM SALVAMENTO (FILA)",
        buttonText: "Renovar Plano",
        features: [
            "450 JOGOS STEAM",
            "SERVIDOR BR",
            "SESSÃO LIMITADA",
            "COM SALVAMENTO DE ARQUIVOS",
            "SPOT ALEATORIO",
            "SUJEITO A FILA",
            "4/16 NÚCLEOS"
        ],
        link: "#"
    },
    {
        id: "independent1",
        title: "Renovação Independent I",
        desc: "30 dias de acesso",
        price: 129.97,
        duration: "30 dias",
        badge: "Máquina Própria",
        buttonText: "Renovar Plano",
        features: [
            "450 JOGOS STEAM",
            "SERVIDOR BR",
            "SESSÃO ILIMITADA",
            "COM SALVAMENTO DE ARQUIVOS",
            "SPOT ALEATORIO",
            "SEM FILA",
            "4/16 NÚCLEOS"
        ],
        link: "#"
    },
    {
        id: "independent2",
        title: "Renovação Independent II",
        desc: "7 dias de acesso",
        price: 69.97,
        duration: "7 dias",
        badge: "Máquina Própria",
        buttonText: "Renovar Plano",
        features: [
            "450 JOGOS STEAM",
            "SERVIDOR BR",
            "SESSÃO ILIMITADA",
            "COM SALVAMENTO DE ARQUIVOS",
            "SPOT ALEATORIO",
            "SEM FILA",
            "4/16 NÚCLEOS"
        ],
        link: "#"
    },
    {
        id: "independent3",
        title: "Renovação Independent III",
        desc: "15 dias de acesso",
        price: 99.97,
        duration: "15 dias",
        badge: "Máquina Própria",
        buttonText: "Renovar Plano",
        features: [
            "450 JOGOS STEAM",
            "SERVIDOR BR",
            "SESSÃO ILIMITADA",
            "COM SALVAMENTO DE ARQUIVOS",
            "SPOT ALEATORIO",
            "SEM FILA",
            "4/16 NÚCLEOS"
        ],
        link: "#"
    }
];
