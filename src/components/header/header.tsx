import Link from 'next/link';
import { User, Bell } from 'lucide-react';

const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Barberos', href: '/barberos' },
    { name: 'Reservas', href: '/reservas' },
];

export default function Header() {
    return (
        <header className="flex justify-between p-2">
            <Link href="/" >PRINCE BARBER SHOP</Link>
            <nav>
                <ul className="flex gap-4">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href}>
                                <span>{link.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex gap-2">
                <Bell />
                <User />
            </div>
        </header>
    );
}