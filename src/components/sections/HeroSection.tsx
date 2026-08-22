import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section
            aria-labelledby="hero-title"
            className="relative isolate flex min-h-[calc(100dvh-3.5rem-1px)] flex-col overflow-hidden bg-[#0a0d0d] p-3 sm:min-h-[calc(100dvh-4rem-1px)] sm:p-4 lg:p-5"
        >
            <div className="relative flex flex-1 flex-col justify-end overflow-hidden border border-white/15">
                <Image
                    src="/img/barberia.jpg"
                    alt=""
                    fill
                    preload
                    sizes="100vw"
                    className="object-cover object-[52%_center] sm:object-center"
                />

                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-black/15 md:bg-black/30"
                />

                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.18)_45%,rgba(0,0,0,0.85)_100%)] md:bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.08)_75%,rgba(0,0,0,0.2)_100%)]"
                />

                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-3/5 bg-linear-to-t from-black/80 via-black/20 to-transparent md:h-2/3"
                />

                <div
                    aria-hidden="true"
                    className="absolute left-0 top-0 z-10 h-px w-full bg-white/20"
                />

                <div
                    aria-hidden="true"
                    className="absolute right-6 top-6 z-20 hidden text-right font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 md:block"
                >
                    <span className="block">Prince System</span>
                    <span className="block">01 / Barber Culture</span>
                </div>

                <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-8 top-24 hidden w-px bg-white/10 lg:block"
                />

                <div className="relative z-20 w-full px-5 pb-6 pt-20 sm:px-10 sm:pb-14 sm:pt-32 lg:px-16 lg:pb-16 xl:px-20 2xl:px-24">
                    <div className="max-w-6xl">
                        <div
                            aria-hidden="true"
                            className="mb-4 flex items-center gap-2 sm:mb-6"
                        >
                            <span className="h-1.5 w-8 rounded-full bg-white" />
                            <span className="size-1.5 rounded-full bg-white/50" />
                            <span className="size-1.5 rounded-full bg-white/30" />
                            <span className="size-1.5 rounded-full bg-white/20" />
                        </div>

                        <p className="mb-3 max-w-sm text-sm leading-relaxed text-white/70 sm:mb-5 sm:text-base">
                            Donde la precisión, el estilo y la cultura de la
                            barbería se encuentran.
                        </p>

                        <h1
                            id="hero-title"
                            className="max-w-6xl text-[clamp(2.5rem,12vw,3rem)] font-medium uppercase leading-[0.8] tracking-[-0.055em] text-[#e6ddd8] sm:text-[clamp(3rem,8vw,8.5rem)] sm:leading-[0.78] sm:tracking-[-0.06em]"
                        >
                            <span className="block">Nueva cultura</span>

                            <span className="block">
                                del{" "}
                                <span className="text-amber-400">
                                    corte
                                </span>
                            </span>
                        </h1>

                        <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-10 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
                            <Link
                                href="/reservas"
                                className="flex min-h-11 items-center justify-center whitespace-nowrap border border-amber-400 bg-amber-400 px-2 py-3 text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-black transition-colors duration-300 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 sm:px-6 sm:text-xs sm:tracking-[0.16em]"
                            >
                                Agendar cita
                            </Link>

                            <Link
                                href="/barberos"
                                className="flex min-h-11 items-center justify-center whitespace-nowrap border border-white/30 bg-white/5 px-2 py-3 text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-6 sm:text-xs sm:tracking-[0.16em]"
                            >
                                Conocer barberos
                            </Link>
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