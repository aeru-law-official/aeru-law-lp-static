# アエル法律事務所 連携パートナー募集LP

交通事故被害者側に強いアエル法律事務所が、連携先の治療院・保険代理店を募集するランディングページです。

Next.js + microCMS + 静的サイト（SSG）で構築しています。更新頻度が低いサイトのため、CMS化するのはFAQと会社情報のみに絞り、それ以外はコードで管理する構成にしています。

## ディレクトリ構成

```
app/
  layout.tsx      サイト全体の設定（フォント・SEO・OGP）
  page.tsx        トップページ本体。ここでmicroCMSからデータ取得
  globals.css     全体のスタイル・色定義
components/
  lp/             LPの各セクション（1ファイル1セクション）
  ui/             共通UIパーツ
lib/
  microcms.ts     microCMSからデータを取得する関数
  utils.ts        共通の小さな関数
types/
  microcms.ts     microCMSのデータの型定義
public/
  images/         LPで使う画像
```

セクションは分割しすぎず、`components/lp/` の1ファイル1セクションで完結する構成にしています。どこを直せばいいかは、ファイル名を見ればすぐ分かるはずです。

## 修正方法

### テキストを変更したい

`components/lp/` の中から該当セクションのファイルを開いて、直接テキストを書き換えてください。（例：見出しを変えたい → `components/lp/hero.tsx`）

### 画像を変更したい

1. 新しい画像を `public/images/` に入れる
2. 該当コンポーネント内の `src="/images/◯◯.png"` の部分を新しいファイル名に書き換える

### FAQを追加・変更したい

コードは触らず、**microCMSの管理画面**の `faq` から追加・編集・削除してください。表示順は「作成日が古い順」です。

### お知らせを追加したい

現状、お知らせ（News）セクションは存在しません。追加が必要になった場合は開発者に依頼してください。

### 電話番号・住所・メールアドレスなどの会社情報を変更したい

コードは触らず、**microCMSの管理画面**の `settings` から編集してください。ヘッダー・電話CTA・お問い合わせ・フッターなど複数箇所に自動で反映されます。

## microCMS

### API構成

| API名 | 種類 | 用途 |
|---|---|---|
| `faq` | リスト形式 | よくあるご質問 |
| `settings` | オブジェクト形式（1件のみ） | 会社情報 |

`settings` のフィールド：

| フィールドID | 内容 |
|---|---|
| officeName | 事務所名 |
| lawyerName | 弁護士名 |
| barAssociation | 所属弁護士会 |
| phone | 電話番号 |
| businessHours | 受付時間 |
| lineUrl | LINE URL |
| email | メールアドレス |
| address | 住所 |

### APIキーの設定

`.env.local.example` をコピーして `.env.local` を作成し、microCMSの管理画面で取得したサービスID・APIキーを入力してください。

```
MICROCMS_SERVICE_DOMAIN=（サービスID。https://◯◯◯.microcms.io/ の◯◯◯部分）
MICROCMS_API_KEY=（APIキー）
```

`.env.local` はGit管理対象外です。APIキーは絶対にコードやチャットに直接書かないでください。

## 開発環境

### インストール

```bash
pnpm install
```

### ローカル起動

```bash
pnpm dev
```

http://localhost:3000 で確認できます。

### ビルド

```bash
pnpm build
```

`out/` フォルダに静的ファイルが生成されます（`next.config.mjs` で `output: "export"` を指定しているため）。

## デプロイ

### Vercelへのデプロイ

1. GitHubリポジトリを作成し、このプロジェクトをpush
2. Vercelでリポジトリをインポート
3. 環境変数に `MICROCMS_SERVICE_DOMAIN` ・ `MICROCMS_API_KEY` を設定
4. デプロイ実行

### microCMS更新時の自動再ビルド（Webhook）

このサイトはSSG（ビルド時にデータ取得）のため、microCMSでFAQ・会社情報を更新しても、再ビルドしない限りサイトには反映されません。

1. Vercelの「Settings → Git → Deploy Hooks」でWebhook URLを発行
2. microCMSの「サービス設定 → Webhook」に上記URLを登録し、コンテンツ公開時に通知するよう設定

これで、microCMS側で公開ボタンを押すと自動的にVercelが再ビルドし、サイトに反映されます。
