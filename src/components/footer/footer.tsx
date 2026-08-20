import Image from 'next/image';
import Link from 'next/link';

const redesSociales = [
    {
        name: 'Facebook',
        href: '/',
        icon: '/icons/brand-facebook.svg',
    },
    {
        name: 'X',
        href: '/',
        icon: '/icons/brand-x.svg',
    },
    {
        name: 'Whatsapp',
        href: '/',
        icon: '/icons/brand-whatsapp.svg',
    },
    {
        name: 'Instagram',
        href: '/',
        icon: '/icons/brand-instagram.svg',
    },
    {
        name: 'TikTok',
        href: '/',
        icon: '/icons/brand-tiktok.svg',
    },
];

const informacionLegal = [
    {
        name: 'Términos y condiciones',
        href: '/',
    },
    {
        name: 'Política sobre cookies',
        href: '/',
    },
    {
        name: 'Política de privacidad y seguridad',
        href: '/',
    },
    {
        name: 'Términos de uso',
        href: '/',
    },
];

export default function FooterPage() {
    return (
        <footer className="flex flex-col p-6 items-center gap-6">
            <div className="flex w-full gap-6 justify-around">
                <section>
                    <h2>PRINCE BARBER SHOP</h2>
                </section>


                <nav aria-label="Redes sociales" className="flex flex-col gap-4">
                    <h3 className="text-3xl">
                        Redes Sociales
                    </h3>

                    <ul className="flex flex-col gap-4">
                        {redesSociales.map(({ name, href, icon }) => (
                            <li key={name}>
                                <Link
                                    href={href}
                                    className="flex items-center gap-2"
                                >
                                    <Image
                                        src={icon}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className="brightness-0 invert"
                                    />

                                    <span>{name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav aria-label="Información legal" className="flex flex-col gap-4">
                    <h3 className="text-3xl">
                        Información Legal
                    </h3>

                    <ul className="flex flex-col gap-4">
                        {informacionLegal.map(({ name, href }) => (
                            <li key={name}>
                                <Link href={href}>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <p>
                Copyright © {new Date().getFullYear()} Prince Barber Shop.
                Todos los derechos reservados.
            </p>
        </footer>
    );
}