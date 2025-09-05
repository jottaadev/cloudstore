import { ClockIcon, MessageSquare, BarChart2, FileTextIcon, UserPlusIcon, CreditCardIcon, SettingsIcon, LogOut, Headphones, ChartPieIcon, LucideIcon, MessagesSquareIcon, NewspaperIcon, MegaphoneIcon, LineChartIcon, MessageSquareTextIcon, UsersIcon } from 'lucide-react';

type Link = {
    href: string;
    label: string;
    icon: LucideIcon;
}

export const SIDEBAR_LINKS: Link[] = [
    {
        href: "/dashboard",
        label: "Painel",
        icon: ChartPieIcon,
    },
    {
        href: "/dashboard/campaigns",
        label: "Campanhas",
        icon: MegaphoneIcon
    },
    {
        href: "/dashboard/analytics",
        label: "Análises",
        icon: LineChartIcon
    },
    {
        href: "/dashboard/posts",
        label: "Postagens",
        icon: MessageSquareTextIcon
    },
    {
        href: "/dashboard/engagement",
        label: "Engajamento",
        icon: UsersIcon
    },
    {
        href: "/dashboard/billing",
        label: "Faturamento",
        icon: CreditCardIcon
    },
    {
        href: "/dashboard/settings",
        label: "Configurações",
        icon: SettingsIcon
    },
];

export const FOOTER_LINKS = [
    {
        title: "Navegação",
        links: [
            { name: "Início", href: "/" },
            { name: "Planos", href: "/#pricing" },
            { name: "Suporte", href: "/support" },
            { name: "FAQ", href: "/faq" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Termos de Uso", href: "/terms" },
            { name: "Política de Privacidade", href: "/privacy" },
        ],
    },
];
