import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import {
  formatSlug,
  getFileBySlug,
  getFiles,
} from '../../@utils/markdown-parsing/markdown';
import ContentLayout from '../../components/ContentLayout';
import Layout from '../../components/Layout';
import MarkdownContent from '../../components/MarkdownContent';

export async function getStaticPaths() {
  const posts = await getFiles('posts');
  console.log('posts?', posts);
  const paths = posts.map((p) => ({
    params: {
      slug: formatSlug(p),
    },
  }));
  console.log('paths', paths);
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  console.log('params', params);
  const page = await getFileBySlug('posts', params.slug);
  return { props: { page, params } };
}

const BlogPost = ({ page }) => {
  return (
    <Layout>
      <ContentLayout>
        <MarkdownContent source={page.mdxSource} />
      </ContentLayout>
    </Layout>
  );
};

export default BlogPost;
