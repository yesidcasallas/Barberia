export function BarberIcon({
    className = '',
}: {
    className?: string;
}) {
    return (
        <svg
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            {/* Cabello / corte */}
            <path
                d="
                    M18 25
                    C19 15 25 9 34 9
                    C42 9 48 13 51 19
                    C45 17 39 17 34 19
                    C29 21 25 24 18 25
                "
            />

            {/* Fade lateral */}
            <path d="M18 25 C17 29 17 33 18 36" />
            <path d="M20 23 C22 25 24 26 27 26" />

            {/* Rostro */}
            <path
                d="
                    M19 28
                    C19 39 24 48 32 50
                    C40 48 45 39 45 28
                "
            />

            {/* Orejas */}
            <path d="M19 31 C15 30 15 38 20 39" />
            <path d="M45 31 C49 30 49 38 44 39" />

            {/* Nariz */}
            <path d="M32 29 L30 36 L33 37" />

            {/* Barba */}
            <path
                d="
                    M23 39
                    C24 48 27 54 32 57
                    C37 54 40 48 41 39
                    C38 43 35 45 32 45
                    C29 45 26 43 23 39
                "
            />

            {/* Bigote */}
            <path d="M32 40 C29 38 26 39 24 41" />
            <path d="M32 40 C35 38 38 39 40 41" />
        </svg>
    );
}