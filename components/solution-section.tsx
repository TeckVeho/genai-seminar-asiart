import { CheckCircle2 } from "lucide-react"

const solutions = [
  {
    title: "自社の日常業務から逆算する、実践型プログラム",
    body: "報告書・議事録・見積・請求・顧客対応記録など、間接部門に共通する業務をテーマに設計。一般的なAI研修と違い、「自分の仕事ですぐ使える」スキルに絞って学べます。物流・製造・建設など、現場を持つ企業にも対応しています。",
  },
  {
    title: "業務課題起点の設計：学びが「自分ごと」になる",
    body: "初回に自身の業務を棚卸しし、単体スキルからAI社員、複合業務まで一気通貫で自社課題を解決する構成です。",
  },
  {
    title: "専任の社労士パートナー",
    body: "AI導入に伴う業務フローの見直しや就業規則の整備など、労務面の課題も専任の社労士がサポート。研修後も安心して実務定着まで伴走します。",
  },
]

export function SolutionSection() {
  return (
    <section id="solution" className="section-y section-x bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-fluid-section mb-8 font-bold text-brand-secondary md:mb-12">
          株式会社Asiartの研修が選ばれる3つの理由
        </h2>
        <div className="mx-auto max-w-3xl space-y-8 text-left">
          {solutions.map((item, i) => (
            <div key={i} className="flex items-start gap-3 sm:gap-4">
              <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-brand-primary sm:size-7" />
              <div>
                <h3 className="text-fluid-heading font-bold text-brand-secondary">
                  {item.title}
                </h3>
                <p className="text-fluid-body mt-1 text-gray-600">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-fluid-body mx-auto mt-10 max-w-3xl text-center text-gray-500">
          想定業種：物流・運送 ／ 製造 ／ 建設 ／ 卸・専門サービス ほか
        </p>
      </div>
    </section>
  )
}
