import Layout from "../layout"
import Header from "../../components/header"
import Footer from "../../components/footer";
import Link from "next/link";


const PrivacyPolicy = () => {
  const title = "プライバシーポリシー";
  const description = "This page is our privacy policy";
  const keywords = "privacy-policy,プライバシーポリシー";
  const url = "privacy-policy";

  return (
    <Layout
      title={title}
      description={description}
      keywords={keywords}
      url={url}
    >
      <Header />
      <main className="container m-auto pb-10">
        <article className="justify-center mx-auto my-10 xs:w-4/5 md:w-3/4 lg:w-3/5">
          <h1 className="text-4xl font-bold py-5">プライバシーポリシー</h1>
          <section className="my-10">
            <div>
              <p>GAKUX（以下，「当社」といいます。）は，当社が提供するサービス（以下,「当社サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。</p>
              <p>本サービスのご使用によって、本規約に同意していただいたものとみなします。</p>

              <h2 className="text-2xl font-bold py-10">個人情報の利用目的について</h2>
              <p>当社が個人情報を収集・利用する目的は，以下のとおりです。</p>
              <ul className="my-5 list-disc pl-10">
                <li>当社サービスの提供・運営のため</li>
                <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                <li>メンテナンス，重要なお知らせなど必要に応じたご連絡のため</li>
                <li>利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため</li>
                <li>ユーザーにご自身の登録情報の閲覧や変更，削除，ご利用状況の閲覧を行っていただくため</li>
                <li>有料サービスにおいて，ユーザーに利用料金を請求するため</li>
                <li>上記の利用目的に付随する目的 </li>
              </ul>

              <h2 className="text-2xl font-bold py-10">個人情報の第三者開示について</h2>
              <p>取得した個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。</p>
              <ul>
                <li>本人の同意が得られた場合</li>
                <li>法令により開示が求められた場合</li>
              </ul>

              <h2 className="text-2xl font-bold py-10">広告配信サービス、アクセス解析ツールについて</h2>
              <p>
                当社サービスでは、第三者配信の広告サービスや、アクセス解析ツールを使用している場合がございます。<br/>
                取得する情報、利用目的、第三者への提供等の詳細につきましては、以下のプライバシーポリシーのリンクよりご確認ください。<br/>
                また、広告配信やアクセス解析のためにCookieを使用している場合がございます。<br/>
                パーソナライズ広告は
                <Link href="https://adssettings.google.com/authenticated">
                  <a className="underline underline-offset-1">広告設定</a>
                </Link>
                で無効にできます。 <br/>
                Cookieによりブラウザを識別していますが、特定の個人の識別はできない状態で匿名性が保たれています。<br/>
                Cookieの使用を望まない場合、ブラウザからCookieを無効に設定できます。<br/>
              </p>
              <ul className="my-5 list-disc pl-10">
                <li>
                  <Link href="https://policies.google.com/technologies/ads?hl=ja">
                    <a className="underline underline-offset-1">Google Adsense</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://policies.google.com/technologies/partner-sites">
                    <a className="underline underline-offset-1">Google Analytics</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://policies.google.com/technologies/ads?hl=ja">
                    <a className="underline underline-offset-1">AdMob</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://policies.google.com/privacy?hl=ja%EF%BB%BF">
                    <a className="underline underline-offset-1">Firebase Analytics</a>
                  </Link>
                </li>
              </ul>

              <h2 className="text-2xl font-bold py-10">免責事項</h2>
              <p>
                当社サービスがユーザーの特定の目的に適合すること、期待する機能・商品的価値・正確性・有用性を有すること、および不具合が生じないことについて、何ら保証するものではありません。 <br/>
                当社の都合によりアプリの仕様を変更できます。
                当社は、当社サービスの提供の終了、変更、または利用不能、当社サービスの利用によるデータの消失または機械の故障もしくは損傷、
                その他、当社サービスに関してユーザーが被った損害につき、賠償する責任を一切負わないものとします。 <br/>
                また、リンク先の他サイトで提供される情報・サービスについても、責任を負いかねますのでご了承ください。
              </p>

              <h2 className="text-2xl font-bold py-10">著作権</h2>
              <p>著作権その他一切の権利は、当社又は権利を有する第三者に帰属します。</p>

              <h2 className="text-2xl font-bold py-10">プライバシーポリシーの変更</h2>
              <p>
                当社は、個人情報に関して適用される日本の法令を遵守するとともに、本プライバシーポリシーの内容を適宜見直して改善に努めます。<br/>
                修正された最新のプライバシーポリシーは常に本ページにて開示されます。
              </p>

              <h2 className="text-2xl font-bold py-10">お問い合わせ先</h2>
              <p>本ポリシーに関するお問い合わせは、下記メールアドレスまでご連絡ください。</p>
              <Link href="mailto:address">
                <a className="underline underline-offset-1">takanexx@gmail.com</a>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </Layout>
  )
}

export default PrivacyPolicy;