import Link from 'next/link';
import { getAllFilesFrontMatter } from '../@utils/markdown-parsing/markdown';
import Layout from '../components/Layout';

const MAX_DISPLAY = 5;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('posts');

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <Layout>
      <div className="grid md:grid-cols-[minmax(0,10%)_auto_30%] grid-cols-[0px_auto_0px]">
        <div className="flex shrink md:w-0 max-w-[15%]"></div>
        <div className="flex flex-col p-8 gap-8">
          {posts?.length
            ? posts.slice(0, MAX_DISPLAY).map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} passHref>
                  <div className="p-4 rounded bg-white max-w-[600px] shadow-md">
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold">
                        {post.title}
                      </span>
                      <span>{post.summary}</span>
                    </div>
                  </div>
                </Link>
              ))
            : 'No Posts Found'}
        </div>
      </div>
    </Layout>
  );
}
