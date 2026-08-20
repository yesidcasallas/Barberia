import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="flex min-h-[70vh] items-end bg-[linear-gradient(rgb(0_0_0/0.55),rgb(0_0_0/0.55)),url('/img/barberia.jpg')] bg-cover bg-center bg-no-repeat sm:min-h-[80vh] lg:min-h-screen">
            <div className="mx-auto w-full max-w-7xl px-6 pb-12 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20 2xl:max-w-[1600px] 2xl:px-16 2xl:pb-24">
                <div className="max-w-xl lg:max-w-2xl">
                    <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl 2xl:text-7xl">
                        Tu corte de cabello
                        <strong className="text-amber-400"> importa </strong>
                        mucho
                    </h1>

                    <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-200 sm:text-lg lg:text-xl">
                        En Prince Barber Shop, nos apasiona el arte del corte de
                        cabello y la barbería. Nuestro equipo de barberos expertos
                        está dedicado a brindarte un servicio excepcional y a
                        ayudarte a lucir tu mejor versión.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-4">
                        <Link
                            href="/reservas"
                            className="rounded bg-amber-500 px-6 py-3 font-medium text-black transition-colors hover:bg-amber-400"
                        >
                            Agendar cita
                        </Link>

                        <Link
                            href="/about"
                            className="rounded border border-white/60 px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-black"
                        >
                            Conocer más
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}