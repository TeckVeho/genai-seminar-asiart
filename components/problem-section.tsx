import { HelpCircle, BarChart3, Lightbulb } from "lucide-react"

const problems = [
  {
    icon: HelpCircle,
    title: "報告・記録・連絡…手作業が減らない",
    body: "電話対応の記録、報告書・議事録の作成、情報の転記を手作業のまま続けており、ミスや残業の温床になっている。",
  },
  {
    icon: BarChart3,
    title: "拠点ごとにやり方がバラバラ",
    body: "部署・拠点・店舗ごとにやり方がバラバラで、ノウハウが共有されず、同じ非効率が各所で繰り返されている。",
  },
  {
    icon: Lightbulb,
    title: "AIツールを学んでも業務に落とせない",
    body: "一般的なAI研修を受けても「自分の日常業務にどう使えばいいのか」が分からず、活用が定着しない。",
  },
]

export function ProblemSection() {
  return (
    <section className="section-y section-x bg-brand-light-gray">
      <div className="container mx-auto">
        <h2 className="text-fluid-section mb-8 text-center font-bold text-brand-secondary md:mb-12">
          現場の非効率が、社員の負担になっていませんか？
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {problems.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="rounded-xl bg-white p-4 text-center shadow-soft md:p-8"
              >
                <div className="mb-4 flex justify-center text-brand-primary">
                  <Icon className="size-12 md:size-[60px]" strokeWidth={1.5} />
                </div>
                <h3 className="text-fluid-heading mb-4 font-bold text-brand-secondary">
                  {item.title}
                </h3>
                <p className="text-fluid-body text-left text-gray-600">
                  {item.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
