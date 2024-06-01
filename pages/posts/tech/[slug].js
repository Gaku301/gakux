import Image from "next/image";
import { getAllPosts, getPostBySlug } from "../../../utils/api";
import markdownToHtml from "../../../utils/markdownToHtml";
import Layout from "../../layout";
import BlogFooter from "../../../components/blog/footer";
import Header from "../../../components/header";


export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug'], 'tech');

  return {
    paths: posts.map((post) => {
      return {
        params: {slug: post.slug}
      }
    }),
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const fields = ['slug', 'title', 'date', 'tags', 'description', 'keywords', 'content', 'image']
  const post = getPostBySlug(params.slug, fields, 'tech');
  // 変換処理を実行
  const content = await markdownToHtml(post.content);

  // 変換結果をpropsとして渡す
  return {
    props: {
      ...post,
      content
    }
  }
}

const Post = ( post ) => {
  return (
    <Layout 
      title={post.title}
      description={post.description ? post.description : ""}
      keywords={post.keywords ? post.keywords : ""}
    >
      <Header/>
      <main className="container m-auto">
        <article className="justify-center mx-auto my-10 xs:w-4/5 md:w-3/4 lg:w-3/5">
          <h1 className="text-4xl font-bold py-10">{post.title}</h1>
          <div className="flex justify-center">
            {
              post.image
                ? <Image width={800} height={450} src={post.image} alt="image"/>
                : null
            }
          </div>
          <section className="my-10 pt-10 markdown">
            {/* HTMLタグとして出力する */}
            <div 
              className="" 
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className="w-full flex justify-end pt-10 xs:mt-10">
              <p className="font-thin">{post.date}</p>
            </div>
          </section>
          <ul className="flex-wrap-reverse pb-2 w-fit h-10">
            {post.tags?.map((tag) => (
              <li 
                className="outline outline-1 outline-offset-2 outline-gray-200 m-1 px-1 w-fit float-left rounded-sm" 
                key={tag}
              ># {tag}</li>
            ))}
          </ul>
        </article>
      </main>
      <BlogFooter />
    </Layout>
  )
};

export default Post;