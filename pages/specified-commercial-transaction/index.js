import Layout from "../layout";
import Header from "../../components/header"
import Footer from "../../components/footer";
import Link from "next/link";


const SpecifiedCommercialTransaction = () => {
  const title = "特定商取引法に基づく表記";
  const description = "This page is about act on specified commercial transactions";
  const keywords = "specified-commercial-transaction,特定商取引法";
  const url = "specified-commercial-transaction";

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
          <h1 className="text-2xl font-extrabold">特定商取引法に基づく表記</h1>
          <section className="my-10 w-full justify-center">
            <table className="border-collapse border border-slate-500 table-auto">
              <tbody className="border">
                <tr className="border">
                  <th className="p-5 border">販売業者名称 / 販売責任者</th>
                  <td className="p-5">GAKUX / 石川岳</td>
                </tr>
                <tr className="border">
                  <th className="p-5 border">所在地</th>
                  <td className="p-5">請求場あった場合に遅滞なく開示致します</td>
                </tr>
                <tr className="border">
                  <th className="p-5 border">電話番号</th>
                  <td className="p-5">請求場あった場合に遅滞なく開示致します</td>
                </tr>
                <tr className="border">
                  <th className="p-5 border">メールアドレス</th>
                  <td className="p-5">takanexx@gmail.com</td>
                </tr>
                <tr className="border">
                  <th className="p-5 border">お支払方法</th>
                  <td className="p-5">クレジットカード・銀行振込</td>
                </tr>
                <tr className="border">
                  <th className="p-5 border">お問い合わせ</th>
                  <td className="p-5">X(旧Twitter)もしくは、上記メールアドレスにご連絡ください</td>
                </tr>
              </tbody>
            </table>

          </section>
        </article>
      </main>
      <Footer />
    </Layout>
  );
}

export default SpecifiedCommercialTransaction;