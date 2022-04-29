import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

export const MarkdownContent: React.FC<{ source: string }> = ({ source }) => {
  const Component = useMemo(() => getMDXComponent(source), [source]);

  return <Component />;
};

export default MarkdownContent;
