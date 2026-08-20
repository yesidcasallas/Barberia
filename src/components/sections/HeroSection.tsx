import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section
            aria-labelledby="hero-title"
            className="relative min-h-screen overflow-hidden bg-[#0a0d0d] p-3 sm:p-4 lg:p-5"
        >
            <div className="relative min-h-[calc(100vh-24px)] overflow-hidden border border-white/15 sm:min-h-[calc(100vh-32px)]">
                <Image
                    src="/img/barberia.jpg"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                />

                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-black/30"
                />

                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.08)_75%,rgba(0,0,0,0.2)_100%)]"
                />

                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3 g-linear-to-t from-black/80 via-black/20 to-transparent"
                />

                <div
                    aria-hidden="true"
                    className="absolute left-0 top-0 z-10 h-px w-full bg-white/20"
                />

                <div
                    aria-hidden="true"
                    className="absolute right-6 top-6 z-20 hidden text-right font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 sm:block"
                >
                    <span className="block">Prince System</span>
                    <span className="block">01 / Barber Culture</span>
                </div>

                <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-8 top-24 hidden w-px bg-white/10 lg:block"
                />

                <div className="absolute inset-x-0 bottom-0 z-20">
                    <div className="w-full px-6 pb-10 sm:px-10 sm:pb-14 lg:px-16 lg:pb-16 xl:px-20 2xl:px-24">
                        <div className="max-w-6xl">
                            <div
                                aria-hidden="true"
                                className="mb-6 flex items-center gap-2"
                            >
                                <span className="h-1.5 w-8 rounded-full bg-white" />
                                <span className="size-1.5 rounded-full bg-white/50" />
                                <span className="size-1.5 rounded-full bg-white/30" />
                                <span className="size-1.5 rounded-full bg-white/20" />
                            </div>

                            <p className="mb-5 max-w-sm text-sm leading-relaxed text-white/70 sm:text-base">
                                Donde la precisión, el estilo y la cultura de la
                                barbería se encuentran.
                            </p>

                            <h1
                                id="hero-title"
                                className="max-w-6xl text-[clamp(3rem,8vw,8.5rem)] font-medium uppercase leading-[0.78] tracking-[-0.06em] text-[#e6ddd8]"
                            >
                                Nueva cultura
                                <span className="block">
                                    del{" "}
                                    <span className="text-amber-400">
                                        corte
                                    </span>
                                </span>
                            </h1>

                            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
                                <Link
                                    href="/reservas"
                                    className="border border-amber-400 bg-amber-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-black transition-colors hover:bg-amber-300"
                                >
                                    Agendar cita
                                </Link>

                                <Link
                                    href="/barberos"
                                    className="border border-white/30 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
                                >
                                    Conocer barberos
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    aria-hidden="true"
                    className="absolute bottom-6 right-6 z-20 hidden font-mono text-[9px] uppercase leading-relaxed tracking-[0.15em] text-white/40 lg:block"
                >
                    <span className="block">Initiating</span>
                    <span className="block">Prince Barber Shop</span>
                    <span className="block">System 001</span>
                </div>

                <div aria-hidden="true">
                    <span className="absolute bottom-4 left-4 z-20 h-4 w-px bg-white/30" />
                    <span className="absolute bottom-4 left-4 z-20 h-px w-4 bg-white/30" />

                    <span className="absolute right-4 top-4 z-20 h-4 w-px bg-white/30" />
                    <span className="absolute right-4 top-4 z-20 h-px w-4 bg-white/30" />
                </div>
            </div>
        </section>
    );
}