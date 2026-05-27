import { CheckCircle2 } from "lucide-react"

const solutions = [
  {
    title: "物流企業に特化した生成AIセミナー",
    body: "配車対応・報告書作成・情報共有など、物流現場に共通する業務課題をテーマに設計。汎用的なAI研修と違い、「物流の現場ですぐ使える」スキルだけに絞って学べます。",
  },
  {
    title: "業務課題起点の設計：学びが「自分ごと」になる",
    body: "初回に自身の業務を棚卸しし、座学で生成AIの基礎を学び、ワークショップで自分の課題を解決する一気通貫の構成です。",
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
      </div>
    </section>
  )
}
