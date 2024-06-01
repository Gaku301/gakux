import Link from "next/link";
import Layout from "../layout";
import Image from "next/image";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ZennLogo from "../../public/zenn-logo.png";
import noteLogo from "../../public/note-logo.png";


export const getServerSideProps = async () => {
  const url = "https://zenn.dev/api/articles?username=takanexx&order=latest";
  const noteUrl = 'https://note.com/api/v2/creators/takane262/contents?kind=note&page=1'

  try {
    // Zennから記事を取得
    const res = await fetch(url);
    const ZennData = await res.json();

    // noteから記事を取得
    // NOTE: API情報はこちらを参考（https://note.com/kiyo_ai_note/n/n4d7f8b9bd84a#41c2470f-f727-4d04-ae1c-09e7c26f7ed4）
    const resNote = await fetch(noteUrl);
    const noteData = await resNote.json();

    return {
      props: {
        zennPosts: ZennData.articles ?? [],
        notePosts: noteData.data.contents ?? [],
      }
    }
  } catch (error) {
    const zennPosts = [];
    const notePosts = [];
    return {
      props: {zennPosts, notePosts}
    }
  }
}

const Index = ({ zennPosts, notePosts }) => {
  const title = "posts";
  const description = "This is posts page. Check it out.";
  const keywords = "blog,article,posts,ブログ,記事";
  const url = "posts";

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
        <div id="posts" className="container xs:px-5 md:px-10 lg:px-48 my-10">
          <div className="mb-10">
            <h1 className="text-3xl font-extrabold">posts</h1>
          </div>
          {/* note */}
          <div className="border-t-2">
            <div className="mt-10 mb-5 w-24">
              <Image src={noteLogo} />
            </div>
            <div className="justify-start pb-10">
              <ul>
                {notePosts?.map((post) => (
                  <li 
                    className="group relative mb-5 outline outline-1 outline-offset-2 outline-gray-200 rounded-sm" 
                    key={post.id}
                  >
                    <Link href={post.noteUrl}>
                      <a 
                        className="xs:flex-none xs:justify-center md:flex md:justify-start transition hover:scale-110"
                        target="_blank" 
                        rel="noreferrer noopener"
                      >
                        <div className="xs:w-full md:w-1/3 flex items-center justify-center">
                          <Image src={post.eyecatch} width={350} height={200} />
                        </div>
                        <div className="p-5 xs:w-full md:w-2/3">
                          <h3 className="text-3xl font-bold xs:pb-4">{post.name}</h3>
                          <div className="w-fit mt-5 xs:mt-5">
                            <p className="font-thin">{getDate(post.publishAt)}</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center mx-auto pt-3 mb-5">
              <Link href={`https://note.com/takane262`}>
                <a target="_blank" rel="noreferrer noopener">read more &rarr;</a>
              </Link>
            </div>
          </div>
          {/* Zenn */}
          <div className="border-y-2">
            <div className="mt-10 mb-5 w-24">
              <Image src={ZennLogo} />
            </div>
            <div className="justify-start pb-10">
              <ul>
                {zennPosts?.map((post) => (
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
            <div className="flex justify-center mx-auto pt-3 mb-5">
              <Link href={`https://zenn.dev/takanexx`}>
                <a target="_blank" rel="noreferrer noopener">read more &rarr;</a>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}

export default Index;