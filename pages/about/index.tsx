import { bundleMDX } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import { getFileBySlug } from '../../@utils/markdown-parsing/markdown';
import ContentLayout from '../../components/ContentLayout';
import Layout from '../../components/Layout';
import MarkdownContent from '../../components/MarkdownContent';

export async function getStaticProps({ params }) {
  const page = await getFileBySlug('pages', 'about');
  console.log('page', page);
  return { props: { page } };
}

const About = ({ page }) => {
  const Component = useMemo(
    () => getMDXComponent(page.mdxSource),
    [page.mdxSource],
  );
  return (
    <Layout>
      <ContentLayout>
        <Component />
      </ContentLayout>
    </Layout>
  );
};

export default About;
