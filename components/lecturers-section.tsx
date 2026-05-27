export function LecturersSection() {
  return (
    <section id="lecturers" className="section-y section-x bg-brand-light-gray">
      <div className="container mx-auto">
        <h2 className="text-fluid-section mb-8 text-center font-bold text-brand-secondary md:mb-16">
          経験豊富なプロフェッショナル講師
        </h2>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-xl bg-white p-6 shadow-soft sm:flex-row sm:items-start sm:gap-10 md:p-10">
          <img
            src="/images/ceo.jpg"
            alt="茂木秀彦のプロフィール写真"
            width={160}
            height={160}
            className="h-40 w-40 shrink-0 rounded-full object-cover"
          />
          <div className="text-center sm:text-left">
            <h3 className="text-fluid-heading-lg font-bold text-brand-secondary">
              茂木 秀彦
            </h3>
            <p className="mb-3 font-semibold text-brand-primary">
              株式会社Asiart 代表
            </p>
            <p className="text-fluid-body leading-relaxed text-gray-600">
              Asiart代表として各社の業務DX化に尽力。現在は生成AIを用いた各社の業務改善支援サポートにも着手している。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
