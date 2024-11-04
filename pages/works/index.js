import Layout from "../layout";
import Header from "../../components/header"
import Footer from "../../components/footer";
import Image from "next/image";
import AqualistLogo from "../../public/aqualist.png"
import LogsLogo from "../../public/logs.png"
import TLMemoLogo from "../../public/tlmemo.png"
import KyuuyoLogo from "../../public/kyuuyo.png"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons/faHandPointRight";


const Works = () => {
  const title = "works";
  const description = "This is works page.";
  const keywords = "works,profile,application,プロフィール,活動"
  const url = "works"

  return (
    <Layout
      title={title}
      description={description}
      keywords={keywords}
      url={url}
    >
      <Header/>
      <main className="container m-auto">
        <div className="container xs:px-5 md:px-10 lg:px-48 my-20">
          <div className="mb-10">
            <h1 className="text-3xl font-extrabold">works</h1>
          </div>
          <div className="md:flex-col md:justify-center pb-10 mb-10 border-y-2">
            <h4 className="text-2xl font-medium py-5">Aqualist</h4>
            <div className="w-full md:flex">
              <div className="xs:w-full md:w-1/3 flex justify-center items-center xs:mb-10 md:mb-0">
                <div className="shadow-xl rounded-3xl flex justify-center items-center">
                  <Image className="rounded-3xl" src={AqualistLogo} alt="aqualist" width={150} height={150} />
                </div>
              </div>
              <div className="xs:w-full md:w-2/3 px-5">
                <div className="py-2">
                  <p>アクアリウムをもっと管理しやすく。</p>
                  <p className="py-5 leading-relaxed">
                    アクアリウムライフをより快適に！<br/>
                    アクアリウムに関する全てをこのアプリで管理できます。<br/>
                    海水、淡水のどちらにも対応。
                  </p>
                </div>
                <div className="py-2">
                  <p>More easier to manage aquariums.</p>
                  <p className="py-5 leading-relaxed">
                    Make your aquarium life more comfortable !<br/>
                    You can manage all events about aquariums.<br/>
                    Of course, App supports both of Freshwater and Seawater.<br/>
                    Enjoy your aquarium life !!
                  </p>
                </div>
                <div className="flex items-center">
                  <Link href="https://apps.apple.com/jp/app/aqualist/id6447771672?itsct=apps_box_badge&amp;itscg=30200">
                    <a target="_blank" ref="noreferrer noopener">
                      <Image
                        src="https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/ja-jp.svg"
                        alt="Download on the App Store"
                        width={200}
                        height={50}
                      />
                    </a>
                  </Link>
                  <Link href="https://play.google.com/store/apps/details?id=com.aqualist&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                    <a target="_blank" ref="noreferrer noopener">
                      <Image
                        src='https://play.google.com/intl/ja/badges/static/images/badges/ja_badge_web_generic.png'
                        alt='Google Play で手に入れよう'
                        width={180}
                        height={65}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-col md:justify-center pb-10 mb-10 border-b-2">
            <h4 className="text-2xl font-medium py-5">TLMemo - タイムラインメモ</h4>
            <div className="w-full md:flex">
              <div className="xs:w-full md:w-1/3 flex justify-center items-center xs:mb-10 md:mb-0">
                <div className="shadow-xl rounded-3xl flex justify-center items-center">
                  <Image className="rounded-3xl" src={TLMemoLogo} alt="TLMemo-logo" width={150} height={150}/>
                </div>
              </div>
              <div className="xs:w-full md:w-2/3 px-5">
                <div className="py-2">
                  <p>タイムライン上でメモを管理</p>
                  <p className="py-5 leading-relaxed">
                    ちょっとしたアイディアや目標などをメモするのにちょうどよく、タイムライン形式だからメモを時系列で確認できます！<br/>
                    タグ付けすれば検索も可能で管理が簡単に。<br/>
                    シンプルで使いやすいタイムラインメモ。
                  </p>
                </div>
                <div className="py-2">
                  <p>Manage your notes at timeline</p>
                  <p className="py-5 leading-relaxed">
                    It's perfect for writing down small ideas and goals, and the timeline format allows you to check your notes in chronological order!<br/>
                    By tagging, you can search and manage easily.<br/>
                    This app is simple and easy to use timeline memo.
                  </p>
                </div>
                <div className="flex items-center">
                  <Link href="https://apple.co/4fNO7rt">
                    <a target="_blank" ref="noreferrer noopener">
                      <Image
                        src="https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/ja-jp.svg"
                        alt="Download on the App Store"
                        width={200}
                        height={50}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-col md:justify-center pb-10 mb-10 border-b-2">
            <h4 className="text-2xl font-medium py-5">Logs - 習慣を記録</h4>
            <div className="w-full md:flex">
              <div className="xs:w-full md:w-1/3 flex justify-center items-center xs:mb-10 md:mb-0">
                <div className="shadow-xl rounded-3xl flex justify-center items-center">
                  <Image className="rounded-3xl" src={LogsLogo} alt="Logs-logo" width={150} height={150}/>
                </div>
              </div>
              <div className="xs:w-full md:w-2/3 px-5">
                <div className="py-2">
                  <p>習慣を記録するアプリ。</p>
                  <p className="py-5 leading-relaxed">
                    習慣を記録し可視化することで継続率をアップ。<br/>
                    継続をもっと楽しく。
                  </p>
                </div>
                <div className="flex items-center">
                  <Link href="https://apple.co/3QShC15">
                    <a target="_blank" ref="noreferrer noopener">
                      <Image
                        src="https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/ja-jp.svg"
                        alt="Download on the App Store"
                        width={200}
                        height={50}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-col md:justify-center pb-10 mb-10 border-top-2">
            <h4 className="text-2xl font-medium py-5">みんなの給与</h4>
            <div className="w-full md:flex">
              <div className="xs:w-full md:w-1/3 flex justify-center items-center xs:mb-10 md:mb-0">
                <div className="shadow-xl flex justify-center items-center">
                  <Image src={KyuuyoLogo} alt="kyuuyo-logo" layout={'intrinsic'} />
                </div>
              </div>
              <div className="xs:w-full md:w-2/3 px-5">
                <div className="py-2">
                  <p>みんなの給与ってどれぐらい？</p>
                  <p className="py-5 leading-relaxed">
                    国内の平均年収がグラフで丸わかり。<br/>
                    年齢別や、性別でのグラフ分けも可能<br/>
                  </p>
                </div>
                <div className="flex items-center">
                  <Link href="https://kyuuyo.vercel.app/">
                    <a target="_blank" ref="noreferrer noopener" className="font-bold underline">
                      みんなの給与
                      <FontAwesomeIcon
                        icon={faHandPointRight}
                        size="1x"
                        className="ml-2"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </Layout>
  )
}

export default Works;