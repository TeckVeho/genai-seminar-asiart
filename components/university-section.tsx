const steps = [
  {
    number: "01",
    title: "無料相談・ヒアリング",
    body: "受講者数・業務課題・利用環境（PC・契約状況）をお伺いします。",
  },
  {
    number: "02",
    title: "助成金の計画届を準備",
    body: "カリキュラム・契約書等の必要書類についてご案内し、訓練開始1か月前までに労働局へ提出いただけるようサポートします。",
  },
  {
    number: "03",
    title: "全10回の研修を実施",
    body: "全10回オンラインで実施します（導入〜単体スキル5回＋AI社員〜成果発表5回、各70分・総計11時間40分）。",
  },
  {
    number: "04",
    title: "効果測定・支給申請サポート",
    body: "Before/Afterレポート提出に加え、助成金の支給申請書類をサポートします。",
  },
]

export function UniversitySection() {
  return (
    <section id="flow" className="section-y section-x bg-brand-light-gray">
      <div className="container mx-auto">
        <h2 className="text-fluid-section mb-8 text-center font-bold text-brand-secondary md:mb-16">
          導入の流れ
        </h2>
        <div className="relative">
          <div className="absolute left-0 top-12 hidden h-0.5 w-full border-t-2 border-dashed border-gray-300 lg:block" />
          <div className="relative grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                {i > 0 && (
                  <div className="flex justify-center py-2 sm:hidden" aria-hidden>
                    <div className="h-10 w-0 border-l-2 border-dashed border-gray-300" />
                  </div>
                )}
                <div className="z-10 mb-4 flex size-16 shrink-0 items-center justify-center rounded-full bg-brand-primary text-fluid-step font-bold text-white sm:size-20 lg:size-24">
                  {step.number}
                </div>
                <h3 className="text-fluid-heading mb-2 font-bold text-brand-secondary">
                  {step.title}
                </h3>
                <p className="text-fluid-caption text-gray-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
