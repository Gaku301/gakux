import Layout from "../layout";
import Header from "../../components/header"
import Footer from "../../components/footer";
import Image from "next/image";
import Logo from "../../public/logo.png"


const About = () => {
  const title = "about";
  const description = "This page is about Takane and GAKUXx&Co.";
  const keywords = "about,profile,プロフィール"
  const url = "about"

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
            <h1 className="text-2xl font-extrabold">about</h1>
          </div>
          <div className="md:flex md:justify-center pb-10 mb-10">
            <div className="xs:w-full md:w-1/3 flex justify-center items-center xs:mb-10 md:mb-0">
              <Image src={Logo} alt="logo"/>
            </div>
            <div className="xs:w-full md:w-2/3 px-5">
              <h4 className="text-2xl font-medium mb-5">
                Takane
                <span className="text-lg mx-2"> / </span>
                <span className="text-lg">GAKUX&Co.</span>
              </h4>
              <div className="py-5">
                <p className="leading-loose">
                  ios/androidアプリ、webアプリをメインに作っています。<br/>
                  「シンプルかつクリエイティブに」をモットーにして生きています。<br/>
                  お酒(特に日本酒)、アクアリウム(海水)、作ることが好きです。
                </p>
              </div>
              <div className="py-5">
                <p className="leading-loose">
                  I'm software developer of ios,android,web apps.<br/>
                  My motto is "To be Simply and Creative".<br/>
                  I love Japanese Sake, Aquarium, Develop.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="mb-10">
            <h1 className="text-xl font-bold">What I provide</h1>
          </div>
          <div className="md:flex md:justify-center pb-10 mb-10">
          </div> */}
        </div>
      </main>
      <Footer/>
    </Layout>
  )
}

export default About;