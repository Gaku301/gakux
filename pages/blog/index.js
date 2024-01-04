import Link from "next/link";
import Layout from "../layout";
import Footer from "../../components/footer";
import Header from "../../components/header";


export const getStaticProps = async () => {
  const url = "https://zenn.dev/api/articles?username=takanexx&order=latest";
  try {
    // Zennから記事を取得
    const res = await fetch(url);
    const data = await res.json();
    return {
      props: {posts: data.articles ?? []}
    }
  } catch (error) {
    const posts = [];
    return {
      props: {posts}
    }
  }
}

const Index = ({ posts }) => {
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
            <ul>
              {posts?.map((post) => (
                <li 
                  className="group relative mb-5 outline outline-1 outline-offset-2 outline-gray-200 rounded-sm" 
                  key={post.id}
                >
                  <Link href={`https://zenn.dev/${post.path}`}>
                    <a 
                      className="xs:flex-none xs:justify-center md:flex md:justify-start transition hover:scale-110"
                      target="_blank" 
                      rel="noreferrer noopener"
                    >
                      <div className="xs:w-full md:w-1/3 flex items-center justify-center">
                        <div className="text-7xl">{post.emoji}</div>
                      </div>
                      <div className="p-5 xs:w-full md:w-2/3">
                        <h3 className="text-3xl font-bold xs:pb-4">{post.title}</h3>
                        <div className="w-fit mt-5 xs:mt-5">
                          <p className="font-thin">{getDate(post.published_at)}</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center mx-auto pt-3">
            <Link href={`https://zenn.dev/takanexx`}>
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