import { Check, BadgePercent, MessageCircle } from "lucide-react"

const includes = [
  "全10回 講義（各70分・オンライン）",
  "テキスト・教材費",
  "ワークショップ指導料",
  "助成金申請用カリキュラム・書類一式",
  "専任講師によるフォローアップ",
]

export function PricingSection() {
  return (
    <section id="pricing" className="section-y section-x bg-white">
      <div className="container mx-auto">
        {/* ヘッダー */}
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-fluid-section mb-3 font-bold text-brand-secondary">
            料金について
          </h2>
          <p className="text-fluid-body mx-auto max-w-xl text-gray-500">
            助成金申請にも必要となる料金情報をご確認いただけます。
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(2,57,107,0.12)]">

            {/* カードヘッダー */}
            <div className="bg-gradient-to-r from-brand-secondary to-brand-primary px-8 py-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                一括パッケージ
              </p>
              <p className="text-fluid-heading-lg mt-1 font-bold leading-snug">
                生成AI活用・業務効率化研修
              </p>
            </div>

            {/* 価格エリア */}
            <div className="bg-white px-8 py-8">
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                {/* 正規料金 */}
                <div>
                  <p className="mb-1 text-sm font-medium text-gray-500">
                    受講料（税別）・<span className="font-bold text-brand-accent">1名あたり</span>
                  </p>
                  <p className="tabular-nums text-brand-secondary">
                    <span className="text-5xl font-bold md:text-6xl">400,000</span>
                    <span className="ml-1 text-2xl font-semibold text-gray-400">円</span>
                  </p>
                </div>

                {/* 助成金適用後 */}
                <div className="flex items-start gap-3 rounded-xl bg-amber-50 px-5 py-4">
                  <BadgePercent className="mt-0.5 size-5 shrink-0 text-amber-500" strokeWidth={2} />
                  <div>
                    <p className="text-xs font-bold text-amber-700">助成金適用後の目安</p>
                    <p className="mt-0.5 text-2xl font-bold tabular-nums text-amber-600">
                      約 100,000<span className="text-base font-semibold">円〜</span>
                    </p>
                    <p className="mt-0.5 text-xs text-amber-600/80">
                      ※中小企業・経費助成75%の場合
                    </p>
                  </div>
                </div>
              </div>

              {/* 区切り */}
              <hr className="my-6 border-gray-100" />

              {/* 含まれるもの */}
              <p className="mb-3 text-sm font-bold text-brand-secondary">
                受講料に含まれるもの
              </p>
              <ul className="space-y-2">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <Check className="size-4 shrink-0 text-emerald-500" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full py-4 font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--brand-accent)" }}
              >
                <MessageCircle className="size-5" strokeWidth={2} />
                無料相談・お見積りはこちら
              </a>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            ※ 価格は税別です。消費税は別途加算されます。助成金の支給額は審査結果により異なります。
          </p>
        </div>
      </div>
    </section>
  )
}
