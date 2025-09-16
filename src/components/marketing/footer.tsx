import { FOOTER_LINKS } from "@/constants";
import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full py-10 relative bg-black border-t border-white/10">
            <Container>
                <Wrapper className="relative flex flex-col md:flex-row justify-between pb-40 overflow-hidden">
                    <div className="flex flex-col items-start max-w-xs">
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-medium text-white">
                                ZyexCloud
                            </span>
                        </div>
                        <p className="text-base text-gray-300 mt-4">
                            Jogue e trabalhe na nuvem com performance, estabilidade e zero complicação.
                        </p>
                        <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:scale-[1.02] flex items-center gap-2">
                            <Link href="/app" className="flex items-center gap-2">
                                Comece agora 
                                <ArrowRightIcon className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-lg mt-10 md:mt-0">
                        {FOOTER_LINKS?.map((section, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <h4 className="text-sm font-medium text-white">
                                    {section.title}
                                </h4>
                                <ul className="space-y-4 w-full">
                                    {section.links.map((link, index) => (
                                        <li key={index} className="text-sm text-gray-400 hover:text-white transition-all w-full">
                                            <Link href={link.href} className="w-full">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Wrapper>
            </Container>
            <Container>
                <Wrapper className="pt-10 flex flex-col sm:flex-row items-center justify-between relative gap-4">
                    <p className="text-sm text-gray-400 text-center sm:text-left">
                        &copy; {new Date().getFullYear()} ZyexCloudStore. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="p-1">
                            <Icons.instagram className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                        </Link>
                        <Link href="#" className="p-1">
                            <Icons.twitter className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                        </Link>
                        <Link href="#" className="p-1">
                            <Icons.discord className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                        </Link>
                    </div>
                </Wrapper>
            </Container>
        </footer>
    )
};

export default Footer
