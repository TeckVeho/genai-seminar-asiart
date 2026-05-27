export function PricingFooterSection() {
  return (
    <footer className="bg-brand-secondary text-white">
      <div className="container mx-auto px-4 py-10 md:px-6">
        <div className="mb-6 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-fluid-heading-lg mb-1 font-bold">株式会社Asiart（Asiart Inc.）</p>
            <p className="text-sm text-white/70">
              物流企業特化
              <br />
              AI人材育成プログラム
            </p>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-white/50">
              〒108-0074 東京都港区高輪2-11-21-103
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="mailto:hidehiko.motegi@asiart-tech.com"
              className="transition-colors hover:text-white"
            >
              hidehiko.motegi@asiart-tech.com
            </a>
            <span className="hidden text-white/40 sm:inline">|</span>
            <a
              href="tel:09080029597"
              className="transition-colors hover:text-white"
            >
              090-8002-9597
            </a>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6">
          <p className="text-center text-sm text-white/60">
            &copy; 株式会社Asiart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
