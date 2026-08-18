"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, LockKeyhole } from "lucide-react";

export function PasswordField() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="mt-7">
            <div className="flex items-center justify-between gap-4">
                <label
                    htmlFor="password"
                    className="
            text-xs font-bold
            tracking-[0.08em]
            text-[#c5bcad]
          "
                >
                    Contraseña
                </label>

                <Link
                    href="/forgot-password"
                    className="
            text-[0.65rem]
            font-semibold
            text-[#f3cd4f]

            hover:text-[#ffdf6b]

            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-[#f3cd4f]
          "
                >
                    ¿Olvidaste tu contraseña?
                </Link>
            </div>

            <div
                className="
          relative mt-3
          border-b border-[#655d4d]
          focus-within:border-[#f3cd4f]
        "
            >
                <LockKeyhole
                    aria-hidden="true"
                    size={19}
                    strokeWidth={1.8}
                    className="
            absolute left-0 top-1/2
            -translate-y-1/2
            text-[#b8af9f]
          "
                />

                <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    required
                    className="
            w-full bg-transparent
            py-3 pr-11 pl-8
            text-sm text-[#ece9e4]
            outline-none

            placeholder:text-[#716c64]

            focus-visible:outline-none
          "
                />

                <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    aria-label={
                        showPassword
                            ? "Ocultar contraseña"
                            : "Mostrar contraseña"
                    }
                    aria-pressed={showPassword}
                    className="
            absolute right-0 top-1/2
            -translate-y-1/2
            cursor-pointer
            p-2 text-[#b8af9f]

            transition-colors
            hover:text-[#f3cd4f]

            focus-visible:outline-2
            focus-visible:outline-[#f3cd4f]
                "
                >
                    {showPassword ? (
                        <Eye
                            aria-hidden="true"
                            size={19}
                            strokeWidth={1.8}
                        />
                    ) : (
                        <EyeOff
                            aria-hidden="true"
                            size={19}
                            strokeWidth={1.8}
                        />
                    )}
                </button>
            </div>
        </div>
    );
}