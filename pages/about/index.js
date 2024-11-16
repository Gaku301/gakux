import Layout from "../layout";
import Header from "../../components/header"
import Footer from "../../components/footer";
import Image from "next/image";
import Logo from "../../public/logo.png"
import SakeCard from "../../components/SakeCard";

import { useState } from "react";
import { getSakeInfo } from "../../lib/sake";



const About = () => {
  const title = "about";
  const description = "This page is about Takane and GAKUXx&Co.";
  const keywords = "about,profile,プロフィール"
  const url = "about"

  const [selected, setSelected] = useState('zaku');
  const [sake, setSake] = useState(getSakeInfo('zaku'));

  const getSakeEmoji = () => {
    return '&#127862;'.replace(/&#(.*?);/g, (_, p1) => String.fromCodePoint(`0${p1}`));
  }

  const onClickSake = (sakeName) => {
    // 酒情報を取得しセット
    const sakeInfo = getSakeInfo(sakeName); 
    setSake(sakeInfo);
    setSelected(sakeName);
  }

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
            <h1 className="text-3xl font-extrabold">about</h1>
          </div>
          <div className="md:flex md:justify-center pb-10 mb-10">
            <div className="xs:w-full md:w-1/3 flex justify-center items-center xs:mb-10 md:mb-0">
              <Image src={Logo} alt="logo"/>
            </div>
            <div className="xs:w-full md:w-2/3 px-5">
              <h4 className="text-2xl font-medium mb-5">
                takane
                <span className="text-lg mx-2"> / </span>
                <span className="text-lg">GAKUX&Co.</span>
              </h4>
              <div className="py-5">
                <p className="leading-loose">
                  ios/androidアプリ、webアプリをメインに作っています。<br/>
                  「シンプルかつクリエイティブに」がモットーです。<br/>
                  お酒(特に日本酒)、アクアリウム(海水)、作ることが好きだったりします。
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
          <div className="py-10 border-t-2">
            <h2 className="text-2xl font-medium">Sake Collection</h2>
            <p className="px-3 mt-5">※今までに飲んだ日本酒たち</p>
            <div className="flex justify-start items-center pt-2 pb-5">
              <button
                className={`m-2 shadow-2xl rounded-lg text-center p-2 ${selected === 'zaku' && 'underline'}`}
                onClick={() => onClickSake('zaku')}
              >
                {selected === 'zaku' && getSakeEmoji()} 作
              </button>
              <button
                className={`m-2 shadow-2xl rounded-lg text-center p-2 ${selected === 'houraisen' && 'underline'}`}
                onClick={() => onClickSake('houraisen')}
              >
                {selected === 'houraisen' && getSakeEmoji()} 蓬莱泉
              </button>
            </div>
            <SakeCard selectedSake={sake} />
          </div>
        </div>
      </main>
      <Footer/>
    </Layout>
  )
}

export default About;