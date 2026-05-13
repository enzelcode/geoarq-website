"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "geoarq-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function close(value: "accepted" | "rejected") {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, value);
    }
    setClosing(true);
    setTimeout(() => setVisible(false), 350);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      data-state={closing ? "closed" : "open"}
      className="fixed inset-x-3 bottom-3 z-[55] sm:inset-x-6 sm:bottom-6 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-bottom-4 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:slide-in-from-bottom-6 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 rounded-[20px] border border-ink/10 bg-white/95 p-4 shadow-[0_24px_60px_-20px_rgba(26,31,24,0.25)] backdrop-blur-xl sm:flex-row sm:items-center sm:gap-6 sm:p-5">
        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-soft text-forest">
          <Cookie size={18} strokeWidth={1.7} />
        </div>

        <p className="flex-1 text-xs leading-relaxed text-stone sm:text-sm">
          Usamos cookies pra melhorar sua experiência neste site. Veja a{" "}
          <Link
            href="/politica-de-privacidade"
            className="font-medium text-ink underline-offset-2 hover:underline"
          >
            política de privacidade
          </Link>
          .
        </p>

        <div className="flex w-full items-center gap-2 sm:w-auto">
          <button
            type="button"
            onClick={() => close("rejected")}
            className="inline-flex h-9 cursor-pointer items-center justify-center rounded-full border border-ink/10 px-4 text-xs font-medium text-stone transition-colors hover:border-ink/25 hover:text-ink"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => close("accepted")}
            className="inline-flex h-9 flex-1 cursor-pointer items-center justify-center rounded-full bg-forest-deep px-5 text-xs font-medium text-cream transition-colors hover:bg-forest sm:flex-none"
          >
            Aceitar
          </button>
          <button
            type="button"
            aria-label="Fechar aviso"
            onClick={() => close("rejected")}
            className="hidden h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-stone transition-colors hover:bg-ink/5 hover:text-ink sm:inline-flex"
          >
            <X size={14} strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </div>
  );
}
