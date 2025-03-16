import { LogoIcon } from "../Icons";

const followUs: string[] = ["Github", "Twitter", "Dribbble"];
const platforms: string[] = ["Web", "Mobile", "Desktop"];
const about: string[] = ["Features", "Pricing", "FAQ"];
const community: string[] = ["Youtube", "Discord", "Twitch"];

export const Footer = () => {
    return (
        <footer id="footer">
            <hr className="w-11/12 mx-auto" />

            <section className="container mx-auto px-5 md:px-24 py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
                <div className="col-span-full xl:col-span-2">
                    <a
                        href=""
                        rel="noreferrer noopener"
                        className="font-bold text-2xl inline-flex"
                    >
                        <LogoIcon className="mr-2 w-8 h-8" />
                        Trilha de Estudos
                    </a>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Siga-nos</h3>
                    {followUs.map((media: string) => (
                        <div>
                            <a
                                href=""
                                rel="#"
                                className="opacity-60 hover:opacity-100"
                            >
                                {media}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Plataforma</h3>
                    {platforms.map((media: string) => (
                        <div>
                            <a
                                href=""
                                rel="#"
                                className="opacity-60 hover:opacity-100"
                            >
                                {media}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Sobre</h3>
                    {about.map((media: string) => (
                        <div>
                            <a
                                href=""
                                rel="#"
                                className="opacity-60 hover:opacity-100"
                            >
                                {media}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Comunidade</h3>
                    {community.map((media: string) => (
                        <div>
                            <a
                                href=""
                                rel="#"
                                className="opacity-60 hover:opacity-100"
                            >
                                {media}
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </footer>
    );
};
