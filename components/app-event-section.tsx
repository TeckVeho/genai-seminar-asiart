"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    q: "PCスキルに自信がない社員でも参加できますか？",
    a: "はい、問題ありません。PCの基本操作ができる方であれば、どなたでもご参加いただけるように設計しています。生成AIツールの導入から丁寧にサポートします。",
  },
  {
    q: "どのAIツールを使いますか？",
    a: "貴社の環境やポリシーに合わせて最適なツールを選定します。主要な生成AIのエージェント機能を活用し、統一された操作体系で学べるプログラムです。",
  },
  {
    q: "機密情報をAIに入力しても大丈夫ですか？",
    a: "研修ではマスキングルールを周知します。企業向け契約プランの活用により、アクセス権限の管理を強化できます。ご契約内容に応じて入力できるデータの範囲が異なるため、社内ポリシーとあわせて事前にご確認ください。",
  },
  {
    q: "助成金の申請手続きが不安です",
    a: "計画届の書類作成から支給申請まで、必要書類は当社が準備・サポートします。受講企業様の手続き負担を軽減できるよう伴走します。",
  },
  {
    q: "研修の費用はどのくらいかかりますか？",
    a: "1名あたり400,000円（税別）です。人材開発支援助成金を活用すると、中小企業の場合は経費助成の目安で実質負担が約25%〜になるケースがあります。詳細はお問い合わせください。",
  },
  {
    q: "オンラインのみでも受講できますか？",
        a: "はい。本プログラムは全10回オンラインで実施します。各回70分、第1〜5回は導入〜単体スキル、第6〜10回はAI社員の構築から成果発表です。",
  },
]

export function AppEventSection() {
  return (
    <section id="faq" className="section-y section-x bg-white">
      <div className="container mx-auto">
        <h2 className="text-fluid-section mb-8 text-center font-bold text-brand-secondary md:mb-12">
          よくあるご質問
        </h2>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl space-y-4">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-soft data-[state=open]:shadow-soft-md"
            >
              <AccordionTrigger className="text-fluid-heading min-h-[52px] items-center gap-3 px-4 py-4 text-left font-bold text-brand-secondary hover:no-underline sm:px-6 sm:py-5 [&>svg]:text-brand-primary">
                Q. {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-fluid-body border-t border-gray-100 px-4 pb-4 text-gray-600 sm:px-6">
                A. {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
