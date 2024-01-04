import Link from "next/link";
import Image from "next/image";
import Layout from "../layout";
import Footer from "../../components/footer";
import Header from "../../components/header";
import axios from "axios";
import { UrlLinks } from "../../utils/const";


export const getStaticProps = async () => {
  const url = "https://blog.gakux.net/wp-json/wp/v2/posts?_embed";
  let data = {
    categories: 6, //sake
    per_page: 5,// 記事数
  }
  try {
    // Sakeカテゴリの記事を取得
    const sake_res = await axios.get(url, {data:data});
    let sakePosts = sake_res.data;
    // Techカテゴリの記事を取得
    data['categories'] = 5;
    const tech_res = await axios.get(url,{data:data});
    let techPosts = tech_res.data;
    return {
      props: { sakePosts, techPosts }
    }
  } catch (error) {
    let sakePosts = [];
    let techPosts = [];
    return {
      props: { sakePosts, techPosts }
    }
  }
}

const Index = ({ sakePosts, techPosts }) => {
  const title = "blog";
  const description = "This is blog page. Check it out.";
  const keywords = "blog,article,posts,ブログ,記事";
  const url = "blog";

  /**
   * 記事の日付データを変換する
   * @param {String} date_str 
   * @returns formated string
   */
  const getDate = (date_str) => {
    let date = new Date(date_str);
    return date.toDateString();
  }

  return (
    <Layout 
      title={title} 
      description={description} 
      keywords={keywords}
      url={url}
    >
      <Header/>
      <main className="container mx-auto pb-32">
        <div id="blog" className="container xs:px-5 md:px-10 lg:px-48 my-10">
          <div className="mb-10">
            <h1 className="text-2xl font-extrabold">blog</h1>
          </div>
          <div className="justify-start pb-10">
            <div className="py-5 flex justify-center items-center">
              <hr className="h-1/2 w-14 border-black"/>
              <h2 className="text-3xl font-extralight mx-5">Tech</h2>
              <hr className="h-1/2 w-14 border-black"/>
            </div>
            <ul>
              {techPosts?.map((post) => (
                <li 
                  className="group relative mb-5 outline outline-1 outline-offset-2 outline-gray-200 rounded-sm" 
                  key={post.id}
                >
                  <Link href={post.link}>
                    <a 
                      className="xs:flex-none xs:justify-center md:flex md:justify-start transition grayscale hover:scale-110 hover:grayscale-0"
                      target="_blank" 
                      rel="noreferrer noopener"
                    >
                      <div className="xs:w-full md:w-1/3 flex items-center">
                        <Image 
                          src={post._embedded['wp:featuredmedia'][0].source_url}
                          width={320} 
                          height={180} 
                          layout="fixed"
                          alt="image"
                        />
                      </div>
                      <div className="p-5 xs:w-full md:w-2/3">
                        <h3 className="text-3xl font-bold xs:pb-4">{post.title.rendered}</h3>
                        <div className="w-fit mt-5 xs:mt-5">
                          <p className="font-thin">{getDate(post.date)}</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="justify-start pb-10">
            <div className="py-5 flex justify-center items-center">
              <hr className="h-1/2 w-14 border-black"/>
              <h2 className="text-3xl font-extralight mx-5">Sake</h2>
              <hr className="h-1/2 w-14 border-black"/>
            </div>
            <ul>
              {sakePosts?.map((post) => (
                <li 
                  className="group relative mb-5 outline outline-1 outline-offset-2 outline-gray-200 rounded-sm" 
                  key={post.id}
                >
                  <Link href={post.link}>
                    <a 
                      className="xs:flex-none xs:justify-center md:flex md:justify-start transition grayscale hover:scale-110 hover:grayscale-0"
                      target="_blank" 
                      rel="noreferrer noopener"
                    >
                      <div className="xs:w-full md:w-1/3 flex items-center">
                        <Image 
                          src={post._embedded['wp:featuredmedia'][0].source_url}
                          width={320} 
                          height={180} 
                          layout="fixed"
                          alt="image"
                        />
                      </div>
                      <div className="p-5 xs:w-full md:w-2/3">
                        <h3 className="text-3xl font-bold xs:pb-4">{post.title.rendered}</h3>
                        <div className="w-fit mt-5 xs:mt-5">
                          <p className="font-thin">{getDate(post.date)}</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center mx-auto pt-3">
            <Link href={UrlLinks.blogLink}>
              <a target="_blank" rel="noreferrer noopener">read more &rarr;</a>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}

export default Index;