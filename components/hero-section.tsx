"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"

import { FadeInOnScroll } from "@/components/fade-in-on-scroll"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#solution", label: "選ばれる理由" },
  { href: "#curriculum", label: "カリキュラム" },
  { href: "#lecturers", label: "講師紹介" },
  { href: "#pricing", label: "料金" },
  { href: "#subsidy", label: "助成金" },
  { href: "#flow", label: "導入の流れ" },
  { href: "#faq", label: "よくあるご質問" },
]

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-secondary/88 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-brand-secondary/78">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a
              href="#"
              className="flex shrink-0 items-center py-1 text-lg font-bold tracking-tight text-white md:text-xl"
            >
              株式会社Asiart
            </a>

            <nav className="hidden items-center space-x-6 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-semibold text-white/90 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-full px-5 py-2 font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--brand-accent)" }}
              >
                無料相談する
              </a>
            </nav>

            <button
              type="button"
              className="-mr-1 flex min-h-[44px] min-w-[44px] items-center justify-center text-white lg:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "overflow-hidden border-white/20 transition-[max-height] duration-300 ease-out lg:hidden",
            menuOpen ? "max-h-[28rem] border-t" : "max-h-0 border-t-0"
          )}
          style={{ backgroundColor: "var(--brand-secondary)" }}
        >
          <nav className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex min-h-[44px] items-center justify-center rounded-lg px-4 font-semibold text-white/90 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 flex min-h-[44px] w-full items-center justify-center rounded-full px-5 py-2 font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--brand-accent)" }}
              onClick={() => setMenuOpen(false)}
            >
              無料相談する
            </a>
          </nav>
        </div>
      </header>

      <section className="relative min-h-[80dvh] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
            alt="プロフェッショナルチームがノートパソコンを囲んでコラボレーションしている"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(2, 57, 107, 0.6)" }}
        />
        <FadeInOnScroll className="relative z-10 flex min-h-[80dvh] flex-col items-center justify-center px-4 py-12 text-center">
          <p className="text-fluid-hero mb-2 max-w-3xl font-bold leading-snug text-white/95">
            生成AIで、現場の業務と生産性を変える
          </p>
          <h1 className="text-fluid-display mb-4 max-w-4xl font-bold leading-tight">
            物流企業特化<br />
            AI人材育成プログラム
          </h1>
          <p className="text-fluid-lead mb-8 max-w-2xl text-white/95">
            定型業務・文書作成・社内外のコミュニケーションを効率化。全12回・12時間で、
            <br />
            現場ですぐ使える実践力を。
          </p>
          <a
            href="#contact"
            className="text-fluid-lead block w-full max-w-md rounded-full px-8 py-4 font-bold text-white shadow-soft-md transition-opacity hover:opacity-90 sm:inline-block sm:w-auto sm:max-w-none sm:px-10"
            style={{ backgroundColor: "var(--brand-accent)" }}
          >
            無料相談はこちら
          </a>
          <div
            className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2"
            aria-hidden
          >
            <ChevronDown className="size-8 animate-bounce text-white/70" />
          </div>
        </FadeInOnScroll>
      </section>
    </div>
  )
}
