import Image from "next/image";
import Link from "next/link";

const redesSociales = [
    {
        name: "Facebook",
        href: "/",
        icon: "/icons/brand-facebook.svg",
    },
    {
        name: "X",
        href: "/",
        icon: "/icons/brand-x.svg",
    },
    {
        name: "WhatsApp",
        href: "/",
        icon: "/icons/brand-whatsapp.svg",
    },
    {
        name: "Instagram",
        href: "/",
        icon: "/icons/brand-instagram.svg",
    },
    {
        name: "TikTok",
        href: "/",
        icon: "/icons/brand-tiktok.svg",
    },
];

const informacionLegal = [
    {
        name: "Términos y condiciones",
        href: "/terminos",
    },
    {
        name: "Política sobre cookies",
        href: "/cookies",
    },
    {
        name: "Política de privacidad y seguridad",
        href: "/privacidad",
    },
    {
        name: "Términos de uso",
        href: "/terminos-de-uso",
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#0a0d0d] text-white">
            <div className="w-full px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16 xl:px-20 2xl:px-24">
                <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
                    {/* Marca */}
                    <div>
                        <Link
                            href="/"
                            aria-label="Prince Barber Shop - Inicio"
                            className="group inline-flex items-center gap-3"
                        >
                            <span
                                aria-hidden="true"
                                className="size-2 bg-amber-400 transition-transform duration-300 group-hover:rotate-45"
                            />

                            <span className="text-sm font-semibold uppercase tracking-[0.14em]">
                                Prince Barber Shop
                            </span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
                            Precisión, estilo y cultura en cada corte.
                            Una barbería creada para quienes cuidan cada detalle.
                        </p>

                        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                            Prince System / Barber Culture
                        </p>
                    </div>

                    {/* Redes sociales */}
                    <nav aria-labelledby="social-title">
                        <h2
                            id="social-title"
                            className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/40"
                        >
                            Redes sociales
                        </h2>

                        <ul className="flex flex-col gap-4">
                            {redesSociales.map(({ name, href, icon }) => (
                                <li key={name}>
                                    <Link
                                        href={href}
                                        className="group inline-flex items-center gap-3 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                                    >
                                        <span className="grid size-8 place-items-center border border-white/10 transition-colors duration-300 group-hover:border-amber-400/50 group-hover:bg-white/5">
                                            <Image
                                                src={icon}
                                                alt=""
                                                width={20}
                                                height={20}
                                                className="size-5 brightness-0 invert opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                                            />
                                        </span>

                                        <span>{name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Información legal */}
                    <nav aria-labelledby="legal-title">
                        <h2
                            id="legal-title"
                            className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/40"
                        >
                            Información legal
                        </h2>

                        <ul className="flex flex-col gap-4">
                            {informacionLegal.map(({ name, href }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-sm text-white/60 transition-colors duration-300 hover:text-amber-400"
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Parte inferior */}
                <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-white/40">
                        © {new Date().getFullYear()} Prince Barber Shop.
                        Todos los derechos reservados.
                    </p>

                    <p
                        aria-hidden="true"
                        className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20"
                    >
                        Built around precision / 001
                    </p>
                </div>
            </div>
        </footer>
    );
}