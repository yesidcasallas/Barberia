
// Interface de la card de los barberos

export interface BarberCartData {
    id: number;
    name: string;
    href: string;
    imageUrl: string;
    imageAlt: string;
    serviceCount: number;
    description?: string;
    rating?: number;
}