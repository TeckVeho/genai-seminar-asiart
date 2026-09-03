import { BookOpen, Wrench } from "lucide-react"

const onlineSteps = [
  {
    title: "ワークフロー棚卸し",
    body: "定期業務を洗い出し、自動化の対象と優先順位を決めます。",
  },
  {
    title: "生成AI＋エージェント概論",
    body: "モデルの特性と、エージェントに業務を任せる全体像を学びます。",
  },
  {
    title: "単体スキルの体験",
    body: "定型業務を実行し、再利用できる「スキル」の考え方を体験します。",
  },
  {
    title: "自社スキルの設計",
    body: "自分の業務について、入力・手順・判断基準・出力・完了条件を定義します。",
  },
  {
    title: "スキルの作成・テスト",
    body: "同じ手順・品質で繰り返せるスキルを作り、テストして調整します。",
  },
]

const workshopSteps = [
  {
    title: "AI社員の体験＋設計",
    body: "役割・知識・スキル・実行頻度を組み合わせ、権限と承認ポイントを設計します。",
  },
  {
    title: "AI社員の構築",
    body: "プロジェクト化・定期実行・第三者テストまで行い、他の人でも運用できる状態にします。",
  },
  {
    title: "複合業務への適用設計",
    body: "複数工程・承認・例外処理を含む業務に適用し、運用ルールと効果指標を定義します。",
  },
  {
    title: "検証・改善・展開準備",
    body: "実行検証と改善を行い、社内展開用の手順書と発表準備を整えます。",
  },
  {
    title: "成果発表会",
    body: "成果を共有し、ナレッジとして残します。",
  },
]

type Phase = {
  label: string
  sessions: string
  hours: string
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  accentColor: string
  dotColor: string
  badgeBg: string
  badgeText: string
  steps: { title: string; body: string }[]
  startFrom: number
}

const phases: Phase[] = [
  {
    label: "導入〜単体スキル",
    sessions: "第 1 〜 5 回",
    hours: "5時間50分",
    icon: BookOpen,
    accentColor: "from-blue-600 to-brand-primary",
    dotColor: "bg-blue-600",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
    steps: onlineSteps,
    startFrom: 1,
  },
  {
    label: "AI社員〜成果発表",
    sessions: "第 6 〜 10 回",
    hours: "5時間50分",
    icon: Wrench,
    accentColor: "from-emerald-600 to-teal-500",
    dotColor: "bg-emerald-600",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    steps: workshopSteps,
    startFrom: 6,
  },
]

export function FeaturesSection() {
  return (
    <section
      id="curriculum"
      className="section-y section-x bg-brand-light-gray"
    >
      <div className="container mx-auto">
        {/* ヘッダー */}
        <div className="mb-10 text-center md:mb-16">
          <h2 className="text-fluid-section mb-3 font-bold text-brand-secondary">
            全10回オンラインで実施するカリキュラム
          </h2>
          <p className="text-fluid-body mx-auto max-w-xl text-gray-500">
            単体スキル → AI社員 → 複合業務へ。
            <br className="hidden sm:inline" />
            3段階で、自社の仕事に落とす実践型プログラム
          </p>
        </div>

        {/* フェーズカード */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {phases.map((phase) => {
            const Icon = phase.icon
            return (
              <div
                key={phase.label}
                className="overflow-hidden rounded-2xl bg-white shadow-soft"
              >
                {/* カードヘッダー */}
                <div
                  className={`bg-gradient-to-r ${phase.accentColor} px-6 py-5 text-white`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <Icon className="size-5" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                        {phase.label}
                      </p>
                      <p className="text-fluid-heading-lg font-bold leading-tight">
                        {phase.sessions}
                      </p>
                    </div>
                    <span className="ml-auto rounded-full bg-white/20 px-3 py-1 text-sm font-bold">
                      {phase.hours}
                    </span>
                  </div>
                </div>

                {/* ステップリスト */}
                <ul className="divide-y divide-gray-100 px-2 py-2">
                  {phase.steps.map((step, i) => (
                    <li
                      key={i}
                      className="group flex items-start gap-4 rounded-xl px-4 py-4 transition-colors hover:bg-gray-50"
                    >
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${phase.dotColor} text-xs font-bold text-white`}
                      >
                        {phase.startFrom + i}
                      </span>
                      <div>
                        <strong className="text-fluid-heading block font-bold text-brand-secondary">
                          {step.title}
                        </strong>
                        <p className="text-fluid-caption mt-0.5 text-gray-500">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* フッター補足 */}
        <p className="mt-8 text-center text-sm text-gray-400">
          ※ 各回 70 分・全10回（合計 11時間40分）のオンライン実施。人材開発支援助成金の実訓練時間要件（10 時間以上）を満たしています。
        </p>
      </div>
    </section>
  )
}
