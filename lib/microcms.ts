import { createClient } from "microcms-js-sdk"
import type { Faq, Settings } from "@/types/microcms"

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
})

export async function getFaqs(): Promise<Faq[]> {
  // 管理画面で登録した順（作成日が古い順）に表示する
  const res = await client.getList<Faq>({ endpoint: "faq", queries: { orders: "createdAt" } })
  return res.contents
}

export async function getSettings(): Promise<Settings> {
  return client.getObject<Settings>({ endpoint: "settings" })
}
