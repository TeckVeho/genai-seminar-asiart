import Image from "next/image"

export function AboutMediaSection() {
  return (
    <section className="relative overflow-hidden bg-gray-800 py-16 text-white md:py-24">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1742&auto=format&fit=crop"
          alt="チームでのミーティング"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
        <h2 className="text-fluid-section mb-4 font-bold">
          現場の「手作業」を、生成AIで変える。
        </h2>
        <p className="text-fluid-lead mx-auto mb-8 max-w-2xl text-gray-200">
          AIエージェントで報告書・議事録・連絡文書の作成を効率化。全10回・各70分の研修で、部署を動かすDX人材を育成しませんか。
        </p>
        <a
          href="#contact"
          className="text-fluid-lead mx-auto block w-full max-w-md rounded-full bg-brand-accent px-8 py-4 font-bold text-white shadow-soft-md transition-opacity hover:opacity-90 sm:inline-block sm:w-auto sm:max-w-none sm:px-10"
        >
          無料相談はこちら
        </a>
      </div>
    </section>
  )
}
