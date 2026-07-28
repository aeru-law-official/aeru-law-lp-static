// microCMSのAPIレスポンス型
// FAQ追加・会社情報の項目追加はここも合わせて更新する

export type Faq = {
  id: string
  question: string
  answer: string
}

export type Settings = {
  officeName: string
  lawyerName: string
  barAssociation: string
  phone: string
  businessHours: string
  lineUrl: string
  email: string
  address: string
}
